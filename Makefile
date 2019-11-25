
all: generate_go generate_js generate_python

# NOTE if changing the image, make sure to do so in .drone.yml as well
generate_go:
	docker run --user $(shell id -u):$(shell id -g) --rm \
		-v $${PWD}:/local \
		openapitools/openapi-generator-cli:v3.3.3 \
		/local/generate_in_docker.sh

generate_js:
	docker run --user $(shell id -u):$(shell id -g) --rm \
		-v $${PWD}:/local \
		openapitools/openapi-generator-cli:v3.3.3 \
		/local/generate_in_docker.sh -g js

generate_python:
	docker run --user $(shell id -u):$(shell id -g) --rm \
		-v $${PWD}:/local \
		openapitools/openapi-generator-cli:v3.3.3 \
		/local/generate_in_docker.sh -g python

start_ui:
	docker run -p 8080:8080 -e SWAGGER_JSON=/asset-swagger.yaml -v $${PWD}/spec/asset-swagger.yaml:/asset-swagger.yaml swaggerapi/swagger-ui
