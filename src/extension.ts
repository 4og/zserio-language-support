import * as vscode from 'vscode';
import DefinitionProvider from './providers/definitionProvider';

export function activate(context: vscode.ExtensionContext) {
    let definitionProvider = vscode.languages.registerDefinitionProvider(['zserio'], new DefinitionProvider());
    context.subscriptions.push(definitionProvider);
}
