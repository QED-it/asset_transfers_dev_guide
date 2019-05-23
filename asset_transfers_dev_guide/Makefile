
all: generate_go generate_js

generate_go:
	docker run --user $(shell id -u):$(shell id -g) --rm -v $${PWD}:/local \
		openapitools/openapi-generator-cli:v3.3.3 \
		generate \
		--input-spec /local/spec/asset-swagger.yaml \
		--generator-name go \
		--config /local/go/openapi_config.json \
		--output /local/go/sdk

generate_js:
	docker run --user $(id -u):$(id -g) --rm -v $${PWD}:/local \
		openapitools/openapi-generator-cli:v3.3.3 \
		generate \
		--input-spec /local/spec/asset-swagger.yaml \
		--generator-name javascript \
		--config /local/js/openapi_config.json \
		--output /local/js/sdk
