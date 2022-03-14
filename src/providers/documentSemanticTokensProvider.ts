import * as vscode from 'vscode';
import { ParsedDocumentCollection } from '../parser/parser';

export default class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    constructor(parsedDocumentCollection: ParsedDocumentCollection) {
        this.parsedDocumentCollection = parsedDocumentCollection;
    }

    private parsedDocumentCollection: ParsedDocumentCollection;

    async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
        const parsedDocument = await this.parsedDocumentCollection.getParsedDocument(document);
        const builder = new vscode.SemanticTokensBuilder(DocumentSemanticTokensProvider.getLegend());
        this.visitSymbols(builder, parsedDocument.symbols);
        for (const reference of parsedDocument.references) {
            builder.push(reference.range, 'type', []);
        }
        return builder.build();
    }

    static getLegend(): vscode.SemanticTokensLegend {
        return new vscode.SemanticTokensLegend(['type', 'enumMember'], ['declaration']);
    }

    visitSymbols(builder: vscode.SemanticTokensBuilder, symbols: vscode.DocumentSymbol[]) {
        for (const symbol of symbols) {
            this.visitSymbol(builder, symbol);
        }
    }

    visitSymbol(builder: vscode.SemanticTokensBuilder, symbol: vscode.DocumentSymbol) {
        switch (symbol.kind) {
            case vscode.SymbolKind.EnumMember:
                builder.push(symbol.selectionRange, 'enumMember');
                break;
            default:
                builder.push(symbol.selectionRange, 'type', ['declaration']);
                break;
        }
        this.visitSymbols(builder, symbol.children);
    }
}
