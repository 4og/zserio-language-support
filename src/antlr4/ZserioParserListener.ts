// Generated from ZserioParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `ZserioParser`.
 */
export default class ZserioParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ZserioParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.compatibilityVersionDirective`.
	 * @param ctx the parse tree
	 */
	enterCompatibilityVersionDirective?: (ctx: CompatibilityVersionDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.compatibilityVersionDirective`.
	 * @param ctx the parse tree
	 */
	exitCompatibilityVersionDirective?: (ctx: CompatibilityVersionDirectiveContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.packageNameDefinition`.
	 * @param ctx the parse tree
	 */
	enterPackageNameDefinition?: (ctx: PackageNameDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.packageNameDefinition`.
	 * @param ctx the parse tree
	 */
	exitPackageNameDefinition?: (ctx: PackageNameDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.languageDirective`.
	 * @param ctx the parse tree
	 */
	enterLanguageDirective?: (ctx: LanguageDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.languageDirective`.
	 * @param ctx the parse tree
	 */
	exitLanguageDirective?: (ctx: LanguageDirectiveContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.symbolDefinition`.
	 * @param ctx the parse tree
	 */
	enterSymbolDefinition?: (ctx: SymbolDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.symbolDefinition`.
	 * @param ctx the parse tree
	 */
	exitSymbolDefinition?: (ctx: SymbolDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.constDefinition`.
	 * @param ctx the parse tree
	 */
	enterConstDefinition?: (ctx: ConstDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.constDefinition`.
	 * @param ctx the parse tree
	 */
	exitConstDefinition?: (ctx: ConstDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.ruleGroupDefinition`.
	 * @param ctx the parse tree
	 */
	enterRuleGroupDefinition?: (ctx: RuleGroupDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.ruleGroupDefinition`.
	 * @param ctx the parse tree
	 */
	exitRuleGroupDefinition?: (ctx: RuleGroupDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.ruleDefinition`.
	 * @param ctx the parse tree
	 */
	enterRuleDefinition?: (ctx: RuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.ruleDefinition`.
	 * @param ctx the parse tree
	 */
	exitRuleDefinition?: (ctx: RuleDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.subtypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSubtypeDeclaration?: (ctx: SubtypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.subtypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSubtypeDeclaration?: (ctx: SubtypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.structureDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructureDeclaration?: (ctx: StructureDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.structureDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructureDeclaration?: (ctx: StructureDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.structureFieldDefinition`.
	 * @param ctx the parse tree
	 */
	enterStructureFieldDefinition?: (ctx: StructureFieldDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.structureFieldDefinition`.
	 * @param ctx the parse tree
	 */
	exitStructureFieldDefinition?: (ctx: StructureFieldDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.fieldAlignment`.
	 * @param ctx the parse tree
	 */
	enterFieldAlignment?: (ctx: FieldAlignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.fieldAlignment`.
	 * @param ctx the parse tree
	 */
	exitFieldAlignment?: (ctx: FieldAlignmentContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.fieldOffset`.
	 * @param ctx the parse tree
	 */
	enterFieldOffset?: (ctx: FieldOffsetContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.fieldOffset`.
	 * @param ctx the parse tree
	 */
	exitFieldOffset?: (ctx: FieldOffsetContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.fieldTypeId`.
	 * @param ctx the parse tree
	 */
	enterFieldTypeId?: (ctx: FieldTypeIdContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.fieldTypeId`.
	 * @param ctx the parse tree
	 */
	exitFieldTypeId?: (ctx: FieldTypeIdContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.fieldArrayRange`.
	 * @param ctx the parse tree
	 */
	enterFieldArrayRange?: (ctx: FieldArrayRangeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.fieldArrayRange`.
	 * @param ctx the parse tree
	 */
	exitFieldArrayRange?: (ctx: FieldArrayRangeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.fieldInitializer`.
	 * @param ctx the parse tree
	 */
	enterFieldInitializer?: (ctx: FieldInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.fieldInitializer`.
	 * @param ctx the parse tree
	 */
	exitFieldInitializer?: (ctx: FieldInitializerContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.fieldOptionalClause`.
	 * @param ctx the parse tree
	 */
	enterFieldOptionalClause?: (ctx: FieldOptionalClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.fieldOptionalClause`.
	 * @param ctx the parse tree
	 */
	exitFieldOptionalClause?: (ctx: FieldOptionalClauseContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.fieldConstraint`.
	 * @param ctx the parse tree
	 */
	enterFieldConstraint?: (ctx: FieldConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.fieldConstraint`.
	 * @param ctx the parse tree
	 */
	exitFieldConstraint?: (ctx: FieldConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.choiceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterChoiceDeclaration?: (ctx: ChoiceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.choiceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitChoiceDeclaration?: (ctx: ChoiceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.choiceCases`.
	 * @param ctx the parse tree
	 */
	enterChoiceCases?: (ctx: ChoiceCasesContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.choiceCases`.
	 * @param ctx the parse tree
	 */
	exitChoiceCases?: (ctx: ChoiceCasesContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.choiceCase`.
	 * @param ctx the parse tree
	 */
	enterChoiceCase?: (ctx: ChoiceCaseContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.choiceCase`.
	 * @param ctx the parse tree
	 */
	exitChoiceCase?: (ctx: ChoiceCaseContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.choiceDefault`.
	 * @param ctx the parse tree
	 */
	enterChoiceDefault?: (ctx: ChoiceDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.choiceDefault`.
	 * @param ctx the parse tree
	 */
	exitChoiceDefault?: (ctx: ChoiceDefaultContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.choiceFieldDefinition`.
	 * @param ctx the parse tree
	 */
	enterChoiceFieldDefinition?: (ctx: ChoiceFieldDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.choiceFieldDefinition`.
	 * @param ctx the parse tree
	 */
	exitChoiceFieldDefinition?: (ctx: ChoiceFieldDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.unionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUnionDeclaration?: (ctx: UnionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.unionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUnionDeclaration?: (ctx: UnionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.unionFieldDefinition`.
	 * @param ctx the parse tree
	 */
	enterUnionFieldDefinition?: (ctx: UnionFieldDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.unionFieldDefinition`.
	 * @param ctx the parse tree
	 */
	exitUnionFieldDefinition?: (ctx: UnionFieldDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.enumItem`.
	 * @param ctx the parse tree
	 */
	enterEnumItem?: (ctx: EnumItemContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.enumItem`.
	 * @param ctx the parse tree
	 */
	exitEnumItem?: (ctx: EnumItemContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.bitmaskDeclaration`.
	 * @param ctx the parse tree
	 */
	enterBitmaskDeclaration?: (ctx: BitmaskDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.bitmaskDeclaration`.
	 * @param ctx the parse tree
	 */
	exitBitmaskDeclaration?: (ctx: BitmaskDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.bitmaskValue`.
	 * @param ctx the parse tree
	 */
	enterBitmaskValue?: (ctx: BitmaskValueContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.bitmaskValue`.
	 * @param ctx the parse tree
	 */
	exitBitmaskValue?: (ctx: BitmaskValueContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.sqlTableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSqlTableDeclaration?: (ctx: SqlTableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.sqlTableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSqlTableDeclaration?: (ctx: SqlTableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.sqlTableFieldDefinition`.
	 * @param ctx the parse tree
	 */
	enterSqlTableFieldDefinition?: (ctx: SqlTableFieldDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.sqlTableFieldDefinition`.
	 * @param ctx the parse tree
	 */
	exitSqlTableFieldDefinition?: (ctx: SqlTableFieldDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.sqlConstraintDefinition`.
	 * @param ctx the parse tree
	 */
	enterSqlConstraintDefinition?: (ctx: SqlConstraintDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.sqlConstraintDefinition`.
	 * @param ctx the parse tree
	 */
	exitSqlConstraintDefinition?: (ctx: SqlConstraintDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.sqlConstraint`.
	 * @param ctx the parse tree
	 */
	enterSqlConstraint?: (ctx: SqlConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.sqlConstraint`.
	 * @param ctx the parse tree
	 */
	exitSqlConstraint?: (ctx: SqlConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.sqlWithoutRowId`.
	 * @param ctx the parse tree
	 */
	enterSqlWithoutRowId?: (ctx: SqlWithoutRowIdContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.sqlWithoutRowId`.
	 * @param ctx the parse tree
	 */
	exitSqlWithoutRowId?: (ctx: SqlWithoutRowIdContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.sqlDatabaseDefinition`.
	 * @param ctx the parse tree
	 */
	enterSqlDatabaseDefinition?: (ctx: SqlDatabaseDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.sqlDatabaseDefinition`.
	 * @param ctx the parse tree
	 */
	exitSqlDatabaseDefinition?: (ctx: SqlDatabaseDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.sqlDatabaseFieldDefinition`.
	 * @param ctx the parse tree
	 */
	enterSqlDatabaseFieldDefinition?: (ctx: SqlDatabaseFieldDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.sqlDatabaseFieldDefinition`.
	 * @param ctx the parse tree
	 */
	exitSqlDatabaseFieldDefinition?: (ctx: SqlDatabaseFieldDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.serviceDefinition`.
	 * @param ctx the parse tree
	 */
	enterServiceDefinition?: (ctx: ServiceDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.serviceDefinition`.
	 * @param ctx the parse tree
	 */
	exitServiceDefinition?: (ctx: ServiceDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.serviceMethodDefinition`.
	 * @param ctx the parse tree
	 */
	enterServiceMethodDefinition?: (ctx: ServiceMethodDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.serviceMethodDefinition`.
	 * @param ctx the parse tree
	 */
	exitServiceMethodDefinition?: (ctx: ServiceMethodDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.pubsubDefinition`.
	 * @param ctx the parse tree
	 */
	enterPubsubDefinition?: (ctx: PubsubDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.pubsubDefinition`.
	 * @param ctx the parse tree
	 */
	exitPubsubDefinition?: (ctx: PubsubDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.pubsubMessageDefinition`.
	 * @param ctx the parse tree
	 */
	enterPubsubMessageDefinition?: (ctx: PubsubMessageDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.pubsubMessageDefinition`.
	 * @param ctx the parse tree
	 */
	exitPubsubMessageDefinition?: (ctx: PubsubMessageDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.topicDefinition`.
	 * @param ctx the parse tree
	 */
	enterTopicDefinition?: (ctx: TopicDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.topicDefinition`.
	 * @param ctx the parse tree
	 */
	exitTopicDefinition?: (ctx: TopicDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.parameterDefinition`.
	 * @param ctx the parse tree
	 */
	enterParameterDefinition?: (ctx: ParameterDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.parameterDefinition`.
	 * @param ctx the parse tree
	 */
	exitParameterDefinition?: (ctx: ParameterDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.templateParameters`.
	 * @param ctx the parse tree
	 */
	enterTemplateParameters?: (ctx: TemplateParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.templateParameters`.
	 * @param ctx the parse tree
	 */
	exitTemplateParameters?: (ctx: TemplateParametersContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.templateArguments`.
	 * @param ctx the parse tree
	 */
	enterTemplateArguments?: (ctx: TemplateArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.templateArguments`.
	 * @param ctx the parse tree
	 */
	exitTemplateArguments?: (ctx: TemplateArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.templateArgument`.
	 * @param ctx the parse tree
	 */
	enterTemplateArgument?: (ctx: TemplateArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.templateArgument`.
	 * @param ctx the parse tree
	 */
	exitTemplateArgument?: (ctx: TemplateArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.instantiateDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInstantiateDeclaration?: (ctx: InstantiateDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.instantiateDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInstantiateDeclaration?: (ctx: InstantiateDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `bitwiseXorExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseXorExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `dotExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDotExpression?: (ctx: DotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `dotExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDotExpression?: (ctx: DotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `valueofExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterValueofExpression?: (ctx: ValueofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `valueofExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitValueofExpression?: (ctx: ValueofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `shiftExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `arrayExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `numbitsExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumbitsExpression?: (ctx: NumbitsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `numbitsExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumbitsExpression?: (ctx: NumbitsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `additiveExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `relationalExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `lengthofExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLengthofExpression?: (ctx: LengthofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `lengthofExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLengthofExpression?: (ctx: LengthofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `identifierExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `isSetExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIsSetExpression?: (ctx: IsSetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `isSetExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIsSetExpression?: (ctx: IsSetExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `bitwiseOrExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseOrExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `bitwiseAndExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseAndExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `equalityExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `indexExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIndexExpression?: (ctx: IndexExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `indexExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIndexExpression?: (ctx: IndexExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `literalExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `ZserioParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.typeReference`.
	 * @param ctx the parse tree
	 */
	enterTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.typeReference`.
	 * @param ctx the parse tree
	 */
	exitTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.typeInstantiation`.
	 * @param ctx the parse tree
	 */
	enterTypeInstantiation?: (ctx: TypeInstantiationContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.typeInstantiation`.
	 * @param ctx the parse tree
	 */
	exitTypeInstantiation?: (ctx: TypeInstantiationContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.builtinType`.
	 * @param ctx the parse tree
	 */
	enterBuiltinType?: (ctx: BuiltinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.builtinType`.
	 * @param ctx the parse tree
	 */
	exitBuiltinType?: (ctx: BuiltinTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.dynamicLengthArgument`.
	 * @param ctx the parse tree
	 */
	enterDynamicLengthArgument?: (ctx: DynamicLengthArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.dynamicLengthArgument`.
	 * @param ctx the parse tree
	 */
	exitDynamicLengthArgument?: (ctx: DynamicLengthArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.intType`.
	 * @param ctx the parse tree
	 */
	enterIntType?: (ctx: IntTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.intType`.
	 * @param ctx the parse tree
	 */
	exitIntType?: (ctx: IntTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.varintType`.
	 * @param ctx the parse tree
	 */
	enterVarintType?: (ctx: VarintTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.varintType`.
	 * @param ctx the parse tree
	 */
	exitVarintType?: (ctx: VarintTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.fixedBitFieldType`.
	 * @param ctx the parse tree
	 */
	enterFixedBitFieldType?: (ctx: FixedBitFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.fixedBitFieldType`.
	 * @param ctx the parse tree
	 */
	exitFixedBitFieldType?: (ctx: FixedBitFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.dynamicBitFieldType`.
	 * @param ctx the parse tree
	 */
	enterDynamicBitFieldType?: (ctx: DynamicBitFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.dynamicBitFieldType`.
	 * @param ctx the parse tree
	 */
	exitDynamicBitFieldType?: (ctx: DynamicBitFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.boolType`.
	 * @param ctx the parse tree
	 */
	enterBoolType?: (ctx: BoolTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.boolType`.
	 * @param ctx the parse tree
	 */
	exitBoolType?: (ctx: BoolTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.stringType`.
	 * @param ctx the parse tree
	 */
	enterStringType?: (ctx: StringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.stringType`.
	 * @param ctx the parse tree
	 */
	exitStringType?: (ctx: StringTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.floatType`.
	 * @param ctx the parse tree
	 */
	enterFloatType?: (ctx: FloatTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.floatType`.
	 * @param ctx the parse tree
	 */
	exitFloatType?: (ctx: FloatTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.externType`.
	 * @param ctx the parse tree
	 */
	enterExternType?: (ctx: ExternTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.externType`.
	 * @param ctx the parse tree
	 */
	exitExternType?: (ctx: ExternTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ZserioParser.bytesType`.
	 * @param ctx the parse tree
	 */
	enterBytesType?: (ctx: BytesTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZserioParser.bytesType`.
	 * @param ctx the parse tree
	 */
	exitBytesType?: (ctx: BytesTypeContext) => void;
}

