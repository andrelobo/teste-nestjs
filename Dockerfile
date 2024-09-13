# Usa uma imagem base do Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia o arquivo package.json e yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instala as dependências da aplicação
RUN yarn install

# Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Compila o projeto
RUN yarn build

# Exponha a porta na qual a aplicação será executada
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["node", "dist/main.js"]
