import * as vscode from 'vscode';
import CompletionItemProvider from './providers/completionItemProvider';
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

    const completionProvider = vscode.languages.registerCompletionItemProvider(
        [languageId], new CompletionItemProvider(parsedDocumentCollection));
    context.subscriptions.push(completionProvider);

    if (vscode.window.activeTextEditor?.document) {
        parsedDocumentCollection.parseDocument(vscode.window.activeTextEditor.document);
    }

    const watcher = vscode.workspace.createFileSystemWatcher('**/*.zs', true);
    watcher.onDidDelete(uri => parsedDocumentCollection.disposeDocumentByUri(uri));
    context.subscriptions.push(watcher);

    // In case the file watcher does not notify about deleted files
    context.subscriptions.push(vscode.workspace.onDidDeleteFiles(event => {
        for (const uri of event.files) {
            if (uri.path.endsWith('.zs')) {
                parsedDocumentCollection.disposeDocumentByUri(uri);
            }
        }
    }));

    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(document => parsedDocumentCollection.parseDocument(document)));

    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor?.document) {
            parsedDocumentCollection.parseDocument(editor.document);
        }
    }));

    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(editor => {
        if (editor?.document) {
            parsedDocumentCollection.parseDocument(editor.document);
        }
    }));
}
