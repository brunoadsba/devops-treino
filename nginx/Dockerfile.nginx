FROM nginx:latest

# Copiando o script de espera para o container
COPY wait-for-flask.sh /app/wait-for-flask.sh
RUN chmod +x /app/wait-for-flask.sh

# Copiando as configurações do Nginx para o container
COPY flask_app.conf /etc/nginx/conf.d/flask_app.conf

# Definindo o ponto de entrada para garantir que o Nginx só inicie após o Flask estar pronto
ENTRYPOINT ["/bin/sh", "-c", "/app/wait-for-flask.sh nginx -g 'daemon off;'"]
