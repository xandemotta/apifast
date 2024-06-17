# Use a imagem base do Python
FROM python:3.8

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo de requisitos para o contêiner
COPY requirements.txt .

# #PYTHONPATH NO APP PARA IMPORTAÇÕES
# ENV PYTHONPATH "${PYTHONPATH}:/app"

# Instala as dependências
RUN pip install -r requirements.txt

# Copia o restante do código fonte para o contêiner
COPY . .

# Comando para iniciar o servidor
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
