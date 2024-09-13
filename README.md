
# API de Gerenciamento de Produtos

Esta API gerencia produtos e categorias, oferecendo operações CRUD protegidas por autenticação JWT.

## Tecnologias

- **NestJS**: Framework Node.js modular e escalável, com suporte a TypeScript.
- **TypeORM**: ORM para manipulação de bancos de dados relacionais com entidades e repositórios.
- **MySQL**: Banco de dados relacional, confiável e amplamente utilizado.
- **Passport.js**: Middleware de autenticação com suporte a JWT.
- **Bcrypt**: Biblioteca para hash seguro de senhas.
- **Multer**: Middleware para manipulação de upload de arquivos.
- **Dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para a aplicação.
- **Prettier**: Ferramenta para formatação de código consistente.

## Dependências Principais

- `@nestjs/common`: ^10.0.0
- `@nestjs/core`: ^10.0.0
- `@nestjs/jwt`: ^10.2.0
- `@nestjs/passport`: ^10.0.3
- `@nestjs/swagger`: ^7.4.0
- `@nestjs/typeorm`: ^10.0.2
- `mysql2`: ^3.11.0
- `passport`: ^0.7.0
- `passport-jwt`: ^4.0.1
- `bcrypt`: ^5.1.1
- `multer`: ^1.4.5-lts.1
- `dotenv`: ^16.4.5
- `swagger-ui-express`: ^5.0.1
- `typeorm`: ^0.3.20

## Dependências de Desenvolvimento

- `@nestjs/cli`: ^10.0.0
- `@types/express`: ^4.17.17
- `@types/jest`: ^29.5.2
- `jest`: ^29.5.0
- `supertest`: ^7.0.0
- `ts-node`: ^10.9.1
- `prettier`: ^3.0.0
- `eslint`: ^8.42.0
- `typescript`: ^5.1.3

## Como Rodar a Aplicação

### Pré-requisitos
- MySQL instalado localmente
- Docker (opcional)

### Rodando Localmente

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>
   ```

2. **Instale as dependências**:
   ```bash
   yarn install
   ```

3. **Configure o banco de dados**:
   - Crie um banco MySQL chamado `irede_produtos`.
   - Defina as credenciais no arquivo `.env` com as variáveis de ambiente (utilizando o `dotenv`).
   - Tem um .env.example !!!

4. **Inicie a aplicação**:
   ```bash
   yarn start
   ```

### Rodando com Docker

1. **Suba os serviços com Docker Compose**:
   ```bash
   docker-compose up --build
   ```

   Isso iniciará a API e o MySQL em containers.

### Acesso à Documentação

A documentação completa da API está disponível em [http://localhost:3000/api](http://localhost:3000/api) (Swagger), onde você encontrará detalhes de todos os endpoints.

### Autenticação

1. **Registro**: Use o endpoint `/auth/register` para criar uma conta.
2. **Login**: Após o registro, faça login em `/auth/login` para receber um token JWT.
3. **Testar endpoints**: Use o token JWT nos outros endpoints protegidos.