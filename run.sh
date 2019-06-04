#!/usr/bin/env bash
set -eo pipefail

case $1 in
    start)
        # The '| cat' is to trick Node that his is a nonTTY terminal
        # then react-scripts won't clear the console.
        yarn start | cat
        ;;
    build)
        yarn build
        ;;
    test)
        yarn test $@
        ;;
    *)
        exec "$@"
        ;;
esac