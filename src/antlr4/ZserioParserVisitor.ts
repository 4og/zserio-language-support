// Generated from ZserioParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { PackageDeclarationContext } from "./ZserioParser.js";
import { CompatibilityVersionDirectiveContext } from "./ZserioParser.js";
import { PackageNameDefinitionContext } from "./ZserioParser.js";
import { ImportDeclarationContext } from "./ZserioParser.js";
import { LanguageDirectiveContext } from "./ZserioParser.js";
import { TypeDeclarationContext } from "./ZserioParser.js";
import { SymbolDefinitionContext } from "./ZserioParser.js";
import { ConstDefinitionContext } from "./ZserioParser.js";
import { RuleGroupDefinitionContext } from "./ZserioParser.js";
import { RuleDefinitionContext } from "./ZserioParser.js";
import { SubtypeDeclarationContext } from "./ZserioParser.js";
import { StructureDeclarationContext } from "./ZserioParser.js";
import { StructureFieldDefinitionContext } from "./ZserioParser.js";
import { FieldAlignmentContext } from "./ZserioParser.js";
import { FieldOffsetContext } from "./ZserioParser.js";
import { FieldTypeIdContext } from "./ZserioParser.js";
import { FieldArrayRangeContext } from "./ZserioParser.js";
import { FieldInitializerContext } from "./ZserioParser.js";
import { FieldOptionalClauseContext } from "./ZserioParser.js";
import { FieldConstraintContext } from "./ZserioParser.js";
import { ChoiceDeclarationContext } from "./ZserioParser.js";
import { ChoiceCasesContext } from "./ZserioParser.js";
import { ChoiceCaseContext } from "./ZserioParser.js";
import { ChoiceDefaultContext } from "./ZserioParser.js";
import { ChoiceFieldDefinitionContext } from "./ZserioParser.js";
import { UnionDeclarationContext } from "./ZserioParser.js";
import { UnionFieldDefinitionContext } from "./ZserioParser.js";
import { EnumDeclarationContext } from "./ZserioParser.js";
import { EnumItemContext } from "./ZserioParser.js";
import { BitmaskDeclarationContext } from "./ZserioParser.js";
import { BitmaskValueContext } from "./ZserioParser.js";
import { SqlTableDeclarationContext } from "./ZserioParser.js";
import { SqlTableFieldDefinitionContext } from "./ZserioParser.js";
import { SqlConstraintDefinitionContext } from "./ZserioParser.js";
import { SqlConstraintContext } from "./ZserioParser.js";
import { SqlWithoutRowIdContext } from "./ZserioParser.js";
import { SqlDatabaseDefinitionContext } from "./ZserioParser.js";
import { SqlDatabaseFieldDefinitionContext } from "./ZserioParser.js";
import { ServiceDefinitionContext } from "./ZserioParser.js";
import { ServiceMethodDefinitionContext } from "./ZserioParser.js";
import { PubsubDefinitionContext } from "./ZserioParser.js";
import { PubsubMessageDefinitionContext } from "./ZserioParser.js";
import { TopicDefinitionContext } from "./ZserioParser.js";
import { FunctionDefinitionContext } from "./ZserioParser.js";
import { FunctionTypeContext } from "./ZserioParser.js";
import { FunctionNameContext } from "./ZserioParser.js";
import { FunctionBodyContext } from "./ZserioParser.js";
import { TypeParametersContext } from "./ZserioParser.js";
import { ParameterDefinitionContext } from "./ZserioParser.js";
import { TemplateParametersContext } from "./ZserioParser.js";
import { TemplateArgumentsContext } from "./ZserioParser.js";
import { TemplateArgumentContext } from "./ZserioParser.js";
import { InstantiateDeclarationContext } from "./ZserioParser.js";
import { BitwiseXorExpressionContext } from "./ZserioParser.js";
import { DotExpressionContext } from "./ZserioParser.js";
import { ValueofExpressionContext } from "./ZserioParser.js";
import { ShiftExpressionContext } from "./ZserioParser.js";
import { ArrayExpressionContext } from "./ZserioParser.js";
import { NumbitsExpressionContext } from "./ZserioParser.js";
import { AdditiveExpressionContext } from "./ZserioParser.js";
import { RelationalExpressionContext } from "./ZserioParser.js";
import { LengthofExpressionContext } from "./ZserioParser.js";
import { IdentifierExpressionContext } from "./ZserioParser.js";
import { MultiplicativeExpressionContext } from "./ZserioParser.js";
import { LogicalOrExpressionContext } from "./ZserioParser.js";
import { IsSetExpressionContext } from "./ZserioParser.js";
import { BitwiseOrExpressionContext } from "./ZserioParser.js";
import { ParenthesizedExpressionContext } from "./ZserioParser.js";
import { BitwiseAndExpressionContext } from "./ZserioParser.js";
import { EqualityExpressionContext } from "./ZserioParser.js";
import { LogicalAndExpressionContext } from "./ZserioParser.js";
import { FunctionCallExpressionContext } from "./ZserioParser.js";
import { IndexExpressionContext } from "./ZserioParser.js";
import { UnaryExpressionContext } from "./ZserioParser.js";
import { LiteralExpressionContext } from "./ZserioParser.js";
import { TernaryExpressionContext } from "./ZserioParser.js";
import { LiteralContext } from "./ZserioParser.js";
import { IdContext } from "./ZserioParser.js";
import { TypeReferenceContext } from "./ZserioParser.js";
import { TypeInstantiationContext } from "./ZserioParser.js";
import { BuiltinTypeContext } from "./ZserioParser.js";
import { QualifiedNameContext } from "./ZserioParser.js";
import { TypeArgumentsContext } from "./ZserioParser.js";
import { TypeArgumentContext } from "./ZserioParser.js";
import { DynamicLengthArgumentContext } from "./ZserioParser.js";
import { IntTypeContext } from "./ZserioParser.js";
import { VarintTypeContext } from "./ZserioParser.js";
import { FixedBitFieldTypeContext } from "./ZserioParser.js";
import { DynamicBitFieldTypeContext } from "./ZserioParser.js";
import { BoolTypeContext } from "./ZserioParser.js";
import { StringTypeContext } from "./ZserioParser.js";
import { FloatTypeContext } from "./ZserioParser.js";
import { ExternTypeContext } from "./ZserioParser.js";
import { BytesTypeContext } from "./ZserioParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ZserioParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class ZserioParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ZserioParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.compatibilityVersionDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompatibilityVersionDirective?: (ctx: CompatibilityVersionDirectiveContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.packageNameDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageNameDefinition?: (ctx: PackageNameDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.languageDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguageDirective?: (ctx: LanguageDirectiveContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.symbolDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolDefinition?: (ctx: SymbolDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.constDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDefinition?: (ctx: ConstDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.ruleGroupDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleGroupDefinition?: (ctx: RuleGroupDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.ruleDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleDefinition?: (ctx: RuleDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.subtypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtypeDeclaration?: (ctx: SubtypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.structureDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureDeclaration?: (ctx: StructureDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.structureFieldDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureFieldDefinition?: (ctx: StructureFieldDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.fieldAlignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAlignment?: (ctx: FieldAlignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.fieldOffset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldOffset?: (ctx: FieldOffsetContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.fieldTypeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldTypeId?: (ctx: FieldTypeIdContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.fieldArrayRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldArrayRange?: (ctx: FieldArrayRangeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.fieldInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldInitializer?: (ctx: FieldInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.fieldOptionalClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldOptionalClause?: (ctx: FieldOptionalClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.fieldConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldConstraint?: (ctx: FieldConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.choiceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceDeclaration?: (ctx: ChoiceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.choiceCases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceCases?: (ctx: ChoiceCasesContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.choiceCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceCase?: (ctx: ChoiceCaseContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.choiceDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceDefault?: (ctx: ChoiceDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.choiceFieldDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceFieldDefinition?: (ctx: ChoiceFieldDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.unionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionDeclaration?: (ctx: UnionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.unionFieldDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionFieldDefinition?: (ctx: UnionFieldDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.enumItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumItem?: (ctx: EnumItemContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.bitmaskDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitmaskDeclaration?: (ctx: BitmaskDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.bitmaskValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitmaskValue?: (ctx: BitmaskValueContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.sqlTableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlTableDeclaration?: (ctx: SqlTableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.sqlTableFieldDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlTableFieldDefinition?: (ctx: SqlTableFieldDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.sqlConstraintDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlConstraintDefinition?: (ctx: SqlConstraintDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.sqlConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlConstraint?: (ctx: SqlConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.sqlWithoutRowId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlWithoutRowId?: (ctx: SqlWithoutRowIdContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.sqlDatabaseDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlDatabaseDefinition?: (ctx: SqlDatabaseDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.sqlDatabaseFieldDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlDatabaseFieldDefinition?: (ctx: SqlDatabaseFieldDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.serviceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceDefinition?: (ctx: ServiceDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.serviceMethodDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceMethodDefinition?: (ctx: ServiceMethodDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.pubsubDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPubsubDefinition?: (ctx: PubsubDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.pubsubMessageDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPubsubMessageDefinition?: (ctx: PubsubMessageDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.topicDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopicDefinition?: (ctx: TopicDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.parameterDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDefinition?: (ctx: ParameterDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.templateParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateParameters?: (ctx: TemplateParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.templateArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateArguments?: (ctx: TemplateArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.templateArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateArgument?: (ctx: TemplateArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.instantiateDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstantiateDeclaration?: (ctx: InstantiateDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitwiseXorExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `dotExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotExpression?: (ctx: DotExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `valueofExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueofExpression?: (ctx: ValueofExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `shiftExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `numbitsExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumbitsExpression?: (ctx: NumbitsExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `relationalExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `lengthofExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthofExpression?: (ctx: LengthofExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `isSetExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsSetExpression?: (ctx: IsSetExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitwiseOrExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitwiseAndExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `indexExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexExpression?: (ctx: IndexExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `literalExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.typeReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeReference?: (ctx: TypeReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.typeInstantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInstantiation?: (ctx: TypeInstantiationContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.builtinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltinType?: (ctx: BuiltinTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.dynamicLengthArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicLengthArgument?: (ctx: DynamicLengthArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.intType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntType?: (ctx: IntTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.varintType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarintType?: (ctx: VarintTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.fixedBitFieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedBitFieldType?: (ctx: FixedBitFieldTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.dynamicBitFieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicBitFieldType?: (ctx: DynamicBitFieldTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.boolType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolType?: (ctx: BoolTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.stringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringType?: (ctx: StringTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.floatType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatType?: (ctx: FloatTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.externType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternType?: (ctx: ExternTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ZserioParser.bytesType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBytesType?: (ctx: BytesTypeContext) => Result;
}

