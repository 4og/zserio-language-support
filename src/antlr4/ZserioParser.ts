// Generated from ZserioParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import ZserioParserListener from "./ZserioParserListener.js";
import ZserioParserVisitor from "./ZserioParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ZserioParser extends Parser {
	public static readonly AND = 1;
	public static readonly ASSIGN = 2;
	public static readonly BANG = 3;
	public static readonly COLON = 4;
	public static readonly COMMA = 5;
	public static readonly DIVIDE = 6;
	public static readonly DOT = 7;
	public static readonly EQ = 8;
	public static readonly GE = 9;
	public static readonly GT = 10;
	public static readonly LBRACE = 11;
	public static readonly LBRACKET = 12;
	public static readonly LE = 13;
	public static readonly LOGICAL_AND = 14;
	public static readonly LOGICAL_OR = 15;
	public static readonly LPAREN = 16;
	public static readonly LSHIFT = 17;
	public static readonly LT = 18;
	public static readonly MINUS = 19;
	public static readonly MODULO = 20;
	public static readonly MULTIPLY = 21;
	public static readonly NE = 22;
	public static readonly OR = 23;
	public static readonly PLUS = 24;
	public static readonly QUESTIONMARK = 25;
	public static readonly RBRACE = 26;
	public static readonly RBRACKET = 27;
	public static readonly RPAREN = 28;
	public static readonly SEMICOLON = 29;
	public static readonly TILDE = 30;
	public static readonly XOR = 31;
	public static readonly ALIGN = 32;
	public static readonly BIT_FIELD = 33;
	public static readonly BOOL = 34;
	public static readonly BITMASK = 35;
	public static readonly BYTES = 36;
	public static readonly CASE = 37;
	public static readonly CHOICE = 38;
	public static readonly CONST = 39;
	public static readonly DEFAULT = 40;
	public static readonly DEPRECATED = 41;
	public static readonly ENUM = 42;
	public static readonly EXPLICIT = 43;
	public static readonly EXTEND = 44;
	public static readonly EXTERN = 45;
	public static readonly FLOAT16 = 46;
	public static readonly FLOAT32 = 47;
	public static readonly FLOAT64 = 48;
	public static readonly FUNCTION = 49;
	public static readonly IF = 50;
	public static readonly IMPLICIT = 51;
	public static readonly IMPORT = 52;
	public static readonly INDEX = 53;
	public static readonly INSTANTIATE = 54;
	public static readonly INT_FIELD = 55;
	public static readonly INT16 = 56;
	public static readonly INT32 = 57;
	public static readonly INT64 = 58;
	public static readonly INT8 = 59;
	public static readonly ISSET = 60;
	public static readonly LENGTHOF = 61;
	public static readonly NUMBITS = 62;
	public static readonly ON = 63;
	public static readonly OPTIONAL = 64;
	public static readonly PACKAGE = 65;
	public static readonly PACKED = 66;
	public static readonly PUBSUB = 67;
	public static readonly PUBLISH = 68;
	public static readonly REMOVED = 69;
	public static readonly RETURN = 70;
	public static readonly RULE = 71;
	public static readonly RULE_GROUP = 72;
	public static readonly SERVICE = 73;
	public static readonly SQL = 74;
	public static readonly SQL_DATABASE = 75;
	public static readonly SQL_TABLE = 76;
	public static readonly SQL_VIRTUAL = 77;
	public static readonly SQL_WITHOUT_ROWID = 78;
	public static readonly STRING = 79;
	public static readonly STRUCTURE = 80;
	public static readonly SUBSCRIBE = 81;
	public static readonly SUBTYPE = 82;
	public static readonly TOPIC = 83;
	public static readonly UINT16 = 84;
	public static readonly UINT32 = 85;
	public static readonly UINT64 = 86;
	public static readonly UINT8 = 87;
	public static readonly UNION = 88;
	public static readonly USING = 89;
	public static readonly VALUEOF = 90;
	public static readonly VARINT = 91;
	public static readonly VARINT16 = 92;
	public static readonly VARINT32 = 93;
	public static readonly VARINT64 = 94;
	public static readonly VARSIZE = 95;
	public static readonly VARUINT = 96;
	public static readonly VARUINT16 = 97;
	public static readonly VARUINT32 = 98;
	public static readonly VARUINT64 = 99;
	public static readonly COMPAT_VERSION = 100;
	public static readonly WS = 101;
	public static readonly DOC_COMMENT = 102;
	public static readonly MARKDOWN_COMMENT = 103;
	public static readonly BLOCK_COMMENT = 104;
	public static readonly LINE_COMMENT = 105;
	public static readonly BOOL_LITERAL = 106;
	public static readonly STRING_LITERAL = 107;
	public static readonly BINARY_LITERAL = 108;
	public static readonly OCTAL_LITERAL = 109;
	public static readonly HEXADECIMAL_LITERAL = 110;
	public static readonly DOUBLE_LITERAL = 111;
	public static readonly FLOAT_LITERAL = 112;
	public static readonly DECIMAL_LITERAL = 113;
	public static readonly ID = 114;
	public static readonly INVALID_STRING_LITERAL = 115;
	public static readonly INVALID_TOKEN = 116;
	public static readonly RSHIFT = 117;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_packageDeclaration = 0;
	public static readonly RULE_compatibilityVersionDirective = 1;
	public static readonly RULE_packageNameDefinition = 2;
	public static readonly RULE_importDeclaration = 3;
	public static readonly RULE_languageDirective = 4;
	public static readonly RULE_typeDeclaration = 5;
	public static readonly RULE_symbolDefinition = 6;
	public static readonly RULE_constDefinition = 7;
	public static readonly RULE_ruleGroupDefinition = 8;
	public static readonly RULE_ruleDefinition = 9;
	public static readonly RULE_subtypeDeclaration = 10;
	public static readonly RULE_structureDeclaration = 11;
	public static readonly RULE_structureFieldDefinition = 12;
	public static readonly RULE_fieldAlignment = 13;
	public static readonly RULE_fieldOffset = 14;
	public static readonly RULE_fieldTypeId = 15;
	public static readonly RULE_fieldArrayRange = 16;
	public static readonly RULE_fieldInitializer = 17;
	public static readonly RULE_fieldOptionalClause = 18;
	public static readonly RULE_fieldConstraint = 19;
	public static readonly RULE_choiceDeclaration = 20;
	public static readonly RULE_choiceCases = 21;
	public static readonly RULE_choiceCase = 22;
	public static readonly RULE_choiceDefault = 23;
	public static readonly RULE_choiceFieldDefinition = 24;
	public static readonly RULE_unionDeclaration = 25;
	public static readonly RULE_unionFieldDefinition = 26;
	public static readonly RULE_enumDeclaration = 27;
	public static readonly RULE_enumItem = 28;
	public static readonly RULE_bitmaskDeclaration = 29;
	public static readonly RULE_bitmaskValue = 30;
	public static readonly RULE_sqlTableDeclaration = 31;
	public static readonly RULE_sqlTableFieldDefinition = 32;
	public static readonly RULE_sqlConstraintDefinition = 33;
	public static readonly RULE_sqlConstraint = 34;
	public static readonly RULE_sqlWithoutRowId = 35;
	public static readonly RULE_sqlDatabaseDefinition = 36;
	public static readonly RULE_sqlDatabaseFieldDefinition = 37;
	public static readonly RULE_serviceDefinition = 38;
	public static readonly RULE_serviceMethodDefinition = 39;
	public static readonly RULE_pubsubDefinition = 40;
	public static readonly RULE_pubsubMessageDefinition = 41;
	public static readonly RULE_topicDefinition = 42;
	public static readonly RULE_functionDefinition = 43;
	public static readonly RULE_functionType = 44;
	public static readonly RULE_functionName = 45;
	public static readonly RULE_functionBody = 46;
	public static readonly RULE_typeParameters = 47;
	public static readonly RULE_parameterDefinition = 48;
	public static readonly RULE_templateParameters = 49;
	public static readonly RULE_templateArguments = 50;
	public static readonly RULE_templateArgument = 51;
	public static readonly RULE_instantiateDeclaration = 52;
	public static readonly RULE_expression = 53;
	public static readonly RULE_literal = 54;
	public static readonly RULE_id = 55;
	public static readonly RULE_typeReference = 56;
	public static readonly RULE_typeInstantiation = 57;
	public static readonly RULE_builtinType = 58;
	public static readonly RULE_qualifiedName = 59;
	public static readonly RULE_typeArguments = 60;
	public static readonly RULE_typeArgument = 61;
	public static readonly RULE_dynamicLengthArgument = 62;
	public static readonly RULE_intType = 63;
	public static readonly RULE_varintType = 64;
	public static readonly RULE_fixedBitFieldType = 65;
	public static readonly RULE_dynamicBitFieldType = 66;
	public static readonly RULE_boolType = 67;
	public static readonly RULE_stringType = 68;
	public static readonly RULE_floatType = 69;
	public static readonly RULE_externType = 70;
	public static readonly RULE_bytesType = 71;
	public static readonly literalNames: (string | null)[] = [ null, "'&'", 
                                                            "'='", "'!'", 
                                                            "':'", "','", 
                                                            "'/'", "'.'", 
                                                            "'=='", "'>='", 
                                                            "'>'", "'{'", 
                                                            "'['", "'<='", 
                                                            "'&&'", "'||'", 
                                                            "'('", "'<<'", 
                                                            "'<'", "'-'", 
                                                            "'%'", "'*'", 
                                                            "'!='", "'|'", 
                                                            "'+'", "'?'", 
                                                            "'}'", "']'", 
                                                            "')'", "';'", 
                                                            "'~'", "'^'", 
                                                            "'align'", "'bit'", 
                                                            "'bool'", "'bitmask'", 
                                                            "'bytes'", "'case'", 
                                                            "'choice'", 
                                                            "'const'", "'default'", 
                                                            "'@deprecated'", 
                                                            "'enum'", "'explicit'", 
                                                            "'extend'", 
                                                            "'extern'", 
                                                            "'float16'", 
                                                            "'float32'", 
                                                            "'float64'", 
                                                            "'function'", 
                                                            "'if'", "'implicit'", 
                                                            "'import'", 
                                                            "'@index'", 
                                                            "'instantiate'", 
                                                            "'int'", "'int16'", 
                                                            "'int32'", "'int64'", 
                                                            "'int8'", "'isset'", 
                                                            "'lengthof'", 
                                                            "'numbits'", 
                                                            "'on'", "'optional'", 
                                                            "'package'", 
                                                            "'packed'", 
                                                            "'pubsub'", 
                                                            "'publish'", 
                                                            "'@removed'", 
                                                            "'return'", 
                                                            "'rule'", "'rule_group'", 
                                                            "'service'", 
                                                            "'sql'", "'sql_database'", 
                                                            "'sql_table'", 
                                                            "'sql_virtual'", 
                                                            "'sql_without_rowid'", 
                                                            "'string'", 
                                                            "'struct'", 
                                                            "'subscribe'", 
                                                            "'subtype'", 
                                                            "'topic'", "'uint16'", 
                                                            "'uint32'", 
                                                            "'uint64'", 
                                                            "'uint8'", "'union'", 
                                                            "'using'", "'valueof'", 
                                                            "'varint'", 
                                                            "'varint16'", 
                                                            "'varint32'", 
                                                            "'varint64'", 
                                                            "'varsize'", 
                                                            "'varuint'", 
                                                            "'varuint16'", 
                                                            "'varuint32'", 
                                                            "'varuint64'", 
                                                            "'zserio_compatibility_version'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "AND", 
                                                             "ASSIGN", "BANG", 
                                                             "COLON", "COMMA", 
                                                             "DIVIDE", "DOT", 
                                                             "EQ", "GE", 
                                                             "GT", "LBRACE", 
                                                             "LBRACKET", 
                                                             "LE", "LOGICAL_AND", 
                                                             "LOGICAL_OR", 
                                                             "LPAREN", "LSHIFT", 
                                                             "LT", "MINUS", 
                                                             "MODULO", "MULTIPLY", 
                                                             "NE", "OR", 
                                                             "PLUS", "QUESTIONMARK", 
                                                             "RBRACE", "RBRACKET", 
                                                             "RPAREN", "SEMICOLON", 
                                                             "TILDE", "XOR", 
                                                             "ALIGN", "BIT_FIELD", 
                                                             "BOOL", "BITMASK", 
                                                             "BYTES", "CASE", 
                                                             "CHOICE", "CONST", 
                                                             "DEFAULT", 
                                                             "DEPRECATED", 
                                                             "ENUM", "EXPLICIT", 
                                                             "EXTEND", "EXTERN", 
                                                             "FLOAT16", 
                                                             "FLOAT32", 
                                                             "FLOAT64", 
                                                             "FUNCTION", 
                                                             "IF", "IMPLICIT", 
                                                             "IMPORT", "INDEX", 
                                                             "INSTANTIATE", 
                                                             "INT_FIELD", 
                                                             "INT16", "INT32", 
                                                             "INT64", "INT8", 
                                                             "ISSET", "LENGTHOF", 
                                                             "NUMBITS", 
                                                             "ON", "OPTIONAL", 
                                                             "PACKAGE", 
                                                             "PACKED", "PUBSUB", 
                                                             "PUBLISH", 
                                                             "REMOVED", 
                                                             "RETURN", "RULE", 
                                                             "RULE_GROUP", 
                                                             "SERVICE", 
                                                             "SQL", "SQL_DATABASE", 
                                                             "SQL_TABLE", 
                                                             "SQL_VIRTUAL", 
                                                             "SQL_WITHOUT_ROWID", 
                                                             "STRING", "STRUCTURE", 
                                                             "SUBSCRIBE", 
                                                             "SUBTYPE", 
                                                             "TOPIC", "UINT16", 
                                                             "UINT32", "UINT64", 
                                                             "UINT8", "UNION", 
                                                             "USING", "VALUEOF", 
                                                             "VARINT", "VARINT16", 
                                                             "VARINT32", 
                                                             "VARINT64", 
                                                             "VARSIZE", 
                                                             "VARUINT", 
                                                             "VARUINT16", 
                                                             "VARUINT32", 
                                                             "VARUINT64", 
                                                             "COMPAT_VERSION", 
                                                             "WS", "DOC_COMMENT", 
                                                             "MARKDOWN_COMMENT", 
                                                             "BLOCK_COMMENT", 
                                                             "LINE_COMMENT", 
                                                             "BOOL_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "BINARY_LITERAL", 
                                                             "OCTAL_LITERAL", 
                                                             "HEXADECIMAL_LITERAL", 
                                                             "DOUBLE_LITERAL", 
                                                             "FLOAT_LITERAL", 
                                                             "DECIMAL_LITERAL", 
                                                             "ID", "INVALID_STRING_LITERAL", 
                                                             "INVALID_TOKEN", 
                                                             "RSHIFT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"packageDeclaration", "compatibilityVersionDirective", "packageNameDefinition", 
		"importDeclaration", "languageDirective", "typeDeclaration", "symbolDefinition", 
		"constDefinition", "ruleGroupDefinition", "ruleDefinition", "subtypeDeclaration", 
		"structureDeclaration", "structureFieldDefinition", "fieldAlignment", 
		"fieldOffset", "fieldTypeId", "fieldArrayRange", "fieldInitializer", "fieldOptionalClause", 
		"fieldConstraint", "choiceDeclaration", "choiceCases", "choiceCase", "choiceDefault", 
		"choiceFieldDefinition", "unionDeclaration", "unionFieldDefinition", "enumDeclaration", 
		"enumItem", "bitmaskDeclaration", "bitmaskValue", "sqlTableDeclaration", 
		"sqlTableFieldDefinition", "sqlConstraintDefinition", "sqlConstraint", 
		"sqlWithoutRowId", "sqlDatabaseDefinition", "sqlDatabaseFieldDefinition", 
		"serviceDefinition", "serviceMethodDefinition", "pubsubDefinition", "pubsubMessageDefinition", 
		"topicDefinition", "functionDefinition", "functionType", "functionName", 
		"functionBody", "typeParameters", "parameterDefinition", "templateParameters", 
		"templateArguments", "templateArgument", "instantiateDeclaration", "expression", 
		"literal", "id", "typeReference", "typeInstantiation", "builtinType", 
		"qualifiedName", "typeArguments", "typeArgument", "dynamicLengthArgument", 
		"intType", "varintType", "fixedBitFieldType", "dynamicBitFieldType", "boolType", 
		"stringType", "floatType", "externType", "bytesType",
	];
	public get grammarFileName(): string { return "ZserioParser.g4"; }
	public get literalNames(): (string | null)[] { return ZserioParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ZserioParser.symbolicNames; }
	public get ruleNames(): string[] { return ZserioParser.ruleNames; }
	public get serializedATN(): number[] { return ZserioParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ZserioParser._ATN, ZserioParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let localctx: PackageDeclarationContext = new PackageDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ZserioParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===100) {
				{
				this.state = 144;
				this.compatibilityVersionDirective();
				}
			}

			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===65) {
				{
				this.state = 147;
				this.packageNameDefinition();
				}
			}

			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===52) {
				{
				{
				this.state = 150;
				this.importDeclaration();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 524441) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2138977) !== 0)) {
				{
				{
				this.state = 156;
				this.languageDirective();
				}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 162;
			this.match(ZserioParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compatibilityVersionDirective(): CompatibilityVersionDirectiveContext {
		let localctx: CompatibilityVersionDirectiveContext = new CompatibilityVersionDirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ZserioParser.RULE_compatibilityVersionDirective);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this.match(ZserioParser.COMPAT_VERSION);
			this.state = 165;
			this.match(ZserioParser.LPAREN);
			this.state = 166;
			this.match(ZserioParser.STRING_LITERAL);
			this.state = 167;
			this.match(ZserioParser.RPAREN);
			this.state = 168;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageNameDefinition(): PackageNameDefinitionContext {
		let localctx: PackageNameDefinitionContext = new PackageNameDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ZserioParser.RULE_packageNameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.match(ZserioParser.PACKAGE);
			this.state = 171;
			this.id();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 172;
				this.match(ZserioParser.DOT);
				this.state = 173;
				this.id();
				}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 179;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, ZserioParser.RULE_importDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 181;
			this.match(ZserioParser.IMPORT);
			this.state = 182;
			this.id();
			this.state = 183;
			this.match(ZserioParser.DOT);
			this.state = 189;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 184;
					this.id();
					this.state = 185;
					this.match(ZserioParser.DOT);
					}
					}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 114:
				{
				this.state = 192;
				this.id();
				}
				break;
			case 21:
				{
				this.state = 193;
				this.match(ZserioParser.MULTIPLY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 196;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public languageDirective(): LanguageDirectiveContext {
		let localctx: LanguageDirectiveContext = new LanguageDirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ZserioParser.RULE_languageDirective);
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 72:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 198;
				this.symbolDefinition();
				}
				break;
			case 35:
			case 38:
			case 42:
			case 54:
			case 67:
			case 73:
			case 75:
			case 76:
			case 80:
			case 82:
			case 88:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 199;
				this.typeDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let localctx: TypeDeclarationContext = new TypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ZserioParser.RULE_typeDeclaration);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 82:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 202;
				this.subtypeDeclaration();
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 203;
				this.structureDeclaration();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 204;
				this.choiceDeclaration();
				}
				break;
			case 88:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 205;
				this.unionDeclaration();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 206;
				this.enumDeclaration();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 207;
				this.bitmaskDeclaration();
				}
				break;
			case 76:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 208;
				this.sqlTableDeclaration();
				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 209;
				this.sqlDatabaseDefinition();
				}
				break;
			case 73:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 210;
				this.serviceDefinition();
				}
				break;
			case 67:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 211;
				this.pubsubDefinition();
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 212;
				this.instantiateDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbolDefinition(): SymbolDefinitionContext {
		let localctx: SymbolDefinitionContext = new SymbolDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ZserioParser.RULE_symbolDefinition);
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 215;
				this.constDefinition();
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 216;
				this.ruleGroupDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constDefinition(): ConstDefinitionContext {
		let localctx: ConstDefinitionContext = new ConstDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, ZserioParser.RULE_constDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this.match(ZserioParser.CONST);
			this.state = 220;
			this.typeInstantiation();
			this.state = 221;
			this.id();
			this.state = 222;
			this.match(ZserioParser.ASSIGN);
			this.state = 223;
			this.expression(0);
			this.state = 224;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ruleGroupDefinition(): RuleGroupDefinitionContext {
		let localctx: RuleGroupDefinitionContext = new RuleGroupDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, ZserioParser.RULE_ruleGroupDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			this.match(ZserioParser.RULE_GROUP);
			this.state = 227;
			this.id();
			this.state = 228;
			this.match(ZserioParser.LBRACE);
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 229;
				this.ruleDefinition();
				}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 235;
			this.match(ZserioParser.RBRACE);
			this.state = 236;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ruleDefinition(): RuleDefinitionContext {
		let localctx: RuleDefinitionContext = new RuleDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, ZserioParser.RULE_ruleDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 238;
			this.match(ZserioParser.RULE);
			this.state = 239;
			this.expression(0);
			this.state = 240;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subtypeDeclaration(): SubtypeDeclarationContext {
		let localctx: SubtypeDeclarationContext = new SubtypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, ZserioParser.RULE_subtypeDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.match(ZserioParser.SUBTYPE);
			this.state = 243;
			this.typeReference();
			this.state = 244;
			this.id();
			this.state = 245;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structureDeclaration(): StructureDeclarationContext {
		let localctx: StructureDeclarationContext = new StructureDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, ZserioParser.RULE_structureDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 247;
			this.match(ZserioParser.STRUCTURE);
			this.state = 248;
			this.id();
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 249;
				this.templateParameters();
				}
			}

			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 252;
				this.typeParameters();
				}
			}

			this.state = 255;
			this.match(ZserioParser.LBRACE);
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1091108872) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2141843479) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4243619845) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 523279) !== 0)) {
				{
				{
				this.state = 256;
				this.structureFieldDefinition();
				}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 262;
				this.functionDefinition();
				}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 268;
			this.match(ZserioParser.RBRACE);
			this.state = 269;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structureFieldDefinition(): StructureFieldDefinitionContext {
		let localctx: StructureFieldDefinitionContext = new StructureFieldDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, ZserioParser.RULE_structureFieldDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 271;
				this.fieldAlignment();
				}
			}

			this.state = 275;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 274;
				this.fieldOffset();
				}
				break;
			}
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===44) {
				{
				this.state = 277;
				this.match(ZserioParser.EXTEND);
				}
			}

			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 280;
				this.match(ZserioParser.OPTIONAL);
				}
			}

			this.state = 283;
			this.fieldTypeId();
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 284;
				this.fieldInitializer();
				}
			}

			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===50) {
				{
				this.state = 287;
				this.fieldOptionalClause();
				}
			}

			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 290;
				this.fieldConstraint();
				}
			}

			this.state = 293;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldAlignment(): FieldAlignmentContext {
		let localctx: FieldAlignmentContext = new FieldAlignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, ZserioParser.RULE_fieldAlignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 295;
			this.match(ZserioParser.ALIGN);
			this.state = 296;
			this.match(ZserioParser.LPAREN);
			this.state = 297;
			this.expression(0);
			this.state = 298;
			this.match(ZserioParser.RPAREN);
			this.state = 299;
			this.match(ZserioParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldOffset(): FieldOffsetContext {
		let localctx: FieldOffsetContext = new FieldOffsetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, ZserioParser.RULE_fieldOffset);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			this.expression(0);
			this.state = 302;
			this.match(ZserioParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldTypeId(): FieldTypeIdContext {
		let localctx: FieldTypeIdContext = new FieldTypeIdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, ZserioParser.RULE_fieldTypeId);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===66) {
				{
				this.state = 304;
				this.match(ZserioParser.PACKED);
				}
			}

			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 307;
				this.match(ZserioParser.IMPLICIT);
				}
			}

			this.state = 310;
			this.typeInstantiation();
			this.state = 311;
			this.id();
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 312;
				this.fieldArrayRange();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldArrayRange(): FieldArrayRangeContext {
		let localctx: FieldArrayRangeContext = new FieldArrayRangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, ZserioParser.RULE_fieldArrayRange);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			this.match(ZserioParser.LBRACKET);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1091108872) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 897) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 33488897) !== 0)) {
				{
				this.state = 316;
				this.expression(0);
				}
			}

			this.state = 319;
			this.match(ZserioParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldInitializer(): FieldInitializerContext {
		let localctx: FieldInitializerContext = new FieldInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, ZserioParser.RULE_fieldInitializer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			this.match(ZserioParser.ASSIGN);
			this.state = 322;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldOptionalClause(): FieldOptionalClauseContext {
		let localctx: FieldOptionalClauseContext = new FieldOptionalClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, ZserioParser.RULE_fieldOptionalClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.match(ZserioParser.IF);
			this.state = 325;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldConstraint(): FieldConstraintContext {
		let localctx: FieldConstraintContext = new FieldConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, ZserioParser.RULE_fieldConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 327;
			this.match(ZserioParser.COLON);
			this.state = 328;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceDeclaration(): ChoiceDeclarationContext {
		let localctx: ChoiceDeclarationContext = new ChoiceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, ZserioParser.RULE_choiceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.match(ZserioParser.CHOICE);
			this.state = 331;
			this.id();
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 332;
				this.templateParameters();
				}
			}

			this.state = 335;
			this.typeParameters();
			this.state = 336;
			this.match(ZserioParser.ON);
			this.state = 337;
			this.expression(0);
			this.state = 338;
			this.match(ZserioParser.LBRACE);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===37) {
				{
				{
				this.state = 339;
				this.choiceCases();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 345;
				this.choiceDefault();
				}
			}

			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 348;
				this.functionDefinition();
				}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 354;
			this.match(ZserioParser.RBRACE);
			this.state = 355;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceCases(): ChoiceCasesContext {
		let localctx: ChoiceCasesContext = new ChoiceCasesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, ZserioParser.RULE_choiceCases);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 357;
				this.choiceCase();
				}
				}
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===37);
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130347019) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4265353217) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 65539) !== 0)) {
				{
				this.state = 362;
				this.choiceFieldDefinition();
				}
			}

			this.state = 365;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceCase(): ChoiceCaseContext {
		let localctx: ChoiceCaseContext = new ChoiceCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, ZserioParser.RULE_choiceCase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 367;
			this.match(ZserioParser.CASE);
			this.state = 368;
			this.expression(0);
			this.state = 369;
			this.match(ZserioParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceDefault(): ChoiceDefaultContext {
		let localctx: ChoiceDefaultContext = new ChoiceDefaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, ZserioParser.RULE_choiceDefault);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 371;
			this.match(ZserioParser.DEFAULT);
			this.state = 372;
			this.match(ZserioParser.COLON);
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130347019) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4265353217) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 65539) !== 0)) {
				{
				this.state = 373;
				this.choiceFieldDefinition();
				}
			}

			this.state = 376;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceFieldDefinition(): ChoiceFieldDefinitionContext {
		let localctx: ChoiceFieldDefinitionContext = new ChoiceFieldDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, ZserioParser.RULE_choiceFieldDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 378;
			this.fieldTypeId();
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 379;
				this.fieldConstraint();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unionDeclaration(): UnionDeclarationContext {
		let localctx: UnionDeclarationContext = new UnionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, ZserioParser.RULE_unionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			this.match(ZserioParser.UNION);
			this.state = 383;
			this.id();
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 384;
				this.templateParameters();
				}
			}

			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 387;
				this.typeParameters();
				}
			}

			this.state = 390;
			this.match(ZserioParser.LBRACE);
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130347019) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4265353217) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 65539) !== 0)) {
				{
				{
				this.state = 391;
				this.unionFieldDefinition();
				}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 397;
				this.functionDefinition();
				}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 403;
			this.match(ZserioParser.RBRACE);
			this.state = 404;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unionFieldDefinition(): UnionFieldDefinitionContext {
		let localctx: UnionFieldDefinitionContext = new UnionFieldDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, ZserioParser.RULE_unionFieldDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 406;
			this.choiceFieldDefinition();
			this.state = 407;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let localctx: EnumDeclarationContext = new EnumDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, ZserioParser.RULE_enumDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 409;
			this.match(ZserioParser.ENUM);
			this.state = 410;
			this.typeInstantiation();
			this.state = 411;
			this.id();
			this.state = 412;
			this.match(ZserioParser.LBRACE);
			this.state = 413;
			this.enumItem();
			this.state = 418;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 414;
					this.match(ZserioParser.COMMA);
					this.state = 415;
					this.enumItem();
					}
					}
				}
				this.state = 420;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 421;
				this.match(ZserioParser.COMMA);
				}
			}

			this.state = 424;
			this.match(ZserioParser.RBRACE);
			this.state = 425;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumItem(): EnumItemContext {
		let localctx: EnumItemContext = new EnumItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, ZserioParser.RULE_enumItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41 || _la===69) {
				{
				this.state = 427;
				_la = this._input.LA(1);
				if(!(_la===41 || _la===69)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 430;
			this.id();
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 431;
				this.match(ZserioParser.ASSIGN);
				this.state = 432;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bitmaskDeclaration(): BitmaskDeclarationContext {
		let localctx: BitmaskDeclarationContext = new BitmaskDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, ZserioParser.RULE_bitmaskDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 435;
			this.match(ZserioParser.BITMASK);
			this.state = 436;
			this.typeInstantiation();
			this.state = 437;
			this.id();
			this.state = 438;
			this.match(ZserioParser.LBRACE);
			this.state = 439;
			this.bitmaskValue();
			this.state = 444;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 440;
					this.match(ZserioParser.COMMA);
					this.state = 441;
					this.bitmaskValue();
					}
					}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 447;
				this.match(ZserioParser.COMMA);
				}
			}

			this.state = 450;
			this.match(ZserioParser.RBRACE);
			this.state = 451;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bitmaskValue(): BitmaskValueContext {
		let localctx: BitmaskValueContext = new BitmaskValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, ZserioParser.RULE_bitmaskValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			this.id();
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 454;
				this.match(ZserioParser.ASSIGN);
				this.state = 455;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlTableDeclaration(): SqlTableDeclarationContext {
		let localctx: SqlTableDeclarationContext = new SqlTableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, ZserioParser.RULE_sqlTableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 458;
			this.match(ZserioParser.SQL_TABLE);
			this.state = 459;
			this.id();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 460;
				this.templateParameters();
				}
			}

			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 463;
				this.match(ZserioParser.USING);
				this.state = 464;
				this.id();
				}
			}

			this.state = 467;
			this.match(ZserioParser.LBRACE);
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130084875) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 8374149) !== 0) || _la===114) {
				{
				{
				this.state = 468;
				this.sqlTableFieldDefinition();
				}
				}
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74) {
				{
				this.state = 474;
				this.sqlConstraintDefinition();
				}
			}

			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===78) {
				{
				this.state = 477;
				this.sqlWithoutRowId();
				}
			}

			this.state = 480;
			this.match(ZserioParser.RBRACE);
			this.state = 481;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlTableFieldDefinition(): SqlTableFieldDefinitionContext {
		let localctx: SqlTableFieldDefinitionContext = new SqlTableFieldDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, ZserioParser.RULE_sqlTableFieldDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===77) {
				{
				this.state = 483;
				this.match(ZserioParser.SQL_VIRTUAL);
				}
			}

			this.state = 486;
			this.typeInstantiation();
			this.state = 487;
			this.id();
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74) {
				{
				this.state = 488;
				this.sqlConstraint();
				}
			}

			this.state = 491;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlConstraintDefinition(): SqlConstraintDefinitionContext {
		let localctx: SqlConstraintDefinitionContext = new SqlConstraintDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, ZserioParser.RULE_sqlConstraintDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 493;
			this.sqlConstraint();
			this.state = 494;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlConstraint(): SqlConstraintContext {
		let localctx: SqlConstraintContext = new SqlConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, ZserioParser.RULE_sqlConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 496;
			this.match(ZserioParser.SQL);
			this.state = 497;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlWithoutRowId(): SqlWithoutRowIdContext {
		let localctx: SqlWithoutRowIdContext = new SqlWithoutRowIdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, ZserioParser.RULE_sqlWithoutRowId);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 499;
			this.match(ZserioParser.SQL_WITHOUT_ROWID);
			this.state = 500;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlDatabaseDefinition(): SqlDatabaseDefinitionContext {
		let localctx: SqlDatabaseDefinitionContext = new SqlDatabaseDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, ZserioParser.RULE_sqlDatabaseDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 502;
			this.match(ZserioParser.SQL_DATABASE);
			this.state = 503;
			this.id();
			this.state = 504;
			this.match(ZserioParser.LBRACE);
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 505;
				this.sqlDatabaseFieldDefinition();
				}
				}
				this.state = 508;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130084875) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2093537) !== 0) || _la===114);
			this.state = 510;
			this.match(ZserioParser.RBRACE);
			this.state = 511;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlDatabaseFieldDefinition(): SqlDatabaseFieldDefinitionContext {
		let localctx: SqlDatabaseFieldDefinitionContext = new SqlDatabaseFieldDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, ZserioParser.RULE_sqlDatabaseFieldDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 513;
			this.typeInstantiation();
			this.state = 514;
			this.id();
			this.state = 515;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public serviceDefinition(): ServiceDefinitionContext {
		let localctx: ServiceDefinitionContext = new ServiceDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, ZserioParser.RULE_serviceDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 517;
			this.match(ZserioParser.SERVICE);
			this.state = 518;
			this.id();
			this.state = 519;
			this.match(ZserioParser.LBRACE);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130084875) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2093537) !== 0) || _la===114) {
				{
				{
				this.state = 520;
				this.serviceMethodDefinition();
				}
				}
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 526;
			this.match(ZserioParser.RBRACE);
			this.state = 527;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public serviceMethodDefinition(): ServiceMethodDefinitionContext {
		let localctx: ServiceMethodDefinitionContext = new ServiceMethodDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, ZserioParser.RULE_serviceMethodDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 529;
			this.typeReference();
			this.state = 530;
			this.id();
			this.state = 531;
			this.match(ZserioParser.LPAREN);
			this.state = 532;
			this.typeReference();
			this.state = 533;
			this.match(ZserioParser.RPAREN);
			this.state = 534;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pubsubDefinition(): PubsubDefinitionContext {
		let localctx: PubsubDefinitionContext = new PubsubDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, ZserioParser.RULE_pubsubDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 536;
			this.match(ZserioParser.PUBSUB);
			this.state = 537;
			this.id();
			this.state = 538;
			this.match(ZserioParser.LBRACE);
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 40961) !== 0)) {
				{
				{
				this.state = 539;
				this.pubsubMessageDefinition();
				}
				}
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 545;
			this.match(ZserioParser.RBRACE);
			this.state = 546;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pubsubMessageDefinition(): PubsubMessageDefinitionContext {
		let localctx: PubsubMessageDefinitionContext = new PubsubMessageDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, ZserioParser.RULE_pubsubMessageDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 548;
			this.topicDefinition();
			this.state = 549;
			this.typeReference();
			this.state = 550;
			this.id();
			this.state = 551;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public topicDefinition(): TopicDefinitionContext {
		let localctx: TopicDefinitionContext = new TopicDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, ZserioParser.RULE_topicDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68 || _la===81) {
				{
				this.state = 553;
				_la = this._input.LA(1);
				if(!(_la===68 || _la===81)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 556;
			this.match(ZserioParser.TOPIC);
			this.state = 557;
			this.match(ZserioParser.LPAREN);
			this.state = 558;
			this.expression(0);
			this.state = 559;
			this.match(ZserioParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, ZserioParser.RULE_functionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 561;
			this.match(ZserioParser.FUNCTION);
			this.state = 562;
			this.functionType();
			this.state = 563;
			this.functionName();
			this.state = 564;
			this.match(ZserioParser.LPAREN);
			this.state = 565;
			this.match(ZserioParser.RPAREN);
			this.state = 566;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let localctx: FunctionTypeContext = new FunctionTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, ZserioParser.RULE_functionType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 568;
			this.typeReference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, ZserioParser.RULE_functionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 570;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let localctx: FunctionBodyContext = new FunctionBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, ZserioParser.RULE_functionBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 572;
			this.match(ZserioParser.LBRACE);
			this.state = 573;
			this.match(ZserioParser.RETURN);
			this.state = 574;
			this.expression(0);
			this.state = 575;
			this.match(ZserioParser.SEMICOLON);
			this.state = 576;
			this.match(ZserioParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let localctx: TypeParametersContext = new TypeParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, ZserioParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 578;
			this.match(ZserioParser.LPAREN);
			this.state = 579;
			this.parameterDefinition();
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 580;
				this.match(ZserioParser.COMMA);
				this.state = 581;
				this.parameterDefinition();
				}
				}
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 587;
			this.match(ZserioParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterDefinition(): ParameterDefinitionContext {
		let localctx: ParameterDefinitionContext = new ParameterDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, ZserioParser.RULE_parameterDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 589;
			this.typeReference();
			this.state = 590;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateParameters(): TemplateParametersContext {
		let localctx: TemplateParametersContext = new TemplateParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, ZserioParser.RULE_templateParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 592;
			this.match(ZserioParser.LT);
			this.state = 593;
			this.id();
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 594;
				this.match(ZserioParser.COMMA);
				this.state = 595;
				this.id();
				}
				}
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 601;
			this.match(ZserioParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateArguments(): TemplateArgumentsContext {
		let localctx: TemplateArgumentsContext = new TemplateArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, ZserioParser.RULE_templateArguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 603;
			this.match(ZserioParser.LT);
			this.state = 604;
			this.templateArgument();
			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 605;
				this.match(ZserioParser.COMMA);
				this.state = 606;
				this.templateArgument();
				}
				}
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 612;
			this.match(ZserioParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateArgument(): TemplateArgumentContext {
		let localctx: TemplateArgumentContext = new TemplateArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, ZserioParser.RULE_templateArgument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 614;
			this.typeReference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instantiateDeclaration(): InstantiateDeclarationContext {
		let localctx: InstantiateDeclarationContext = new InstantiateDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, ZserioParser.RULE_instantiateDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 616;
			this.match(ZserioParser.INSTANTIATE);
			this.state = 617;
			this.typeReference();
			this.state = 618;
			this.id();
			this.state = 619;
			this.match(ZserioParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 106;
		this.enterRecursionRule(localctx, 106, ZserioParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 653;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 622;
				(localctx as ParenthesizedExpressionContext)._operator = this.match(ZserioParser.LPAREN);
				this.state = 623;
				this.expression(0);
				this.state = 624;
				this.match(ZserioParser.RPAREN);
				}
				break;
			case 60:
				{
				localctx = new IsSetExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 626;
				(localctx as IsSetExpressionContext)._operator = this.match(ZserioParser.ISSET);
				this.state = 627;
				this.match(ZserioParser.LPAREN);
				this.state = 628;
				this.expression(0);
				this.state = 629;
				this.match(ZserioParser.COMMA);
				this.state = 630;
				this.expression(0);
				this.state = 631;
				this.match(ZserioParser.RPAREN);
				}
				break;
			case 61:
				{
				localctx = new LengthofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 633;
				(localctx as LengthofExpressionContext)._operator = this.match(ZserioParser.LENGTHOF);
				this.state = 634;
				this.match(ZserioParser.LPAREN);
				this.state = 635;
				this.expression(0);
				this.state = 636;
				this.match(ZserioParser.RPAREN);
				}
				break;
			case 90:
				{
				localctx = new ValueofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 638;
				(localctx as ValueofExpressionContext)._operator = this.match(ZserioParser.VALUEOF);
				this.state = 639;
				this.match(ZserioParser.LPAREN);
				this.state = 640;
				this.expression(0);
				this.state = 641;
				this.match(ZserioParser.RPAREN);
				}
				break;
			case 62:
				{
				localctx = new NumbitsExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 643;
				(localctx as NumbitsExpressionContext)._operator = this.match(ZserioParser.NUMBITS);
				this.state = 644;
				this.match(ZserioParser.LPAREN);
				this.state = 645;
				this.expression(0);
				this.state = 646;
				this.match(ZserioParser.RPAREN);
				}
				break;
			case 3:
			case 19:
			case 24:
			case 30:
				{
				localctx = new UnaryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 648;
				(localctx as UnaryExpressionContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1091043336) !== 0))) {
				    (localctx as UnaryExpressionContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 649;
				this.expression(15);
				}
				break;
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
				{
				localctx = new LiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 650;
				this.literal();
				}
				break;
			case 53:
				{
				localctx = new IndexExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 651;
				this.match(ZserioParser.INDEX);
				}
				break;
			case 114:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 652;
				this.id();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 708;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 706;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicativeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 655;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 656;
						(localctx as MultiplicativeExpressionContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3145792) !== 0))) {
						    (localctx as MultiplicativeExpressionContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 657;
						this.expression(15);
						}
						break;
					case 2:
						{
						localctx = new AdditiveExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 658;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 659;
						(localctx as AdditiveExpressionContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===19 || _la===24)) {
						    (localctx as AdditiveExpressionContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 660;
						this.expression(14);
						}
						break;
					case 3:
						{
						localctx = new ShiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 661;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 665;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 17:
							{
							this.state = 662;
							(localctx as ShiftExpressionContext)._operator = this.match(ZserioParser.LSHIFT);
							}
							break;
						case 10:
							{
							this.state = 663;
							(localctx as ShiftExpressionContext)._operator = this.match(ZserioParser.GT);
							this.state = 664;
							this.match(ZserioParser.GT);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 667;
						this.expression(13);
						}
						break;
					case 4:
						{
						localctx = new RelationalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 668;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 669;
						(localctx as RelationalExpressionContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 271872) !== 0))) {
						    (localctx as RelationalExpressionContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 670;
						this.expression(12);
						}
						break;
					case 5:
						{
						localctx = new EqualityExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 671;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 672;
						(localctx as EqualityExpressionContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===8 || _la===22)) {
						    (localctx as EqualityExpressionContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 673;
						this.expression(11);
						}
						break;
					case 6:
						{
						localctx = new BitwiseAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 674;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 675;
						(localctx as BitwiseAndExpressionContext)._operator = this.match(ZserioParser.AND);
						this.state = 676;
						this.expression(10);
						}
						break;
					case 7:
						{
						localctx = new BitwiseXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 677;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 678;
						(localctx as BitwiseXorExpressionContext)._operator = this.match(ZserioParser.XOR);
						this.state = 679;
						this.expression(9);
						}
						break;
					case 8:
						{
						localctx = new BitwiseOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 680;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 681;
						(localctx as BitwiseOrExpressionContext)._operator = this.match(ZserioParser.OR);
						this.state = 682;
						this.expression(8);
						}
						break;
					case 9:
						{
						localctx = new LogicalAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 683;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 684;
						(localctx as LogicalAndExpressionContext)._operator = this.match(ZserioParser.LOGICAL_AND);
						this.state = 685;
						this.expression(7);
						}
						break;
					case 10:
						{
						localctx = new LogicalOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 686;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 687;
						(localctx as LogicalOrExpressionContext)._operator = this.match(ZserioParser.LOGICAL_OR);
						this.state = 688;
						this.expression(6);
						}
						break;
					case 11:
						{
						localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 689;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 690;
						(localctx as TernaryExpressionContext)._operator = this.match(ZserioParser.QUESTIONMARK);
						this.state = 691;
						this.expression(0);
						this.state = 692;
						this.match(ZserioParser.COLON);
						this.state = 693;
						this.expression(4);
						}
						break;
					case 12:
						{
						localctx = new FunctionCallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 695;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 696;
						this.match(ZserioParser.LPAREN);
						this.state = 697;
						(localctx as FunctionCallExpressionContext)._operator = this.match(ZserioParser.RPAREN);
						}
						break;
					case 13:
						{
						localctx = new ArrayExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 698;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 699;
						(localctx as ArrayExpressionContext)._operator = this.match(ZserioParser.LBRACKET);
						this.state = 700;
						this.expression(0);
						this.state = 701;
						this.match(ZserioParser.RBRACKET);
						}
						break;
					case 14:
						{
						localctx = new DotExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ZserioParser.RULE_expression);
						this.state = 703;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 704;
						(localctx as DotExpressionContext)._operator = this.match(ZserioParser.DOT);
						this.state = 705;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 710;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, ZserioParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 711;
			_la = this._input.LA(1);
			if(!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 255) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let localctx: IdContext = new IdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, ZserioParser.RULE_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 713;
			this.match(ZserioParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeReference(): TypeReferenceContext {
		let localctx: TypeReferenceContext = new TypeReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, ZserioParser.RULE_typeReference);
		try {
			this.state = 720;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
			case 34:
			case 36:
			case 45:
			case 46:
			case 47:
			case 48:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 79:
			case 84:
			case 85:
			case 86:
			case 87:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 715;
				this.builtinType();
				}
				break;
			case 114:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 716;
				this.qualifiedName();
				this.state = 718;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 717;
					this.templateArguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeInstantiation(): TypeInstantiationContext {
		let localctx: TypeInstantiationContext = new TypeInstantiationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, ZserioParser.RULE_typeInstantiation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 722;
			this.typeReference();
			this.state = 725;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				{
				this.state = 723;
				this.typeArguments();
				}
				break;
			case 18:
				{
				this.state = 724;
				this.dynamicLengthArgument();
				}
				break;
			case 114:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public builtinType(): BuiltinTypeContext {
		let localctx: BuiltinTypeContext = new BuiltinTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, ZserioParser.RULE_builtinType);
		try {
			this.state = 736;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 727;
				this.intType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 728;
				this.varintType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 729;
				this.fixedBitFieldType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 730;
				this.dynamicBitFieldType();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 731;
				this.boolType();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 732;
				this.stringType();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 733;
				this.floatType();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 734;
				this.externType();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 735;
				this.bytesType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, ZserioParser.RULE_qualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 738;
			this.id();
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 739;
				this.match(ZserioParser.DOT);
				this.state = 740;
				this.id();
				}
				}
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let localctx: TypeArgumentsContext = new TypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, ZserioParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 746;
			this.match(ZserioParser.LPAREN);
			this.state = 747;
			this.typeArgument();
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 748;
				this.match(ZserioParser.COMMA);
				this.state = 749;
				this.typeArgument();
				}
				}
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 755;
			this.match(ZserioParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let localctx: TypeArgumentContext = new TypeArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, ZserioParser.RULE_typeArgument);
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 757;
				this.match(ZserioParser.EXPLICIT);
				this.state = 758;
				this.id();
				}
				break;
			case 3:
			case 16:
			case 19:
			case 24:
			case 30:
			case 53:
			case 60:
			case 61:
			case 62:
			case 90:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 759;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dynamicLengthArgument(): DynamicLengthArgumentContext {
		let localctx: DynamicLengthArgumentContext = new DynamicLengthArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, ZserioParser.RULE_dynamicLengthArgument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 762;
			this.match(ZserioParser.LT);
			this.state = 763;
			this.expression(0);
			this.state = 764;
			this.match(ZserioParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intType(): IntTypeContext {
		let localctx: IntTypeContext = new IntTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, ZserioParser.RULE_intType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 766;
			_la = this._input.LA(1);
			if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 4026531855) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varintType(): VarintTypeContext {
		let localctx: VarintTypeContext = new VarintTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, ZserioParser.RULE_varintType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 768;
			_la = this._input.LA(1);
			if(!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 511) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fixedBitFieldType(): FixedBitFieldTypeContext {
		let localctx: FixedBitFieldTypeContext = new FixedBitFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, ZserioParser.RULE_fixedBitFieldType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 770;
			_la = this._input.LA(1);
			if(!(_la===33 || _la===55)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 771;
			this.match(ZserioParser.COLON);
			this.state = 772;
			this.match(ZserioParser.DECIMAL_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dynamicBitFieldType(): DynamicBitFieldTypeContext {
		let localctx: DynamicBitFieldTypeContext = new DynamicBitFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, ZserioParser.RULE_dynamicBitFieldType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 774;
			_la = this._input.LA(1);
			if(!(_la===33 || _la===55)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolType(): BoolTypeContext {
		let localctx: BoolTypeContext = new BoolTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, ZserioParser.RULE_boolType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 776;
			this.match(ZserioParser.BOOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringType(): StringTypeContext {
		let localctx: StringTypeContext = new StringTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, ZserioParser.RULE_stringType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 778;
			this.match(ZserioParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public floatType(): FloatTypeContext {
		let localctx: FloatTypeContext = new FloatTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, ZserioParser.RULE_floatType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 780;
			_la = this._input.LA(1);
			if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public externType(): ExternTypeContext {
		let localctx: ExternTypeContext = new ExternTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, ZserioParser.RULE_externType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 782;
			this.match(ZserioParser.EXTERN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bytesType(): BytesTypeContext {
		let localctx: BytesTypeContext = new BytesTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, ZserioParser.RULE_bytesType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 784;
			this.match(ZserioParser.BYTES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 53:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 7);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		case 10:
			return this.precpred(this._ctx, 4);
		case 11:
			return this.precpred(this._ctx, 22);
		case 12:
			return this.precpred(this._ctx, 21);
		case 13:
			return this.precpred(this._ctx, 20);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,117,787,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,1,0,3,0,146,8,0,1,0,3,0,149,8,0,
	1,0,5,0,152,8,0,10,0,12,0,155,9,0,1,0,5,0,158,8,0,10,0,12,0,161,9,0,1,0,
	1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,175,8,2,10,2,12,2,178,9,
	2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,188,8,3,10,3,12,3,191,9,3,1,3,1,3,
	3,3,195,8,3,1,3,1,3,1,4,1,4,3,4,201,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,5,1,5,3,5,214,8,5,1,6,1,6,3,6,218,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,8,1,8,1,8,1,8,5,8,231,8,8,10,8,12,8,234,9,8,1,8,1,8,1,8,1,9,1,9,1,9,1,
	9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,251,8,11,1,11,3,11,254,8,
	11,1,11,1,11,5,11,258,8,11,10,11,12,11,261,9,11,1,11,5,11,264,8,11,10,11,
	12,11,267,9,11,1,11,1,11,1,11,1,12,3,12,273,8,12,1,12,3,12,276,8,12,1,12,
	3,12,279,8,12,1,12,3,12,282,8,12,1,12,1,12,3,12,286,8,12,1,12,3,12,289,
	8,12,1,12,3,12,292,8,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,
	14,1,14,1,15,3,15,306,8,15,1,15,3,15,309,8,15,1,15,1,15,1,15,3,15,314,8,
	15,1,16,1,16,3,16,318,8,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,
	1,19,1,19,1,20,1,20,1,20,3,20,334,8,20,1,20,1,20,1,20,1,20,1,20,5,20,341,
	8,20,10,20,12,20,344,9,20,1,20,3,20,347,8,20,1,20,5,20,350,8,20,10,20,12,
	20,353,9,20,1,20,1,20,1,20,1,21,4,21,359,8,21,11,21,12,21,360,1,21,3,21,
	364,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,3,23,375,8,23,1,23,
	1,23,1,24,1,24,3,24,381,8,24,1,25,1,25,1,25,3,25,386,8,25,1,25,3,25,389,
	8,25,1,25,1,25,5,25,393,8,25,10,25,12,25,396,9,25,1,25,5,25,399,8,25,10,
	25,12,25,402,9,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,
	1,27,1,27,5,27,417,8,27,10,27,12,27,420,9,27,1,27,3,27,423,8,27,1,27,1,
	27,1,27,1,28,3,28,429,8,28,1,28,1,28,1,28,3,28,434,8,28,1,29,1,29,1,29,
	1,29,1,29,1,29,1,29,5,29,443,8,29,10,29,12,29,446,9,29,1,29,3,29,449,8,
	29,1,29,1,29,1,29,1,30,1,30,1,30,3,30,457,8,30,1,31,1,31,1,31,3,31,462,
	8,31,1,31,1,31,3,31,466,8,31,1,31,1,31,5,31,470,8,31,10,31,12,31,473,9,
	31,1,31,3,31,476,8,31,1,31,3,31,479,8,31,1,31,1,31,1,31,1,32,3,32,485,8,
	32,1,32,1,32,1,32,3,32,490,8,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,
	1,35,1,35,1,35,1,36,1,36,1,36,1,36,4,36,507,8,36,11,36,12,36,508,1,36,1,
	36,1,36,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,5,38,522,8,38,10,38,12,
	38,525,9,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,
	1,40,1,40,5,40,541,8,40,10,40,12,40,544,9,40,1,40,1,40,1,40,1,41,1,41,1,
	41,1,41,1,41,1,42,3,42,555,8,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,
	1,43,1,43,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,
	47,1,47,1,47,1,47,5,47,583,8,47,10,47,12,47,586,9,47,1,47,1,47,1,48,1,48,
	1,48,1,49,1,49,1,49,1,49,5,49,597,8,49,10,49,12,49,600,9,49,1,49,1,49,1,
	50,1,50,1,50,1,50,5,50,608,8,50,10,50,12,50,611,9,50,1,50,1,50,1,51,1,51,
	1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,
	53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
	1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,654,8,53,1,53,1,53,1,53,1,
	53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,666,8,53,1,53,1,53,1,53,1,53,1,53,
	1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,
	53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
	1,53,1,53,1,53,1,53,1,53,5,53,707,8,53,10,53,12,53,710,9,53,1,54,1,54,1,
	55,1,55,1,56,1,56,1,56,3,56,719,8,56,3,56,721,8,56,1,57,1,57,1,57,3,57,
	726,8,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,3,58,737,8,58,1,59,
	1,59,1,59,5,59,742,8,59,10,59,12,59,745,9,59,1,60,1,60,1,60,1,60,5,60,751,
	8,60,10,60,12,60,754,9,60,1,60,1,60,1,61,1,61,1,61,3,61,761,8,61,1,62,1,
	62,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,1,65,1,65,1,66,1,66,1,67,1,67,
	1,68,1,68,1,69,1,69,1,70,1,70,1,71,1,71,1,71,0,1,106,72,0,2,4,6,8,10,12,
	14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
	62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
	108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,
	0,12,2,0,41,41,69,69,2,0,68,68,81,81,4,0,3,3,19,19,24,24,30,30,2,0,6,6,
	20,21,2,0,19,19,24,24,3,0,9,10,13,13,18,18,2,0,8,8,22,22,1,0,106,113,2,
	0,56,59,84,87,1,0,91,99,2,0,33,33,55,55,1,0,46,48,820,0,145,1,0,0,0,2,164,
	1,0,0,0,4,170,1,0,0,0,6,181,1,0,0,0,8,200,1,0,0,0,10,213,1,0,0,0,12,217,
	1,0,0,0,14,219,1,0,0,0,16,226,1,0,0,0,18,238,1,0,0,0,20,242,1,0,0,0,22,
	247,1,0,0,0,24,272,1,0,0,0,26,295,1,0,0,0,28,301,1,0,0,0,30,305,1,0,0,0,
	32,315,1,0,0,0,34,321,1,0,0,0,36,324,1,0,0,0,38,327,1,0,0,0,40,330,1,0,
	0,0,42,358,1,0,0,0,44,367,1,0,0,0,46,371,1,0,0,0,48,378,1,0,0,0,50,382,
	1,0,0,0,52,406,1,0,0,0,54,409,1,0,0,0,56,428,1,0,0,0,58,435,1,0,0,0,60,
	453,1,0,0,0,62,458,1,0,0,0,64,484,1,0,0,0,66,493,1,0,0,0,68,496,1,0,0,0,
	70,499,1,0,0,0,72,502,1,0,0,0,74,513,1,0,0,0,76,517,1,0,0,0,78,529,1,0,
	0,0,80,536,1,0,0,0,82,548,1,0,0,0,84,554,1,0,0,0,86,561,1,0,0,0,88,568,
	1,0,0,0,90,570,1,0,0,0,92,572,1,0,0,0,94,578,1,0,0,0,96,589,1,0,0,0,98,
	592,1,0,0,0,100,603,1,0,0,0,102,614,1,0,0,0,104,616,1,0,0,0,106,653,1,0,
	0,0,108,711,1,0,0,0,110,713,1,0,0,0,112,720,1,0,0,0,114,722,1,0,0,0,116,
	736,1,0,0,0,118,738,1,0,0,0,120,746,1,0,0,0,122,760,1,0,0,0,124,762,1,0,
	0,0,126,766,1,0,0,0,128,768,1,0,0,0,130,770,1,0,0,0,132,774,1,0,0,0,134,
	776,1,0,0,0,136,778,1,0,0,0,138,780,1,0,0,0,140,782,1,0,0,0,142,784,1,0,
	0,0,144,146,3,2,1,0,145,144,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,
	149,3,4,2,0,148,147,1,0,0,0,148,149,1,0,0,0,149,153,1,0,0,0,150,152,3,6,
	3,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,
	159,1,0,0,0,155,153,1,0,0,0,156,158,3,8,4,0,157,156,1,0,0,0,158,161,1,0,
	0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,
	163,5,0,0,1,163,1,1,0,0,0,164,165,5,100,0,0,165,166,5,16,0,0,166,167,5,
	107,0,0,167,168,5,28,0,0,168,169,5,29,0,0,169,3,1,0,0,0,170,171,5,65,0,
	0,171,176,3,110,55,0,172,173,5,7,0,0,173,175,3,110,55,0,174,172,1,0,0,0,
	175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,179,1,0,0,0,178,176,
	1,0,0,0,179,180,5,29,0,0,180,5,1,0,0,0,181,182,5,52,0,0,182,183,3,110,55,
	0,183,189,5,7,0,0,184,185,3,110,55,0,185,186,5,7,0,0,186,188,1,0,0,0,187,
	184,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,194,1,0,
	0,0,191,189,1,0,0,0,192,195,3,110,55,0,193,195,5,21,0,0,194,192,1,0,0,0,
	194,193,1,0,0,0,195,196,1,0,0,0,196,197,5,29,0,0,197,7,1,0,0,0,198,201,
	3,12,6,0,199,201,3,10,5,0,200,198,1,0,0,0,200,199,1,0,0,0,201,9,1,0,0,0,
	202,214,3,20,10,0,203,214,3,22,11,0,204,214,3,40,20,0,205,214,3,50,25,0,
	206,214,3,54,27,0,207,214,3,58,29,0,208,214,3,62,31,0,209,214,3,72,36,0,
	210,214,3,76,38,0,211,214,3,80,40,0,212,214,3,104,52,0,213,202,1,0,0,0,
	213,203,1,0,0,0,213,204,1,0,0,0,213,205,1,0,0,0,213,206,1,0,0,0,213,207,
	1,0,0,0,213,208,1,0,0,0,213,209,1,0,0,0,213,210,1,0,0,0,213,211,1,0,0,0,
	213,212,1,0,0,0,214,11,1,0,0,0,215,218,3,14,7,0,216,218,3,16,8,0,217,215,
	1,0,0,0,217,216,1,0,0,0,218,13,1,0,0,0,219,220,5,39,0,0,220,221,3,114,57,
	0,221,222,3,110,55,0,222,223,5,2,0,0,223,224,3,106,53,0,224,225,5,29,0,
	0,225,15,1,0,0,0,226,227,5,72,0,0,227,228,3,110,55,0,228,232,5,11,0,0,229,
	231,3,18,9,0,230,229,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,
	0,0,0,233,235,1,0,0,0,234,232,1,0,0,0,235,236,5,26,0,0,236,237,5,29,0,0,
	237,17,1,0,0,0,238,239,5,71,0,0,239,240,3,106,53,0,240,241,5,29,0,0,241,
	19,1,0,0,0,242,243,5,82,0,0,243,244,3,112,56,0,244,245,3,110,55,0,245,246,
	5,29,0,0,246,21,1,0,0,0,247,248,5,80,0,0,248,250,3,110,55,0,249,251,3,98,
	49,0,250,249,1,0,0,0,250,251,1,0,0,0,251,253,1,0,0,0,252,254,3,94,47,0,
	253,252,1,0,0,0,253,254,1,0,0,0,254,255,1,0,0,0,255,259,5,11,0,0,256,258,
	3,24,12,0,257,256,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,259,260,1,0,0,
	0,260,265,1,0,0,0,261,259,1,0,0,0,262,264,3,86,43,0,263,262,1,0,0,0,264,
	267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,268,1,0,0,0,267,265,1,0,
	0,0,268,269,5,26,0,0,269,270,5,29,0,0,270,23,1,0,0,0,271,273,3,26,13,0,
	272,271,1,0,0,0,272,273,1,0,0,0,273,275,1,0,0,0,274,276,3,28,14,0,275,274,
	1,0,0,0,275,276,1,0,0,0,276,278,1,0,0,0,277,279,5,44,0,0,278,277,1,0,0,
	0,278,279,1,0,0,0,279,281,1,0,0,0,280,282,5,64,0,0,281,280,1,0,0,0,281,
	282,1,0,0,0,282,283,1,0,0,0,283,285,3,30,15,0,284,286,3,34,17,0,285,284,
	1,0,0,0,285,286,1,0,0,0,286,288,1,0,0,0,287,289,3,36,18,0,288,287,1,0,0,
	0,288,289,1,0,0,0,289,291,1,0,0,0,290,292,3,38,19,0,291,290,1,0,0,0,291,
	292,1,0,0,0,292,293,1,0,0,0,293,294,5,29,0,0,294,25,1,0,0,0,295,296,5,32,
	0,0,296,297,5,16,0,0,297,298,3,106,53,0,298,299,5,28,0,0,299,300,5,4,0,
	0,300,27,1,0,0,0,301,302,3,106,53,0,302,303,5,4,0,0,303,29,1,0,0,0,304,
	306,5,66,0,0,305,304,1,0,0,0,305,306,1,0,0,0,306,308,1,0,0,0,307,309,5,
	51,0,0,308,307,1,0,0,0,308,309,1,0,0,0,309,310,1,0,0,0,310,311,3,114,57,
	0,311,313,3,110,55,0,312,314,3,32,16,0,313,312,1,0,0,0,313,314,1,0,0,0,
	314,31,1,0,0,0,315,317,5,12,0,0,316,318,3,106,53,0,317,316,1,0,0,0,317,
	318,1,0,0,0,318,319,1,0,0,0,319,320,5,27,0,0,320,33,1,0,0,0,321,322,5,2,
	0,0,322,323,3,106,53,0,323,35,1,0,0,0,324,325,5,50,0,0,325,326,3,106,53,
	0,326,37,1,0,0,0,327,328,5,4,0,0,328,329,3,106,53,0,329,39,1,0,0,0,330,
	331,5,38,0,0,331,333,3,110,55,0,332,334,3,98,49,0,333,332,1,0,0,0,333,334,
	1,0,0,0,334,335,1,0,0,0,335,336,3,94,47,0,336,337,5,63,0,0,337,338,3,106,
	53,0,338,342,5,11,0,0,339,341,3,42,21,0,340,339,1,0,0,0,341,344,1,0,0,0,
	342,340,1,0,0,0,342,343,1,0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,345,347,
	3,46,23,0,346,345,1,0,0,0,346,347,1,0,0,0,347,351,1,0,0,0,348,350,3,86,
	43,0,349,348,1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,
	354,1,0,0,0,353,351,1,0,0,0,354,355,5,26,0,0,355,356,5,29,0,0,356,41,1,
	0,0,0,357,359,3,44,22,0,358,357,1,0,0,0,359,360,1,0,0,0,360,358,1,0,0,0,
	360,361,1,0,0,0,361,363,1,0,0,0,362,364,3,48,24,0,363,362,1,0,0,0,363,364,
	1,0,0,0,364,365,1,0,0,0,365,366,5,29,0,0,366,43,1,0,0,0,367,368,5,37,0,
	0,368,369,3,106,53,0,369,370,5,4,0,0,370,45,1,0,0,0,371,372,5,40,0,0,372,
	374,5,4,0,0,373,375,3,48,24,0,374,373,1,0,0,0,374,375,1,0,0,0,375,376,1,
	0,0,0,376,377,5,29,0,0,377,47,1,0,0,0,378,380,3,30,15,0,379,381,3,38,19,
	0,380,379,1,0,0,0,380,381,1,0,0,0,381,49,1,0,0,0,382,383,5,88,0,0,383,385,
	3,110,55,0,384,386,3,98,49,0,385,384,1,0,0,0,385,386,1,0,0,0,386,388,1,
	0,0,0,387,389,3,94,47,0,388,387,1,0,0,0,388,389,1,0,0,0,389,390,1,0,0,0,
	390,394,5,11,0,0,391,393,3,52,26,0,392,391,1,0,0,0,393,396,1,0,0,0,394,
	392,1,0,0,0,394,395,1,0,0,0,395,400,1,0,0,0,396,394,1,0,0,0,397,399,3,86,
	43,0,398,397,1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,401,
	403,1,0,0,0,402,400,1,0,0,0,403,404,5,26,0,0,404,405,5,29,0,0,405,51,1,
	0,0,0,406,407,3,48,24,0,407,408,5,29,0,0,408,53,1,0,0,0,409,410,5,42,0,
	0,410,411,3,114,57,0,411,412,3,110,55,0,412,413,5,11,0,0,413,418,3,56,28,
	0,414,415,5,5,0,0,415,417,3,56,28,0,416,414,1,0,0,0,417,420,1,0,0,0,418,
	416,1,0,0,0,418,419,1,0,0,0,419,422,1,0,0,0,420,418,1,0,0,0,421,423,5,5,
	0,0,422,421,1,0,0,0,422,423,1,0,0,0,423,424,1,0,0,0,424,425,5,26,0,0,425,
	426,5,29,0,0,426,55,1,0,0,0,427,429,7,0,0,0,428,427,1,0,0,0,428,429,1,0,
	0,0,429,430,1,0,0,0,430,433,3,110,55,0,431,432,5,2,0,0,432,434,3,106,53,
	0,433,431,1,0,0,0,433,434,1,0,0,0,434,57,1,0,0,0,435,436,5,35,0,0,436,437,
	3,114,57,0,437,438,3,110,55,0,438,439,5,11,0,0,439,444,3,60,30,0,440,441,
	5,5,0,0,441,443,3,60,30,0,442,440,1,0,0,0,443,446,1,0,0,0,444,442,1,0,0,
	0,444,445,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,447,449,5,5,0,0,448,447,
	1,0,0,0,448,449,1,0,0,0,449,450,1,0,0,0,450,451,5,26,0,0,451,452,5,29,0,
	0,452,59,1,0,0,0,453,456,3,110,55,0,454,455,5,2,0,0,455,457,3,106,53,0,
	456,454,1,0,0,0,456,457,1,0,0,0,457,61,1,0,0,0,458,459,5,76,0,0,459,461,
	3,110,55,0,460,462,3,98,49,0,461,460,1,0,0,0,461,462,1,0,0,0,462,465,1,
	0,0,0,463,464,5,89,0,0,464,466,3,110,55,0,465,463,1,0,0,0,465,466,1,0,0,
	0,466,467,1,0,0,0,467,471,5,11,0,0,468,470,3,64,32,0,469,468,1,0,0,0,470,
	473,1,0,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,475,1,0,0,0,473,471,1,0,
	0,0,474,476,3,66,33,0,475,474,1,0,0,0,475,476,1,0,0,0,476,478,1,0,0,0,477,
	479,3,70,35,0,478,477,1,0,0,0,478,479,1,0,0,0,479,480,1,0,0,0,480,481,5,
	26,0,0,481,482,5,29,0,0,482,63,1,0,0,0,483,485,5,77,0,0,484,483,1,0,0,0,
	484,485,1,0,0,0,485,486,1,0,0,0,486,487,3,114,57,0,487,489,3,110,55,0,488,
	490,3,68,34,0,489,488,1,0,0,0,489,490,1,0,0,0,490,491,1,0,0,0,491,492,5,
	29,0,0,492,65,1,0,0,0,493,494,3,68,34,0,494,495,5,29,0,0,495,67,1,0,0,0,
	496,497,5,74,0,0,497,498,3,106,53,0,498,69,1,0,0,0,499,500,5,78,0,0,500,
	501,5,29,0,0,501,71,1,0,0,0,502,503,5,75,0,0,503,504,3,110,55,0,504,506,
	5,11,0,0,505,507,3,74,37,0,506,505,1,0,0,0,507,508,1,0,0,0,508,506,1,0,
	0,0,508,509,1,0,0,0,509,510,1,0,0,0,510,511,5,26,0,0,511,512,5,29,0,0,512,
	73,1,0,0,0,513,514,3,114,57,0,514,515,3,110,55,0,515,516,5,29,0,0,516,75,
	1,0,0,0,517,518,5,73,0,0,518,519,3,110,55,0,519,523,5,11,0,0,520,522,3,
	78,39,0,521,520,1,0,0,0,522,525,1,0,0,0,523,521,1,0,0,0,523,524,1,0,0,0,
	524,526,1,0,0,0,525,523,1,0,0,0,526,527,5,26,0,0,527,528,5,29,0,0,528,77,
	1,0,0,0,529,530,3,112,56,0,530,531,3,110,55,0,531,532,5,16,0,0,532,533,
	3,112,56,0,533,534,5,28,0,0,534,535,5,29,0,0,535,79,1,0,0,0,536,537,5,67,
	0,0,537,538,3,110,55,0,538,542,5,11,0,0,539,541,3,82,41,0,540,539,1,0,0,
	0,541,544,1,0,0,0,542,540,1,0,0,0,542,543,1,0,0,0,543,545,1,0,0,0,544,542,
	1,0,0,0,545,546,5,26,0,0,546,547,5,29,0,0,547,81,1,0,0,0,548,549,3,84,42,
	0,549,550,3,112,56,0,550,551,3,110,55,0,551,552,5,29,0,0,552,83,1,0,0,0,
	553,555,7,1,0,0,554,553,1,0,0,0,554,555,1,0,0,0,555,556,1,0,0,0,556,557,
	5,83,0,0,557,558,5,16,0,0,558,559,3,106,53,0,559,560,5,28,0,0,560,85,1,
	0,0,0,561,562,5,49,0,0,562,563,3,88,44,0,563,564,3,90,45,0,564,565,5,16,
	0,0,565,566,5,28,0,0,566,567,3,92,46,0,567,87,1,0,0,0,568,569,3,112,56,
	0,569,89,1,0,0,0,570,571,3,110,55,0,571,91,1,0,0,0,572,573,5,11,0,0,573,
	574,5,70,0,0,574,575,3,106,53,0,575,576,5,29,0,0,576,577,5,26,0,0,577,93,
	1,0,0,0,578,579,5,16,0,0,579,584,3,96,48,0,580,581,5,5,0,0,581,583,3,96,
	48,0,582,580,1,0,0,0,583,586,1,0,0,0,584,582,1,0,0,0,584,585,1,0,0,0,585,
	587,1,0,0,0,586,584,1,0,0,0,587,588,5,28,0,0,588,95,1,0,0,0,589,590,3,112,
	56,0,590,591,3,110,55,0,591,97,1,0,0,0,592,593,5,18,0,0,593,598,3,110,55,
	0,594,595,5,5,0,0,595,597,3,110,55,0,596,594,1,0,0,0,597,600,1,0,0,0,598,
	596,1,0,0,0,598,599,1,0,0,0,599,601,1,0,0,0,600,598,1,0,0,0,601,602,5,10,
	0,0,602,99,1,0,0,0,603,604,5,18,0,0,604,609,3,102,51,0,605,606,5,5,0,0,
	606,608,3,102,51,0,607,605,1,0,0,0,608,611,1,0,0,0,609,607,1,0,0,0,609,
	610,1,0,0,0,610,612,1,0,0,0,611,609,1,0,0,0,612,613,5,10,0,0,613,101,1,
	0,0,0,614,615,3,112,56,0,615,103,1,0,0,0,616,617,5,54,0,0,617,618,3,112,
	56,0,618,619,3,110,55,0,619,620,5,29,0,0,620,105,1,0,0,0,621,622,6,53,-1,
	0,622,623,5,16,0,0,623,624,3,106,53,0,624,625,5,28,0,0,625,654,1,0,0,0,
	626,627,5,60,0,0,627,628,5,16,0,0,628,629,3,106,53,0,629,630,5,5,0,0,630,
	631,3,106,53,0,631,632,5,28,0,0,632,654,1,0,0,0,633,634,5,61,0,0,634,635,
	5,16,0,0,635,636,3,106,53,0,636,637,5,28,0,0,637,654,1,0,0,0,638,639,5,
	90,0,0,639,640,5,16,0,0,640,641,3,106,53,0,641,642,5,28,0,0,642,654,1,0,
	0,0,643,644,5,62,0,0,644,645,5,16,0,0,645,646,3,106,53,0,646,647,5,28,0,
	0,647,654,1,0,0,0,648,649,7,2,0,0,649,654,3,106,53,15,650,654,3,108,54,
	0,651,654,5,53,0,0,652,654,3,110,55,0,653,621,1,0,0,0,653,626,1,0,0,0,653,
	633,1,0,0,0,653,638,1,0,0,0,653,643,1,0,0,0,653,648,1,0,0,0,653,650,1,0,
	0,0,653,651,1,0,0,0,653,652,1,0,0,0,654,708,1,0,0,0,655,656,10,14,0,0,656,
	657,7,3,0,0,657,707,3,106,53,15,658,659,10,13,0,0,659,660,7,4,0,0,660,707,
	3,106,53,14,661,665,10,12,0,0,662,666,5,17,0,0,663,664,5,10,0,0,664,666,
	5,10,0,0,665,662,1,0,0,0,665,663,1,0,0,0,666,667,1,0,0,0,667,707,3,106,
	53,13,668,669,10,11,0,0,669,670,7,5,0,0,670,707,3,106,53,12,671,672,10,
	10,0,0,672,673,7,6,0,0,673,707,3,106,53,11,674,675,10,9,0,0,675,676,5,1,
	0,0,676,707,3,106,53,10,677,678,10,8,0,0,678,679,5,31,0,0,679,707,3,106,
	53,9,680,681,10,7,0,0,681,682,5,23,0,0,682,707,3,106,53,8,683,684,10,6,
	0,0,684,685,5,14,0,0,685,707,3,106,53,7,686,687,10,5,0,0,687,688,5,15,0,
	0,688,707,3,106,53,6,689,690,10,4,0,0,690,691,5,25,0,0,691,692,3,106,53,
	0,692,693,5,4,0,0,693,694,3,106,53,4,694,707,1,0,0,0,695,696,10,22,0,0,
	696,697,5,16,0,0,697,707,5,28,0,0,698,699,10,21,0,0,699,700,5,12,0,0,700,
	701,3,106,53,0,701,702,5,27,0,0,702,707,1,0,0,0,703,704,10,20,0,0,704,705,
	5,7,0,0,705,707,3,110,55,0,706,655,1,0,0,0,706,658,1,0,0,0,706,661,1,0,
	0,0,706,668,1,0,0,0,706,671,1,0,0,0,706,674,1,0,0,0,706,677,1,0,0,0,706,
	680,1,0,0,0,706,683,1,0,0,0,706,686,1,0,0,0,706,689,1,0,0,0,706,695,1,0,
	0,0,706,698,1,0,0,0,706,703,1,0,0,0,707,710,1,0,0,0,708,706,1,0,0,0,708,
	709,1,0,0,0,709,107,1,0,0,0,710,708,1,0,0,0,711,712,7,7,0,0,712,109,1,0,
	0,0,713,714,5,114,0,0,714,111,1,0,0,0,715,721,3,116,58,0,716,718,3,118,
	59,0,717,719,3,100,50,0,718,717,1,0,0,0,718,719,1,0,0,0,719,721,1,0,0,0,
	720,715,1,0,0,0,720,716,1,0,0,0,721,113,1,0,0,0,722,725,3,112,56,0,723,
	726,3,120,60,0,724,726,3,124,62,0,725,723,1,0,0,0,725,724,1,0,0,0,725,726,
	1,0,0,0,726,115,1,0,0,0,727,737,3,126,63,0,728,737,3,128,64,0,729,737,3,
	130,65,0,730,737,3,132,66,0,731,737,3,134,67,0,732,737,3,136,68,0,733,737,
	3,138,69,0,734,737,3,140,70,0,735,737,3,142,71,0,736,727,1,0,0,0,736,728,
	1,0,0,0,736,729,1,0,0,0,736,730,1,0,0,0,736,731,1,0,0,0,736,732,1,0,0,0,
	736,733,1,0,0,0,736,734,1,0,0,0,736,735,1,0,0,0,737,117,1,0,0,0,738,743,
	3,110,55,0,739,740,5,7,0,0,740,742,3,110,55,0,741,739,1,0,0,0,742,745,1,
	0,0,0,743,741,1,0,0,0,743,744,1,0,0,0,744,119,1,0,0,0,745,743,1,0,0,0,746,
	747,5,16,0,0,747,752,3,122,61,0,748,749,5,5,0,0,749,751,3,122,61,0,750,
	748,1,0,0,0,751,754,1,0,0,0,752,750,1,0,0,0,752,753,1,0,0,0,753,755,1,0,
	0,0,754,752,1,0,0,0,755,756,5,28,0,0,756,121,1,0,0,0,757,758,5,43,0,0,758,
	761,3,110,55,0,759,761,3,106,53,0,760,757,1,0,0,0,760,759,1,0,0,0,761,123,
	1,0,0,0,762,763,5,18,0,0,763,764,3,106,53,0,764,765,5,10,0,0,765,125,1,
	0,0,0,766,767,7,8,0,0,767,127,1,0,0,0,768,769,7,9,0,0,769,129,1,0,0,0,770,
	771,7,10,0,0,771,772,5,4,0,0,772,773,5,113,0,0,773,131,1,0,0,0,774,775,
	7,10,0,0,775,133,1,0,0,0,776,777,5,34,0,0,777,135,1,0,0,0,778,779,5,79,
	0,0,779,137,1,0,0,0,780,781,7,11,0,0,781,139,1,0,0,0,782,783,5,45,0,0,783,
	141,1,0,0,0,784,785,5,36,0,0,785,143,1,0,0,0,70,145,148,153,159,176,189,
	194,200,213,217,232,250,253,259,265,272,275,278,281,285,288,291,305,308,
	313,317,333,342,346,351,360,363,374,380,385,388,394,400,418,422,428,433,
	444,448,456,461,465,471,475,478,484,489,508,523,542,554,584,598,609,653,
	665,706,708,718,720,725,736,743,752,760];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZserioParser.__ATN) {
			ZserioParser.__ATN = new ATNDeserializer().deserialize(ZserioParser._serializedATN);
		}

		return ZserioParser.__ATN;
	}


	static DecisionsToDFA = ZserioParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class PackageDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(ZserioParser.EOF, 0);
	}
	public compatibilityVersionDirective(): CompatibilityVersionDirectiveContext {
		return this.getTypedRuleContext(CompatibilityVersionDirectiveContext, 0) as CompatibilityVersionDirectiveContext;
	}
	public packageNameDefinition(): PackageNameDefinitionContext {
		return this.getTypedRuleContext(PackageNameDefinitionContext, 0) as PackageNameDefinitionContext;
	}
	public importDeclaration_list(): ImportDeclarationContext[] {
		return this.getTypedRuleContexts(ImportDeclarationContext) as ImportDeclarationContext[];
	}
	public importDeclaration(i: number): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, i) as ImportDeclarationContext;
	}
	public languageDirective_list(): LanguageDirectiveContext[] {
		return this.getTypedRuleContexts(LanguageDirectiveContext) as LanguageDirectiveContext[];
	}
	public languageDirective(i: number): LanguageDirectiveContext {
		return this.getTypedRuleContext(LanguageDirectiveContext, i) as LanguageDirectiveContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_packageDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterPackageDeclaration) {
	 		listener.enterPackageDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitPackageDeclaration) {
	 		listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompatibilityVersionDirectiveContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMPAT_VERSION(): TerminalNode {
		return this.getToken(ZserioParser.COMPAT_VERSION, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.STRING_LITERAL, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_compatibilityVersionDirective;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterCompatibilityVersionDirective) {
	 		listener.enterCompatibilityVersionDirective(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitCompatibilityVersionDirective) {
	 		listener.exitCompatibilityVersionDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitCompatibilityVersionDirective) {
			return visitor.visitCompatibilityVersionDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNameDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(ZserioParser.PACKAGE, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(ZserioParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_packageNameDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterPackageNameDefinition) {
	 		listener.enterPackageNameDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitPackageNameDefinition) {
	 		listener.exitPackageNameDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitPackageNameDefinition) {
			return visitor.visitPackageNameDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(ZserioParser.IMPORT, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(ZserioParser.DOT, i);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public MULTIPLY(): TerminalNode {
		return this.getToken(ZserioParser.MULTIPLY, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_importDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterImportDeclaration) {
	 		listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitImportDeclaration) {
	 		listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LanguageDirectiveContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolDefinition(): SymbolDefinitionContext {
		return this.getTypedRuleContext(SymbolDefinitionContext, 0) as SymbolDefinitionContext;
	}
	public typeDeclaration(): TypeDeclarationContext {
		return this.getTypedRuleContext(TypeDeclarationContext, 0) as TypeDeclarationContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_languageDirective;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterLanguageDirective) {
	 		listener.enterLanguageDirective(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitLanguageDirective) {
	 		listener.exitLanguageDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitLanguageDirective) {
			return visitor.visitLanguageDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subtypeDeclaration(): SubtypeDeclarationContext {
		return this.getTypedRuleContext(SubtypeDeclarationContext, 0) as SubtypeDeclarationContext;
	}
	public structureDeclaration(): StructureDeclarationContext {
		return this.getTypedRuleContext(StructureDeclarationContext, 0) as StructureDeclarationContext;
	}
	public choiceDeclaration(): ChoiceDeclarationContext {
		return this.getTypedRuleContext(ChoiceDeclarationContext, 0) as ChoiceDeclarationContext;
	}
	public unionDeclaration(): UnionDeclarationContext {
		return this.getTypedRuleContext(UnionDeclarationContext, 0) as UnionDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public bitmaskDeclaration(): BitmaskDeclarationContext {
		return this.getTypedRuleContext(BitmaskDeclarationContext, 0) as BitmaskDeclarationContext;
	}
	public sqlTableDeclaration(): SqlTableDeclarationContext {
		return this.getTypedRuleContext(SqlTableDeclarationContext, 0) as SqlTableDeclarationContext;
	}
	public sqlDatabaseDefinition(): SqlDatabaseDefinitionContext {
		return this.getTypedRuleContext(SqlDatabaseDefinitionContext, 0) as SqlDatabaseDefinitionContext;
	}
	public serviceDefinition(): ServiceDefinitionContext {
		return this.getTypedRuleContext(ServiceDefinitionContext, 0) as ServiceDefinitionContext;
	}
	public pubsubDefinition(): PubsubDefinitionContext {
		return this.getTypedRuleContext(PubsubDefinitionContext, 0) as PubsubDefinitionContext;
	}
	public instantiateDeclaration(): InstantiateDeclarationContext {
		return this.getTypedRuleContext(InstantiateDeclarationContext, 0) as InstantiateDeclarationContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_typeDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTypeDeclaration) {
	 		listener.enterTypeDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTypeDeclaration) {
	 		listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constDefinition(): ConstDefinitionContext {
		return this.getTypedRuleContext(ConstDefinitionContext, 0) as ConstDefinitionContext;
	}
	public ruleGroupDefinition(): RuleGroupDefinitionContext {
		return this.getTypedRuleContext(RuleGroupDefinitionContext, 0) as RuleGroupDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_symbolDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSymbolDefinition) {
	 		listener.enterSymbolDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSymbolDefinition) {
	 		listener.exitSymbolDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSymbolDefinition) {
			return visitor.visitSymbolDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONST(): TerminalNode {
		return this.getToken(ZserioParser.CONST, 0);
	}
	public typeInstantiation(): TypeInstantiationContext {
		return this.getTypedRuleContext(TypeInstantiationContext, 0) as TypeInstantiationContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(ZserioParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_constDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterConstDefinition) {
	 		listener.enterConstDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitConstDefinition) {
	 		listener.exitConstDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitConstDefinition) {
			return visitor.visitConstDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleGroupDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RULE_GROUP(): TerminalNode {
		return this.getToken(ZserioParser.RULE_GROUP, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public ruleDefinition_list(): RuleDefinitionContext[] {
		return this.getTypedRuleContexts(RuleDefinitionContext) as RuleDefinitionContext[];
	}
	public ruleDefinition(i: number): RuleDefinitionContext {
		return this.getTypedRuleContext(RuleDefinitionContext, i) as RuleDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_ruleGroupDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterRuleGroupDefinition) {
	 		listener.enterRuleGroupDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitRuleGroupDefinition) {
	 		listener.exitRuleGroupDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitRuleGroupDefinition) {
			return visitor.visitRuleGroupDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RULE(): TerminalNode {
		return this.getToken(ZserioParser.RULE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_ruleDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterRuleDefinition) {
	 		listener.enterRuleDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitRuleDefinition) {
	 		listener.exitRuleDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitRuleDefinition) {
			return visitor.visitRuleDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubtypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUBTYPE(): TerminalNode {
		return this.getToken(ZserioParser.SUBTYPE, 0);
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_subtypeDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSubtypeDeclaration) {
	 		listener.enterSubtypeDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSubtypeDeclaration) {
	 		listener.exitSubtypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSubtypeDeclaration) {
			return visitor.visitSubtypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructureDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRUCTURE(): TerminalNode {
		return this.getToken(ZserioParser.STRUCTURE, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public templateParameters(): TemplateParametersContext {
		return this.getTypedRuleContext(TemplateParametersContext, 0) as TemplateParametersContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public structureFieldDefinition_list(): StructureFieldDefinitionContext[] {
		return this.getTypedRuleContexts(StructureFieldDefinitionContext) as StructureFieldDefinitionContext[];
	}
	public structureFieldDefinition(i: number): StructureFieldDefinitionContext {
		return this.getTypedRuleContext(StructureFieldDefinitionContext, i) as StructureFieldDefinitionContext;
	}
	public functionDefinition_list(): FunctionDefinitionContext[] {
		return this.getTypedRuleContexts(FunctionDefinitionContext) as FunctionDefinitionContext[];
	}
	public functionDefinition(i: number): FunctionDefinitionContext {
		return this.getTypedRuleContext(FunctionDefinitionContext, i) as FunctionDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_structureDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterStructureDeclaration) {
	 		listener.enterStructureDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitStructureDeclaration) {
	 		listener.exitStructureDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitStructureDeclaration) {
			return visitor.visitStructureDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructureFieldDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldTypeId(): FieldTypeIdContext {
		return this.getTypedRuleContext(FieldTypeIdContext, 0) as FieldTypeIdContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public fieldAlignment(): FieldAlignmentContext {
		return this.getTypedRuleContext(FieldAlignmentContext, 0) as FieldAlignmentContext;
	}
	public fieldOffset(): FieldOffsetContext {
		return this.getTypedRuleContext(FieldOffsetContext, 0) as FieldOffsetContext;
	}
	public EXTEND(): TerminalNode {
		return this.getToken(ZserioParser.EXTEND, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(ZserioParser.OPTIONAL, 0);
	}
	public fieldInitializer(): FieldInitializerContext {
		return this.getTypedRuleContext(FieldInitializerContext, 0) as FieldInitializerContext;
	}
	public fieldOptionalClause(): FieldOptionalClauseContext {
		return this.getTypedRuleContext(FieldOptionalClauseContext, 0) as FieldOptionalClauseContext;
	}
	public fieldConstraint(): FieldConstraintContext {
		return this.getTypedRuleContext(FieldConstraintContext, 0) as FieldConstraintContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_structureFieldDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterStructureFieldDefinition) {
	 		listener.enterStructureFieldDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitStructureFieldDefinition) {
	 		listener.exitStructureFieldDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitStructureFieldDefinition) {
			return visitor.visitStructureFieldDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAlignmentContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALIGN(): TerminalNode {
		return this.getToken(ZserioParser.ALIGN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(ZserioParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_fieldAlignment;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFieldAlignment) {
	 		listener.enterFieldAlignment(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFieldAlignment) {
	 		listener.exitFieldAlignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFieldAlignment) {
			return visitor.visitFieldAlignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOffsetContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ZserioParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_fieldOffset;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFieldOffset) {
	 		listener.enterFieldOffset(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFieldOffset) {
	 		listener.exitFieldOffset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFieldOffset) {
			return visitor.visitFieldOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldTypeIdContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeInstantiation(): TypeInstantiationContext {
		return this.getTypedRuleContext(TypeInstantiationContext, 0) as TypeInstantiationContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public PACKED(): TerminalNode {
		return this.getToken(ZserioParser.PACKED, 0);
	}
	public IMPLICIT(): TerminalNode {
		return this.getToken(ZserioParser.IMPLICIT, 0);
	}
	public fieldArrayRange(): FieldArrayRangeContext {
		return this.getTypedRuleContext(FieldArrayRangeContext, 0) as FieldArrayRangeContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_fieldTypeId;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFieldTypeId) {
	 		listener.enterFieldTypeId(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFieldTypeId) {
	 		listener.exitFieldTypeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFieldTypeId) {
			return visitor.visitFieldTypeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldArrayRangeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(ZserioParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(ZserioParser.RBRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_fieldArrayRange;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFieldArrayRange) {
	 		listener.enterFieldArrayRange(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFieldArrayRange) {
	 		listener.exitFieldArrayRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFieldArrayRange) {
			return visitor.visitFieldArrayRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldInitializerContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(ZserioParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_fieldInitializer;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFieldInitializer) {
	 		listener.enterFieldInitializer(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFieldInitializer) {
	 		listener.exitFieldInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFieldInitializer) {
			return visitor.visitFieldInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOptionalClauseContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(ZserioParser.IF, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_fieldOptionalClause;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFieldOptionalClause) {
	 		listener.enterFieldOptionalClause(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFieldOptionalClause) {
	 		listener.exitFieldOptionalClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFieldOptionalClause) {
			return visitor.visitFieldOptionalClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldConstraintContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(ZserioParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_fieldConstraint;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFieldConstraint) {
	 		listener.enterFieldConstraint(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFieldConstraint) {
	 		listener.exitFieldConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFieldConstraint) {
			return visitor.visitFieldConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHOICE(): TerminalNode {
		return this.getToken(ZserioParser.CHOICE, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public ON(): TerminalNode {
		return this.getToken(ZserioParser.ON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public templateParameters(): TemplateParametersContext {
		return this.getTypedRuleContext(TemplateParametersContext, 0) as TemplateParametersContext;
	}
	public choiceCases_list(): ChoiceCasesContext[] {
		return this.getTypedRuleContexts(ChoiceCasesContext) as ChoiceCasesContext[];
	}
	public choiceCases(i: number): ChoiceCasesContext {
		return this.getTypedRuleContext(ChoiceCasesContext, i) as ChoiceCasesContext;
	}
	public choiceDefault(): ChoiceDefaultContext {
		return this.getTypedRuleContext(ChoiceDefaultContext, 0) as ChoiceDefaultContext;
	}
	public functionDefinition_list(): FunctionDefinitionContext[] {
		return this.getTypedRuleContexts(FunctionDefinitionContext) as FunctionDefinitionContext[];
	}
	public functionDefinition(i: number): FunctionDefinitionContext {
		return this.getTypedRuleContext(FunctionDefinitionContext, i) as FunctionDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_choiceDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterChoiceDeclaration) {
	 		listener.enterChoiceDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitChoiceDeclaration) {
	 		listener.exitChoiceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitChoiceDeclaration) {
			return visitor.visitChoiceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceCasesContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public choiceCase_list(): ChoiceCaseContext[] {
		return this.getTypedRuleContexts(ChoiceCaseContext) as ChoiceCaseContext[];
	}
	public choiceCase(i: number): ChoiceCaseContext {
		return this.getTypedRuleContext(ChoiceCaseContext, i) as ChoiceCaseContext;
	}
	public choiceFieldDefinition(): ChoiceFieldDefinitionContext {
		return this.getTypedRuleContext(ChoiceFieldDefinitionContext, 0) as ChoiceFieldDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_choiceCases;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterChoiceCases) {
	 		listener.enterChoiceCases(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitChoiceCases) {
	 		listener.exitChoiceCases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitChoiceCases) {
			return visitor.visitChoiceCases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceCaseContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(ZserioParser.CASE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ZserioParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_choiceCase;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterChoiceCase) {
	 		listener.enterChoiceCase(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitChoiceCase) {
	 		listener.exitChoiceCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitChoiceCase) {
			return visitor.visitChoiceCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceDefaultContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(ZserioParser.DEFAULT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(ZserioParser.COLON, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public choiceFieldDefinition(): ChoiceFieldDefinitionContext {
		return this.getTypedRuleContext(ChoiceFieldDefinitionContext, 0) as ChoiceFieldDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_choiceDefault;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterChoiceDefault) {
	 		listener.enterChoiceDefault(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitChoiceDefault) {
	 		listener.exitChoiceDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitChoiceDefault) {
			return visitor.visitChoiceDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceFieldDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldTypeId(): FieldTypeIdContext {
		return this.getTypedRuleContext(FieldTypeIdContext, 0) as FieldTypeIdContext;
	}
	public fieldConstraint(): FieldConstraintContext {
		return this.getTypedRuleContext(FieldConstraintContext, 0) as FieldConstraintContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_choiceFieldDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterChoiceFieldDefinition) {
	 		listener.enterChoiceFieldDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitChoiceFieldDefinition) {
	 		listener.exitChoiceFieldDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitChoiceFieldDefinition) {
			return visitor.visitChoiceFieldDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNION(): TerminalNode {
		return this.getToken(ZserioParser.UNION, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public templateParameters(): TemplateParametersContext {
		return this.getTypedRuleContext(TemplateParametersContext, 0) as TemplateParametersContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public unionFieldDefinition_list(): UnionFieldDefinitionContext[] {
		return this.getTypedRuleContexts(UnionFieldDefinitionContext) as UnionFieldDefinitionContext[];
	}
	public unionFieldDefinition(i: number): UnionFieldDefinitionContext {
		return this.getTypedRuleContext(UnionFieldDefinitionContext, i) as UnionFieldDefinitionContext;
	}
	public functionDefinition_list(): FunctionDefinitionContext[] {
		return this.getTypedRuleContexts(FunctionDefinitionContext) as FunctionDefinitionContext[];
	}
	public functionDefinition(i: number): FunctionDefinitionContext {
		return this.getTypedRuleContext(FunctionDefinitionContext, i) as FunctionDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_unionDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterUnionDeclaration) {
	 		listener.enterUnionDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitUnionDeclaration) {
	 		listener.exitUnionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitUnionDeclaration) {
			return visitor.visitUnionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionFieldDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public choiceFieldDefinition(): ChoiceFieldDefinitionContext {
		return this.getTypedRuleContext(ChoiceFieldDefinitionContext, 0) as ChoiceFieldDefinitionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_unionFieldDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterUnionFieldDefinition) {
	 		listener.enterUnionFieldDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitUnionFieldDefinition) {
	 		listener.exitUnionFieldDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitUnionFieldDefinition) {
			return visitor.visitUnionFieldDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(ZserioParser.ENUM, 0);
	}
	public typeInstantiation(): TypeInstantiationContext {
		return this.getTypedRuleContext(TypeInstantiationContext, 0) as TypeInstantiationContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public enumItem_list(): EnumItemContext[] {
		return this.getTypedRuleContexts(EnumItemContext) as EnumItemContext[];
	}
	public enumItem(i: number): EnumItemContext {
		return this.getTypedRuleContext(EnumItemContext, i) as EnumItemContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ZserioParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_enumDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterEnumDeclaration) {
	 		listener.enterEnumDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitEnumDeclaration) {
	 		listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumItemContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(ZserioParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public DEPRECATED(): TerminalNode {
		return this.getToken(ZserioParser.DEPRECATED, 0);
	}
	public REMOVED(): TerminalNode {
		return this.getToken(ZserioParser.REMOVED, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_enumItem;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterEnumItem) {
	 		listener.enterEnumItem(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitEnumItem) {
	 		listener.exitEnumItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitEnumItem) {
			return visitor.visitEnumItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitmaskDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BITMASK(): TerminalNode {
		return this.getToken(ZserioParser.BITMASK, 0);
	}
	public typeInstantiation(): TypeInstantiationContext {
		return this.getTypedRuleContext(TypeInstantiationContext, 0) as TypeInstantiationContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public bitmaskValue_list(): BitmaskValueContext[] {
		return this.getTypedRuleContexts(BitmaskValueContext) as BitmaskValueContext[];
	}
	public bitmaskValue(i: number): BitmaskValueContext {
		return this.getTypedRuleContext(BitmaskValueContext, i) as BitmaskValueContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ZserioParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_bitmaskDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterBitmaskDeclaration) {
	 		listener.enterBitmaskDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitBitmaskDeclaration) {
	 		listener.exitBitmaskDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitBitmaskDeclaration) {
			return visitor.visitBitmaskDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitmaskValueContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(ZserioParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_bitmaskValue;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterBitmaskValue) {
	 		listener.enterBitmaskValue(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitBitmaskValue) {
	 		listener.exitBitmaskValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitBitmaskValue) {
			return visitor.visitBitmaskValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlTableDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SQL_TABLE(): TerminalNode {
		return this.getToken(ZserioParser.SQL_TABLE, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public templateParameters(): TemplateParametersContext {
		return this.getTypedRuleContext(TemplateParametersContext, 0) as TemplateParametersContext;
	}
	public USING(): TerminalNode {
		return this.getToken(ZserioParser.USING, 0);
	}
	public sqlTableFieldDefinition_list(): SqlTableFieldDefinitionContext[] {
		return this.getTypedRuleContexts(SqlTableFieldDefinitionContext) as SqlTableFieldDefinitionContext[];
	}
	public sqlTableFieldDefinition(i: number): SqlTableFieldDefinitionContext {
		return this.getTypedRuleContext(SqlTableFieldDefinitionContext, i) as SqlTableFieldDefinitionContext;
	}
	public sqlConstraintDefinition(): SqlConstraintDefinitionContext {
		return this.getTypedRuleContext(SqlConstraintDefinitionContext, 0) as SqlConstraintDefinitionContext;
	}
	public sqlWithoutRowId(): SqlWithoutRowIdContext {
		return this.getTypedRuleContext(SqlWithoutRowIdContext, 0) as SqlWithoutRowIdContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_sqlTableDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSqlTableDeclaration) {
	 		listener.enterSqlTableDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSqlTableDeclaration) {
	 		listener.exitSqlTableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSqlTableDeclaration) {
			return visitor.visitSqlTableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlTableFieldDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeInstantiation(): TypeInstantiationContext {
		return this.getTypedRuleContext(TypeInstantiationContext, 0) as TypeInstantiationContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public SQL_VIRTUAL(): TerminalNode {
		return this.getToken(ZserioParser.SQL_VIRTUAL, 0);
	}
	public sqlConstraint(): SqlConstraintContext {
		return this.getTypedRuleContext(SqlConstraintContext, 0) as SqlConstraintContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_sqlTableFieldDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSqlTableFieldDefinition) {
	 		listener.enterSqlTableFieldDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSqlTableFieldDefinition) {
	 		listener.exitSqlTableFieldDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSqlTableFieldDefinition) {
			return visitor.visitSqlTableFieldDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlConstraintDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sqlConstraint(): SqlConstraintContext {
		return this.getTypedRuleContext(SqlConstraintContext, 0) as SqlConstraintContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_sqlConstraintDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSqlConstraintDefinition) {
	 		listener.enterSqlConstraintDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSqlConstraintDefinition) {
	 		listener.exitSqlConstraintDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSqlConstraintDefinition) {
			return visitor.visitSqlConstraintDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlConstraintContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SQL(): TerminalNode {
		return this.getToken(ZserioParser.SQL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_sqlConstraint;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSqlConstraint) {
	 		listener.enterSqlConstraint(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSqlConstraint) {
	 		listener.exitSqlConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSqlConstraint) {
			return visitor.visitSqlConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlWithoutRowIdContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SQL_WITHOUT_ROWID(): TerminalNode {
		return this.getToken(ZserioParser.SQL_WITHOUT_ROWID, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_sqlWithoutRowId;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSqlWithoutRowId) {
	 		listener.enterSqlWithoutRowId(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSqlWithoutRowId) {
	 		listener.exitSqlWithoutRowId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSqlWithoutRowId) {
			return visitor.visitSqlWithoutRowId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlDatabaseDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SQL_DATABASE(): TerminalNode {
		return this.getToken(ZserioParser.SQL_DATABASE, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public sqlDatabaseFieldDefinition_list(): SqlDatabaseFieldDefinitionContext[] {
		return this.getTypedRuleContexts(SqlDatabaseFieldDefinitionContext) as SqlDatabaseFieldDefinitionContext[];
	}
	public sqlDatabaseFieldDefinition(i: number): SqlDatabaseFieldDefinitionContext {
		return this.getTypedRuleContext(SqlDatabaseFieldDefinitionContext, i) as SqlDatabaseFieldDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_sqlDatabaseDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSqlDatabaseDefinition) {
	 		listener.enterSqlDatabaseDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSqlDatabaseDefinition) {
	 		listener.exitSqlDatabaseDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSqlDatabaseDefinition) {
			return visitor.visitSqlDatabaseDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlDatabaseFieldDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeInstantiation(): TypeInstantiationContext {
		return this.getTypedRuleContext(TypeInstantiationContext, 0) as TypeInstantiationContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_sqlDatabaseFieldDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterSqlDatabaseFieldDefinition) {
	 		listener.enterSqlDatabaseFieldDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitSqlDatabaseFieldDefinition) {
	 		listener.exitSqlDatabaseFieldDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitSqlDatabaseFieldDefinition) {
			return visitor.visitSqlDatabaseFieldDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SERVICE(): TerminalNode {
		return this.getToken(ZserioParser.SERVICE, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public serviceMethodDefinition_list(): ServiceMethodDefinitionContext[] {
		return this.getTypedRuleContexts(ServiceMethodDefinitionContext) as ServiceMethodDefinitionContext[];
	}
	public serviceMethodDefinition(i: number): ServiceMethodDefinitionContext {
		return this.getTypedRuleContext(ServiceMethodDefinitionContext, i) as ServiceMethodDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_serviceDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterServiceDefinition) {
	 		listener.enterServiceDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitServiceDefinition) {
	 		listener.exitServiceDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitServiceDefinition) {
			return visitor.visitServiceDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceMethodDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeReference_list(): TypeReferenceContext[] {
		return this.getTypedRuleContexts(TypeReferenceContext) as TypeReferenceContext[];
	}
	public typeReference(i: number): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, i) as TypeReferenceContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_serviceMethodDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterServiceMethodDefinition) {
	 		listener.enterServiceMethodDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitServiceMethodDefinition) {
	 		listener.exitServiceMethodDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitServiceMethodDefinition) {
			return visitor.visitServiceMethodDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PubsubDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PUBSUB(): TerminalNode {
		return this.getToken(ZserioParser.PUBSUB, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public pubsubMessageDefinition_list(): PubsubMessageDefinitionContext[] {
		return this.getTypedRuleContexts(PubsubMessageDefinitionContext) as PubsubMessageDefinitionContext[];
	}
	public pubsubMessageDefinition(i: number): PubsubMessageDefinitionContext {
		return this.getTypedRuleContext(PubsubMessageDefinitionContext, i) as PubsubMessageDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_pubsubDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterPubsubDefinition) {
	 		listener.enterPubsubDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitPubsubDefinition) {
	 		listener.exitPubsubDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitPubsubDefinition) {
			return visitor.visitPubsubDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PubsubMessageDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public topicDefinition(): TopicDefinitionContext {
		return this.getTypedRuleContext(TopicDefinitionContext, 0) as TopicDefinitionContext;
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_pubsubMessageDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterPubsubMessageDefinition) {
	 		listener.enterPubsubMessageDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitPubsubMessageDefinition) {
	 		listener.exitPubsubMessageDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitPubsubMessageDefinition) {
			return visitor.visitPubsubMessageDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopicDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOPIC(): TerminalNode {
		return this.getToken(ZserioParser.TOPIC, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public PUBLISH(): TerminalNode {
		return this.getToken(ZserioParser.PUBLISH, 0);
	}
	public SUBSCRIBE(): TerminalNode {
		return this.getToken(ZserioParser.SUBSCRIBE, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_topicDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTopicDefinition) {
	 		listener.enterTopicDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTopicDefinition) {
	 		listener.exitTopicDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTopicDefinition) {
			return visitor.visitTopicDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(ZserioParser.FUNCTION, 0);
	}
	public functionType(): FunctionTypeContext {
		return this.getTypedRuleContext(FunctionTypeContext, 0) as FunctionTypeContext;
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_functionDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFunctionDefinition) {
	 		listener.enterFunctionDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFunctionDefinition) {
	 		listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_functionType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFunctionType) {
	 		listener.enterFunctionType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFunctionType) {
	 		listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_functionName;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFunctionName) {
	 		listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(ZserioParser.LBRACE, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(ZserioParser.RETURN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(ZserioParser.RBRACE, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_functionBody;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFunctionBody) {
	 		listener.enterFunctionBody(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFunctionBody) {
	 		listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public parameterDefinition_list(): ParameterDefinitionContext[] {
		return this.getTypedRuleContexts(ParameterDefinitionContext) as ParameterDefinitionContext[];
	}
	public parameterDefinition(i: number): ParameterDefinitionContext {
		return this.getTypedRuleContext(ParameterDefinitionContext, i) as ParameterDefinitionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ZserioParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_typeParameters;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTypeParameters) {
	 		listener.enterTypeParameters(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTypeParameters) {
	 		listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDefinitionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_parameterDefinition;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterParameterDefinition) {
	 		listener.enterParameterDefinition(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitParameterDefinition) {
	 		listener.exitParameterDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitParameterDefinition) {
			return visitor.visitParameterDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateParametersContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(ZserioParser.LT, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ZserioParser.GT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ZserioParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_templateParameters;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTemplateParameters) {
	 		listener.enterTemplateParameters(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTemplateParameters) {
	 		listener.exitTemplateParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTemplateParameters) {
			return visitor.visitTemplateParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateArgumentsContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(ZserioParser.LT, 0);
	}
	public templateArgument_list(): TemplateArgumentContext[] {
		return this.getTypedRuleContexts(TemplateArgumentContext) as TemplateArgumentContext[];
	}
	public templateArgument(i: number): TemplateArgumentContext {
		return this.getTypedRuleContext(TemplateArgumentContext, i) as TemplateArgumentContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ZserioParser.GT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ZserioParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_templateArguments;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTemplateArguments) {
	 		listener.enterTemplateArguments(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTemplateArguments) {
	 		listener.exitTemplateArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTemplateArguments) {
			return visitor.visitTemplateArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateArgumentContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_templateArgument;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTemplateArgument) {
	 		listener.enterTemplateArgument(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTemplateArgument) {
	 		listener.exitTemplateArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTemplateArgument) {
			return visitor.visitTemplateArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateDeclarationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INSTANTIATE(): TerminalNode {
		return this.getToken(ZserioParser.INSTANTIATE, 0);
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(ZserioParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_instantiateDeclaration;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterInstantiateDeclaration) {
	 		listener.enterInstantiateDeclaration(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitInstantiateDeclaration) {
	 		listener.exitInstantiateDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitInstantiateDeclaration) {
			return visitor.visitInstantiateDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_expression;
	}
	public override copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BitwiseXorExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public XOR(): TerminalNode {
		return this.getToken(ZserioParser.XOR, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterBitwiseXorExpression) {
	 		listener.enterBitwiseXorExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitBitwiseXorExpression) {
	 		listener.exitBitwiseXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitBitwiseXorExpression) {
			return visitor.visitBitwiseXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(ZserioParser.DOT, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterDotExpression) {
	 		listener.enterDotExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitDotExpression) {
	 		listener.exitDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitDotExpression) {
			return visitor.visitDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueofExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public VALUEOF(): TerminalNode {
		return this.getToken(ZserioParser.VALUEOF, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterValueofExpression) {
	 		listener.enterValueofExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitValueofExpression) {
	 		listener.exitValueofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitValueofExpression) {
			return visitor.visitValueofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShiftExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public GT_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.GT);
	}
	public GT(i: number): TerminalNode {
		return this.getToken(ZserioParser.GT, i);
	}
	public LSHIFT(): TerminalNode {
		return this.getToken(ZserioParser.LSHIFT, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterShiftExpression) {
	 		listener.enterShiftExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitShiftExpression) {
	 		listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(ZserioParser.RBRACKET, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(ZserioParser.LBRACKET, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterArrayExpression) {
	 		listener.enterArrayExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitArrayExpression) {
	 		listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumbitsExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public NUMBITS(): TerminalNode {
		return this.getToken(ZserioParser.NUMBITS, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterNumbitsExpression) {
	 		listener.enterNumbitsExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitNumbitsExpression) {
	 		listener.exitNumbitsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitNumbitsExpression) {
			return visitor.visitNumbitsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(ZserioParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(ZserioParser.MINUS, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public LT(): TerminalNode {
		return this.getToken(ZserioParser.LT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(ZserioParser.LE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(ZserioParser.GT, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(ZserioParser.GE, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LengthofExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public LENGTHOF(): TerminalNode {
		return this.getToken(ZserioParser.LENGTHOF, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterLengthofExpression) {
	 		listener.enterLengthofExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitLengthofExpression) {
	 		listener.exitLengthofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitLengthofExpression) {
			return visitor.visitLengthofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterIdentifierExpression) {
	 		listener.enterIdentifierExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitIdentifierExpression) {
	 		listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public MULTIPLY(): TerminalNode {
		return this.getToken(ZserioParser.MULTIPLY, 0);
	}
	public DIVIDE(): TerminalNode {
		return this.getToken(ZserioParser.DIVIDE, 0);
	}
	public MODULO(): TerminalNode {
		return this.getToken(ZserioParser.MODULO, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public LOGICAL_OR(): TerminalNode {
		return this.getToken(ZserioParser.LOGICAL_OR, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterLogicalOrExpression) {
	 		listener.enterLogicalOrExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitLogicalOrExpression) {
	 		listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsSetExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(ZserioParser.COMMA, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public ISSET(): TerminalNode {
		return this.getToken(ZserioParser.ISSET, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterIsSetExpression) {
	 		listener.enterIsSetExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitIsSetExpression) {
	 		listener.exitIsSetExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitIsSetExpression) {
			return visitor.visitIsSetExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseOrExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public OR(): TerminalNode {
		return this.getToken(ZserioParser.OR, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterBitwiseOrExpression) {
	 		listener.enterBitwiseOrExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitBitwiseOrExpression) {
	 		listener.exitBitwiseOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitBitwiseOrExpression) {
			return visitor.visitBitwiseOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseAndExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(ZserioParser.AND, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterBitwiseAndExpression) {
	 		listener.enterBitwiseAndExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitBitwiseAndExpression) {
	 		listener.exitBitwiseAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitBitwiseAndExpression) {
			return visitor.visitBitwiseAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(ZserioParser.EQ, 0);
	}
	public NE(): TerminalNode {
		return this.getToken(ZserioParser.NE, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public LOGICAL_AND(): TerminalNode {
		return this.getToken(ZserioParser.LOGICAL_AND, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterLogicalAndExpression) {
	 		listener.enterLogicalAndExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitLogicalAndExpression) {
	 		listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFunctionCallExpression) {
	 		listener.enterFunctionCallExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFunctionCallExpression) {
	 		listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexExpressionContext extends ExpressionContext {
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INDEX(): TerminalNode {
		return this.getToken(ZserioParser.INDEX, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterIndexExpression) {
	 		listener.enterIndexExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitIndexExpression) {
	 		listener.exitIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitIndexExpression) {
			return visitor.visitIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(ZserioParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(ZserioParser.MINUS, 0);
	}
	public BANG(): TerminalNode {
		return this.getToken(ZserioParser.BANG, 0);
	}
	public TILDE(): TerminalNode {
		return this.getToken(ZserioParser.TILDE, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterLiteralExpression) {
	 		listener.enterLiteralExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitLiteralExpression) {
	 		listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public _operator!: Token;
	constructor(parser: ZserioParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ZserioParser.COLON, 0);
	}
	public QUESTIONMARK(): TerminalNode {
		return this.getToken(ZserioParser.QUESTIONMARK, 0);
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTernaryExpression) {
	 		listener.enterTernaryExpression(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTernaryExpression) {
	 		listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BINARY_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.BINARY_LITERAL, 0);
	}
	public OCTAL_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.OCTAL_LITERAL, 0);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.DECIMAL_LITERAL, 0);
	}
	public HEXADECIMAL_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.HEXADECIMAL_LITERAL, 0);
	}
	public BOOL_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.BOOL_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.STRING_LITERAL, 0);
	}
	public FLOAT_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.FLOAT_LITERAL, 0);
	}
	public DOUBLE_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.DOUBLE_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_literal;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(ZserioParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_id;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterId) {
	 		listener.enterId(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitId) {
	 		listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeReferenceContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public builtinType(): BuiltinTypeContext {
		return this.getTypedRuleContext(BuiltinTypeContext, 0) as BuiltinTypeContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public templateArguments(): TemplateArgumentsContext {
		return this.getTypedRuleContext(TemplateArgumentsContext, 0) as TemplateArgumentsContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_typeReference;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTypeReference) {
	 		listener.enterTypeReference(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTypeReference) {
	 		listener.exitTypeReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTypeReference) {
			return visitor.visitTypeReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeInstantiationContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeReference(): TypeReferenceContext {
		return this.getTypedRuleContext(TypeReferenceContext, 0) as TypeReferenceContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public dynamicLengthArgument(): DynamicLengthArgumentContext {
		return this.getTypedRuleContext(DynamicLengthArgumentContext, 0) as DynamicLengthArgumentContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_typeInstantiation;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTypeInstantiation) {
	 		listener.enterTypeInstantiation(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTypeInstantiation) {
	 		listener.exitTypeInstantiation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTypeInstantiation) {
			return visitor.visitTypeInstantiation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltinTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intType(): IntTypeContext {
		return this.getTypedRuleContext(IntTypeContext, 0) as IntTypeContext;
	}
	public varintType(): VarintTypeContext {
		return this.getTypedRuleContext(VarintTypeContext, 0) as VarintTypeContext;
	}
	public fixedBitFieldType(): FixedBitFieldTypeContext {
		return this.getTypedRuleContext(FixedBitFieldTypeContext, 0) as FixedBitFieldTypeContext;
	}
	public dynamicBitFieldType(): DynamicBitFieldTypeContext {
		return this.getTypedRuleContext(DynamicBitFieldTypeContext, 0) as DynamicBitFieldTypeContext;
	}
	public boolType(): BoolTypeContext {
		return this.getTypedRuleContext(BoolTypeContext, 0) as BoolTypeContext;
	}
	public stringType(): StringTypeContext {
		return this.getTypedRuleContext(StringTypeContext, 0) as StringTypeContext;
	}
	public floatType(): FloatTypeContext {
		return this.getTypedRuleContext(FloatTypeContext, 0) as FloatTypeContext;
	}
	public externType(): ExternTypeContext {
		return this.getTypedRuleContext(ExternTypeContext, 0) as ExternTypeContext;
	}
	public bytesType(): BytesTypeContext {
		return this.getTypedRuleContext(BytesTypeContext, 0) as BytesTypeContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_builtinType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterBuiltinType) {
	 		listener.enterBuiltinType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitBuiltinType) {
	 		listener.exitBuiltinType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitBuiltinType) {
			return visitor.visitBuiltinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(ZserioParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_qualifiedName;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ZserioParser.LPAREN, 0);
	}
	public typeArgument_list(): TypeArgumentContext[] {
		return this.getTypedRuleContexts(TypeArgumentContext) as TypeArgumentContext[];
	}
	public typeArgument(i: number): TypeArgumentContext {
		return this.getTypedRuleContext(TypeArgumentContext, i) as TypeArgumentContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ZserioParser.RPAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ZserioParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ZserioParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_typeArguments;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTypeArguments) {
	 		listener.enterTypeArguments(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTypeArguments) {
	 		listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPLICIT(): TerminalNode {
		return this.getToken(ZserioParser.EXPLICIT, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_typeArgument;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterTypeArgument) {
	 		listener.enterTypeArgument(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitTypeArgument) {
	 		listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DynamicLengthArgumentContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(ZserioParser.LT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ZserioParser.GT, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_dynamicLengthArgument;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterDynamicLengthArgument) {
	 		listener.enterDynamicLengthArgument(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitDynamicLengthArgument) {
	 		listener.exitDynamicLengthArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitDynamicLengthArgument) {
			return visitor.visitDynamicLengthArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT8(): TerminalNode {
		return this.getToken(ZserioParser.INT8, 0);
	}
	public INT16(): TerminalNode {
		return this.getToken(ZserioParser.INT16, 0);
	}
	public INT32(): TerminalNode {
		return this.getToken(ZserioParser.INT32, 0);
	}
	public INT64(): TerminalNode {
		return this.getToken(ZserioParser.INT64, 0);
	}
	public UINT8(): TerminalNode {
		return this.getToken(ZserioParser.UINT8, 0);
	}
	public UINT16(): TerminalNode {
		return this.getToken(ZserioParser.UINT16, 0);
	}
	public UINT32(): TerminalNode {
		return this.getToken(ZserioParser.UINT32, 0);
	}
	public UINT64(): TerminalNode {
		return this.getToken(ZserioParser.UINT64, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_intType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterIntType) {
	 		listener.enterIntType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitIntType) {
	 		listener.exitIntType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitIntType) {
			return visitor.visitIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarintTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARINT(): TerminalNode {
		return this.getToken(ZserioParser.VARINT, 0);
	}
	public VARINT16(): TerminalNode {
		return this.getToken(ZserioParser.VARINT16, 0);
	}
	public VARINT32(): TerminalNode {
		return this.getToken(ZserioParser.VARINT32, 0);
	}
	public VARINT64(): TerminalNode {
		return this.getToken(ZserioParser.VARINT64, 0);
	}
	public VARSIZE(): TerminalNode {
		return this.getToken(ZserioParser.VARSIZE, 0);
	}
	public VARUINT(): TerminalNode {
		return this.getToken(ZserioParser.VARUINT, 0);
	}
	public VARUINT16(): TerminalNode {
		return this.getToken(ZserioParser.VARUINT16, 0);
	}
	public VARUINT32(): TerminalNode {
		return this.getToken(ZserioParser.VARUINT32, 0);
	}
	public VARUINT64(): TerminalNode {
		return this.getToken(ZserioParser.VARUINT64, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_varintType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterVarintType) {
	 		listener.enterVarintType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitVarintType) {
	 		listener.exitVarintType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitVarintType) {
			return visitor.visitVarintType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixedBitFieldTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(ZserioParser.COLON, 0);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(ZserioParser.DECIMAL_LITERAL, 0);
	}
	public BIT_FIELD(): TerminalNode {
		return this.getToken(ZserioParser.BIT_FIELD, 0);
	}
	public INT_FIELD(): TerminalNode {
		return this.getToken(ZserioParser.INT_FIELD, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_fixedBitFieldType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFixedBitFieldType) {
	 		listener.enterFixedBitFieldType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFixedBitFieldType) {
	 		listener.exitFixedBitFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFixedBitFieldType) {
			return visitor.visitFixedBitFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DynamicBitFieldTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BIT_FIELD(): TerminalNode {
		return this.getToken(ZserioParser.BIT_FIELD, 0);
	}
	public INT_FIELD(): TerminalNode {
		return this.getToken(ZserioParser.INT_FIELD, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_dynamicBitFieldType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterDynamicBitFieldType) {
	 		listener.enterDynamicBitFieldType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitDynamicBitFieldType) {
	 		listener.exitDynamicBitFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitDynamicBitFieldType) {
			return visitor.visitDynamicBitFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL(): TerminalNode {
		return this.getToken(ZserioParser.BOOL, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_boolType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterBoolType) {
	 		listener.enterBoolType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitBoolType) {
	 		listener.exitBoolType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitBoolType) {
			return visitor.visitBoolType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(ZserioParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_stringType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterStringType) {
	 		listener.enterStringType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitStringType) {
	 		listener.exitStringType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitStringType) {
			return visitor.visitStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT16(): TerminalNode {
		return this.getToken(ZserioParser.FLOAT16, 0);
	}
	public FLOAT32(): TerminalNode {
		return this.getToken(ZserioParser.FLOAT32, 0);
	}
	public FLOAT64(): TerminalNode {
		return this.getToken(ZserioParser.FLOAT64, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_floatType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterFloatType) {
	 		listener.enterFloatType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitFloatType) {
	 		listener.exitFloatType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitFloatType) {
			return visitor.visitFloatType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTERN(): TerminalNode {
		return this.getToken(ZserioParser.EXTERN, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_externType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterExternType) {
	 		listener.enterExternType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitExternType) {
	 		listener.exitExternType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitExternType) {
			return visitor.visitExternType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BytesTypeContext extends ParserRuleContext {
	constructor(parser?: ZserioParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BYTES(): TerminalNode {
		return this.getToken(ZserioParser.BYTES, 0);
	}
    public get ruleIndex(): number {
    	return ZserioParser.RULE_bytesType;
	}
	public enterRule(listener: ZserioParserListener): void {
	    if(listener.enterBytesType) {
	 		listener.enterBytesType(this);
		}
	}
	public exitRule(listener: ZserioParserListener): void {
	    if(listener.exitBytesType) {
	 		listener.exitBytesType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZserioParserVisitor<Result>): Result {
		if (visitor.visitBytesType) {
			return visitor.visitBytesType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
