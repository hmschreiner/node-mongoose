#!/bin/bash

# Baixa a imagem
docker pull mongo

# Remove o container, se existir
docker stop node-mongoose
docker container rm node-mongoose

# Gera o container
docker run --name node-mongoose -p 27017:27017 -d mongo
