// Generated from ZserioParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { PackageDeclarationContext } from "./ZserioParser";
import { CompatibilityVersionDirectiveContext } from "./ZserioParser";
import { PackageNameDefinitionContext } from "./ZserioParser";
import { ImportDeclarationContext } from "./ZserioParser";
import { LanguageDirectiveContext } from "./ZserioParser";
import { TypeDeclarationContext } from "./ZserioParser";
import { SymbolDefinitionContext } from "./ZserioParser";
import { ConstDefinitionContext } from "./ZserioParser";
import { RuleGroupDefinitionContext } from "./ZserioParser";
import { RuleDefinitionContext } from "./ZserioParser";
import { SubtypeDeclarationContext } from "./ZserioParser";
import { StructureDeclarationContext } from "./ZserioParser";
import { StructureFieldDefinitionContext } from "./ZserioParser";
import { FieldAlignmentContext } from "./ZserioParser";
import { FieldOffsetContext } from "./ZserioParser";
import { FieldTypeIdContext } from "./ZserioParser";
import { FieldArrayRangeContext } from "./ZserioParser";
import { FieldInitializerContext } from "./ZserioParser";
import { FieldOptionalClauseContext } from "./ZserioParser";
import { FieldConstraintContext } from "./ZserioParser";
import { ChoiceDeclarationContext } from "./ZserioParser";
import { ChoiceCasesContext } from "./ZserioParser";
import { ChoiceCaseContext } from "./ZserioParser";
import { ChoiceDefaultContext } from "./ZserioParser";
import { ChoiceFieldDefinitionContext } from "./ZserioParser";
import { UnionDeclarationContext } from "./ZserioParser";
import { UnionFieldDefinitionContext } from "./ZserioParser";
import { EnumDeclarationContext } from "./ZserioParser";
import { EnumItemContext } from "./ZserioParser";
import { BitmaskDeclarationContext } from "./ZserioParser";
import { BitmaskValueContext } from "./ZserioParser";
import { SqlTableDeclarationContext } from "./ZserioParser";
import { SqlTableFieldDefinitionContext } from "./ZserioParser";
import { SqlConstraintDefinitionContext } from "./ZserioParser";
import { SqlConstraintContext } from "./ZserioParser";
import { SqlWithoutRowIdContext } from "./ZserioParser";
import { SqlDatabaseDefinitionContext } from "./ZserioParser";
import { SqlDatabaseFieldDefinitionContext } from "./ZserioParser";
import { ServiceDefinitionContext } from "./ZserioParser";
import { ServiceMethodDefinitionContext } from "./ZserioParser";
import { PubsubDefinitionContext } from "./ZserioParser";
import { PubsubMessageDefinitionContext } from "./ZserioParser";
import { TopicDefinitionContext } from "./ZserioParser";
import { FunctionDefinitionContext } from "./ZserioParser";
import { FunctionTypeContext } from "./ZserioParser";
import { FunctionNameContext } from "./ZserioParser";
import { FunctionBodyContext } from "./ZserioParser";
import { TypeParametersContext } from "./ZserioParser";
import { ParameterDefinitionContext } from "./ZserioParser";
import { TemplateParametersContext } from "./ZserioParser";
import { TemplateArgumentsContext } from "./ZserioParser";
import { TemplateArgumentContext } from "./ZserioParser";
import { InstantiateDeclarationContext } from "./ZserioParser";
import { BitwiseXorExpressionContext } from "./ZserioParser";
import { DotExpressionContext } from "./ZserioParser";
import { ValueofExpressionContext } from "./ZserioParser";
import { ShiftExpressionContext } from "./ZserioParser";
import { ArrayExpressionContext } from "./ZserioParser";
import { NumbitsExpressionContext } from "./ZserioParser";
import { AdditiveExpressionContext } from "./ZserioParser";
import { RelationalExpressionContext } from "./ZserioParser";
import { LengthofExpressionContext } from "./ZserioParser";
import { IdentifierExpressionContext } from "./ZserioParser";
import { MultiplicativeExpressionContext } from "./ZserioParser";
import { LogicalOrExpressionContext } from "./ZserioParser";
import { IsSetExpressionContext } from "./ZserioParser";
import { BitwiseOrExpressionContext } from "./ZserioParser";
import { ParenthesizedExpressionContext } from "./ZserioParser";
import { BitwiseAndExpressionContext } from "./ZserioParser";
import { EqualityExpressionContext } from "./ZserioParser";
import { LogicalAndExpressionContext } from "./ZserioParser";
import { FunctionCallExpressionContext } from "./ZserioParser";
import { IndexExpressionContext } from "./ZserioParser";
import { UnaryExpressionContext } from "./ZserioParser";
import { LiteralExpressionContext } from "./ZserioParser";
import { TernaryExpressionContext } from "./ZserioParser";
import { LiteralContext } from "./ZserioParser";
import { IdContext } from "./ZserioParser";
import { TypeReferenceContext } from "./ZserioParser";
import { TypeInstantiationContext } from "./ZserioParser";
import { BuiltinTypeContext } from "./ZserioParser";
import { QualifiedNameContext } from "./ZserioParser";
import { TypeArgumentsContext } from "./ZserioParser";
import { TypeArgumentContext } from "./ZserioParser";
import { DynamicLengthArgumentContext } from "./ZserioParser";
import { IntTypeContext } from "./ZserioParser";
import { VarintTypeContext } from "./ZserioParser";
import { FixedBitFieldTypeContext } from "./ZserioParser";
import { DynamicBitFieldTypeContext } from "./ZserioParser";
import { BoolTypeContext } from "./ZserioParser";
import { StringTypeContext } from "./ZserioParser";
import { FloatTypeContext } from "./ZserioParser";
import { ExternTypeContext } from "./ZserioParser";
import { BytesTypeContext } from "./ZserioParser";


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

