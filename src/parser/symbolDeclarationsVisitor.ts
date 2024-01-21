import * as vscode from 'vscode';
import ZserioParserVisitor from '../antlr4/ZserioParserVisitor';
import {
    BitmaskDeclarationContext, BitmaskValueContext, ChoiceDeclarationContext, ChoiceFieldDefinitionContext, ConstDefinitionContext,
    EnumDeclarationContext, EnumItemContext, FunctionDefinitionContext, IdContext, ImportDeclarationContext, InstantiateDeclarationContext,
    PackageDeclarationContext,
    PackageNameDefinitionContext,
    PubsubDefinitionContext, PubsubMessageDefinitionContext, RuleGroupDefinitionContext, ServiceDefinitionContext, ServiceMethodDefinitionContext,
    SqlDatabaseDefinitionContext, SqlDatabaseFieldDefinitionContext, SqlTableDeclarationContext, SqlTableFieldDefinitionContext,
    StructureDeclarationContext, StructureFieldDefinitionContext, SubtypeDeclarationContext, UnionDeclarationContext
} from '../antlr4/ZserioParser'
import { EntityReference } from './entityReference';
import { convertRange, convertCompleteRange } from './utils';
import { ParserRuleContext } from 'antlr4';

class BaseZserioParserVisitor extends ZserioParserVisitor<void> {
    symbols: vscode.DocumentSymbol[] = [];

    createSymbol(ctxId: IdContext, ctxWhole: ParserRuleContext, detail: string, kind: vscode.SymbolKind, childrenVisitor?: BaseZserioParserVisitor): vscode.DocumentSymbol {
        let name = ctxId.getText();
        if (!name) {
            name = "<invalid>";
        }
        const range = convertCompleteRange(ctxWhole.start, ctxWhole.stop);
        let selectionRange = convertRange(ctxId.start);

        if (!range.contains(selectionRange)) {
            selectionRange = range;
        }

        const symbol = new vscode.DocumentSymbol(
            name, detail,
            kind,
            range, selectionRange);

        if (childrenVisitor) {
            childrenVisitor.visitChildren(ctxWhole);
            symbol.children = childrenVisitor.symbols;
        }
        return symbol;
    }
}

class EnumLikeVisitor extends BaseZserioParserVisitor {

    override visitEnumItem = (ctx: EnumItemContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.EnumMember));
    }
    override visitBitmaskValue = (ctx: BitmaskValueContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.EnumMember));
    }

}

class StructLikeVisitor extends BaseZserioParserVisitor {
    override visitStructureFieldDefinition = (ctx: StructureFieldDefinitionContext) => {
        const fieldTypeId = ctx.fieldTypeId();
        if (fieldTypeId !== null) {
            this.symbols.push(this.createSymbol(fieldTypeId.id(), ctx, "", vscode.SymbolKind.Field));
        }
    }
    override visitChoiceFieldDefinition = (ctx: ChoiceFieldDefinitionContext) => {
        const fieldTypeId = ctx.fieldTypeId();
        if (fieldTypeId !== null) {
            this.symbols.push(this.createSymbol(fieldTypeId.id(), ctx, "", vscode.SymbolKind.Field));
        }
    }
    override visitServiceMethodDefinition = (ctx: ServiceMethodDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.Method));
    }
    override visitPubsubMessageDefinition = (ctx: PubsubMessageDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.Event));
    }
    override visitSqlDatabaseFieldDefinition = (ctx: SqlDatabaseFieldDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.Field));
    }
    override visitSqlTableFieldDefinition = (ctx: SqlTableFieldDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "", vscode.SymbolKind.Field));
    }
    override visitFunctionDefinition = (ctx: FunctionDefinitionContext) => {
        const functionName = ctx.functionName();
        if (functionName !== null) {
            this.symbols.push(this.createSymbol(functionName.id(), ctx, "", vscode.SymbolKind.Function));
        }
    }
}

export class SymbolDeclarationsVisitor extends BaseZserioParserVisitor {
    packageName? : string;
    imports: EntityReference[] = [];

    override visitPackageNameDefinition = (ctx: PackageNameDefinitionContext) => {
        const ids = ctx.id_list();
        this.packageName = ids.map(i => i.getText()).join(".");
    }

    override visitImportDeclaration = (ctx: ImportDeclarationContext) => {
        const ids = ctx.id_list();
        const name = ids.map(i => i.getText()).join(".");
        const range = convertRange(ids[0].start).union(convertRange(ids[ids.length - 1].start));
        this.imports.push(new EntityReference(name, range));
    }
    override visitSubtypeDeclaration = (ctx: SubtypeDeclarationContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "subtype", vscode.SymbolKind.Constant));
    }
    override visitStructureDeclaration = (ctx: StructureDeclarationContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "struct", vscode.SymbolKind.Struct, new StructLikeVisitor()));
    }
    override visitChoiceDeclaration = (ctx: ChoiceDeclarationContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "choice", vscode.SymbolKind.Struct, new StructLikeVisitor()));
    }
    override visitUnionDeclaration = (ctx: UnionDeclarationContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "union", vscode.SymbolKind.Struct, new StructLikeVisitor()));
    }
    override visitEnumDeclaration = (ctx: EnumDeclarationContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "enum", vscode.SymbolKind.Enum, new EnumLikeVisitor()));
    }
    override visitBitmaskDeclaration = (ctx: BitmaskDeclarationContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "bitmask", vscode.SymbolKind.Enum, new EnumLikeVisitor()));
    }
    override visitSqlTableDeclaration = (ctx: SqlTableDeclarationContext) => {
        this.symbols.push(this.createSymbol(ctx.id(0), ctx, "sql_table", vscode.SymbolKind.Object, new StructLikeVisitor()));
    }
    override visitSqlDatabaseDefinition = (ctx: SqlDatabaseDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "sql_database", vscode.SymbolKind.Object, new StructLikeVisitor()));
    }
    override visitServiceDefinition = (ctx: ServiceDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "service", vscode.SymbolKind.Interface, new StructLikeVisitor()));
    }
    override visitPubsubDefinition = (ctx: PubsubDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "pubsub", vscode.SymbolKind.Interface, new StructLikeVisitor()));
    }
    override visitInstantiateDeclaration = (ctx: InstantiateDeclarationContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "instantiate", vscode.SymbolKind.Object));
    }
    override visitConstDefinition = (ctx: ConstDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "const", vscode.SymbolKind.Constant));
    }
    override visitRuleGroupDefinition = (ctx: RuleGroupDefinitionContext) => {
        this.symbols.push(this.createSymbol(ctx.id(), ctx, "rule_group", vscode.SymbolKind.Package));
    }
}
