# Usa a imagem oficial do Node.js como base
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Compila o projeto
RUN npm run build

# Expõe a porta 8080 do contêiner
EXPOSE 8080

# Define o comando padrão a ser executado quando o contêiner for iniciado
CMD ["npm", "run", "serve"]
