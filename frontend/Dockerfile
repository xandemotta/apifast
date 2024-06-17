# Usa uma imagem base do Node.js
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo `package.json` e `package-lock.json` para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código fonte para o diretório de trabalho
COPY . .

# Compila o projeto
RUN npm run build

# Comando padrão a ser executado quando o contêiner for iniciado
CMD ["npm", "run", "serve"]
