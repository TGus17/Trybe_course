#!/bin/bash

# Vou ter muito sucesso na programação!

DIRETORIO=$1
EXTENSAO=$2
FORMAT=$(date +%F)

cd $DIRETORIO

for ARQ in `ls *.$EXTENSAO`
do
    echo "Renomeando $ARQ para ${FORMAT}-${ARQ}"
    mv $ARQ ${FORMAT}-${ARQ}
done
