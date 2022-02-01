import * as vscode from 'vscode';
import { ParsedDocumentCollection } from '../parser/parser';

export default class DocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    constructor(parsedDocumentCollection: ParsedDocumentCollection) {
        this.parsedDocumentCollection = parsedDocumentCollection;
    }

    parsedDocumentCollection: ParsedDocumentCollection;

    async provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken):
        Promise<vscode.SymbolInformation[] | vscode.DocumentSymbol[]> {
        return (await this.parsedDocumentCollection.getParsedDocument(document)).symbols;
    }
}
