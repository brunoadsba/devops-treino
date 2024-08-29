#!/bin/sh

# Espera até que o Flask esteja disponível
until curl -s http://flask-app:8080/health; do
  echo "Aguardando Flask..."
  sleep 2
done

# Inicia o Nginx
exec "$@"
