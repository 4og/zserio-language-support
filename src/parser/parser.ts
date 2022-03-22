import * as vscode from 'vscode';
import antlr4 from 'antlr4';
import ZserioLexer from '../antlr4/ZserioLexer.js';
import ZserioParser from '../antlr4/ZserioParser.js';
import { EntityReference } from './entityReference';
import { SymbolDeclarationsVisitor } from './symbolDeclarationsVisitor';
import { TypeReferenceVisitor } from './typeReferenceVisitor';
import { SyntaxErrorListener } from './syntaxErrorListener';

export class ParsedDocument {
    constructor(version: number, tree: any, symbols: vscode.DocumentSymbol[], references: EntityReference[], imports: EntityReference[]) {
        this.version = version;
        this.tree = tree;
        this.symbols = symbols;
        this.references = references;
        this.imports = imports;
    }
    version: number;
    tree: any;
    symbols: vscode.DocumentSymbol[];
    references: EntityReference[];
    imports: EntityReference[];
}

export class ParsedDocumentCollection {
    constructor(diagnostic_collection: vscode.DiagnosticCollection) {
        this.diagnosticCollection = diagnostic_collection;
        this.parsedDocuments = new Map<string, ParsedDocument>();
    }

    diagnosticCollection: vscode.DiagnosticCollection;
    parsedDocuments: Map<string, ParsedDocument>;

    async getParsedDocument(document: vscode.TextDocument): Promise<ParsedDocument> {
        const parsedDocument = this.parsedDocuments.get(document.uri.toString());
        if (parsedDocument && parsedDocument.version == document.version) {
            return parsedDocument;
        }
        const pd = this.parseZserioDocument(document, this.diagnosticCollection);
        this.parsedDocuments.set(document.uri.toString(), pd);
        return pd;
    }

    async getParsedDocumentByUri(uri: vscode.Uri): Promise<ParsedDocument> {
        const parsedDocument = this.parsedDocuments.get(uri.toString());
        if (parsedDocument) {
            return parsedDocument;
        }
        const document = vscode.workspace.openTextDocument(uri);
        const pd = this.parseZserioDocument(await document, this.diagnosticCollection);
        this.parsedDocuments.set(uri.toString(), pd);
        return pd;
    }

    parseDocument(document: vscode.TextDocument) {
        if (document.languageId == 'zserio') {
            this.getParsedDocument(document);
        }
    }

    disposeDocumentByUri(uri: vscode.Uri) {
        console.log(`DISPOSE ${uri.toString()}`);
        this.diagnosticCollection.delete(uri);
        this.parsedDocuments.delete(uri.toString());
    }

    parseZserioDocument(document: vscode.TextDocument, collection: vscode.DiagnosticCollection): ParsedDocument {
        collection.delete(document.uri);
        const chars = new antlr4.InputStream(document.getText());
        const lexer = new ZserioLexer(chars);
        lexer["strictMode"] = false;
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ZserioParser(tokens);
        parser["buildParseTrees"] = true;
        parser["removeErrorListeners"]();
        const diagnostics: vscode.Diagnostic[] = [];
        parser["addErrorListener"](new SyntaxErrorListener(diagnostics));
        const tree = parser.packageDeclaration();

        const visitor = new SymbolDeclarationsVisitor();
        visitor["visit"](tree);

        const referenceVisitor = new TypeReferenceVisitor();
        referenceVisitor["visit"](tree);

        collection.set(document.uri, diagnostics);
        console.log(`Parsed ${document.uri} version: ${document.version}`);
        return new ParsedDocument(document.version, tree, visitor.symbols, referenceVisitor.references, visitor.imports);
    }


}


