import * as vscode from 'vscode';

export default class DefinitionProvider implements vscode.DefinitionProvider {
    public provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition> {
        let importRef = document.getWordRangeAtPosition(position, /(?<=\bimport\s+)([\w.*]+)/);
        if (importRef) {
            return this.findImportDefinitions(document.getText(importRef));
        }
        return undefined;
    }

    private async findImportDefinitions(importPackage: string): Promise<vscode.Location[]> {
        const emptyRange = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 0));
        const maxResults = 10;
        const pathSuffix = importPackage.replace(/\./g, '/').replace('/*', '.zs');
        const zsFiles = await vscode.workspace.findFiles(`**/${pathSuffix}`, undefined, maxResults);

        let locations = []
        for (const uri of zsFiles.values()) {
            locations.push(new vscode.Location(uri, emptyRange));
        }
        return locations;
    }
}
