// Generated from ZserioParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { ZserioParserListener } from "./ZserioParserListener.js";
import { ZserioParserVisitor } from "./ZserioParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class ZserioParser extends antlr.Parser {
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

    public static readonly literalNames = [
        null, "'&'", "'='", "'!'", "':'", "','", "'/'", "'.'", "'=='", "'>='", 
        "'>'", "'{'", "'['", "'<='", "'&&'", "'||'", "'('", "'<<'", "'<'", 
        "'-'", "'%'", "'*'", "'!='", "'|'", "'+'", "'?'", "'}'", "']'", 
        "')'", "';'", "'~'", "'^'", "'align'", "'bit'", "'bool'", "'bitmask'", 
        "'bytes'", "'case'", "'choice'", "'const'", "'default'", "'@deprecated'", 
        "'enum'", "'explicit'", "'extend'", "'extern'", "'float16'", "'float32'", 
        "'float64'", "'function'", "'if'", "'implicit'", "'import'", "'@index'", 
        "'instantiate'", "'int'", "'int16'", "'int32'", "'int64'", "'int8'", 
        "'isset'", "'lengthof'", "'numbits'", "'on'", "'optional'", "'package'", 
        "'packed'", "'pubsub'", "'publish'", "'@removed'", "'return'", "'rule'", 
        "'rule_group'", "'service'", "'sql'", "'sql_database'", "'sql_table'", 
        "'sql_virtual'", "'sql_without_rowid'", "'string'", "'struct'", 
        "'subscribe'", "'subtype'", "'topic'", "'uint16'", "'uint32'", "'uint64'", 
        "'uint8'", "'union'", "'using'", "'valueof'", "'varint'", "'varint16'", 
        "'varint32'", "'varint64'", "'varsize'", "'varuint'", "'varuint16'", 
        "'varuint32'", "'varuint64'", "'zserio_compatibility_version'"
    ];

    public static readonly symbolicNames = [
        null, "AND", "ASSIGN", "BANG", "COLON", "COMMA", "DIVIDE", "DOT", 
        "EQ", "GE", "GT", "LBRACE", "LBRACKET", "LE", "LOGICAL_AND", "LOGICAL_OR", 
        "LPAREN", "LSHIFT", "LT", "MINUS", "MODULO", "MULTIPLY", "NE", "OR", 
        "PLUS", "QUESTIONMARK", "RBRACE", "RBRACKET", "RPAREN", "SEMICOLON", 
        "TILDE", "XOR", "ALIGN", "BIT_FIELD", "BOOL", "BITMASK", "BYTES", 
        "CASE", "CHOICE", "CONST", "DEFAULT", "DEPRECATED", "ENUM", "EXPLICIT", 
        "EXTEND", "EXTERN", "FLOAT16", "FLOAT32", "FLOAT64", "FUNCTION", 
        "IF", "IMPLICIT", "IMPORT", "INDEX", "INSTANTIATE", "INT_FIELD", 
        "INT16", "INT32", "INT64", "INT8", "ISSET", "LENGTHOF", "NUMBITS", 
        "ON", "OPTIONAL", "PACKAGE", "PACKED", "PUBSUB", "PUBLISH", "REMOVED", 
        "RETURN", "RULE", "RULE_GROUP", "SERVICE", "SQL", "SQL_DATABASE", 
        "SQL_TABLE", "SQL_VIRTUAL", "SQL_WITHOUT_ROWID", "STRING", "STRUCTURE", 
        "SUBSCRIBE", "SUBTYPE", "TOPIC", "UINT16", "UINT32", "UINT64", "UINT8", 
        "UNION", "USING", "VALUEOF", "VARINT", "VARINT16", "VARINT32", "VARINT64", 
        "VARSIZE", "VARUINT", "VARUINT16", "VARUINT32", "VARUINT64", "COMPAT_VERSION", 
        "WS", "DOC_COMMENT", "MARKDOWN_COMMENT", "BLOCK_COMMENT", "LINE_COMMENT", 
        "BOOL_LITERAL", "STRING_LITERAL", "BINARY_LITERAL", "OCTAL_LITERAL", 
        "HEXADECIMAL_LITERAL", "DOUBLE_LITERAL", "FLOAT_LITERAL", "DECIMAL_LITERAL", 
        "ID", "INVALID_STRING_LITERAL", "INVALID_TOKEN", "RSHIFT"
    ];
    public static readonly ruleNames = [
        "packageDeclaration", "compatibilityVersionDirective", "packageNameDefinition", 
        "importDeclaration", "languageDirective", "typeDeclaration", "symbolDefinition", 
        "constDefinition", "ruleGroupDefinition", "ruleDefinition", "subtypeDeclaration", 
        "structureDeclaration", "structureFieldDefinition", "fieldAlignment", 
        "fieldOffset", "fieldTypeId", "fieldArrayRange", "fieldInitializer", 
        "fieldOptionalClause", "fieldConstraint", "choiceDeclaration", "choiceCases", 
        "choiceCase", "choiceDefault", "choiceFieldDefinition", "unionDeclaration", 
        "unionFieldDefinition", "enumDeclaration", "enumItem", "bitmaskDeclaration", 
        "bitmaskValue", "sqlTableDeclaration", "sqlTableFieldDefinition", 
        "sqlConstraintDefinition", "sqlConstraint", "sqlWithoutRowId", "sqlDatabaseDefinition", 
        "sqlDatabaseFieldDefinition", "serviceDefinition", "serviceMethodDefinition", 
        "pubsubDefinition", "pubsubMessageDefinition", "topicDefinition", 
        "functionDefinition", "functionType", "functionName", "functionBody", 
        "typeParameters", "parameterDefinition", "templateParameters", "templateArguments", 
        "templateArgument", "instantiateDeclaration", "expression", "literal", 
        "id", "typeReference", "typeInstantiation", "builtinType", "qualifiedName", 
        "typeArguments", "typeArgument", "dynamicLengthArgument", "intType", 
        "varintType", "fixedBitFieldType", "dynamicBitFieldType", "boolType", 
        "stringType", "floatType", "externType", "bytesType",
    ];

    public get grammarFileName(): string { return "ZserioParser.g4"; }
    public get literalNames(): (string | null)[] { return ZserioParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return ZserioParser.symbolicNames; }
    public get ruleNames(): string[] { return ZserioParser.ruleNames; }
    public get serializedATN(): number[] { return ZserioParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, ZserioParser._ATN, ZserioParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public packageDeclaration(): PackageDeclarationContext {
        let localContext = new PackageDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 0, ZserioParser.RULE_packageDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 100) {
                {
                this.state = 144;
                this.compatibilityVersionDirective();
                }
            }

            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65) {
                {
                this.state = 147;
                this.packageNameDefinition();
                }
            }

            this.state = 153;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 150;
                this.importDeclaration();
                }
                }
                this.state = 155;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 524441) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2138977) !== 0)) {
                {
                {
                this.state = 156;
                this.languageDirective();
                }
                }
                this.state = 161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 162;
            this.match(ZserioParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compatibilityVersionDirective(): CompatibilityVersionDirectiveContext {
        let localContext = new CompatibilityVersionDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 2, ZserioParser.RULE_compatibilityVersionDirective);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public packageNameDefinition(): PackageNameDefinitionContext {
        let localContext = new PackageNameDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 4, ZserioParser.RULE_packageNameDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.match(ZserioParser.PACKAGE);
            this.state = 171;
            this.id();
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 172;
                this.match(ZserioParser.DOT);
                this.state = 173;
                this.id();
                }
                }
                this.state = 178;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 179;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public importDeclaration(): ImportDeclarationContext {
        let localContext = new ImportDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 6, ZserioParser.RULE_importDeclaration);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 181;
            this.match(ZserioParser.IMPORT);
            this.state = 182;
            this.id();
            this.state = 183;
            this.match(ZserioParser.DOT);
            this.state = 189;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            this.state = 194;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ZserioParser.ID:
                {
                this.state = 192;
                this.id();
                }
                break;
            case ZserioParser.MULTIPLY:
                {
                this.state = 193;
                this.match(ZserioParser.MULTIPLY);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 196;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public languageDirective(): LanguageDirectiveContext {
        let localContext = new LanguageDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 8, ZserioParser.RULE_languageDirective);
        try {
            this.state = 200;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ZserioParser.CONST:
            case ZserioParser.RULE_GROUP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 198;
                this.symbolDefinition();
                }
                break;
            case ZserioParser.BITMASK:
            case ZserioParser.CHOICE:
            case ZserioParser.ENUM:
            case ZserioParser.INSTANTIATE:
            case ZserioParser.PUBSUB:
            case ZserioParser.SERVICE:
            case ZserioParser.SQL_DATABASE:
            case ZserioParser.SQL_TABLE:
            case ZserioParser.STRUCTURE:
            case ZserioParser.SUBTYPE:
            case ZserioParser.UNION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 199;
                this.typeDeclaration();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeDeclaration(): TypeDeclarationContext {
        let localContext = new TypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 10, ZserioParser.RULE_typeDeclaration);
        try {
            this.state = 213;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ZserioParser.SUBTYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 202;
                this.subtypeDeclaration();
                }
                break;
            case ZserioParser.STRUCTURE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 203;
                this.structureDeclaration();
                }
                break;
            case ZserioParser.CHOICE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 204;
                this.choiceDeclaration();
                }
                break;
            case ZserioParser.UNION:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 205;
                this.unionDeclaration();
                }
                break;
            case ZserioParser.ENUM:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 206;
                this.enumDeclaration();
                }
                break;
            case ZserioParser.BITMASK:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 207;
                this.bitmaskDeclaration();
                }
                break;
            case ZserioParser.SQL_TABLE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 208;
                this.sqlTableDeclaration();
                }
                break;
            case ZserioParser.SQL_DATABASE:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 209;
                this.sqlDatabaseDefinition();
                }
                break;
            case ZserioParser.SERVICE:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 210;
                this.serviceDefinition();
                }
                break;
            case ZserioParser.PUBSUB:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 211;
                this.pubsubDefinition();
                }
                break;
            case ZserioParser.INSTANTIATE:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 212;
                this.instantiateDeclaration();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public symbolDefinition(): SymbolDefinitionContext {
        let localContext = new SymbolDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 12, ZserioParser.RULE_symbolDefinition);
        try {
            this.state = 217;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ZserioParser.CONST:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 215;
                this.constDefinition();
                }
                break;
            case ZserioParser.RULE_GROUP:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 216;
                this.ruleGroupDefinition();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constDefinition(): ConstDefinitionContext {
        let localContext = new ConstDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 14, ZserioParser.RULE_constDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ruleGroupDefinition(): RuleGroupDefinitionContext {
        let localContext = new RuleGroupDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 16, ZserioParser.RULE_ruleGroupDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.match(ZserioParser.RULE_GROUP);
            this.state = 227;
            this.id();
            this.state = 228;
            this.match(ZserioParser.LBRACE);
            this.state = 232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 71) {
                {
                {
                this.state = 229;
                this.ruleDefinition();
                }
                }
                this.state = 234;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 235;
            this.match(ZserioParser.RBRACE);
            this.state = 236;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ruleDefinition(): RuleDefinitionContext {
        let localContext = new RuleDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 18, ZserioParser.RULE_ruleDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subtypeDeclaration(): SubtypeDeclarationContext {
        let localContext = new SubtypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 20, ZserioParser.RULE_subtypeDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structureDeclaration(): StructureDeclarationContext {
        let localContext = new StructureDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 22, ZserioParser.RULE_structureDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 247;
            this.match(ZserioParser.STRUCTURE);
            this.state = 248;
            this.id();
            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 249;
                this.templateParameters();
                }
            }

            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 252;
                this.typeParameters();
                }
            }

            this.state = 255;
            this.match(ZserioParser.LBRACE);
            this.state = 259;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1091108872) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2141843479) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4243619845) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 523279) !== 0)) {
                {
                {
                this.state = 256;
                this.structureFieldDefinition();
                }
                }
                this.state = 261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 265;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 49) {
                {
                {
                this.state = 262;
                this.functionDefinition();
                }
                }
                this.state = 267;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 268;
            this.match(ZserioParser.RBRACE);
            this.state = 269;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structureFieldDefinition(): StructureFieldDefinitionContext {
        let localContext = new StructureFieldDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 24, ZserioParser.RULE_structureFieldDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 272;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 271;
                this.fieldAlignment();
                }
            }

            this.state = 275;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
            case 1:
                {
                this.state = 274;
                this.fieldOffset();
                }
                break;
            }
            this.state = 278;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 277;
                this.match(ZserioParser.EXTEND);
                }
            }

            this.state = 281;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 280;
                this.match(ZserioParser.OPTIONAL);
                }
            }

            this.state = 283;
            this.fieldTypeId();
            this.state = 285;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 284;
                this.fieldInitializer();
                }
            }

            this.state = 288;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 287;
                this.fieldOptionalClause();
                }
            }

            this.state = 291;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldAlignment(): FieldAlignmentContext {
        let localContext = new FieldAlignmentContext(this.context, this.state);
        this.enterRule(localContext, 26, ZserioParser.RULE_fieldAlignment);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldOffset(): FieldOffsetContext {
        let localContext = new FieldOffsetContext(this.context, this.state);
        this.enterRule(localContext, 28, ZserioParser.RULE_fieldOffset);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 301;
            this.expression(0);
            this.state = 302;
            this.match(ZserioParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldTypeId(): FieldTypeIdContext {
        let localContext = new FieldTypeIdContext(this.context, this.state);
        this.enterRule(localContext, 30, ZserioParser.RULE_fieldTypeId);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 305;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 66) {
                {
                this.state = 304;
                this.match(ZserioParser.PACKED);
                }
            }

            this.state = 308;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
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
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 312;
                this.fieldArrayRange();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldArrayRange(): FieldArrayRangeContext {
        let localContext = new FieldArrayRangeContext(this.context, this.state);
        this.enterRule(localContext, 32, ZserioParser.RULE_fieldArrayRange);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 315;
            this.match(ZserioParser.LBRACKET);
            this.state = 317;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldInitializer(): FieldInitializerContext {
        let localContext = new FieldInitializerContext(this.context, this.state);
        this.enterRule(localContext, 34, ZserioParser.RULE_fieldInitializer);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 321;
            this.match(ZserioParser.ASSIGN);
            this.state = 322;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldOptionalClause(): FieldOptionalClauseContext {
        let localContext = new FieldOptionalClauseContext(this.context, this.state);
        this.enterRule(localContext, 36, ZserioParser.RULE_fieldOptionalClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 324;
            this.match(ZserioParser.IF);
            this.state = 325;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldConstraint(): FieldConstraintContext {
        let localContext = new FieldConstraintContext(this.context, this.state);
        this.enterRule(localContext, 38, ZserioParser.RULE_fieldConstraint);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 327;
            this.match(ZserioParser.COLON);
            this.state = 328;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public choiceDeclaration(): ChoiceDeclarationContext {
        let localContext = new ChoiceDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 40, ZserioParser.RULE_choiceDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 330;
            this.match(ZserioParser.CHOICE);
            this.state = 331;
            this.id();
            this.state = 333;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
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
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 37) {
                {
                {
                this.state = 339;
                this.choiceCases();
                }
                }
                this.state = 344;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 346;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 345;
                this.choiceDefault();
                }
            }

            this.state = 351;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 49) {
                {
                {
                this.state = 348;
                this.functionDefinition();
                }
                }
                this.state = 353;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 354;
            this.match(ZserioParser.RBRACE);
            this.state = 355;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public choiceCases(): ChoiceCasesContext {
        let localContext = new ChoiceCasesContext(this.context, this.state);
        this.enterRule(localContext, 42, ZserioParser.RULE_choiceCases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 358;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 357;
                this.choiceCase();
                }
                }
                this.state = 360;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 37);
            this.state = 363;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public choiceCase(): ChoiceCaseContext {
        let localContext = new ChoiceCaseContext(this.context, this.state);
        this.enterRule(localContext, 44, ZserioParser.RULE_choiceCase);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public choiceDefault(): ChoiceDefaultContext {
        let localContext = new ChoiceDefaultContext(this.context, this.state);
        this.enterRule(localContext, 46, ZserioParser.RULE_choiceDefault);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 371;
            this.match(ZserioParser.DEFAULT);
            this.state = 372;
            this.match(ZserioParser.COLON);
            this.state = 374;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public choiceFieldDefinition(): ChoiceFieldDefinitionContext {
        let localContext = new ChoiceFieldDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 48, ZserioParser.RULE_choiceFieldDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 378;
            this.fieldTypeId();
            this.state = 380;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 379;
                this.fieldConstraint();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unionDeclaration(): UnionDeclarationContext {
        let localContext = new UnionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 50, ZserioParser.RULE_unionDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 382;
            this.match(ZserioParser.UNION);
            this.state = 383;
            this.id();
            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 384;
                this.templateParameters();
                }
            }

            this.state = 388;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 387;
                this.typeParameters();
                }
            }

            this.state = 390;
            this.match(ZserioParser.LBRACE);
            this.state = 394;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130347019) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4265353217) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 65539) !== 0)) {
                {
                {
                this.state = 391;
                this.unionFieldDefinition();
                }
                }
                this.state = 396;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 49) {
                {
                {
                this.state = 397;
                this.functionDefinition();
                }
                }
                this.state = 402;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 403;
            this.match(ZserioParser.RBRACE);
            this.state = 404;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unionFieldDefinition(): UnionFieldDefinitionContext {
        let localContext = new UnionFieldDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 52, ZserioParser.RULE_unionFieldDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 406;
            this.choiceFieldDefinition();
            this.state = 407;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumDeclaration(): EnumDeclarationContext {
        let localContext = new EnumDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 54, ZserioParser.RULE_enumDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
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
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            }
            this.state = 422;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItem(): EnumItemContext {
        let localContext = new EnumItemContext(this.context, this.state);
        this.enterRule(localContext, 56, ZserioParser.RULE_enumItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41 || _la === 69) {
                {
                this.state = 427;
                _la = this.tokenStream.LA(1);
                if(!(_la === 41 || _la === 69)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 430;
            this.id();
            this.state = 433;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bitmaskDeclaration(): BitmaskDeclarationContext {
        let localContext = new BitmaskDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 58, ZserioParser.RULE_bitmaskDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
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
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            }
            this.state = 448;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bitmaskValue(): BitmaskValueContext {
        let localContext = new BitmaskValueContext(this.context, this.state);
        this.enterRule(localContext, 60, ZserioParser.RULE_bitmaskValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 453;
            this.id();
            this.state = 456;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlTableDeclaration(): SqlTableDeclarationContext {
        let localContext = new SqlTableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 62, ZserioParser.RULE_sqlTableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 458;
            this.match(ZserioParser.SQL_TABLE);
            this.state = 459;
            this.id();
            this.state = 461;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 460;
                this.templateParameters();
                }
            }

            this.state = 465;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 89) {
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
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130084875) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 8374149) !== 0) || _la === 114) {
                {
                {
                this.state = 468;
                this.sqlTableFieldDefinition();
                }
                }
                this.state = 473;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 475;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 74) {
                {
                this.state = 474;
                this.sqlConstraintDefinition();
                }
            }

            this.state = 478;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 78) {
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlTableFieldDefinition(): SqlTableFieldDefinitionContext {
        let localContext = new SqlTableFieldDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 64, ZserioParser.RULE_sqlTableFieldDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 484;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 77) {
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
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 74) {
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlConstraintDefinition(): SqlConstraintDefinitionContext {
        let localContext = new SqlConstraintDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 66, ZserioParser.RULE_sqlConstraintDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 493;
            this.sqlConstraint();
            this.state = 494;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlConstraint(): SqlConstraintContext {
        let localContext = new SqlConstraintContext(this.context, this.state);
        this.enterRule(localContext, 68, ZserioParser.RULE_sqlConstraint);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 496;
            this.match(ZserioParser.SQL);
            this.state = 497;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlWithoutRowId(): SqlWithoutRowIdContext {
        let localContext = new SqlWithoutRowIdContext(this.context, this.state);
        this.enterRule(localContext, 70, ZserioParser.RULE_sqlWithoutRowId);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 499;
            this.match(ZserioParser.SQL_WITHOUT_ROWID);
            this.state = 500;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlDatabaseDefinition(): SqlDatabaseDefinitionContext {
        let localContext = new SqlDatabaseDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 72, ZserioParser.RULE_sqlDatabaseDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 502;
            this.match(ZserioParser.SQL_DATABASE);
            this.state = 503;
            this.id();
            this.state = 504;
            this.match(ZserioParser.LBRACE);
            this.state = 506;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 505;
                this.sqlDatabaseFieldDefinition();
                }
                }
                this.state = 508;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130084875) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2093537) !== 0) || _la === 114);
            this.state = 510;
            this.match(ZserioParser.RBRACE);
            this.state = 511;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlDatabaseFieldDefinition(): SqlDatabaseFieldDefinitionContext {
        let localContext = new SqlDatabaseFieldDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 74, ZserioParser.RULE_sqlDatabaseFieldDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public serviceDefinition(): ServiceDefinitionContext {
        let localContext = new ServiceDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 76, ZserioParser.RULE_serviceDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 517;
            this.match(ZserioParser.SERVICE);
            this.state = 518;
            this.id();
            this.state = 519;
            this.match(ZserioParser.LBRACE);
            this.state = 523;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 130084875) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2093537) !== 0) || _la === 114) {
                {
                {
                this.state = 520;
                this.serviceMethodDefinition();
                }
                }
                this.state = 525;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 526;
            this.match(ZserioParser.RBRACE);
            this.state = 527;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public serviceMethodDefinition(): ServiceMethodDefinitionContext {
        let localContext = new ServiceMethodDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 78, ZserioParser.RULE_serviceMethodDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pubsubDefinition(): PubsubDefinitionContext {
        let localContext = new PubsubDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 80, ZserioParser.RULE_pubsubDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 536;
            this.match(ZserioParser.PUBSUB);
            this.state = 537;
            this.id();
            this.state = 538;
            this.match(ZserioParser.LBRACE);
            this.state = 542;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 40961) !== 0)) {
                {
                {
                this.state = 539;
                this.pubsubMessageDefinition();
                }
                }
                this.state = 544;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 545;
            this.match(ZserioParser.RBRACE);
            this.state = 546;
            this.match(ZserioParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pubsubMessageDefinition(): PubsubMessageDefinitionContext {
        let localContext = new PubsubMessageDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 82, ZserioParser.RULE_pubsubMessageDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public topicDefinition(): TopicDefinitionContext {
        let localContext = new TopicDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 84, ZserioParser.RULE_topicDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 554;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 68 || _la === 81) {
                {
                this.state = 553;
                _la = this.tokenStream.LA(1);
                if(!(_la === 68 || _la === 81)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDefinition(): FunctionDefinitionContext {
        let localContext = new FunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 86, ZserioParser.RULE_functionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionType(): FunctionTypeContext {
        let localContext = new FunctionTypeContext(this.context, this.state);
        this.enterRule(localContext, 88, ZserioParser.RULE_functionType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 568;
            this.typeReference();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionName(): FunctionNameContext {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 90, ZserioParser.RULE_functionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 570;
            this.id();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionBody(): FunctionBodyContext {
        let localContext = new FunctionBodyContext(this.context, this.state);
        this.enterRule(localContext, 92, ZserioParser.RULE_functionBody);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameters(): TypeParametersContext {
        let localContext = new TypeParametersContext(this.context, this.state);
        this.enterRule(localContext, 94, ZserioParser.RULE_typeParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 578;
            this.match(ZserioParser.LPAREN);
            this.state = 579;
            this.parameterDefinition();
            this.state = 584;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 580;
                this.match(ZserioParser.COMMA);
                this.state = 581;
                this.parameterDefinition();
                }
                }
                this.state = 586;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 587;
            this.match(ZserioParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterDefinition(): ParameterDefinitionContext {
        let localContext = new ParameterDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 96, ZserioParser.RULE_parameterDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 589;
            this.typeReference();
            this.state = 590;
            this.id();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public templateParameters(): TemplateParametersContext {
        let localContext = new TemplateParametersContext(this.context, this.state);
        this.enterRule(localContext, 98, ZserioParser.RULE_templateParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 592;
            this.match(ZserioParser.LT);
            this.state = 593;
            this.id();
            this.state = 598;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 594;
                this.match(ZserioParser.COMMA);
                this.state = 595;
                this.id();
                }
                }
                this.state = 600;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 601;
            this.match(ZserioParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public templateArguments(): TemplateArgumentsContext {
        let localContext = new TemplateArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 100, ZserioParser.RULE_templateArguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 603;
            this.match(ZserioParser.LT);
            this.state = 604;
            this.templateArgument();
            this.state = 609;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 605;
                this.match(ZserioParser.COMMA);
                this.state = 606;
                this.templateArgument();
                }
                }
                this.state = 611;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 612;
            this.match(ZserioParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public templateArgument(): TemplateArgumentContext {
        let localContext = new TemplateArgumentContext(this.context, this.state);
        this.enterRule(localContext, 102, ZserioParser.RULE_templateArgument);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 614;
            this.typeReference();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public instantiateDeclaration(): InstantiateDeclarationContext {
        let localContext = new InstantiateDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 104, ZserioParser.RULE_instantiateDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 106;
        this.enterRecursionRule(localContext, 106, ZserioParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 653;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ZserioParser.LPAREN:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 622;
                (localContext as ParenthesizedExpressionContext)._operator = this.match(ZserioParser.LPAREN);
                this.state = 623;
                this.expression(0);
                this.state = 624;
                this.match(ZserioParser.RPAREN);
                }
                break;
            case ZserioParser.ISSET:
                {
                localContext = new IsSetExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 626;
                (localContext as IsSetExpressionContext)._operator = this.match(ZserioParser.ISSET);
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
            case ZserioParser.LENGTHOF:
                {
                localContext = new LengthofExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 633;
                (localContext as LengthofExpressionContext)._operator = this.match(ZserioParser.LENGTHOF);
                this.state = 634;
                this.match(ZserioParser.LPAREN);
                this.state = 635;
                this.expression(0);
                this.state = 636;
                this.match(ZserioParser.RPAREN);
                }
                break;
            case ZserioParser.VALUEOF:
                {
                localContext = new ValueofExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 638;
                (localContext as ValueofExpressionContext)._operator = this.match(ZserioParser.VALUEOF);
                this.state = 639;
                this.match(ZserioParser.LPAREN);
                this.state = 640;
                this.expression(0);
                this.state = 641;
                this.match(ZserioParser.RPAREN);
                }
                break;
            case ZserioParser.NUMBITS:
                {
                localContext = new NumbitsExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 643;
                (localContext as NumbitsExpressionContext)._operator = this.match(ZserioParser.NUMBITS);
                this.state = 644;
                this.match(ZserioParser.LPAREN);
                this.state = 645;
                this.expression(0);
                this.state = 646;
                this.match(ZserioParser.RPAREN);
                }
                break;
            case ZserioParser.BANG:
            case ZserioParser.MINUS:
            case ZserioParser.PLUS:
            case ZserioParser.TILDE:
                {
                localContext = new UnaryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 648;
                (localContext as UnaryExpressionContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1091043336) !== 0))) {
                    (localContext as UnaryExpressionContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 649;
                this.expression(15);
                }
                break;
            case ZserioParser.BOOL_LITERAL:
            case ZserioParser.STRING_LITERAL:
            case ZserioParser.BINARY_LITERAL:
            case ZserioParser.OCTAL_LITERAL:
            case ZserioParser.HEXADECIMAL_LITERAL:
            case ZserioParser.DOUBLE_LITERAL:
            case ZserioParser.FLOAT_LITERAL:
            case ZserioParser.DECIMAL_LITERAL:
                {
                localContext = new LiteralExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 650;
                this.literal();
                }
                break;
            case ZserioParser.INDEX:
                {
                localContext = new IndexExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 651;
                this.match(ZserioParser.INDEX);
                }
                break;
            case ZserioParser.ID:
                {
                localContext = new IdentifierExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 652;
                this.id();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 708;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 62, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 706;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
                    case 1:
                        {
                        localContext = new MultiplicativeExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 655;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 656;
                        (localContext as MultiplicativeExpressionContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3145792) !== 0))) {
                            (localContext as MultiplicativeExpressionContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 657;
                        this.expression(15);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AdditiveExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 658;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 659;
                        (localContext as AdditiveExpressionContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 19 || _la === 24)) {
                            (localContext as AdditiveExpressionContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 660;
                        this.expression(14);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ShiftExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 661;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 665;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case ZserioParser.LSHIFT:
                            {
                            this.state = 662;
                            (localContext as ShiftExpressionContext)._operator = this.match(ZserioParser.LSHIFT);
                            }
                            break;
                        case ZserioParser.GT:
                            {
                            this.state = 663;
                            (localContext as ShiftExpressionContext)._operator = this.match(ZserioParser.GT);
                            this.state = 664;
                            this.match(ZserioParser.GT);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 667;
                        this.expression(13);
                        }
                        break;
                    case 4:
                        {
                        localContext = new RelationalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 668;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 669;
                        (localContext as RelationalExpressionContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 271872) !== 0))) {
                            (localContext as RelationalExpressionContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 670;
                        this.expression(12);
                        }
                        break;
                    case 5:
                        {
                        localContext = new EqualityExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 671;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 672;
                        (localContext as EqualityExpressionContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 8 || _la === 22)) {
                            (localContext as EqualityExpressionContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 673;
                        this.expression(11);
                        }
                        break;
                    case 6:
                        {
                        localContext = new BitwiseAndExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 674;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 675;
                        (localContext as BitwiseAndExpressionContext)._operator = this.match(ZserioParser.AND);
                        this.state = 676;
                        this.expression(10);
                        }
                        break;
                    case 7:
                        {
                        localContext = new BitwiseXorExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 677;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 678;
                        (localContext as BitwiseXorExpressionContext)._operator = this.match(ZserioParser.XOR);
                        this.state = 679;
                        this.expression(9);
                        }
                        break;
                    case 8:
                        {
                        localContext = new BitwiseOrExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 680;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 681;
                        (localContext as BitwiseOrExpressionContext)._operator = this.match(ZserioParser.OR);
                        this.state = 682;
                        this.expression(8);
                        }
                        break;
                    case 9:
                        {
                        localContext = new LogicalAndExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 683;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 684;
                        (localContext as LogicalAndExpressionContext)._operator = this.match(ZserioParser.LOGICAL_AND);
                        this.state = 685;
                        this.expression(7);
                        }
                        break;
                    case 10:
                        {
                        localContext = new LogicalOrExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 686;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 687;
                        (localContext as LogicalOrExpressionContext)._operator = this.match(ZserioParser.LOGICAL_OR);
                        this.state = 688;
                        this.expression(6);
                        }
                        break;
                    case 11:
                        {
                        localContext = new TernaryExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 689;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 690;
                        (localContext as TernaryExpressionContext)._operator = this.match(ZserioParser.QUESTIONMARK);
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
                        localContext = new FunctionCallExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 695;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 696;
                        this.match(ZserioParser.LPAREN);
                        this.state = 697;
                        (localContext as FunctionCallExpressionContext)._operator = this.match(ZserioParser.RPAREN);
                        }
                        break;
                    case 13:
                        {
                        localContext = new ArrayExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 698;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 699;
                        (localContext as ArrayExpressionContext)._operator = this.match(ZserioParser.LBRACKET);
                        this.state = 700;
                        this.expression(0);
                        this.state = 701;
                        this.match(ZserioParser.RBRACKET);
                        }
                        break;
                    case 14:
                        {
                        localContext = new DotExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ZserioParser.RULE_expression);
                        this.state = 703;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 704;
                        (localContext as DotExpressionContext)._operator = this.match(ZserioParser.DOT);
                        this.state = 705;
                        this.id();
                        }
                        break;
                    }
                    }
                }
                this.state = 710;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 62, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 108, ZserioParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 711;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 255) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public id(): IdContext {
        let localContext = new IdContext(this.context, this.state);
        this.enterRule(localContext, 110, ZserioParser.RULE_id);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 713;
            this.match(ZserioParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeReference(): TypeReferenceContext {
        let localContext = new TypeReferenceContext(this.context, this.state);
        this.enterRule(localContext, 112, ZserioParser.RULE_typeReference);
        try {
            this.state = 720;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ZserioParser.BIT_FIELD:
            case ZserioParser.BOOL:
            case ZserioParser.BYTES:
            case ZserioParser.EXTERN:
            case ZserioParser.FLOAT16:
            case ZserioParser.FLOAT32:
            case ZserioParser.FLOAT64:
            case ZserioParser.INT_FIELD:
            case ZserioParser.INT16:
            case ZserioParser.INT32:
            case ZserioParser.INT64:
            case ZserioParser.INT8:
            case ZserioParser.STRING:
            case ZserioParser.UINT16:
            case ZserioParser.UINT32:
            case ZserioParser.UINT64:
            case ZserioParser.UINT8:
            case ZserioParser.VARINT:
            case ZserioParser.VARINT16:
            case ZserioParser.VARINT32:
            case ZserioParser.VARINT64:
            case ZserioParser.VARSIZE:
            case ZserioParser.VARUINT:
            case ZserioParser.VARUINT16:
            case ZserioParser.VARUINT32:
            case ZserioParser.VARUINT64:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 715;
                this.builtinType();
                }
                break;
            case ZserioParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 716;
                this.qualifiedName();
                this.state = 718;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context) ) {
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeInstantiation(): TypeInstantiationContext {
        let localContext = new TypeInstantiationContext(this.context, this.state);
        this.enterRule(localContext, 114, ZserioParser.RULE_typeInstantiation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 722;
            this.typeReference();
            this.state = 725;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ZserioParser.LPAREN:
                {
                this.state = 723;
                this.typeArguments();
                }
                break;
            case ZserioParser.LT:
                {
                this.state = 724;
                this.dynamicLengthArgument();
                }
                break;
            case ZserioParser.ID:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public builtinType(): BuiltinTypeContext {
        let localContext = new BuiltinTypeContext(this.context, this.state);
        this.enterRule(localContext, 116, ZserioParser.RULE_builtinType);
        try {
            this.state = 736;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 727;
                this.intType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 728;
                this.varintType();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 729;
                this.fixedBitFieldType();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 730;
                this.dynamicBitFieldType();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 731;
                this.boolType();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 732;
                this.stringType();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 733;
                this.floatType();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 734;
                this.externType();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 735;
                this.bytesType();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 118, ZserioParser.RULE_qualifiedName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 738;
            this.id();
            this.state = 743;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 739;
                this.match(ZserioParser.DOT);
                this.state = 740;
                this.id();
                }
                }
                this.state = 745;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArguments(): TypeArgumentsContext {
        let localContext = new TypeArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 120, ZserioParser.RULE_typeArguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 746;
            this.match(ZserioParser.LPAREN);
            this.state = 747;
            this.typeArgument();
            this.state = 752;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 748;
                this.match(ZserioParser.COMMA);
                this.state = 749;
                this.typeArgument();
                }
                }
                this.state = 754;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 755;
            this.match(ZserioParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArgument(): TypeArgumentContext {
        let localContext = new TypeArgumentContext(this.context, this.state);
        this.enterRule(localContext, 122, ZserioParser.RULE_typeArgument);
        try {
            this.state = 760;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ZserioParser.EXPLICIT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 757;
                this.match(ZserioParser.EXPLICIT);
                this.state = 758;
                this.id();
                }
                break;
            case ZserioParser.BANG:
            case ZserioParser.LPAREN:
            case ZserioParser.MINUS:
            case ZserioParser.PLUS:
            case ZserioParser.TILDE:
            case ZserioParser.INDEX:
            case ZserioParser.ISSET:
            case ZserioParser.LENGTHOF:
            case ZserioParser.NUMBITS:
            case ZserioParser.VALUEOF:
            case ZserioParser.BOOL_LITERAL:
            case ZserioParser.STRING_LITERAL:
            case ZserioParser.BINARY_LITERAL:
            case ZserioParser.OCTAL_LITERAL:
            case ZserioParser.HEXADECIMAL_LITERAL:
            case ZserioParser.DOUBLE_LITERAL:
            case ZserioParser.FLOAT_LITERAL:
            case ZserioParser.DECIMAL_LITERAL:
            case ZserioParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 759;
                this.expression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dynamicLengthArgument(): DynamicLengthArgumentContext {
        let localContext = new DynamicLengthArgumentContext(this.context, this.state);
        this.enterRule(localContext, 124, ZserioParser.RULE_dynamicLengthArgument);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intType(): IntTypeContext {
        let localContext = new IntTypeContext(this.context, this.state);
        this.enterRule(localContext, 126, ZserioParser.RULE_intType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 766;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 4026531855) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varintType(): VarintTypeContext {
        let localContext = new VarintTypeContext(this.context, this.state);
        this.enterRule(localContext, 128, ZserioParser.RULE_varintType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 768;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 511) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fixedBitFieldType(): FixedBitFieldTypeContext {
        let localContext = new FixedBitFieldTypeContext(this.context, this.state);
        this.enterRule(localContext, 130, ZserioParser.RULE_fixedBitFieldType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 770;
            _la = this.tokenStream.LA(1);
            if(!(_la === 33 || _la === 55)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 771;
            this.match(ZserioParser.COLON);
            this.state = 772;
            this.match(ZserioParser.DECIMAL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dynamicBitFieldType(): DynamicBitFieldTypeContext {
        let localContext = new DynamicBitFieldTypeContext(this.context, this.state);
        this.enterRule(localContext, 132, ZserioParser.RULE_dynamicBitFieldType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 774;
            _la = this.tokenStream.LA(1);
            if(!(_la === 33 || _la === 55)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public boolType(): BoolTypeContext {
        let localContext = new BoolTypeContext(this.context, this.state);
        this.enterRule(localContext, 134, ZserioParser.RULE_boolType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 776;
            this.match(ZserioParser.BOOL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringType(): StringTypeContext {
        let localContext = new StringTypeContext(this.context, this.state);
        this.enterRule(localContext, 136, ZserioParser.RULE_stringType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 778;
            this.match(ZserioParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public floatType(): FloatTypeContext {
        let localContext = new FloatTypeContext(this.context, this.state);
        this.enterRule(localContext, 138, ZserioParser.RULE_floatType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 780;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externType(): ExternTypeContext {
        let localContext = new ExternTypeContext(this.context, this.state);
        this.enterRule(localContext, 140, ZserioParser.RULE_externType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 782;
            this.match(ZserioParser.EXTERN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bytesType(): BytesTypeContext {
        let localContext = new BytesTypeContext(this.context, this.state);
        this.enterRule(localContext, 142, ZserioParser.RULE_bytesType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 784;
            this.match(ZserioParser.BYTES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 53:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 14);
        case 1:
            return this.precpred(this.context, 13);
        case 2:
            return this.precpred(this.context, 12);
        case 3:
            return this.precpred(this.context, 11);
        case 4:
            return this.precpred(this.context, 10);
        case 5:
            return this.precpred(this.context, 9);
        case 6:
            return this.precpred(this.context, 8);
        case 7:
            return this.precpred(this.context, 7);
        case 8:
            return this.precpred(this.context, 6);
        case 9:
            return this.precpred(this.context, 5);
        case 10:
            return this.precpred(this.context, 4);
        case 11:
            return this.precpred(this.context, 22);
        case 12:
            return this.precpred(this.context, 21);
        case 13:
            return this.precpred(this.context, 20);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,117,787,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,1,
        0,3,0,146,8,0,1,0,3,0,149,8,0,1,0,5,0,152,8,0,10,0,12,0,155,9,0,
        1,0,5,0,158,8,0,10,0,12,0,161,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
        1,1,2,1,2,1,2,1,2,5,2,175,8,2,10,2,12,2,178,9,2,1,2,1,2,1,3,1,3,
        1,3,1,3,1,3,1,3,5,3,188,8,3,10,3,12,3,191,9,3,1,3,1,3,3,3,195,8,
        3,1,3,1,3,1,4,1,4,3,4,201,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
        5,1,5,1,5,3,5,214,8,5,1,6,1,6,3,6,218,8,6,1,7,1,7,1,7,1,7,1,7,1,
        7,1,7,1,8,1,8,1,8,1,8,5,8,231,8,8,10,8,12,8,234,9,8,1,8,1,8,1,8,
        1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,251,
        8,11,1,11,3,11,254,8,11,1,11,1,11,5,11,258,8,11,10,11,12,11,261,
        9,11,1,11,5,11,264,8,11,10,11,12,11,267,9,11,1,11,1,11,1,11,1,12,
        3,12,273,8,12,1,12,3,12,276,8,12,1,12,3,12,279,8,12,1,12,3,12,282,
        8,12,1,12,1,12,3,12,286,8,12,1,12,3,12,289,8,12,1,12,3,12,292,8,
        12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,3,
        15,306,8,15,1,15,3,15,309,8,15,1,15,1,15,1,15,3,15,314,8,15,1,16,
        1,16,3,16,318,8,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,
        1,19,1,19,1,20,1,20,1,20,3,20,334,8,20,1,20,1,20,1,20,1,20,1,20,
        5,20,341,8,20,10,20,12,20,344,9,20,1,20,3,20,347,8,20,1,20,5,20,
        350,8,20,10,20,12,20,353,9,20,1,20,1,20,1,20,1,21,4,21,359,8,21,
        11,21,12,21,360,1,21,3,21,364,8,21,1,21,1,21,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,3,23,375,8,23,1,23,1,23,1,24,1,24,3,24,381,8,24,1,
        25,1,25,1,25,3,25,386,8,25,1,25,3,25,389,8,25,1,25,1,25,5,25,393,
        8,25,10,25,12,25,396,9,25,1,25,5,25,399,8,25,10,25,12,25,402,9,25,
        1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
        5,27,417,8,27,10,27,12,27,420,9,27,1,27,3,27,423,8,27,1,27,1,27,
        1,27,1,28,3,28,429,8,28,1,28,1,28,1,28,3,28,434,8,28,1,29,1,29,1,
        29,1,29,1,29,1,29,1,29,5,29,443,8,29,10,29,12,29,446,9,29,1,29,3,
        29,449,8,29,1,29,1,29,1,29,1,30,1,30,1,30,3,30,457,8,30,1,31,1,31,
        1,31,3,31,462,8,31,1,31,1,31,3,31,466,8,31,1,31,1,31,5,31,470,8,
        31,10,31,12,31,473,9,31,1,31,3,31,476,8,31,1,31,3,31,479,8,31,1,
        31,1,31,1,31,1,32,3,32,485,8,32,1,32,1,32,1,32,3,32,490,8,32,1,32,
        1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,
        1,36,4,36,507,8,36,11,36,12,36,508,1,36,1,36,1,36,1,37,1,37,1,37,
        1,37,1,38,1,38,1,38,1,38,5,38,522,8,38,10,38,12,38,525,9,38,1,38,
        1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,
        5,40,541,8,40,10,40,12,40,544,9,40,1,40,1,40,1,40,1,41,1,41,1,41,
        1,41,1,41,1,42,3,42,555,8,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,46,1,46,
        1,46,1,46,1,47,1,47,1,47,1,47,5,47,583,8,47,10,47,12,47,586,9,47,
        1,47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,1,49,5,49,597,8,49,10,49,
        12,49,600,9,49,1,49,1,49,1,50,1,50,1,50,1,50,5,50,608,8,50,10,50,
        12,50,611,9,50,1,50,1,50,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,53,
        1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,1,53,1,53,1,53,3,53,654,8,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,1,53,1,53,1,53,3,53,666,8,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,5,53,707,8,53,10,53,12,53,
        710,9,53,1,54,1,54,1,55,1,55,1,56,1,56,1,56,3,56,719,8,56,3,56,721,
        8,56,1,57,1,57,1,57,3,57,726,8,57,1,58,1,58,1,58,1,58,1,58,1,58,
        1,58,1,58,1,58,3,58,737,8,58,1,59,1,59,1,59,5,59,742,8,59,10,59,
        12,59,745,9,59,1,60,1,60,1,60,1,60,5,60,751,8,60,10,60,12,60,754,
        9,60,1,60,1,60,1,61,1,61,1,61,3,61,761,8,61,1,62,1,62,1,62,1,62,
        1,63,1,63,1,64,1,64,1,65,1,65,1,65,1,65,1,66,1,66,1,67,1,67,1,68,
        1,68,1,69,1,69,1,70,1,70,1,71,1,71,1,71,0,1,106,72,0,2,4,6,8,10,
        12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
        56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
        100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,
        132,134,136,138,140,142,0,12,2,0,41,41,69,69,2,0,68,68,81,81,4,0,
        3,3,19,19,24,24,30,30,2,0,6,6,20,21,2,0,19,19,24,24,3,0,9,10,13,
        13,18,18,2,0,8,8,22,22,1,0,106,113,2,0,56,59,84,87,1,0,91,99,2,0,
        33,33,55,55,1,0,46,48,820,0,145,1,0,0,0,2,164,1,0,0,0,4,170,1,0,
        0,0,6,181,1,0,0,0,8,200,1,0,0,0,10,213,1,0,0,0,12,217,1,0,0,0,14,
        219,1,0,0,0,16,226,1,0,0,0,18,238,1,0,0,0,20,242,1,0,0,0,22,247,
        1,0,0,0,24,272,1,0,0,0,26,295,1,0,0,0,28,301,1,0,0,0,30,305,1,0,
        0,0,32,315,1,0,0,0,34,321,1,0,0,0,36,324,1,0,0,0,38,327,1,0,0,0,
        40,330,1,0,0,0,42,358,1,0,0,0,44,367,1,0,0,0,46,371,1,0,0,0,48,378,
        1,0,0,0,50,382,1,0,0,0,52,406,1,0,0,0,54,409,1,0,0,0,56,428,1,0,
        0,0,58,435,1,0,0,0,60,453,1,0,0,0,62,458,1,0,0,0,64,484,1,0,0,0,
        66,493,1,0,0,0,68,496,1,0,0,0,70,499,1,0,0,0,72,502,1,0,0,0,74,513,
        1,0,0,0,76,517,1,0,0,0,78,529,1,0,0,0,80,536,1,0,0,0,82,548,1,0,
        0,0,84,554,1,0,0,0,86,561,1,0,0,0,88,568,1,0,0,0,90,570,1,0,0,0,
        92,572,1,0,0,0,94,578,1,0,0,0,96,589,1,0,0,0,98,592,1,0,0,0,100,
        603,1,0,0,0,102,614,1,0,0,0,104,616,1,0,0,0,106,653,1,0,0,0,108,
        711,1,0,0,0,110,713,1,0,0,0,112,720,1,0,0,0,114,722,1,0,0,0,116,
        736,1,0,0,0,118,738,1,0,0,0,120,746,1,0,0,0,122,760,1,0,0,0,124,
        762,1,0,0,0,126,766,1,0,0,0,128,768,1,0,0,0,130,770,1,0,0,0,132,
        774,1,0,0,0,134,776,1,0,0,0,136,778,1,0,0,0,138,780,1,0,0,0,140,
        782,1,0,0,0,142,784,1,0,0,0,144,146,3,2,1,0,145,144,1,0,0,0,145,
        146,1,0,0,0,146,148,1,0,0,0,147,149,3,4,2,0,148,147,1,0,0,0,148,
        149,1,0,0,0,149,153,1,0,0,0,150,152,3,6,3,0,151,150,1,0,0,0,152,
        155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,159,1,0,0,0,155,
        153,1,0,0,0,156,158,3,8,4,0,157,156,1,0,0,0,158,161,1,0,0,0,159,
        157,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,
        163,5,0,0,1,163,1,1,0,0,0,164,165,5,100,0,0,165,166,5,16,0,0,166,
        167,5,107,0,0,167,168,5,28,0,0,168,169,5,29,0,0,169,3,1,0,0,0,170,
        171,5,65,0,0,171,176,3,110,55,0,172,173,5,7,0,0,173,175,3,110,55,
        0,174,172,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,
        0,177,179,1,0,0,0,178,176,1,0,0,0,179,180,5,29,0,0,180,5,1,0,0,0,
        181,182,5,52,0,0,182,183,3,110,55,0,183,189,5,7,0,0,184,185,3,110,
        55,0,185,186,5,7,0,0,186,188,1,0,0,0,187,184,1,0,0,0,188,191,1,0,
        0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,194,1,0,0,0,191,189,1,0,
        0,0,192,195,3,110,55,0,193,195,5,21,0,0,194,192,1,0,0,0,194,193,
        1,0,0,0,195,196,1,0,0,0,196,197,5,29,0,0,197,7,1,0,0,0,198,201,3,
        12,6,0,199,201,3,10,5,0,200,198,1,0,0,0,200,199,1,0,0,0,201,9,1,
        0,0,0,202,214,3,20,10,0,203,214,3,22,11,0,204,214,3,40,20,0,205,
        214,3,50,25,0,206,214,3,54,27,0,207,214,3,58,29,0,208,214,3,62,31,
        0,209,214,3,72,36,0,210,214,3,76,38,0,211,214,3,80,40,0,212,214,
        3,104,52,0,213,202,1,0,0,0,213,203,1,0,0,0,213,204,1,0,0,0,213,205,
        1,0,0,0,213,206,1,0,0,0,213,207,1,0,0,0,213,208,1,0,0,0,213,209,
        1,0,0,0,213,210,1,0,0,0,213,211,1,0,0,0,213,212,1,0,0,0,214,11,1,
        0,0,0,215,218,3,14,7,0,216,218,3,16,8,0,217,215,1,0,0,0,217,216,
        1,0,0,0,218,13,1,0,0,0,219,220,5,39,0,0,220,221,3,114,57,0,221,222,
        3,110,55,0,222,223,5,2,0,0,223,224,3,106,53,0,224,225,5,29,0,0,225,
        15,1,0,0,0,226,227,5,72,0,0,227,228,3,110,55,0,228,232,5,11,0,0,
        229,231,3,18,9,0,230,229,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,
        232,233,1,0,0,0,233,235,1,0,0,0,234,232,1,0,0,0,235,236,5,26,0,0,
        236,237,5,29,0,0,237,17,1,0,0,0,238,239,5,71,0,0,239,240,3,106,53,
        0,240,241,5,29,0,0,241,19,1,0,0,0,242,243,5,82,0,0,243,244,3,112,
        56,0,244,245,3,110,55,0,245,246,5,29,0,0,246,21,1,0,0,0,247,248,
        5,80,0,0,248,250,3,110,55,0,249,251,3,98,49,0,250,249,1,0,0,0,250,
        251,1,0,0,0,251,253,1,0,0,0,252,254,3,94,47,0,253,252,1,0,0,0,253,
        254,1,0,0,0,254,255,1,0,0,0,255,259,5,11,0,0,256,258,3,24,12,0,257,
        256,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,259,260,1,0,0,0,260,
        265,1,0,0,0,261,259,1,0,0,0,262,264,3,86,43,0,263,262,1,0,0,0,264,
        267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,268,1,0,0,0,267,
        265,1,0,0,0,268,269,5,26,0,0,269,270,5,29,0,0,270,23,1,0,0,0,271,
        273,3,26,13,0,272,271,1,0,0,0,272,273,1,0,0,0,273,275,1,0,0,0,274,
        276,3,28,14,0,275,274,1,0,0,0,275,276,1,0,0,0,276,278,1,0,0,0,277,
        279,5,44,0,0,278,277,1,0,0,0,278,279,1,0,0,0,279,281,1,0,0,0,280,
        282,5,64,0,0,281,280,1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,
        285,3,30,15,0,284,286,3,34,17,0,285,284,1,0,0,0,285,286,1,0,0,0,
        286,288,1,0,0,0,287,289,3,36,18,0,288,287,1,0,0,0,288,289,1,0,0,
        0,289,291,1,0,0,0,290,292,3,38,19,0,291,290,1,0,0,0,291,292,1,0,
        0,0,292,293,1,0,0,0,293,294,5,29,0,0,294,25,1,0,0,0,295,296,5,32,
        0,0,296,297,5,16,0,0,297,298,3,106,53,0,298,299,5,28,0,0,299,300,
        5,4,0,0,300,27,1,0,0,0,301,302,3,106,53,0,302,303,5,4,0,0,303,29,
        1,0,0,0,304,306,5,66,0,0,305,304,1,0,0,0,305,306,1,0,0,0,306,308,
        1,0,0,0,307,309,5,51,0,0,308,307,1,0,0,0,308,309,1,0,0,0,309,310,
        1,0,0,0,310,311,3,114,57,0,311,313,3,110,55,0,312,314,3,32,16,0,
        313,312,1,0,0,0,313,314,1,0,0,0,314,31,1,0,0,0,315,317,5,12,0,0,
        316,318,3,106,53,0,317,316,1,0,0,0,317,318,1,0,0,0,318,319,1,0,0,
        0,319,320,5,27,0,0,320,33,1,0,0,0,321,322,5,2,0,0,322,323,3,106,
        53,0,323,35,1,0,0,0,324,325,5,50,0,0,325,326,3,106,53,0,326,37,1,
        0,0,0,327,328,5,4,0,0,328,329,3,106,53,0,329,39,1,0,0,0,330,331,
        5,38,0,0,331,333,3,110,55,0,332,334,3,98,49,0,333,332,1,0,0,0,333,
        334,1,0,0,0,334,335,1,0,0,0,335,336,3,94,47,0,336,337,5,63,0,0,337,
        338,3,106,53,0,338,342,5,11,0,0,339,341,3,42,21,0,340,339,1,0,0,
        0,341,344,1,0,0,0,342,340,1,0,0,0,342,343,1,0,0,0,343,346,1,0,0,
        0,344,342,1,0,0,0,345,347,3,46,23,0,346,345,1,0,0,0,346,347,1,0,
        0,0,347,351,1,0,0,0,348,350,3,86,43,0,349,348,1,0,0,0,350,353,1,
        0,0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,354,1,0,0,0,353,351,1,
        0,0,0,354,355,5,26,0,0,355,356,5,29,0,0,356,41,1,0,0,0,357,359,3,
        44,22,0,358,357,1,0,0,0,359,360,1,0,0,0,360,358,1,0,0,0,360,361,
        1,0,0,0,361,363,1,0,0,0,362,364,3,48,24,0,363,362,1,0,0,0,363,364,
        1,0,0,0,364,365,1,0,0,0,365,366,5,29,0,0,366,43,1,0,0,0,367,368,
        5,37,0,0,368,369,3,106,53,0,369,370,5,4,0,0,370,45,1,0,0,0,371,372,
        5,40,0,0,372,374,5,4,0,0,373,375,3,48,24,0,374,373,1,0,0,0,374,375,
        1,0,0,0,375,376,1,0,0,0,376,377,5,29,0,0,377,47,1,0,0,0,378,380,
        3,30,15,0,379,381,3,38,19,0,380,379,1,0,0,0,380,381,1,0,0,0,381,
        49,1,0,0,0,382,383,5,88,0,0,383,385,3,110,55,0,384,386,3,98,49,0,
        385,384,1,0,0,0,385,386,1,0,0,0,386,388,1,0,0,0,387,389,3,94,47,
        0,388,387,1,0,0,0,388,389,1,0,0,0,389,390,1,0,0,0,390,394,5,11,0,
        0,391,393,3,52,26,0,392,391,1,0,0,0,393,396,1,0,0,0,394,392,1,0,
        0,0,394,395,1,0,0,0,395,400,1,0,0,0,396,394,1,0,0,0,397,399,3,86,
        43,0,398,397,1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,
        0,0,401,403,1,0,0,0,402,400,1,0,0,0,403,404,5,26,0,0,404,405,5,29,
        0,0,405,51,1,0,0,0,406,407,3,48,24,0,407,408,5,29,0,0,408,53,1,0,
        0,0,409,410,5,42,0,0,410,411,3,114,57,0,411,412,3,110,55,0,412,413,
        5,11,0,0,413,418,3,56,28,0,414,415,5,5,0,0,415,417,3,56,28,0,416,
        414,1,0,0,0,417,420,1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,
        422,1,0,0,0,420,418,1,0,0,0,421,423,5,5,0,0,422,421,1,0,0,0,422,
        423,1,0,0,0,423,424,1,0,0,0,424,425,5,26,0,0,425,426,5,29,0,0,426,
        55,1,0,0,0,427,429,7,0,0,0,428,427,1,0,0,0,428,429,1,0,0,0,429,430,
        1,0,0,0,430,433,3,110,55,0,431,432,5,2,0,0,432,434,3,106,53,0,433,
        431,1,0,0,0,433,434,1,0,0,0,434,57,1,0,0,0,435,436,5,35,0,0,436,
        437,3,114,57,0,437,438,3,110,55,0,438,439,5,11,0,0,439,444,3,60,
        30,0,440,441,5,5,0,0,441,443,3,60,30,0,442,440,1,0,0,0,443,446,1,
        0,0,0,444,442,1,0,0,0,444,445,1,0,0,0,445,448,1,0,0,0,446,444,1,
        0,0,0,447,449,5,5,0,0,448,447,1,0,0,0,448,449,1,0,0,0,449,450,1,
        0,0,0,450,451,5,26,0,0,451,452,5,29,0,0,452,59,1,0,0,0,453,456,3,
        110,55,0,454,455,5,2,0,0,455,457,3,106,53,0,456,454,1,0,0,0,456,
        457,1,0,0,0,457,61,1,0,0,0,458,459,5,76,0,0,459,461,3,110,55,0,460,
        462,3,98,49,0,461,460,1,0,0,0,461,462,1,0,0,0,462,465,1,0,0,0,463,
        464,5,89,0,0,464,466,3,110,55,0,465,463,1,0,0,0,465,466,1,0,0,0,
        466,467,1,0,0,0,467,471,5,11,0,0,468,470,3,64,32,0,469,468,1,0,0,
        0,470,473,1,0,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,475,1,0,0,
        0,473,471,1,0,0,0,474,476,3,66,33,0,475,474,1,0,0,0,475,476,1,0,
        0,0,476,478,1,0,0,0,477,479,3,70,35,0,478,477,1,0,0,0,478,479,1,
        0,0,0,479,480,1,0,0,0,480,481,5,26,0,0,481,482,5,29,0,0,482,63,1,
        0,0,0,483,485,5,77,0,0,484,483,1,0,0,0,484,485,1,0,0,0,485,486,1,
        0,0,0,486,487,3,114,57,0,487,489,3,110,55,0,488,490,3,68,34,0,489,
        488,1,0,0,0,489,490,1,0,0,0,490,491,1,0,0,0,491,492,5,29,0,0,492,
        65,1,0,0,0,493,494,3,68,34,0,494,495,5,29,0,0,495,67,1,0,0,0,496,
        497,5,74,0,0,497,498,3,106,53,0,498,69,1,0,0,0,499,500,5,78,0,0,
        500,501,5,29,0,0,501,71,1,0,0,0,502,503,5,75,0,0,503,504,3,110,55,
        0,504,506,5,11,0,0,505,507,3,74,37,0,506,505,1,0,0,0,507,508,1,0,
        0,0,508,506,1,0,0,0,508,509,1,0,0,0,509,510,1,0,0,0,510,511,5,26,
        0,0,511,512,5,29,0,0,512,73,1,0,0,0,513,514,3,114,57,0,514,515,3,
        110,55,0,515,516,5,29,0,0,516,75,1,0,0,0,517,518,5,73,0,0,518,519,
        3,110,55,0,519,523,5,11,0,0,520,522,3,78,39,0,521,520,1,0,0,0,522,
        525,1,0,0,0,523,521,1,0,0,0,523,524,1,0,0,0,524,526,1,0,0,0,525,
        523,1,0,0,0,526,527,5,26,0,0,527,528,5,29,0,0,528,77,1,0,0,0,529,
        530,3,112,56,0,530,531,3,110,55,0,531,532,5,16,0,0,532,533,3,112,
        56,0,533,534,5,28,0,0,534,535,5,29,0,0,535,79,1,0,0,0,536,537,5,
        67,0,0,537,538,3,110,55,0,538,542,5,11,0,0,539,541,3,82,41,0,540,
        539,1,0,0,0,541,544,1,0,0,0,542,540,1,0,0,0,542,543,1,0,0,0,543,
        545,1,0,0,0,544,542,1,0,0,0,545,546,5,26,0,0,546,547,5,29,0,0,547,
        81,1,0,0,0,548,549,3,84,42,0,549,550,3,112,56,0,550,551,3,110,55,
        0,551,552,5,29,0,0,552,83,1,0,0,0,553,555,7,1,0,0,554,553,1,0,0,
        0,554,555,1,0,0,0,555,556,1,0,0,0,556,557,5,83,0,0,557,558,5,16,
        0,0,558,559,3,106,53,0,559,560,5,28,0,0,560,85,1,0,0,0,561,562,5,
        49,0,0,562,563,3,88,44,0,563,564,3,90,45,0,564,565,5,16,0,0,565,
        566,5,28,0,0,566,567,3,92,46,0,567,87,1,0,0,0,568,569,3,112,56,0,
        569,89,1,0,0,0,570,571,3,110,55,0,571,91,1,0,0,0,572,573,5,11,0,
        0,573,574,5,70,0,0,574,575,3,106,53,0,575,576,5,29,0,0,576,577,5,
        26,0,0,577,93,1,0,0,0,578,579,5,16,0,0,579,584,3,96,48,0,580,581,
        5,5,0,0,581,583,3,96,48,0,582,580,1,0,0,0,583,586,1,0,0,0,584,582,
        1,0,0,0,584,585,1,0,0,0,585,587,1,0,0,0,586,584,1,0,0,0,587,588,
        5,28,0,0,588,95,1,0,0,0,589,590,3,112,56,0,590,591,3,110,55,0,591,
        97,1,0,0,0,592,593,5,18,0,0,593,598,3,110,55,0,594,595,5,5,0,0,595,
        597,3,110,55,0,596,594,1,0,0,0,597,600,1,0,0,0,598,596,1,0,0,0,598,
        599,1,0,0,0,599,601,1,0,0,0,600,598,1,0,0,0,601,602,5,10,0,0,602,
        99,1,0,0,0,603,604,5,18,0,0,604,609,3,102,51,0,605,606,5,5,0,0,606,
        608,3,102,51,0,607,605,1,0,0,0,608,611,1,0,0,0,609,607,1,0,0,0,609,
        610,1,0,0,0,610,612,1,0,0,0,611,609,1,0,0,0,612,613,5,10,0,0,613,
        101,1,0,0,0,614,615,3,112,56,0,615,103,1,0,0,0,616,617,5,54,0,0,
        617,618,3,112,56,0,618,619,3,110,55,0,619,620,5,29,0,0,620,105,1,
        0,0,0,621,622,6,53,-1,0,622,623,5,16,0,0,623,624,3,106,53,0,624,
        625,5,28,0,0,625,654,1,0,0,0,626,627,5,60,0,0,627,628,5,16,0,0,628,
        629,3,106,53,0,629,630,5,5,0,0,630,631,3,106,53,0,631,632,5,28,0,
        0,632,654,1,0,0,0,633,634,5,61,0,0,634,635,5,16,0,0,635,636,3,106,
        53,0,636,637,5,28,0,0,637,654,1,0,0,0,638,639,5,90,0,0,639,640,5,
        16,0,0,640,641,3,106,53,0,641,642,5,28,0,0,642,654,1,0,0,0,643,644,
        5,62,0,0,644,645,5,16,0,0,645,646,3,106,53,0,646,647,5,28,0,0,647,
        654,1,0,0,0,648,649,7,2,0,0,649,654,3,106,53,15,650,654,3,108,54,
        0,651,654,5,53,0,0,652,654,3,110,55,0,653,621,1,0,0,0,653,626,1,
        0,0,0,653,633,1,0,0,0,653,638,1,0,0,0,653,643,1,0,0,0,653,648,1,
        0,0,0,653,650,1,0,0,0,653,651,1,0,0,0,653,652,1,0,0,0,654,708,1,
        0,0,0,655,656,10,14,0,0,656,657,7,3,0,0,657,707,3,106,53,15,658,
        659,10,13,0,0,659,660,7,4,0,0,660,707,3,106,53,14,661,665,10,12,
        0,0,662,666,5,17,0,0,663,664,5,10,0,0,664,666,5,10,0,0,665,662,1,
        0,0,0,665,663,1,0,0,0,666,667,1,0,0,0,667,707,3,106,53,13,668,669,
        10,11,0,0,669,670,7,5,0,0,670,707,3,106,53,12,671,672,10,10,0,0,
        672,673,7,6,0,0,673,707,3,106,53,11,674,675,10,9,0,0,675,676,5,1,
        0,0,676,707,3,106,53,10,677,678,10,8,0,0,678,679,5,31,0,0,679,707,
        3,106,53,9,680,681,10,7,0,0,681,682,5,23,0,0,682,707,3,106,53,8,
        683,684,10,6,0,0,684,685,5,14,0,0,685,707,3,106,53,7,686,687,10,
        5,0,0,687,688,5,15,0,0,688,707,3,106,53,6,689,690,10,4,0,0,690,691,
        5,25,0,0,691,692,3,106,53,0,692,693,5,4,0,0,693,694,3,106,53,4,694,
        707,1,0,0,0,695,696,10,22,0,0,696,697,5,16,0,0,697,707,5,28,0,0,
        698,699,10,21,0,0,699,700,5,12,0,0,700,701,3,106,53,0,701,702,5,
        27,0,0,702,707,1,0,0,0,703,704,10,20,0,0,704,705,5,7,0,0,705,707,
        3,110,55,0,706,655,1,0,0,0,706,658,1,0,0,0,706,661,1,0,0,0,706,668,
        1,0,0,0,706,671,1,0,0,0,706,674,1,0,0,0,706,677,1,0,0,0,706,680,
        1,0,0,0,706,683,1,0,0,0,706,686,1,0,0,0,706,689,1,0,0,0,706,695,
        1,0,0,0,706,698,1,0,0,0,706,703,1,0,0,0,707,710,1,0,0,0,708,706,
        1,0,0,0,708,709,1,0,0,0,709,107,1,0,0,0,710,708,1,0,0,0,711,712,
        7,7,0,0,712,109,1,0,0,0,713,714,5,114,0,0,714,111,1,0,0,0,715,721,
        3,116,58,0,716,718,3,118,59,0,717,719,3,100,50,0,718,717,1,0,0,0,
        718,719,1,0,0,0,719,721,1,0,0,0,720,715,1,0,0,0,720,716,1,0,0,0,
        721,113,1,0,0,0,722,725,3,112,56,0,723,726,3,120,60,0,724,726,3,
        124,62,0,725,723,1,0,0,0,725,724,1,0,0,0,725,726,1,0,0,0,726,115,
        1,0,0,0,727,737,3,126,63,0,728,737,3,128,64,0,729,737,3,130,65,0,
        730,737,3,132,66,0,731,737,3,134,67,0,732,737,3,136,68,0,733,737,
        3,138,69,0,734,737,3,140,70,0,735,737,3,142,71,0,736,727,1,0,0,0,
        736,728,1,0,0,0,736,729,1,0,0,0,736,730,1,0,0,0,736,731,1,0,0,0,
        736,732,1,0,0,0,736,733,1,0,0,0,736,734,1,0,0,0,736,735,1,0,0,0,
        737,117,1,0,0,0,738,743,3,110,55,0,739,740,5,7,0,0,740,742,3,110,
        55,0,741,739,1,0,0,0,742,745,1,0,0,0,743,741,1,0,0,0,743,744,1,0,
        0,0,744,119,1,0,0,0,745,743,1,0,0,0,746,747,5,16,0,0,747,752,3,122,
        61,0,748,749,5,5,0,0,749,751,3,122,61,0,750,748,1,0,0,0,751,754,
        1,0,0,0,752,750,1,0,0,0,752,753,1,0,0,0,753,755,1,0,0,0,754,752,
        1,0,0,0,755,756,5,28,0,0,756,121,1,0,0,0,757,758,5,43,0,0,758,761,
        3,110,55,0,759,761,3,106,53,0,760,757,1,0,0,0,760,759,1,0,0,0,761,
        123,1,0,0,0,762,763,5,18,0,0,763,764,3,106,53,0,764,765,5,10,0,0,
        765,125,1,0,0,0,766,767,7,8,0,0,767,127,1,0,0,0,768,769,7,9,0,0,
        769,129,1,0,0,0,770,771,7,10,0,0,771,772,5,4,0,0,772,773,5,113,0,
        0,773,131,1,0,0,0,774,775,7,10,0,0,775,133,1,0,0,0,776,777,5,34,
        0,0,777,135,1,0,0,0,778,779,5,79,0,0,779,137,1,0,0,0,780,781,7,11,
        0,0,781,139,1,0,0,0,782,783,5,45,0,0,783,141,1,0,0,0,784,785,5,36,
        0,0,785,143,1,0,0,0,70,145,148,153,159,176,189,194,200,213,217,232,
        250,253,259,265,272,275,278,281,285,288,291,305,308,313,317,333,
        342,346,351,360,363,374,380,385,388,394,400,418,422,428,433,444,
        448,456,461,465,471,475,478,484,489,508,523,542,554,584,598,609,
        653,665,706,708,718,720,725,736,743,752,760
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ZserioParser.__ATN) {
            ZserioParser.__ATN = new antlr.ATNDeserializer().deserialize(ZserioParser._serializedATN);
        }

        return ZserioParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ZserioParser.literalNames, ZserioParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ZserioParser.vocabulary;
    }

    private static readonly decisionsToDFA = ZserioParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class PackageDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(ZserioParser.EOF, 0)!;
    }
    public compatibilityVersionDirective(): CompatibilityVersionDirectiveContext | null {
        return this.getRuleContext(0, CompatibilityVersionDirectiveContext);
    }
    public packageNameDefinition(): PackageNameDefinitionContext | null {
        return this.getRuleContext(0, PackageNameDefinitionContext);
    }
    public importDeclaration(): ImportDeclarationContext[];
    public importDeclaration(i: number): ImportDeclarationContext | null;
    public importDeclaration(i?: number): ImportDeclarationContext[] | ImportDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }

        return this.getRuleContext(i, ImportDeclarationContext);
    }
    public languageDirective(): LanguageDirectiveContext[];
    public languageDirective(i: number): LanguageDirectiveContext | null;
    public languageDirective(i?: number): LanguageDirectiveContext[] | LanguageDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LanguageDirectiveContext);
        }

        return this.getRuleContext(i, LanguageDirectiveContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_packageDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterPackageDeclaration) {
             listener.enterPackageDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitPackageDeclaration) {
             listener.exitPackageDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitPackageDeclaration) {
            return visitor.visitPackageDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompatibilityVersionDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMPAT_VERSION(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COMPAT_VERSION, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ZserioParser.STRING_LITERAL, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_compatibilityVersionDirective;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterCompatibilityVersionDirective) {
             listener.enterCompatibilityVersionDirective(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitCompatibilityVersionDirective) {
             listener.exitCompatibilityVersionDirective(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitCompatibilityVersionDirective) {
            return visitor.visitCompatibilityVersionDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PackageNameDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PACKAGE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.PACKAGE, 0)!;
    }
    public id(): IdContext[];
    public id(i: number): IdContext | null;
    public id(i?: number): IdContext[] | IdContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }

        return this.getRuleContext(i, IdContext);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.DOT);
    	} else {
    		return this.getToken(ZserioParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_packageNameDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterPackageNameDefinition) {
             listener.enterPackageNameDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitPackageNameDefinition) {
             listener.exitPackageNameDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitPackageNameDefinition) {
            return visitor.visitPackageNameDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImportDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IMPORT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.IMPORT, 0)!;
    }
    public id(): IdContext[];
    public id(i: number): IdContext | null;
    public id(i?: number): IdContext[] | IdContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }

        return this.getRuleContext(i, IdContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.DOT);
    	} else {
    		return this.getToken(ZserioParser.DOT, i);
    	}
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public MULTIPLY(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.MULTIPLY, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_importDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterImportDeclaration) {
             listener.enterImportDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitImportDeclaration) {
             listener.exitImportDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitImportDeclaration) {
            return visitor.visitImportDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LanguageDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public symbolDefinition(): SymbolDefinitionContext | null {
        return this.getRuleContext(0, SymbolDefinitionContext);
    }
    public typeDeclaration(): TypeDeclarationContext | null {
        return this.getRuleContext(0, TypeDeclarationContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_languageDirective;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterLanguageDirective) {
             listener.enterLanguageDirective(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitLanguageDirective) {
             listener.exitLanguageDirective(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitLanguageDirective) {
            return visitor.visitLanguageDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public subtypeDeclaration(): SubtypeDeclarationContext | null {
        return this.getRuleContext(0, SubtypeDeclarationContext);
    }
    public structureDeclaration(): StructureDeclarationContext | null {
        return this.getRuleContext(0, StructureDeclarationContext);
    }
    public choiceDeclaration(): ChoiceDeclarationContext | null {
        return this.getRuleContext(0, ChoiceDeclarationContext);
    }
    public unionDeclaration(): UnionDeclarationContext | null {
        return this.getRuleContext(0, UnionDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public bitmaskDeclaration(): BitmaskDeclarationContext | null {
        return this.getRuleContext(0, BitmaskDeclarationContext);
    }
    public sqlTableDeclaration(): SqlTableDeclarationContext | null {
        return this.getRuleContext(0, SqlTableDeclarationContext);
    }
    public sqlDatabaseDefinition(): SqlDatabaseDefinitionContext | null {
        return this.getRuleContext(0, SqlDatabaseDefinitionContext);
    }
    public serviceDefinition(): ServiceDefinitionContext | null {
        return this.getRuleContext(0, ServiceDefinitionContext);
    }
    public pubsubDefinition(): PubsubDefinitionContext | null {
        return this.getRuleContext(0, PubsubDefinitionContext);
    }
    public instantiateDeclaration(): InstantiateDeclarationContext | null {
        return this.getRuleContext(0, InstantiateDeclarationContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_typeDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTypeDeclaration) {
             listener.enterTypeDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTypeDeclaration) {
             listener.exitTypeDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTypeDeclaration) {
            return visitor.visitTypeDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SymbolDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constDefinition(): ConstDefinitionContext | null {
        return this.getRuleContext(0, ConstDefinitionContext);
    }
    public ruleGroupDefinition(): RuleGroupDefinitionContext | null {
        return this.getRuleContext(0, RuleGroupDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_symbolDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSymbolDefinition) {
             listener.enterSymbolDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSymbolDefinition) {
             listener.exitSymbolDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSymbolDefinition) {
            return visitor.visitSymbolDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONST(): antlr.TerminalNode {
        return this.getToken(ZserioParser.CONST, 0)!;
    }
    public typeInstantiation(): TypeInstantiationContext {
        return this.getRuleContext(0, TypeInstantiationContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_constDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterConstDefinition) {
             listener.enterConstDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitConstDefinition) {
             listener.exitConstDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitConstDefinition) {
            return visitor.visitConstDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RuleGroupDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RULE_GROUP(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RULE_GROUP, 0)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public ruleDefinition(): RuleDefinitionContext[];
    public ruleDefinition(i: number): RuleDefinitionContext | null;
    public ruleDefinition(i?: number): RuleDefinitionContext[] | RuleDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RuleDefinitionContext);
        }

        return this.getRuleContext(i, RuleDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_ruleGroupDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterRuleGroupDefinition) {
             listener.enterRuleGroupDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitRuleGroupDefinition) {
             listener.exitRuleGroupDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitRuleGroupDefinition) {
            return visitor.visitRuleGroupDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RuleDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RULE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RULE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_ruleDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterRuleDefinition) {
             listener.enterRuleDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitRuleDefinition) {
             listener.exitRuleDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitRuleDefinition) {
            return visitor.visitRuleDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubtypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SUBTYPE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SUBTYPE, 0)!;
    }
    public typeReference(): TypeReferenceContext {
        return this.getRuleContext(0, TypeReferenceContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_subtypeDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSubtypeDeclaration) {
             listener.enterSubtypeDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSubtypeDeclaration) {
             listener.exitSubtypeDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSubtypeDeclaration) {
            return visitor.visitSubtypeDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructureDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRUCTURE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.STRUCTURE, 0)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public templateParameters(): TemplateParametersContext | null {
        return this.getRuleContext(0, TemplateParametersContext);
    }
    public typeParameters(): TypeParametersContext | null {
        return this.getRuleContext(0, TypeParametersContext);
    }
    public structureFieldDefinition(): StructureFieldDefinitionContext[];
    public structureFieldDefinition(i: number): StructureFieldDefinitionContext | null;
    public structureFieldDefinition(i?: number): StructureFieldDefinitionContext[] | StructureFieldDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructureFieldDefinitionContext);
        }

        return this.getRuleContext(i, StructureFieldDefinitionContext);
    }
    public functionDefinition(): FunctionDefinitionContext[];
    public functionDefinition(i: number): FunctionDefinitionContext | null;
    public functionDefinition(i?: number): FunctionDefinitionContext[] | FunctionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDefinitionContext);
        }

        return this.getRuleContext(i, FunctionDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_structureDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterStructureDeclaration) {
             listener.enterStructureDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitStructureDeclaration) {
             listener.exitStructureDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitStructureDeclaration) {
            return visitor.visitStructureDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructureFieldDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldTypeId(): FieldTypeIdContext {
        return this.getRuleContext(0, FieldTypeIdContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public fieldAlignment(): FieldAlignmentContext | null {
        return this.getRuleContext(0, FieldAlignmentContext);
    }
    public fieldOffset(): FieldOffsetContext | null {
        return this.getRuleContext(0, FieldOffsetContext);
    }
    public EXTEND(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.EXTEND, 0);
    }
    public OPTIONAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.OPTIONAL, 0);
    }
    public fieldInitializer(): FieldInitializerContext | null {
        return this.getRuleContext(0, FieldInitializerContext);
    }
    public fieldOptionalClause(): FieldOptionalClauseContext | null {
        return this.getRuleContext(0, FieldOptionalClauseContext);
    }
    public fieldConstraint(): FieldConstraintContext | null {
        return this.getRuleContext(0, FieldConstraintContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_structureFieldDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterStructureFieldDefinition) {
             listener.enterStructureFieldDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitStructureFieldDefinition) {
             listener.exitStructureFieldDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitStructureFieldDefinition) {
            return visitor.visitStructureFieldDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldAlignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALIGN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.ALIGN, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_fieldAlignment;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFieldAlignment) {
             listener.enterFieldAlignment(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFieldAlignment) {
             listener.exitFieldAlignment(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFieldAlignment) {
            return visitor.visitFieldAlignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldOffsetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_fieldOffset;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFieldOffset) {
             listener.enterFieldOffset(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFieldOffset) {
             listener.exitFieldOffset(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFieldOffset) {
            return visitor.visitFieldOffset(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldTypeIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeInstantiation(): TypeInstantiationContext {
        return this.getRuleContext(0, TypeInstantiationContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public PACKED(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.PACKED, 0);
    }
    public IMPLICIT(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.IMPLICIT, 0);
    }
    public fieldArrayRange(): FieldArrayRangeContext | null {
        return this.getRuleContext(0, FieldArrayRangeContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_fieldTypeId;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFieldTypeId) {
             listener.enterFieldTypeId(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFieldTypeId) {
             listener.exitFieldTypeId(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFieldTypeId) {
            return visitor.visitFieldTypeId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldArrayRangeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACKET, 0)!;
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACKET, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_fieldArrayRange;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFieldArrayRange) {
             listener.enterFieldArrayRange(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFieldArrayRange) {
             listener.exitFieldArrayRange(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFieldArrayRange) {
            return visitor.visitFieldArrayRange(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_fieldInitializer;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFieldInitializer) {
             listener.enterFieldInitializer(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFieldInitializer) {
             listener.exitFieldInitializer(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFieldInitializer) {
            return visitor.visitFieldInitializer(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldOptionalClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(ZserioParser.IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_fieldOptionalClause;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFieldOptionalClause) {
             listener.enterFieldOptionalClause(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFieldOptionalClause) {
             listener.exitFieldOptionalClause(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFieldOptionalClause) {
            return visitor.visitFieldOptionalClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COLON, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_fieldConstraint;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFieldConstraint) {
             listener.enterFieldConstraint(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFieldConstraint) {
             listener.exitFieldConstraint(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFieldConstraint) {
            return visitor.visitFieldConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ChoiceDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHOICE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.CHOICE, 0)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public typeParameters(): TypeParametersContext {
        return this.getRuleContext(0, TypeParametersContext)!;
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.ON, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public templateParameters(): TemplateParametersContext | null {
        return this.getRuleContext(0, TemplateParametersContext);
    }
    public choiceCases(): ChoiceCasesContext[];
    public choiceCases(i: number): ChoiceCasesContext | null;
    public choiceCases(i?: number): ChoiceCasesContext[] | ChoiceCasesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ChoiceCasesContext);
        }

        return this.getRuleContext(i, ChoiceCasesContext);
    }
    public choiceDefault(): ChoiceDefaultContext | null {
        return this.getRuleContext(0, ChoiceDefaultContext);
    }
    public functionDefinition(): FunctionDefinitionContext[];
    public functionDefinition(i: number): FunctionDefinitionContext | null;
    public functionDefinition(i?: number): FunctionDefinitionContext[] | FunctionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDefinitionContext);
        }

        return this.getRuleContext(i, FunctionDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_choiceDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterChoiceDeclaration) {
             listener.enterChoiceDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitChoiceDeclaration) {
             listener.exitChoiceDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitChoiceDeclaration) {
            return visitor.visitChoiceDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ChoiceCasesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public choiceCase(): ChoiceCaseContext[];
    public choiceCase(i: number): ChoiceCaseContext | null;
    public choiceCase(i?: number): ChoiceCaseContext[] | ChoiceCaseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ChoiceCaseContext);
        }

        return this.getRuleContext(i, ChoiceCaseContext);
    }
    public choiceFieldDefinition(): ChoiceFieldDefinitionContext | null {
        return this.getRuleContext(0, ChoiceFieldDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_choiceCases;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterChoiceCases) {
             listener.enterChoiceCases(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitChoiceCases) {
             listener.exitChoiceCases(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitChoiceCases) {
            return visitor.visitChoiceCases(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ChoiceCaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.CASE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_choiceCase;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterChoiceCase) {
             listener.enterChoiceCase(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitChoiceCase) {
             listener.exitChoiceCase(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitChoiceCase) {
            return visitor.visitChoiceCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ChoiceDefaultContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.DEFAULT, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COLON, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public choiceFieldDefinition(): ChoiceFieldDefinitionContext | null {
        return this.getRuleContext(0, ChoiceFieldDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_choiceDefault;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterChoiceDefault) {
             listener.enterChoiceDefault(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitChoiceDefault) {
             listener.exitChoiceDefault(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitChoiceDefault) {
            return visitor.visitChoiceDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ChoiceFieldDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldTypeId(): FieldTypeIdContext {
        return this.getRuleContext(0, FieldTypeIdContext)!;
    }
    public fieldConstraint(): FieldConstraintContext | null {
        return this.getRuleContext(0, FieldConstraintContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_choiceFieldDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterChoiceFieldDefinition) {
             listener.enterChoiceFieldDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitChoiceFieldDefinition) {
             listener.exitChoiceFieldDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitChoiceFieldDefinition) {
            return visitor.visitChoiceFieldDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNION(): antlr.TerminalNode {
        return this.getToken(ZserioParser.UNION, 0)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public templateParameters(): TemplateParametersContext | null {
        return this.getRuleContext(0, TemplateParametersContext);
    }
    public typeParameters(): TypeParametersContext | null {
        return this.getRuleContext(0, TypeParametersContext);
    }
    public unionFieldDefinition(): UnionFieldDefinitionContext[];
    public unionFieldDefinition(i: number): UnionFieldDefinitionContext | null;
    public unionFieldDefinition(i?: number): UnionFieldDefinitionContext[] | UnionFieldDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnionFieldDefinitionContext);
        }

        return this.getRuleContext(i, UnionFieldDefinitionContext);
    }
    public functionDefinition(): FunctionDefinitionContext[];
    public functionDefinition(i: number): FunctionDefinitionContext | null;
    public functionDefinition(i?: number): FunctionDefinitionContext[] | FunctionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDefinitionContext);
        }

        return this.getRuleContext(i, FunctionDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_unionDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterUnionDeclaration) {
             listener.enterUnionDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitUnionDeclaration) {
             listener.exitUnionDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitUnionDeclaration) {
            return visitor.visitUnionDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnionFieldDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public choiceFieldDefinition(): ChoiceFieldDefinitionContext {
        return this.getRuleContext(0, ChoiceFieldDefinitionContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_unionFieldDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterUnionFieldDefinition) {
             listener.enterUnionFieldDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitUnionFieldDefinition) {
             listener.exitUnionFieldDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitUnionFieldDefinition) {
            return visitor.visitUnionFieldDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENUM(): antlr.TerminalNode {
        return this.getToken(ZserioParser.ENUM, 0)!;
    }
    public typeInstantiation(): TypeInstantiationContext {
        return this.getRuleContext(0, TypeInstantiationContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public enumItem(): EnumItemContext[];
    public enumItem(i: number): EnumItemContext | null;
    public enumItem(i?: number): EnumItemContext[] | EnumItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumItemContext);
        }

        return this.getRuleContext(i, EnumItemContext);
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.COMMA);
    	} else {
    		return this.getToken(ZserioParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_enumDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterEnumDeclaration) {
             listener.enterEnumDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitEnumDeclaration) {
             listener.exitEnumDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitEnumDeclaration) {
            return visitor.visitEnumDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.ASSIGN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public DEPRECATED(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.DEPRECATED, 0);
    }
    public REMOVED(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.REMOVED, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_enumItem;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterEnumItem) {
             listener.enterEnumItem(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitEnumItem) {
             listener.exitEnumItem(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItem) {
            return visitor.visitEnumItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BitmaskDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BITMASK(): antlr.TerminalNode {
        return this.getToken(ZserioParser.BITMASK, 0)!;
    }
    public typeInstantiation(): TypeInstantiationContext {
        return this.getRuleContext(0, TypeInstantiationContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public bitmaskValue(): BitmaskValueContext[];
    public bitmaskValue(i: number): BitmaskValueContext | null;
    public bitmaskValue(i?: number): BitmaskValueContext[] | BitmaskValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BitmaskValueContext);
        }

        return this.getRuleContext(i, BitmaskValueContext);
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.COMMA);
    	} else {
    		return this.getToken(ZserioParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_bitmaskDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterBitmaskDeclaration) {
             listener.enterBitmaskDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitBitmaskDeclaration) {
             listener.exitBitmaskDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitBitmaskDeclaration) {
            return visitor.visitBitmaskDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BitmaskValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.ASSIGN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_bitmaskValue;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterBitmaskValue) {
             listener.enterBitmaskValue(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitBitmaskValue) {
             listener.exitBitmaskValue(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitBitmaskValue) {
            return visitor.visitBitmaskValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlTableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SQL_TABLE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SQL_TABLE, 0)!;
    }
    public id(): IdContext[];
    public id(i: number): IdContext | null;
    public id(i?: number): IdContext[] | IdContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }

        return this.getRuleContext(i, IdContext);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public templateParameters(): TemplateParametersContext | null {
        return this.getRuleContext(0, TemplateParametersContext);
    }
    public USING(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.USING, 0);
    }
    public sqlTableFieldDefinition(): SqlTableFieldDefinitionContext[];
    public sqlTableFieldDefinition(i: number): SqlTableFieldDefinitionContext | null;
    public sqlTableFieldDefinition(i?: number): SqlTableFieldDefinitionContext[] | SqlTableFieldDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SqlTableFieldDefinitionContext);
        }

        return this.getRuleContext(i, SqlTableFieldDefinitionContext);
    }
    public sqlConstraintDefinition(): SqlConstraintDefinitionContext | null {
        return this.getRuleContext(0, SqlConstraintDefinitionContext);
    }
    public sqlWithoutRowId(): SqlWithoutRowIdContext | null {
        return this.getRuleContext(0, SqlWithoutRowIdContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_sqlTableDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSqlTableDeclaration) {
             listener.enterSqlTableDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSqlTableDeclaration) {
             listener.exitSqlTableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSqlTableDeclaration) {
            return visitor.visitSqlTableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlTableFieldDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeInstantiation(): TypeInstantiationContext {
        return this.getRuleContext(0, TypeInstantiationContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public SQL_VIRTUAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.SQL_VIRTUAL, 0);
    }
    public sqlConstraint(): SqlConstraintContext | null {
        return this.getRuleContext(0, SqlConstraintContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_sqlTableFieldDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSqlTableFieldDefinition) {
             listener.enterSqlTableFieldDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSqlTableFieldDefinition) {
             listener.exitSqlTableFieldDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSqlTableFieldDefinition) {
            return visitor.visitSqlTableFieldDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlConstraintDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sqlConstraint(): SqlConstraintContext {
        return this.getRuleContext(0, SqlConstraintContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_sqlConstraintDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSqlConstraintDefinition) {
             listener.enterSqlConstraintDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSqlConstraintDefinition) {
             listener.exitSqlConstraintDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSqlConstraintDefinition) {
            return visitor.visitSqlConstraintDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SQL(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SQL, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_sqlConstraint;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSqlConstraint) {
             listener.enterSqlConstraint(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSqlConstraint) {
             listener.exitSqlConstraint(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSqlConstraint) {
            return visitor.visitSqlConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlWithoutRowIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SQL_WITHOUT_ROWID(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SQL_WITHOUT_ROWID, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_sqlWithoutRowId;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSqlWithoutRowId) {
             listener.enterSqlWithoutRowId(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSqlWithoutRowId) {
             listener.exitSqlWithoutRowId(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSqlWithoutRowId) {
            return visitor.visitSqlWithoutRowId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlDatabaseDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SQL_DATABASE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SQL_DATABASE, 0)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public sqlDatabaseFieldDefinition(): SqlDatabaseFieldDefinitionContext[];
    public sqlDatabaseFieldDefinition(i: number): SqlDatabaseFieldDefinitionContext | null;
    public sqlDatabaseFieldDefinition(i?: number): SqlDatabaseFieldDefinitionContext[] | SqlDatabaseFieldDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SqlDatabaseFieldDefinitionContext);
        }

        return this.getRuleContext(i, SqlDatabaseFieldDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_sqlDatabaseDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSqlDatabaseDefinition) {
             listener.enterSqlDatabaseDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSqlDatabaseDefinition) {
             listener.exitSqlDatabaseDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSqlDatabaseDefinition) {
            return visitor.visitSqlDatabaseDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlDatabaseFieldDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeInstantiation(): TypeInstantiationContext {
        return this.getRuleContext(0, TypeInstantiationContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_sqlDatabaseFieldDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterSqlDatabaseFieldDefinition) {
             listener.enterSqlDatabaseFieldDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitSqlDatabaseFieldDefinition) {
             listener.exitSqlDatabaseFieldDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitSqlDatabaseFieldDefinition) {
            return visitor.visitSqlDatabaseFieldDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ServiceDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SERVICE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SERVICE, 0)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public serviceMethodDefinition(): ServiceMethodDefinitionContext[];
    public serviceMethodDefinition(i: number): ServiceMethodDefinitionContext | null;
    public serviceMethodDefinition(i?: number): ServiceMethodDefinitionContext[] | ServiceMethodDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ServiceMethodDefinitionContext);
        }

        return this.getRuleContext(i, ServiceMethodDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_serviceDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterServiceDefinition) {
             listener.enterServiceDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitServiceDefinition) {
             listener.exitServiceDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitServiceDefinition) {
            return visitor.visitServiceDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ServiceMethodDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeReference(): TypeReferenceContext[];
    public typeReference(i: number): TypeReferenceContext | null;
    public typeReference(i?: number): TypeReferenceContext[] | TypeReferenceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeReferenceContext);
        }

        return this.getRuleContext(i, TypeReferenceContext);
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_serviceMethodDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterServiceMethodDefinition) {
             listener.enterServiceMethodDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitServiceMethodDefinition) {
             listener.exitServiceMethodDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitServiceMethodDefinition) {
            return visitor.visitServiceMethodDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PubsubDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PUBSUB(): antlr.TerminalNode {
        return this.getToken(ZserioParser.PUBSUB, 0)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public pubsubMessageDefinition(): PubsubMessageDefinitionContext[];
    public pubsubMessageDefinition(i: number): PubsubMessageDefinitionContext | null;
    public pubsubMessageDefinition(i?: number): PubsubMessageDefinitionContext[] | PubsubMessageDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PubsubMessageDefinitionContext);
        }

        return this.getRuleContext(i, PubsubMessageDefinitionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_pubsubDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterPubsubDefinition) {
             listener.enterPubsubDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitPubsubDefinition) {
             listener.exitPubsubDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitPubsubDefinition) {
            return visitor.visitPubsubDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PubsubMessageDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public topicDefinition(): TopicDefinitionContext {
        return this.getRuleContext(0, TopicDefinitionContext)!;
    }
    public typeReference(): TypeReferenceContext {
        return this.getRuleContext(0, TypeReferenceContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_pubsubMessageDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterPubsubMessageDefinition) {
             listener.enterPubsubMessageDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitPubsubMessageDefinition) {
             listener.exitPubsubMessageDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitPubsubMessageDefinition) {
            return visitor.visitPubsubMessageDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TopicDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TOPIC(): antlr.TerminalNode {
        return this.getToken(ZserioParser.TOPIC, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public PUBLISH(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.PUBLISH, 0);
    }
    public SUBSCRIBE(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.SUBSCRIBE, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_topicDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTopicDefinition) {
             listener.enterTopicDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTopicDefinition) {
             listener.exitTopicDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTopicDefinition) {
            return visitor.visitTopicDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FUNCTION(): antlr.TerminalNode {
        return this.getToken(ZserioParser.FUNCTION, 0)!;
    }
    public functionType(): FunctionTypeContext {
        return this.getRuleContext(0, FunctionTypeContext)!;
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public functionBody(): FunctionBodyContext {
        return this.getRuleContext(0, FunctionBodyContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_functionDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFunctionDefinition) {
             listener.enterFunctionDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFunctionDefinition) {
             listener.exitFunctionDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionDefinition) {
            return visitor.visitFunctionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeReference(): TypeReferenceContext {
        return this.getRuleContext(0, TypeReferenceContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_functionType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFunctionType) {
             listener.enterFunctionType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFunctionType) {
             listener.exitFunctionType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_functionName;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFunctionName) {
             listener.enterFunctionName(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFunctionName) {
             listener.exitFunctionName(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACE, 0)!;
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RETURN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_functionBody;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFunctionBody) {
             listener.enterFunctionBody(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFunctionBody) {
             listener.exitFunctionBody(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public parameterDefinition(): ParameterDefinitionContext[];
    public parameterDefinition(i: number): ParameterDefinitionContext | null;
    public parameterDefinition(i?: number): ParameterDefinitionContext[] | ParameterDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterDefinitionContext);
        }

        return this.getRuleContext(i, ParameterDefinitionContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.COMMA);
    	} else {
    		return this.getToken(ZserioParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_typeParameters;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTypeParameters) {
             listener.enterTypeParameters(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTypeParameters) {
             listener.exitTypeParameters(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeReference(): TypeReferenceContext {
        return this.getRuleContext(0, TypeReferenceContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_parameterDefinition;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterParameterDefinition) {
             listener.enterParameterDefinition(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitParameterDefinition) {
             listener.exitParameterDefinition(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitParameterDefinition) {
            return visitor.visitParameterDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TemplateParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LT, 0)!;
    }
    public id(): IdContext[];
    public id(i: number): IdContext | null;
    public id(i?: number): IdContext[] | IdContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }

        return this.getRuleContext(i, IdContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.GT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.COMMA);
    	} else {
    		return this.getToken(ZserioParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_templateParameters;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTemplateParameters) {
             listener.enterTemplateParameters(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTemplateParameters) {
             listener.exitTemplateParameters(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTemplateParameters) {
            return visitor.visitTemplateParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TemplateArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LT, 0)!;
    }
    public templateArgument(): TemplateArgumentContext[];
    public templateArgument(i: number): TemplateArgumentContext | null;
    public templateArgument(i?: number): TemplateArgumentContext[] | TemplateArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TemplateArgumentContext);
        }

        return this.getRuleContext(i, TemplateArgumentContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.GT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.COMMA);
    	} else {
    		return this.getToken(ZserioParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_templateArguments;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTemplateArguments) {
             listener.enterTemplateArguments(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTemplateArguments) {
             listener.exitTemplateArguments(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTemplateArguments) {
            return visitor.visitTemplateArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TemplateArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeReference(): TypeReferenceContext {
        return this.getRuleContext(0, TypeReferenceContext)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_templateArgument;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTemplateArgument) {
             listener.enterTemplateArgument(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTemplateArgument) {
             listener.exitTemplateArgument(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTemplateArgument) {
            return visitor.visitTemplateArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InstantiateDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INSTANTIATE(): antlr.TerminalNode {
        return this.getToken(ZserioParser.INSTANTIATE, 0)!;
    }
    public typeReference(): TypeReferenceContext {
        return this.getRuleContext(0, TypeReferenceContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_instantiateDeclaration;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterInstantiateDeclaration) {
             listener.enterInstantiateDeclaration(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitInstantiateDeclaration) {
             listener.exitInstantiateDeclaration(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitInstantiateDeclaration) {
            return visitor.visitInstantiateDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class BitwiseXorExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public XOR(): antlr.TerminalNode {
        return this.getToken(ZserioParser.XOR, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterBitwiseXorExpression) {
             listener.enterBitwiseXorExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitBitwiseXorExpression) {
             listener.exitBitwiseXorExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitBitwiseXorExpression) {
            return visitor.visitBitwiseXorExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DotExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.DOT, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterDotExpression) {
             listener.enterDotExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitDotExpression) {
             listener.exitDotExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitDotExpression) {
            return visitor.visitDotExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValueofExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public VALUEOF(): antlr.TerminalNode {
        return this.getToken(ZserioParser.VALUEOF, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterValueofExpression) {
             listener.enterValueofExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitValueofExpression) {
             listener.exitValueofExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitValueofExpression) {
            return visitor.visitValueofExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShiftExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public GT(): antlr.TerminalNode[];
    public GT(i: number): antlr.TerminalNode | null;
    public GT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.GT);
    	} else {
    		return this.getToken(ZserioParser.GT, i);
    	}
    }
    public LSHIFT(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.LSHIFT, 0);
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterShiftExpression) {
             listener.enterShiftExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitShiftExpression) {
             listener.exitShiftExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitShiftExpression) {
            return visitor.visitShiftExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RBRACKET, 0)!;
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LBRACKET, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterArrayExpression) {
             listener.enterArrayExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitArrayExpression) {
             listener.exitArrayExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitArrayExpression) {
            return visitor.visitArrayExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumbitsExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public NUMBITS(): antlr.TerminalNode {
        return this.getToken(ZserioParser.NUMBITS, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterNumbitsExpression) {
             listener.enterNumbitsExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitNumbitsExpression) {
             listener.exitNumbitsExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitNumbitsExpression) {
            return visitor.visitNumbitsExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdditiveExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.MINUS, 0);
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterAdditiveExpression) {
             listener.enterAdditiveExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitAdditiveExpression) {
             listener.exitAdditiveExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RelationalExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.LT, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.LE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.GT, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.GE, 0);
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterRelationalExpression) {
             listener.enterRelationalExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitRelationalExpression) {
             listener.exitRelationalExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LengthofExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public LENGTHOF(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LENGTHOF, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterLengthofExpression) {
             listener.enterLengthofExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitLengthofExpression) {
             listener.exitLengthofExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitLengthofExpression) {
            return visitor.visitLengthofExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterIdentifierExpression) {
             listener.enterIdentifierExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitIdentifierExpression) {
             listener.exitIdentifierExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierExpression) {
            return visitor.visitIdentifierExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicativeExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public MULTIPLY(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.MULTIPLY, 0);
    }
    public DIVIDE(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.DIVIDE, 0);
    }
    public MODULO(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.MODULO, 0);
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterMultiplicativeExpression) {
             listener.enterMultiplicativeExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitMultiplicativeExpression) {
             listener.exitMultiplicativeExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalOrExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LOGICAL_OR(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LOGICAL_OR, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterLogicalOrExpression) {
             listener.enterLogicalOrExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitLogicalOrExpression) {
             listener.exitLogicalOrExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalOrExpression) {
            return visitor.visitLogicalOrExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IsSetExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COMMA, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public ISSET(): antlr.TerminalNode {
        return this.getToken(ZserioParser.ISSET, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterIsSetExpression) {
             listener.enterIsSetExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitIsSetExpression) {
             listener.exitIsSetExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitIsSetExpression) {
            return visitor.visitIsSetExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitwiseOrExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(ZserioParser.OR, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterBitwiseOrExpression) {
             listener.enterBitwiseOrExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitBitwiseOrExpression) {
             listener.exitBitwiseOrExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitBitwiseOrExpression) {
            return visitor.visitBitwiseOrExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitwiseAndExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(ZserioParser.AND, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterBitwiseAndExpression) {
             listener.enterBitwiseAndExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitBitwiseAndExpression) {
             listener.exitBitwiseAndExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitBitwiseAndExpression) {
            return visitor.visitBitwiseAndExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualityExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.EQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.NE, 0);
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterEqualityExpression) {
             listener.enterEqualityExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitEqualityExpression) {
             listener.exitEqualityExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalAndExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LOGICAL_AND(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LOGICAL_AND, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterLogicalAndExpression) {
             listener.enterLogicalAndExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitLogicalAndExpression) {
             listener.exitLogicalAndExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalAndExpression) {
            return visitor.visitLogicalAndExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFunctionCallExpression) {
             listener.enterFunctionCallExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFunctionCallExpression) {
             listener.exitFunctionCallExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCallExpression) {
            return visitor.visitFunctionCallExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ZserioParser.INDEX, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterIndexExpression) {
             listener.enterIndexExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitIndexExpression) {
             listener.exitIndexExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitIndexExpression) {
            return visitor.visitIndexExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.MINUS, 0);
    }
    public BANG(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.BANG, 0);
    }
    public TILDE(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.TILDE, 0);
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterUnaryExpression) {
             listener.enterUnaryExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitUnaryExpression) {
             listener.exitUnaryExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterLiteralExpression) {
             listener.enterLiteralExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitLiteralExpression) {
             listener.exitLiteralExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TernaryExpressionContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COLON, 0)!;
    }
    public QUESTIONMARK(): antlr.TerminalNode {
        return this.getToken(ZserioParser.QUESTIONMARK, 0)!;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTernaryExpression) {
             listener.enterTernaryExpression(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTernaryExpression) {
             listener.exitTernaryExpression(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTernaryExpression) {
            return visitor.visitTernaryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BINARY_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.BINARY_LITERAL, 0);
    }
    public OCTAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.OCTAL_LITERAL, 0);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.DECIMAL_LITERAL, 0);
    }
    public HEXADECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.HEXADECIMAL_LITERAL, 0);
    }
    public BOOL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.BOOL_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.STRING_LITERAL, 0);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.FLOAT_LITERAL, 0);
    }
    public DOUBLE_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.DOUBLE_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_literal;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(ZserioParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_id;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterId) {
             listener.enterId(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitId) {
             listener.exitId(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitId) {
            return visitor.visitId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public builtinType(): BuiltinTypeContext | null {
        return this.getRuleContext(0, BuiltinTypeContext);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public templateArguments(): TemplateArgumentsContext | null {
        return this.getRuleContext(0, TemplateArgumentsContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_typeReference;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTypeReference) {
             listener.enterTypeReference(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTypeReference) {
             listener.exitTypeReference(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTypeReference) {
            return visitor.visitTypeReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeInstantiationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeReference(): TypeReferenceContext {
        return this.getRuleContext(0, TypeReferenceContext)!;
    }
    public typeArguments(): TypeArgumentsContext | null {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    public dynamicLengthArgument(): DynamicLengthArgumentContext | null {
        return this.getRuleContext(0, DynamicLengthArgumentContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_typeInstantiation;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTypeInstantiation) {
             listener.enterTypeInstantiation(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTypeInstantiation) {
             listener.exitTypeInstantiation(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTypeInstantiation) {
            return visitor.visitTypeInstantiation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BuiltinTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public intType(): IntTypeContext | null {
        return this.getRuleContext(0, IntTypeContext);
    }
    public varintType(): VarintTypeContext | null {
        return this.getRuleContext(0, VarintTypeContext);
    }
    public fixedBitFieldType(): FixedBitFieldTypeContext | null {
        return this.getRuleContext(0, FixedBitFieldTypeContext);
    }
    public dynamicBitFieldType(): DynamicBitFieldTypeContext | null {
        return this.getRuleContext(0, DynamicBitFieldTypeContext);
    }
    public boolType(): BoolTypeContext | null {
        return this.getRuleContext(0, BoolTypeContext);
    }
    public stringType(): StringTypeContext | null {
        return this.getRuleContext(0, StringTypeContext);
    }
    public floatType(): FloatTypeContext | null {
        return this.getRuleContext(0, FloatTypeContext);
    }
    public externType(): ExternTypeContext | null {
        return this.getRuleContext(0, ExternTypeContext);
    }
    public bytesType(): BytesTypeContext | null {
        return this.getRuleContext(0, BytesTypeContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_builtinType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterBuiltinType) {
             listener.enterBuiltinType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitBuiltinType) {
             listener.exitBuiltinType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitBuiltinType) {
            return visitor.visitBuiltinType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public id(): IdContext[];
    public id(i: number): IdContext | null;
    public id(i?: number): IdContext[] | IdContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }

        return this.getRuleContext(i, IdContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.DOT);
    	} else {
    		return this.getToken(ZserioParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_qualifiedName;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LPAREN, 0)!;
    }
    public typeArgument(): TypeArgumentContext[];
    public typeArgument(i: number): TypeArgumentContext | null;
    public typeArgument(i?: number): TypeArgumentContext[] | TypeArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }

        return this.getRuleContext(i, TypeArgumentContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ZserioParser.COMMA);
    	} else {
    		return this.getToken(ZserioParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_typeArguments;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTypeArguments) {
             listener.enterTypeArguments(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTypeArguments) {
             listener.exitTypeArguments(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTypeArguments) {
            return visitor.visitTypeArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPLICIT(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.EXPLICIT, 0);
    }
    public id(): IdContext | null {
        return this.getRuleContext(0, IdContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_typeArgument;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterTypeArgument) {
             listener.enterTypeArgument(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitTypeArgument) {
             listener.exitTypeArgument(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitTypeArgument) {
            return visitor.visitTypeArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DynamicLengthArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.LT, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(ZserioParser.GT, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_dynamicLengthArgument;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterDynamicLengthArgument) {
             listener.enterDynamicLengthArgument(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitDynamicLengthArgument) {
             listener.exitDynamicLengthArgument(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitDynamicLengthArgument) {
            return visitor.visitDynamicLengthArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT8(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.INT8, 0);
    }
    public INT16(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.INT16, 0);
    }
    public INT32(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.INT32, 0);
    }
    public INT64(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.INT64, 0);
    }
    public UINT8(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.UINT8, 0);
    }
    public UINT16(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.UINT16, 0);
    }
    public UINT32(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.UINT32, 0);
    }
    public UINT64(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.UINT64, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_intType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterIntType) {
             listener.enterIntType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitIntType) {
             listener.exitIntType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitIntType) {
            return visitor.visitIntType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarintTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VARINT(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARINT, 0);
    }
    public VARINT16(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARINT16, 0);
    }
    public VARINT32(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARINT32, 0);
    }
    public VARINT64(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARINT64, 0);
    }
    public VARSIZE(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARSIZE, 0);
    }
    public VARUINT(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARUINT, 0);
    }
    public VARUINT16(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARUINT16, 0);
    }
    public VARUINT32(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARUINT32, 0);
    }
    public VARUINT64(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.VARUINT64, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_varintType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterVarintType) {
             listener.enterVarintType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitVarintType) {
             listener.exitVarintType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitVarintType) {
            return visitor.visitVarintType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FixedBitFieldTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ZserioParser.COLON, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(ZserioParser.DECIMAL_LITERAL, 0)!;
    }
    public BIT_FIELD(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.BIT_FIELD, 0);
    }
    public INT_FIELD(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.INT_FIELD, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_fixedBitFieldType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFixedBitFieldType) {
             listener.enterFixedBitFieldType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFixedBitFieldType) {
             listener.exitFixedBitFieldType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFixedBitFieldType) {
            return visitor.visitFixedBitFieldType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DynamicBitFieldTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BIT_FIELD(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.BIT_FIELD, 0);
    }
    public INT_FIELD(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.INT_FIELD, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_dynamicBitFieldType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterDynamicBitFieldType) {
             listener.enterDynamicBitFieldType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitDynamicBitFieldType) {
             listener.exitDynamicBitFieldType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitDynamicBitFieldType) {
            return visitor.visitDynamicBitFieldType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BoolTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOL(): antlr.TerminalNode {
        return this.getToken(ZserioParser.BOOL, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_boolType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterBoolType) {
             listener.enterBoolType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitBoolType) {
             listener.exitBoolType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitBoolType) {
            return visitor.visitBoolType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(ZserioParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_stringType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterStringType) {
             listener.enterStringType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitStringType) {
             listener.exitStringType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitStringType) {
            return visitor.visitStringType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FloatTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FLOAT16(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.FLOAT16, 0);
    }
    public FLOAT32(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.FLOAT32, 0);
    }
    public FLOAT64(): antlr.TerminalNode | null {
        return this.getToken(ZserioParser.FLOAT64, 0);
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_floatType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterFloatType) {
             listener.enterFloatType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitFloatType) {
             listener.exitFloatType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitFloatType) {
            return visitor.visitFloatType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExternTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXTERN(): antlr.TerminalNode {
        return this.getToken(ZserioParser.EXTERN, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_externType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterExternType) {
             listener.enterExternType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitExternType) {
             listener.exitExternType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitExternType) {
            return visitor.visitExternType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BytesTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BYTES(): antlr.TerminalNode {
        return this.getToken(ZserioParser.BYTES, 0)!;
    }
    public override get ruleIndex(): number {
        return ZserioParser.RULE_bytesType;
    }
    public override enterRule(listener: ZserioParserListener): void {
        if(listener.enterBytesType) {
             listener.enterBytesType(this);
        }
    }
    public override exitRule(listener: ZserioParserListener): void {
        if(listener.exitBytesType) {
             listener.exitBytesType(this);
        }
    }
    public override accept<Result>(visitor: ZserioParserVisitor<Result>): Result | null {
        if (visitor.visitBytesType) {
            return visitor.visitBytesType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
