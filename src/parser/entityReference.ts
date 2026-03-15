import * as vscode from 'vscode';

export class EntityReference {
    constructor(public name: string, public range: vscode.Range) {}
}
