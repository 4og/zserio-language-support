import { BaseErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ng';
import type { ATNSimulator } from 'antlr4ng';
import * as vscode from 'vscode';

export class SyntaxErrorListener extends BaseErrorListener {
    constructor(public diagnostics: vscode.Diagnostic[]) {
        super();
    }
    override syntaxError<S extends Token, T extends ATNSimulator>(recognizer: Recognizer<T>, offendingSymbol: S | null, line: number, column: number, msg: string, _e: RecognitionException | null): void {
        const length = offendingSymbol ? offendingSymbol.stop - offendingSymbol.start + 1 : 1;
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
