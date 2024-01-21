import * as vscode from 'vscode';
import { ParsedDocumentCollection } from '../parser/parser';
import { locateImportByQualifiedName } from '../parser/utils';

export default class CompletionItemProvider implements vscode.CompletionItemProvider {
    constructor(parsedDocumentCollection: ParsedDocumentCollection) {
        this.parsedDocumentCollection = parsedDocumentCollection;
        this.keywords = parsedDocumentCollection.completionKeywords.map((name: string): vscode.CompletionItem => { return { label: name, kind: vscode.CompletionItemKind.Keyword } });
    }

    parsedDocumentCollection: ParsedDocumentCollection;
    keywords: vscode.CompletionItem[];

    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): Promise<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
        const doc = await this.parsedDocumentCollection.getParsedDocument(document);
        const currentDocumentSymbols = doc.symbols.map((symbol: vscode.DocumentSymbol) => this.createCompletionItem(symbol, doc.docStrings.get(symbol)));

        // Search in imports
        const packageFiles = await Promise.all(doc.imports.map(importReference => locateImportByQualifiedName(importReference.name)));
        const locations = await Promise.allSettled(packageFiles.flat().map(uri => this.collectSymbols(uri)));

        const importedSymbols =
            locations.filter((element): element is PromiseFulfilledResult<vscode.CompletionItem[]> => element.status === 'fulfilled')
                .map(element => element.value);

        return [...this.keywords,
        ...currentDocumentSymbols,
        ...importedSymbols.flat()];
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
        return parsedDocument.symbols.map((symbol: vscode.DocumentSymbol) => this.createCompletionItem(symbol, parsedDocument.docStrings.get(symbol), parsedDocument.packageName));
    }

    private createCompletionItem(symbol: vscode.DocumentSymbol, documentation: vscode.MarkdownString, description?: string): vscode.CompletionItem {
        return { label: { label: symbol.name, description: description }, kind: this.convertSymbolKindToCompletionItemKind(symbol.kind), detail: symbol.detail, documentation: documentation };
    }
}
