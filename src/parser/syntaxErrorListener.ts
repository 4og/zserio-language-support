import { ErrorListener, Token, Recognizer, RecognitionException } from 'antlr4';
import * as vscode from 'vscode';

export class SyntaxErrorListener extends ErrorListener<Token> {
    constructor(public diagnostics: vscode.Diagnostic[]) {
        super();
    }
    override syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, _e: RecognitionException | undefined): void {
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
