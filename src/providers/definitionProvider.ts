import * as vscode from 'vscode';
import { ParsedDocumentCollection, ParsedDocument } from '../parser/parser';
import { locateImportByQualifiedName } from '../parser/utils';

export default class DefinitionProvider implements vscode.DefinitionProvider {
    constructor(parsedDocumentCollection: ParsedDocumentCollection) {
        this.parsedDocumentCollection = parsedDocumentCollection;
    }

    parsedDocumentCollection: ParsedDocumentCollection;

    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, _token: vscode.CancellationToken): Promise<vscode.Definition> {

        const parsedDocument = await this.parsedDocumentCollection.getParsedDocument(document);

        const packageLocations = await this.locateImportDefinition(parsedDocument, position);
        if (packageLocations.length > 0) {
            return packageLocations;
        }

        return this.locateSymbolByPosition(parsedDocument, document.uri, position);
    }

    private async locateImportDefinition(parsedDocument: ParsedDocument, position: vscode.Position): Promise<vscode.Location[]> {
        const packageReference = parsedDocument.imports.find(ref => ref.range.contains(position));
        if (!packageReference) {
            return [];
        }
        const packageLocations = await locateImportByQualifiedName(packageReference.name);
        const emptyRange = new vscode.Range(0, 0, 0, 0);
        const locations = [];
        for (const uri of packageLocations.values()) {
            locations.push(new vscode.Location(uri, emptyRange));
        }
        return locations;
    }

    private async locateSymbolByPosition(parsedDocument: ParsedDocument, uri: vscode.Uri, position: vscode.Position): Promise<vscode.Location[] | undefined> {
        // Search in the same document
        const reference = parsedDocument.references.find(ref => ref.range.contains(position));
        if (!reference) {
            return undefined;
        }
        const symbolLocation = parsedDocument.symbols.find(symbol => symbol.name === reference.name);
        if (symbolLocation) {
            return [new vscode.Location(uri, symbolLocation.selectionRange)];
        }
        // Search in imports
        const packageFiles = await Promise.all(parsedDocument.imports.map(importReference => locateImportByQualifiedName(importReference.name)));
        const locations = await Promise.allSettled(packageFiles.flat().map(element => this.findSymbolInDocument(element, reference.name)));

        return locations
            .filter((element): element is PromiseFulfilledResult<vscode.Location> => element.status === 'fulfilled')
            .map(element => element.value);
    }

    private async findSymbolInDocument(uri: vscode.Uri, symbolName: string): Promise<vscode.Location> {
        const parsedDocument = await this.parsedDocumentCollection.getParsedDocumentByUri(uri);

        // TODO: Implement proper handling of qualified names
        const qualifiedSymbolName = symbolName.split('.');

        const symbolLocation = parsedDocument.symbols.find(symbol => symbol.name === qualifiedSymbolName[qualifiedSymbolName.length - 1]);
        if (symbolLocation) {
            console.log(`Found in imports: ${uri}`);
            return new vscode.Location(uri, symbolLocation.selectionRange);
        }
        return Promise.reject();
    }
}

