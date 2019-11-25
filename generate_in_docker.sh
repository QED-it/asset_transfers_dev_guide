#!/usr/bin/env sh

OPENAPI_GENERATOR_NAME=go
OPENAPI_GENERATOR_LANG=go

usage()
{
  echo "Usage :  $0 [options]

    Options:
    -h      Display this message
    -g      Generator name (go/js)"
}

while getopts ":g:h" opt
do
  case $opt in
  h)
    usage
    exit 0
    ;;
  g)
    OPENAPI_GENERATOR_LANG="${OPTARG}"
    ;;
  *)
    echo "option does not exist: ${OPTARG}"
    usage
    exit 1
    ;;

  esac
done
shift $(($OPTIND-1))

case "$OPENAPI_GENERATOR_LANG" in
  go)
    OPENAPI_GENERATOR_NAME=go
    export GO_POST_PROCESS_FILE="/usr/local/bin/gofmt -w"
    OPENAPI_GENERATOR_REPO_ID=goqedit
    ;;
  js)
    OPENAPI_GENERATOR_NAME=javascript
    OPENAPI_GENERATOR_REPO_ID=jsqedit
    ;;
  python)
    OPENAPI_GENERATOR_NAME=python
    OPENAPI_GENERATOR_REPO_ID=pyqedit
    ;;
  *)
    echo "unknown generator language: ${OPENAPI_GENERATOR_LANG}"
    exit 1
esac

echo "NOTE: assuming that this file is running on the docker image openapitools/openapi-generator-cli"

script_path=$(readlink -f $(dirname $0))
echo "running in ${script_path}"

/usr/local/bin/docker-entrypoint.sh generate \
  --input-spec "/${script_path}/spec/asset-swagger.yaml" \
  --generator-name "$OPENAPI_GENERATOR_NAME" \
  --output "/${script_path}/${OPENAPI_GENERATOR_LANG}" \
  --git-user-id "QED-it" \
  --git-repo-id "$OPENAPI_GENERATOR_REPO_ID" \
  --config "/${script_path}/${OPENAPI_GENERATOR_LANG}.json"
