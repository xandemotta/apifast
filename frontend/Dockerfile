# Use uma imagem de nó como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json (se existirem)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte da aplicação
COPY . .

# Compile o projeto Vue para produção
RUN npm run build

# Exponha a porta 8080 para acesso externo
EXPOSE 8080

# Comando para iniciar a aplicação quando o contêiner for executado
CMD ["npm", "run", "serve"]
