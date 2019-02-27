
all: generate_go generate_js

generate_go:
	docker run --rm -v $${PWD}:/local \
		openapitools/openapi-generator-cli:v3.3.3 \
		generate \
		--input-spec /local/spec/asset-swagger.yaml \
		--generator-name go \
		--config /local/go/openapi_config.json \
		--output /local/go/sdk

	sudo chown -R $$(whoami):$$(whoami) go

generate_js:
	docker run --rm -v $${PWD}:/local \
		openapitools/openapi-generator-cli:v3.3.3 \
		generate \
		--input-spec /local/spec/asset-swagger.yaml \
		--generator-name javascript \
		--config /local/js/openapi_config.json \
		--output /local/js/sdk

	sudo chown -R $$(whoami):$$(whoami) js
