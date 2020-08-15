#!/bin/bash
FORMAT=$(date +%F)

for ARQ in `ls *.txt`
do
    mv $ARQ ${FORMAT}-${ARQ}
done
