# API de Gerenciamento de Produtos

Esta API é projetada para gerenciar produtos e categorias. Oferece operações CRUD (Criar, Ler, Atualizar e Excluir) para produtos e categorias, com autenticação baseada em JWT para proteger os endpoints.

## Tecnologias Usadas

### NestJS
- **Motivo**: O NestJS é um framework Node.js progressivo que facilita a construção de aplicativos escaláveis e eficientes. Ele utiliza TypeScript por padrão, o que proporciona uma melhor tipagem e suporte a recursos modernos de JavaScript.

### TypeORM
- **Motivo**: O TypeORM é uma biblioteca de ORM para TypeScript e JavaScript que facilita a interação com bancos de dados relacionais. Ele ajuda a mapear entidades para tabelas e permite realizar operações de banco de dados de maneira intuitiva.

### MySQL
- **Motivo**: MySQL é um dos sistemas de gerenciamento de banco de dados relacionais mais populares e amplamente usados, conhecido por sua confiabilidade e desempenho.

### Passport.js
- **Motivo**: Passport é um middleware de autenticação para Node.js que suporta vários mecanismos de autenticação, como JWT, e facilita a integração com diferentes estratégias de autenticação.

### Bcrypt
- **Motivo**: Bcrypt é uma biblioteca para hash de senhas, oferecendo uma maneira segura de armazenar e verificar senhas no banco de dados.

## Passo a Passo para Rodar a Aplicação Localmente

1. **Clone o Repositório**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>


2. **Instale as Dependências**

  Utilize o Yarn para instalar as dependências:

  yarn install

3. ** Configuração do Banco de dados**

 

Crie um banco de dados MySQL com o nome irede_produtos e configure o acesso no arquivo ormconfig.json ou nas variáveis de ambiente.

Inicialize a Aplicação

Execute o comando para iniciar a aplicação:

    yarn start

    Teste os Endpoints

    A API estará disponível em http://localhost:3000. Você pode testar os endpoints usando uma ferramenta como Insomnia ou Postman.

