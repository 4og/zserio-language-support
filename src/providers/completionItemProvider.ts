import * as vscode from 'vscode';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CodeCompletionCore } from 'antlr4-c3';
import { ZserioLexer } from '../antlr4/ZserioLexer';
import { ZserioParser } from '../antlr4/ZserioParser';
import { ParsedDocumentCollection } from '../parser/parser';
import { locateImportByQualifiedName } from '../parser/utils';

/**
 * Compute the token index at the given cursor position.
 * VSCode positions are 0-based; ANTLR tokens use 1-based lines, 0-based columns.
 * Since WS is skipped in the lexer, we find the token that covers the cursor
 * or the first token after the cursor if the cursor is in whitespace.
 */
function computeTokenIndex(tokenStream: CommonTokenStream, line: number, column: number): number {
    tokenStream.fill();
    const targetLine = line + 1;

    for (let i = 0; i < tokenStream.size; i++) {
        const token = tokenStream.get(i);
        if (token.type === Token.EOF) {
            return i;
        }

        if (token.line > targetLine) {
            return i;
        }

        if (token.line === targetLine) {
            if (column < token.column) {
                return i;
            }
            const tokenEnd = token.column + (token.stop - token.start + 1);
            if (column < tokenEnd) {
                return i;
            }
            // When the cursor is exactly at the end of a word-like token,
            // the user is still typing that token - use its index so C3
            // treats it as the caret position rather than skipping ahead.
            if (column === tokenEnd && /\w$/.test(token.text ?? '')) {
                return i;
            }
        }
    }

    return tokenStream.size - 1;
}

const builtinTypeCompletions: vscode.CompletionItem[] = [
    'int8', 'int16', 'int32', 'int64',
    'uint8', 'uint16', 'uint32', 'uint64',
    'varint', 'varint16', 'varint32', 'varint64',
    'varsize', 'varuint', 'varuint16', 'varuint32', 'varuint64',
    'bit', 'int', 'bool', 'string',
    'float16', 'float32', 'float64',
    'extern', 'bytes',
].map(name => ({ label: name, kind: vscode.CompletionItemKind.Keyword }));

const expressionKeywordCompletions: vscode.CompletionItem[] = [
    'isset', 'lengthof', 'valueof', 'numbits', '@index', 'true', 'false',
].map(name => ({ label: name, kind: vscode.CompletionItemKind.Keyword }));

const ignoredTokens = new Set([
    // Operators and punctuation
    ZserioParser.AND, ZserioParser.ASSIGN, ZserioParser.BANG, ZserioParser.COLON,
    ZserioParser.COMMA, ZserioParser.DIVIDE, ZserioParser.DOT, ZserioParser.EQ,
    ZserioParser.GE, ZserioParser.GT, ZserioParser.LBRACE, ZserioParser.LBRACKET,
    ZserioParser.LE, ZserioParser.LOGICAL_AND, ZserioParser.LOGICAL_OR,
    ZserioParser.LPAREN, ZserioParser.LSHIFT, ZserioParser.LT, ZserioParser.MINUS,
    ZserioParser.MODULO, ZserioParser.MULTIPLY, ZserioParser.NE, ZserioParser.OR,
    ZserioParser.PLUS, ZserioParser.QUESTIONMARK, ZserioParser.RBRACE,
    ZserioParser.RBRACKET, ZserioParser.RPAREN, ZserioParser.SEMICOLON,
    ZserioParser.TILDE, ZserioParser.XOR, ZserioParser.RSHIFT,
    // Whitespace and comments
    ZserioParser.WS,
    ZserioParser.DOC_COMMENT, ZserioParser.MARKDOWN_COMMENT,
    ZserioParser.BLOCK_COMMENT, ZserioParser.LINE_COMMENT,
    // Literals
    ZserioParser.BOOL_LITERAL, ZserioParser.STRING_LITERAL,
    ZserioParser.BINARY_LITERAL, ZserioParser.OCTAL_LITERAL,
    ZserioParser.HEXADECIMAL_LITERAL, ZserioParser.DOUBLE_LITERAL,
    ZserioParser.FLOAT_LITERAL, ZserioParser.DECIMAL_LITERAL,
    // Invalid tokens
    ZserioParser.INVALID_STRING_LITERAL, ZserioParser.INVALID_TOKEN,
]);

export default class CompletionItemProvider implements vscode.CompletionItemProvider {
    constructor(private parsedDocumentCollection: ParsedDocumentCollection) {}

    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): Promise<vscode.CompletionItem[]> {
        // Check for import context first — provide breadth-first import path completion
        const importPrefix = this.getImportPrefix(document, position);
        if (importPrefix !== undefined) {
            return this.provideImportCompletions(importPrefix);
        }

        const chars = CharStream.fromString(document.getText());
        const lexer = new ZserioLexer(chars);
        lexer.removeErrorListeners();
        const tokenStream = new CommonTokenStream(lexer);
        tokenStream.fill();

        const parser = new ZserioParser(tokenStream);
        parser.removeErrorListeners();

        const caretTokenIndex = computeTokenIndex(tokenStream, position.line, position.character);

        const core = new CodeCompletionCore(parser);
        core.preferredRules = new Set([
            ZserioParser.RULE_typeReference,
            ZserioParser.RULE_expression,
        ]);
        core.ignoredTokens = ignoredTokens;

        const candidates = core.collectCandidates(caretTokenIndex);

        const completionItems: vscode.CompletionItem[] = [];

        // Token candidates → context-aware keywords
        for (const [tokenType] of candidates.tokens) {
            if (tokenType === ZserioParser.ID) {
                continue;
            }
            const displayName = parser.vocabulary.getDisplayName(tokenType);
            if (displayName) {
                const label = displayName.startsWith("'") ? displayName.slice(1, -1) : displayName;
                completionItems.push({ label, kind: vscode.CompletionItemKind.Keyword });
            }
        }

        // Rule candidates
        const hasTypeRef = candidates.rules.has(ZserioParser.RULE_typeReference);
        const hasExpression = candidates.rules.has(ZserioParser.RULE_expression);

        if (hasTypeRef) {
            completionItems.push(...builtinTypeCompletions);
        }

        if (hasExpression) {
            completionItems.push(...expressionKeywordCompletions);
        }

        // Suggest symbols when a type reference, expression, or bare identifier is expected
        const needsSymbols = hasTypeRef || hasExpression || candidates.tokens.has(ZserioParser.ID);

        if (needsSymbols) {
            const doc = await this.parsedDocumentCollection.getParsedDocument(document);

            for (const symbol of doc.symbols) {
                completionItems.push(this.createCompletionItem(symbol, doc.docStrings.get(symbol)));
            }

            const packageFiles = await Promise.all(
                doc.imports.map(imp => locateImportByQualifiedName(imp.name))
            );
            const results = await Promise.allSettled(
                packageFiles.flat().map(uri => this.collectSymbols(uri))
            );
            for (const result of results) {
                if (result.status === 'fulfilled') {
                    completionItems.push(...result.value);
                }
            }
        }

        return completionItems;
    }

    /**
     * Detect if the cursor is inside an import statement.
     * Returns the completed prefix segments, or undefined if not in an import context.
     */
    private getImportPrefix(document: vscode.TextDocument, position: vscode.Position): string[] | undefined {
        const lineText = document.lineAt(position.line).text.substring(0, position.character);
        const match = lineText.match(/^\s*import\s+([\w.]*)$/);
        if (!match) return undefined;
        const typed = match[1];
        if (!typed) return [];
        const parts = typed.split('.');
        // If ends with dot, all typed parts are completed segments;
        // otherwise the last part is still being typed — exclude it.
        return parts.slice(0, -1);
    }

    /**
     * Provide completions for import paths by lazily searching the filesystem.
     * Zserio package paths map directly to directory structure:
     *   import com.acme.foo.Bar  →  com/acme/foo/Bar.zs
     * Only the next level is queried on demand.
     */
    private async provideImportCompletions(completedParts: string[]): Promise<vscode.CompletionItem[]> {
        const relativePath = completedParts.join('/');
        const pattern = relativePath ? `${relativePath}/*` : '*';

        const [dirs, zsFiles] = await this.listImportLevel(pattern, relativePath);
        const completions: vscode.CompletionItem[] = [];

        for (const dir of dirs) {
            completions.push({ label: dir, kind: vscode.CompletionItemKind.Module });
        }

        // Only suggest file-level targets when we're at least one level deep
        // (imports require at least one dot: IMPORT id DOT ... SEMICOLON)
        if (completedParts.length > 0) {
            for (const name of zsFiles) {
                completions.push({ label: name, kind: vscode.CompletionItemKind.Reference });
            }
            completions.push({ label: '*', kind: vscode.CompletionItemKind.Keyword });
        }

        return completions;
    }

    /**
     * List directories and .zs file stems at the given import level
     * by probing the workspace filesystem.
     */
    private async listImportLevel(globPattern: string, relativePath: string): Promise<[string[], string[]]> {
        const dirs = new Set<string>();
        const zsFiles = new Set<string>();

        // Find .zs files one level deeper to detect both leaf files and directories
        const deeperPattern = relativePath ? `${relativePath}/**/*.zs` : '**/*.zs';
        const files = await vscode.workspace.findFiles(deeperPattern);

        for (const file of files) {
            // Extract the workspace-relative path
            const wsFolder = vscode.workspace.getWorkspaceFolder(file);
            if (!wsFolder) continue;

            const fileRelative = file.path.substring(wsFolder.uri.path.length + 1);
            const parts = fileRelative.split('/');

            const prefixDepth = relativePath ? relativePath.split('/').length : 0;
            if (parts.length <= prefixDepth) continue;

            const nextSegment = parts[prefixDepth];

            if (parts.length === prefixDepth + 1) {
                // This is a .zs file directly at this level
                if (nextSegment.endsWith('.zs')) {
                    zsFiles.add(nextSegment.slice(0, -3));
                }
            } else {
                // There's a subdirectory at this level
                dirs.add(nextSegment);
            }
        }

        return [Array.from(dirs).sort(), Array.from(zsFiles).sort()];
    }

    private convertSymbolKindToCompletionItemKind(symbolKind: vscode.SymbolKind) {
        switch (symbolKind) {
            case vscode.SymbolKind.Constant: return vscode.CompletionItemKind.Constant;
            case vscode.SymbolKind.Enum: return vscode.CompletionItemKind.Enum;
            case vscode.SymbolKind.EnumMember: return vscode.CompletionItemKind.EnumMember;
            case vscode.SymbolKind.Event: return vscode.CompletionItemKind.Event;
            case vscode.SymbolKind.Field: return vscode.CompletionItemKind.Field;
            case vscode.SymbolKind.Function: return vscode.CompletionItemKind.Function;
            case vscode.SymbolKind.Interface: return vscode.CompletionItemKind.Interface;
            case vscode.SymbolKind.Method: return vscode.CompletionItemKind.Method;
            case vscode.SymbolKind.Object: return vscode.CompletionItemKind.Class;
            case vscode.SymbolKind.Package: return vscode.CompletionItemKind.Module;
            case vscode.SymbolKind.Struct: return vscode.CompletionItemKind.Struct;
            default: return vscode.CompletionItemKind.Text;
        }
    }

    private async collectSymbols(uri: vscode.Uri): Promise<vscode.CompletionItem[]> {
        const parsedDocument = await this.parsedDocumentCollection.getParsedDocumentByUri(uri);
        return parsedDocument.symbols.map((symbol: vscode.DocumentSymbol) =>
            this.createCompletionItem(symbol, parsedDocument.docStrings.get(symbol), parsedDocument.packageName)
        );
    }

    private createCompletionItem(symbol: vscode.DocumentSymbol, documentation?: vscode.MarkdownString, description?: string): vscode.CompletionItem {
        return {
            label: { label: symbol.name, description },
            kind: this.convertSymbolKindToCompletionItemKind(symbol.kind),
            detail: symbol.detail,
            documentation,
        };
    }
}
