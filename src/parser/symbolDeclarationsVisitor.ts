import * as vscode from 'vscode';
import ZserioParserVisitor from '../antlr4/ZserioParserVisitor.js';
import { EntityReference } from './entityReference';
import { convertRange, convertCompleteRange } from './utils';

export class SymbolDeclarationsVisitor extends ZserioParserVisitor {
    symbols: vscode.DocumentSymbol[] = [];
    imports: EntityReference[] = [];

    createSymbol(ctxId: any, ctxWhole: any, detail: string, kind: vscode.SymbolKind): vscode.DocumentSymbol {
        const name = ctxId.getText();
        const range = convertCompleteRange(ctxWhole.start, ctxWhole.stop);
        const selectionRange = convertRange(ctxId.start);
        return new vscode.DocumentSymbol(
            name, detail,
            kind,
            range, selectionRange)
    }

    override visitPackageNameDefinition(ctx: any) {
        const name = ctx.id().map(i => i.getText()).join(".");
    }
    override visitImportDeclaration(ctx: any) {
        const ids = ctx.id();
        const name = ids.map(i => i.getText()).join(".");
        const range = convertRange(ids[0].start).union(convertRange(ids[ids.length - 1].start));
        this.imports.push(new EntityReference(name, range));
    }
    override visitSubtypeDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "subtype", vscode.SymbolKind.Constant));
    }
    override visitStructureDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "struct", vscode.SymbolKind.Struct));
    }
    override visitChoiceDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "choice", vscode.SymbolKind.Struct));
    }
    override visitUnionDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "union", vscode.SymbolKind.Struct));
    }
    override visitEnumDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "enum", vscode.SymbolKind.Enum));
    }
    override visitBitmaskDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "bitmask", vscode.SymbolKind.Struct));
    }
    override visitSqlTableDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id()[0], ctx, "sql_table", vscode.SymbolKind.Object));
    }
    override visitSqlDatabaseDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "sql_database", vscode.SymbolKind.Object));
    }
    override visitServiceDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "service", vscode.SymbolKind.Interface));
    }
    override visitPubsubDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "pubsub", vscode.SymbolKind.Event));
    }
    override visitInstantiateDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "instantiate", vscode.SymbolKind.Object));
    }
    override visitConstDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "const", vscode.SymbolKind.Constant));
    }
    override visitRuleGroupDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "rule_group", vscode.SymbolKind.Package));
    }
}
