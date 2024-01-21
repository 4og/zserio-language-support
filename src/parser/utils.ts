import { Token } from 'antlr4';
import * as vscode from 'vscode';

export function convertRange(tokenStart: Token): vscode.Range {
    const length = tokenStart.stop - tokenStart.start + 1;
    return new vscode.Range(new vscode.Position(tokenStart.line - 1, tokenStart.column),
        new vscode.Position(tokenStart.line - 1, tokenStart.column + length));
}

export function convertCompleteRange(tokenStart: Token, tokenEnd: Token): vscode.Range {
    const length = tokenEnd.stop - tokenEnd.start + 1;
    return new vscode.Range(new vscode.Position(tokenStart.line - 1, tokenStart.column),
        new vscode.Position(tokenEnd.line - 1, tokenEnd.column + length));
}

export async function locateImportByQualifiedName(name: string): Promise<vscode.Uri[]> {
    const maxSearchResults = 10;
    const pathSuffix = name.replace(/\./g, '/') + '.zs';
    return vscode.workspace.findFiles(`**/${pathSuffix}`, undefined, maxSearchResults);
}
