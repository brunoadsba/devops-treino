# Usando uma imagem oficial do Python como base
FROM python:3.9-slim

# Configurando o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o arquivo de requirements.txt para o diretório de trabalho
COPY requirements.txt .

# Instalando as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Copiando todo o conteúdo do diretório atual para o diretório de trabalho no container
COPY . .

# Definindo a variável de ambiente para o Flask
ENV FLASK_APP=app.py

# Expondo a porta que será usada pelo Flask
EXPOSE 5000

# Comando para rodar a aplicação Flask
CMD ["flask", "run", "--host=0.0.0.0"]
