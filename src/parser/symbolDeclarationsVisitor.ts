import * as vscode from 'vscode';
import ZserioParserVisitor from '../antlr4/ZserioParserVisitor.js';
import { EntityReference } from './entityReference';
import { convertRange, convertCompleteRange } from './utils';

class BaseZserioParserVisitor extends ZserioParserVisitor {
    symbols: vscode.DocumentSymbol[] = [];

    createSymbol(ctxId: any, ctxWhole: any, detail: string, kind: vscode.SymbolKind): vscode.DocumentSymbol {
        const name = ctxId.getText();
        const range = convertCompleteRange(ctxWhole.start, ctxWhole.stop);
        const selectionRange = convertRange(ctxId.start);
        return new vscode.DocumentSymbol(
            name, detail,
            kind,
            range, selectionRange)
    }
}

class ZserioParserEnumVisitor extends BaseZserioParserVisitor {
    override visitEnumItem(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.EnumMember));
    }
}

class ZserioParserStructVisitor extends BaseZserioParserVisitor {
    override visitStructureFieldDefinition(ctx: any) {
        const fieldTypeId = ctx.fieldTypeId();
        if (fieldTypeId !== null) {
            this.symbols.push(this.createSymbol(fieldTypeId.id(), ctx, "", vscode.SymbolKind.Field));
        }
    }
    override visitFunctionDefinition(ctx: any) {
        const functionName = ctx.functionName();
        if (functionName !== null) {
            this.symbols.push(this.createSymbol(functionName.id(), ctx, "", vscode.SymbolKind.Function));
        }
    }
}

export class SymbolDeclarationsVisitor extends BaseZserioParserVisitor {
    imports: EntityReference[] = [];

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
        const structVisitor = new ZserioParserStructVisitor();
        structVisitor["visitChildren"](ctx);
        const structSymbol = this.createSymbol(ctx.id(), ctx, "struct", vscode.SymbolKind.Struct);
        structSymbol.children = structVisitor.symbols;
        this.symbols.push(structSymbol);
    }
    override visitChoiceDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "choice", vscode.SymbolKind.Struct));
    }
    override visitUnionDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "union", vscode.SymbolKind.Struct));
    }
    override visitEnumDeclaration(ctx: any) {
        const enumVisitor = new ZserioParserEnumVisitor();
        enumVisitor["visitChildren"](ctx);
        const enumSymbol = this.createSymbol(ctx.id(), ctx, "enum", vscode.SymbolKind.Enum);
        enumSymbol.children = enumVisitor.symbols;
        this.symbols.push(enumSymbol);
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
