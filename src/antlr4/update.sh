#!/bin/bash

##
## Generate lexer and parser for zserio grammar
##

set -Eeuo pipefail

ZSERIO_VER=v2.16.0

ZSERIO_URL_BASE=https://raw.githubusercontent.com/ndsev/zserio/$ZSERIO_VER/compiler/core/antlr

curl -O "$ZSERIO_URL_BASE/ZserioLexer.g4" -O "$ZSERIO_URL_BASE/ZserioParser.g4"

npx antlr4ng -Dlanguage=TypeScript -listener -visitor ZserioLexer.g4 ZserioParser.g4
