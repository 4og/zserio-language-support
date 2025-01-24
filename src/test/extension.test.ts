import * as assert from 'assert';
import * as vscode from 'vscode';

const extensionName = '4og.zserio-language-support';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Extension is present', () => {
        assert.ok(vscode.extensions.getExtension(extensionName));
    });

    test('Extension activates', async () => {
        const extension = vscode.extensions.getExtension(extensionName);
        if (!extension) {
            assert.fail('Extension not found');
        }
        await extension.activate();
        assert.ok(extension.isActive);
        assert.ok((await vscode.languages.getLanguages()).includes('zserio'));
    });
});