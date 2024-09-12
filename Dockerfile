# Usando uma imagem oficial do Node.js
FROM node:20-alpine

# Definindo o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiando o arquivo package.json e o package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante da aplicação
COPY . .

# Expondo a porta que o NestJS vai rodar
EXPOSE 3000

# Definindo o comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "start:dev"]
