import * as vscode from 'vscode';

export class EntityReference {
    constructor(name: string, range: vscode.Range) {
        this.name = name;
        this.range = range;
    }
    name: string;
    range: vscode.Range;
}
