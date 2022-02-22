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
        for (const symbol of parsedDocument.symbols) {
            builder.push(symbol.selectionRange, 'type', ['declaration']);
        }
        for (const reference of parsedDocument.references) {
            builder.push(reference.range, 'type', []);
        }
        return builder.build();
    }

    static getLegend(): vscode.SemanticTokensLegend {
        return new vscode.SemanticTokensLegend(['type'], ['declaration']);
    }
}
