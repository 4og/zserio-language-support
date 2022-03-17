import * as vscode from 'vscode';
import ZserioParserVisitor from '../antlr4/ZserioParserVisitor.js';
import { EntityReference } from './entityReference';
import { convertRange, convertCompleteRange } from './utils';

class BaseZserioParserVisitor extends ZserioParserVisitor {
    symbols: vscode.DocumentSymbol[] = [];

    createSymbol(ctxId: any, ctxWhole: any, detail: string, kind: vscode.SymbolKind, childrenVisitor?: BaseZserioParserVisitor): vscode.DocumentSymbol {
        let name = ctxId.getText();
        if (!name) {
            name = "<invalid>";
        }
        const range = convertCompleteRange(ctxWhole.start, ctxWhole.stop);
        const selectionRange = convertRange(ctxId.start);

        let symbol = new vscode.DocumentSymbol(
            name, detail,
            kind,
            range, selectionRange);

        if (childrenVisitor) {
            childrenVisitor["visitChildren"](ctxWhole);
            symbol.children = childrenVisitor.symbols;
        }
        return symbol;
    }
}

class EnumLikeVisitor extends BaseZserioParserVisitor {
    override visitEnumItem(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.EnumMember));
    }
    override visitBitmaskValue(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.EnumMember));
    }
}

class StructLikeVisitor extends BaseZserioParserVisitor {
    override visitStructureFieldDefinition(ctx: any) {
        const fieldTypeId = ctx.fieldTypeId();
        if (fieldTypeId !== null) {
            this.symbols.push(this.createSymbol(fieldTypeId.id(), ctx, "", vscode.SymbolKind.Field));
        }
    }
    override visitChoiceFieldDefinition(ctx: any) {
        const fieldTypeId = ctx.fieldTypeId();
        if (fieldTypeId !== null) {
            this.symbols.push(this.createSymbol(fieldTypeId.id(), ctx, "", vscode.SymbolKind.Field));
        }
    }
    override visitServiceMethodDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.Method));
    }
    override visitPubsubMessageDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.Event));
    }
    override visitSqlDatabaseFieldDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.Field));
    }
    override visitSqlTableFieldDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.Field));
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
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "struct", vscode.SymbolKind.Struct, new StructLikeVisitor()));
    }
    override visitChoiceDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "choice", vscode.SymbolKind.Struct, new StructLikeVisitor()));
    }
    override visitUnionDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "union", vscode.SymbolKind.Struct, new StructLikeVisitor()));
    }
    override visitEnumDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "enum", vscode.SymbolKind.Enum, new EnumLikeVisitor()));
    }
    override visitBitmaskDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "bitmask", vscode.SymbolKind.Enum, new EnumLikeVisitor()));
    }
    override visitSqlTableDeclaration(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id()[0], ctx, "sql_table", vscode.SymbolKind.Object, new StructLikeVisitor()));
    }
    override visitSqlDatabaseDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "sql_database", vscode.SymbolKind.Object, new StructLikeVisitor()));
    }
    override visitServiceDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "service", vscode.SymbolKind.Interface, new StructLikeVisitor()));
    }
    override visitPubsubDefinition(ctx: any) {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "pubsub", vscode.SymbolKind.Interface, new StructLikeVisitor()));
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
