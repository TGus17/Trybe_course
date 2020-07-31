#!/bin/bash

# Esse exercício não está finalizando nem testado.

if [ -d $1 ]
then    
    QT=`ls -l $1 | wc -l`
    echo "O diretório $1 tem $QT arquivos."
else
    echo "O argumento $1 não é um diretório."
fi
