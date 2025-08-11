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

    const testWorkspaceFolder = vscode.workspace.workspaceFolders![0].uri;
    const testFile = vscode.Uri.joinPath(testWorkspaceFolder, 'test.zs');
    const testFile2 = vscode.Uri.joinPath(testWorkspaceFolder, 'test2.zs');

    test('File watcher works for .zs files', async () => {
        const document = await vscode.workspace.openTextDocument(testFile);
        await vscode.window.showTextDocument(document);
        assert.strictEqual(document.languageId, 'zserio');
    });

    test('Diagnostic collection is created', async () => {
        const diagnostics = vscode.languages.getDiagnostics();
        assert.ok(diagnostics);
    });

    test('Document parsing happens on text changes', async () => {
        const testFileToEdit = vscode.Uri.joinPath(testWorkspaceFolder, 'testFileToEdit.zs');
        await vscode.workspace.fs.writeFile(testFileToEdit, Buffer.from('nothing'));
        const document = await vscode.workspace.openTextDocument(testFileToEdit);
        const editor = await vscode.window.showTextDocument(document);
        await editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 0), 'package test;');
        });
        // Allow time for parsing
        await new Promise(resolve => setTimeout(resolve, 100));
    });

    test('File watcher handles file deletion', async () => {
        const testFileToDelete = vscode.Uri.joinPath(testWorkspaceFolder, 'testFileToDelete.zs');
        await vscode.workspace.fs.writeFile(testFileToDelete, Buffer.from('abc'));
        const document = await vscode.workspace.openTextDocument(testFileToDelete);
        await vscode.window.showTextDocument(document);

        const diagnosticsBeforeDeletion = vscode.languages.getDiagnostics(testFileToDelete);
        assert.ok(diagnosticsBeforeDeletion.length > 0, 'Diagnostics should exist before deletion');

        // Close the document to trigger the file watcher
        await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
        await vscode.workspace.fs.delete(testFileToDelete, { recursive: false, useTrash: false });

        // Allow time for watcher to process
        await new Promise(resolve => setTimeout(resolve, 180));

        const diagnosticsAfterDeletion = vscode.languages.getDiagnostics(testFileToDelete);
        assert.strictEqual(diagnosticsAfterDeletion.length, 0);
    });

    test('Syntax error detection', async () => {
        const errorFile = vscode.Uri.joinPath(testWorkspaceFolder, 'testSyntaxError.zs');
        const document = await vscode.workspace.openTextDocument(errorFile);
        await vscode.window.showTextDocument(document);

        // Allow time for parsing and diagnostics
        await new Promise(resolve => setTimeout(resolve, 200));

        const diagnostics = vscode.languages.getDiagnostics(errorFile);
        assert.strictEqual(diagnostics.length, 4, 'Expected 4 diagnostics');

        const expectedErrors = [
            {
                message: /extraneous input 'wrong' expecting.*/,
                range: new vscode.Range(0, 0, 0, 5)
            },
            {
                message: /no viable alternative at input 'a;'/,
                range: new vscode.Range(1, 19, 1, 20)
            },
            {
                message: /mismatched input 'import' expecting ';'/,
                range: new vscode.Range(2, 0, 2, 6)
            },
            {
                message: /extraneous input 'c' expecting ';'/,
                range: new vscode.Range(3, 12, 3, 13)
            }
        ];

        diagnostics.sort((a, b) => a.range.start.line - b.range.start.line);

        expectedErrors.forEach((expected, i) => {
            const diagnostic = diagnostics[i];
            assert.strictEqual(diagnostic.severity, vscode.DiagnosticSeverity.Error, `Diagnostic ${i}: severity should be Error`);
            assert.match(diagnostic.message, expected.message, `Diagnostic ${i}: message is incorrect`);
            assert.deepStrictEqual(diagnostic.range, expected.range, `Diagnostic ${i}: range is incorrect`);
        });
    });

    test('Document symbol provider returns symbols', async () => {
        const document = await vscode.workspace.openTextDocument(testFile);
        await vscode.window.showTextDocument(document);

        const symbols = await vscode.commands.executeCommand<vscode.DocumentSymbol[]>(
            'vscode.executeDocumentSymbolProvider',
            document.uri
        );
        assert.ok(symbols && symbols.length > 0);
        assert.ok(symbols && symbols.some(symbol => symbol.name === 'TestStruct'), 'Expected symbol "TestStruct" not found');
        assert.ok(symbols && symbols.some(symbol => symbol.name === 'TestStruct2'), 'Expected symbol "TestStruct2" not found');
    });

    test('Semantic tokens provider returns tokens', async () => {
        const document = await vscode.workspace.openTextDocument(testFile);
        const tokens = await vscode.commands.executeCommand(
            'vscode.provideDocumentSemanticTokens',
            document.uri
        );
        assert.ok(tokens['data'] && tokens['data'].length > 0, 'Expected semantic tokens data to be present');
    });

    test('Completion provider returns suggestions', async () => {
        const document = await vscode.workspace.openTextDocument(testFile);
        const position = new vscode.Position(1, 28);
        const completions = await vscode.commands.executeCommand<vscode.CompletionList>(
            'vscode.executeCompletionItemProvider',
            document.uri,
            position
        );
        assert.ok(completions && completions.items.length > 0, 'Expected completion items to be present');
        assert.ok(completions.items.some(item => item.insertText === 'TestStruct'), 'Expected completion item "TestStruct" not found');
        assert.ok(completions.items.some(item => item.insertText === 'varuint'), 'Expected completion item "varuint" not found');
    });

    test('Definition provider returns locations', async () => {
        const document = await vscode.workspace.openTextDocument(testFile);
        const position = new vscode.Position(2, 20); // Position at "TestStruct"

        const definitions = await vscode.commands.executeCommand<vscode.Location[]>(
            'vscode.executeDefinitionProvider',
            document.uri,
            position
        );

        assert.ok(definitions, 'No definitions returned');
        assert.ok(definitions.length > 0, 'Expected at least one definition');

        // The definition should point to the TestStruct declaration
        assert.strictEqual(definitions[0].range.start.line, 1, 'Definition should point to line 2 where TestStruct is declared');
        assert.strictEqual(definitions[0].range.start.character, 7, 'Definition should point to character 8 where TestStruct is declared');
    });

    test('Definition provider returns locations from imported location', async () => {
        const document = await vscode.workspace.openTextDocument(testFile2);
        await vscode.window.showTextDocument(document);
        const position = new vscode.Position(2, 20); // Position at "TestStruct"

        const definitions = await vscode.commands.executeCommand<vscode.Location[]>(
            'vscode.executeDefinitionProvider',
            document.uri,
            position
        );

        assert.ok(definitions, 'No definitions returned');
        assert.ok(definitions.length > 0, 'Expected at least one definition');

        // The definition should point to the TestStruct declaration in test.zs
        assert.strictEqual(definitions[0].uri.toString(), testFile.toString(), 'Definition should point to the correct file');
        assert.strictEqual(definitions[0].range.start.line, 1, 'Definition should point to line 2 where TestStruct is declared');
        assert.strictEqual(definitions[0].range.start.character, 7, 'Definition should point to character 8 where TestStruct is declared');
    });

    test('Handles multiple .zs files', async () => {
        const document1 = await vscode.workspace.openTextDocument(testFile);
        const document2 = await vscode.workspace.openTextDocument(testFile2);

        assert.strictEqual(document1.languageId, 'zserio');
        assert.strictEqual(document2.languageId, 'zserio');
    });

    test('Ignores non-zserio files', async () => {
        const nonZserioFile = vscode.Uri.joinPath(testWorkspaceFolder, 'test.txt');
        const document = await vscode.workspace.openTextDocument(nonZserioFile);
        assert.notStrictEqual(document.languageId, 'zserio');
    });
});