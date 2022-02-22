import * as vscode from 'vscode';
import DefinitionProvider from './providers/definitionProvider';
import DocumentSymbolProvider from './providers/documentSymbolProvider';
import DocumentSemanticTokensProvider from './providers/documentSemanticTokensProvider';

import { ParsedDocumentCollection } from './parser/parser';

export function activate(context: vscode.ExtensionContext) {
    const languageId = 'zserio';

    const diagnosticCollection = vscode.languages.createDiagnosticCollection(languageId);
    const parsedDocumentCollection = new ParsedDocumentCollection(diagnosticCollection);

    const definitionProvider = vscode.languages.registerDefinitionProvider([languageId], new DefinitionProvider(parsedDocumentCollection));
    context.subscriptions.push(definitionProvider);

    const documentSymbolProvider = vscode.languages.registerDocumentSymbolProvider([languageId], new DocumentSymbolProvider(parsedDocumentCollection));
    context.subscriptions.push(documentSymbolProvider);

    const semanticTokensProvider = vscode.languages.registerDocumentSemanticTokensProvider([languageId], new DocumentSemanticTokensProvider(parsedDocumentCollection),
        DocumentSemanticTokensProvider.getLegend());
    context.subscriptions.push(semanticTokensProvider);

    if (vscode.window.activeTextEditor) {
        parsedDocumentCollection.parseDocument(vscode.window.activeTextEditor.document);
    }

    const watcher = vscode.workspace.createFileSystemWatcher('**/*.zs', true);
    watcher.onDidDelete(uri => parsedDocumentCollection.disposeDocumentByUri(uri));
    context.subscriptions.push(watcher);

    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(document => parsedDocumentCollection.parseDocument(document)));

    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            parsedDocumentCollection.parseDocument(editor.document);
        }
    }));

    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(editor => {
        if (editor) {
            parsedDocumentCollection.parseDocument(editor.document);
        }
    }));
}
