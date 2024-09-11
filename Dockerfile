# Use uma imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código da aplicação para o diretório de trabalho
COPY . .

# Executa o linter para verificar bugs
RUN npm run lint

# Compila o código TypeScript para JavaScript
RUN npm run build

# Expõe a porta da aplicação
EXPOSE 3000

# Inicia a aplicação em modo de desenvolvimento
CMD ["npm", "run", "start:dev"]
