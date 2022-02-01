import antlr4 from 'antlr4';
import * as vscode from 'vscode';

export class SyntaxErrorListener extends antlr4.error.ErrorListener {
    constructor(diagnostics: vscode.Diagnostic[]) {
        super();
        this.diagnostics = diagnostics;
    }
    diagnostics: vscode.Diagnostic[];
    syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, msg: string, err: any): void {
        const length = offendingSymbol.stop - offendingSymbol.start + 1;
        this.diagnostics.push({
            code: '',
            message: msg,
            range: new vscode.Range(new vscode.Position(line - 1, column), new vscode.Position(line - 1, column + length)),
            severity: vscode.DiagnosticSeverity.Error,
            source: '',
            relatedInformation: []
        });
    }
}
