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
