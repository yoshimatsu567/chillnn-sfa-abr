#!/bin/sh
arg=$1
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if [ -n "$arg" ]; then
    branch=$arg
elif [ $branch = 'stg' ]; then
    branch='stg'
elif [ $branch = 'prd' ]; then
    branch='prd'
else
    branch='dev'
fi
yarn add git+ssh://git@github.com:yoshimatsu567/chillnn-sfa-abr.git#${branch}
