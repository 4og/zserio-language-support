#!/bin/bash

##
## Generate lexer and parser for zserio grammar
##

set -Eeuo pipefail

ZSERIO_VER=v2.8.0
ANTLR4_VER=4.9.3

ANTLR4_URL=https://www.antlr.org/download/antlr-$ANTLR4_VER-complete.jar
ZSERIO_URL_BASE=https://raw.githubusercontent.com/ndsev/zserio/$ZSERIO_VER/compiler/core/antlr
TMP_DIR=`mktemp -d -t antlr4_XXXX`

function cleanup {      
  echo "Remove temp directory $TMP_DIR"
  rm -rf "$TMP_DIR"
}

trap cleanup EXIT

curl -o "$TMP_DIR/antlr4.jar" "$ANTLR4_URL"
curl -O "$ZSERIO_URL_BASE/ZserioLexer.g4" -O "$ZSERIO_URL_BASE/ZserioParser.g4"

java -jar "$TMP_DIR/antlr4.jar" -Dlanguage=JavaScript -listener -visitor ZserioLexer.g4 ZserioParser.g4
