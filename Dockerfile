# Usando uma imagem oficial do Python como base
FROM python:3.12

# Configurando o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o arquivo de requirements.txt para o diretório de trabalho
COPY requirements.txt .

# Instalando as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Copiando todo o conteúdo do diretório atual para o diretório de trabalho no container
COPY . .

# Expondo a porta que será usada pelo Flask
EXPOSE 8080

# Comando para rodar a aplicação Flask
CMD ["python", "app.py"]
