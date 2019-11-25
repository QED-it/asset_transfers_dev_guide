# Asset transfers SDKs

This repository provides the means to operate the QED-it asset transfers API.

The HTTP API is specified using the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification).

Check out [QEDIT's swagger UI running and using the spec file from this repository](https://asset-api.qed-it.com/)

## SDK repositories maintained by QEDIT

  * [Python](https://github.com/QED-it/pyqedit)
  * [Go](https://github.com/QED-it/goqedit)

Alternatively, you can generate SDKs by yourself.

## Generate SDK

### Using `docker` and the batteries included `Makefile`

Simply run `make <language>`. Currently the supported languages in the `Makefile` and `generate_in_docker.sh` script are:

  * `Go`
  * `Python`
  * `JS`

Alternatively you can use the other method of generating the SDK:

### Using [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator/)

Follow the instructions on [this repository](https://github.com/OpenAPITools/openapi-generator/). The input which is the
`asset-swagger.yaml` file is independent on any external tools.

## Config files

Each language have got specific key-value JSON configuration for it.
See [here](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/) for a language-specific configuration definitions.
