OWNER        = goldsite
SERVICE      = web
STAGE        = lab

NETWORK_NAME ?= ${OWNER}_network
PROJECT_NAME ?= ${OWNER}-${STAGE}-${SERVICE}
MYSQL_IMAGE		= mysql-goldsite:5.6


network:
	@docker network create ${NETWORK_NAME} || true

development:
	docker build -f docker/mysql/Dockerfile -t ${MYSQL_IMAGE} docker/mysql/	

install:
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		-v $(PWD)/app:/app \
		-w /app \
		node:14.19-slim \
		npm install

build-browser:
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		-v $(PWD)/app:/app \
		-w /app \
		node:14.19-slim \
		npm run build:browser:dev

build:
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		-v $(PWD)/app:/app \
		-w /app \
		node:14.19-slim \
		npm run build


start:network
	@export NETWORK_NAME="$(NETWORK_NAME)" \
	PROJECT_NAME="$(PROJECT_NAME)" && \
	MYSQL_IMAGE="$(MYSQL_IMAGE)" && \
		docker-compose up -d

restart:network
	@export NETWORK_NAME="$(NETWORK_NAME)"\
	PROJECT_NAME="$(PROJECT_NAME)" && \
		docker-compose restart

stop:network
	@export NETWORK_NAME="$(NETWORK_NAME)"\
	PROJECT_NAME="$(PROJECT_NAME)" && \
	MYSQL_IMAGE="$(MYSQL_IMAGE)" && \
		docker-compose stop

logs:network
	@export NETWORK_NAME="$(NETWORK_NAME)" && \
		docker-compose logs -f --tail=10