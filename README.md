# Sistema de Vendas de Ingressos

Este repositório contém um sistema para venda de ingressos desenvolvido durante o evento **Level Up for Juniors** da **Full Cycle**. O projeto foi implementado em TypeScript e utiliza diversas ferramentas para fornecer uma solução completa de gerenciamento de eventos e vendas de ingressos.

## Funcionalidades Principais

- **Cadastro de Eventos:** Permite a criação de eventos com informações como nome, data, valor único, capacidade máxima e uma lista de ingressos vendidos.
- **Cadastro de Clientes e Parceiros:** Permite a criação dos parceiros e dos clientes, bem como o seu usuário com acesso a API usando tokens.
- **Venda de Ingressos:** Função para vender um ou mais ingressos, com a funcionalidades da reserva do ingresso por ordem de compra, onde o banco de dados é responsável por garantir que um ingresso não seja comprado por mais de um cliente.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **src/**: Contém o código-fonte do sistema.
- **api.http**: Arquivo para testes de API.
- **db.sql**: Script para criação do banco de dados.
- **docker-compose.yaml**: Configuração para containerização com Docker.
- **package.json**: Gerenciamento de dependências do Node.js.
- **tsconfig.json**: Configurações do compilador TypeScript.

## Tecnologias Utilizadas

- TypeScript: Linguagem principal do projeto, adicionando tipagem estática ao JavaScript.
- Node.js: Plataforma para execução do JavaScript no backend.
- Docker: Containerização para facilitar o desenvolvimento e implantação.
- Banco de Dados MySQL: Para armazenamento e gerenciamento de dados.
- JWT (JSON Web Token): Para autenticação e troca de informações seguras entre cliente e servidor.
- bcrypt: Para hashing seguro de senhas, protegendo dados sensíveis.

## Como Executar o Projeto

### Requerimentos

- Node.js 20+
- Docker 

### Rodar a aplicação

```bash
npm install
```

```
npx nodemon
```
- A aplicação estará disponível conforme configurado no código.

---

Este projeto foi desenvolvido como parte do evento **Level Up for Juniors** da **Full Cycle**, visando o aprimoramento de habilidades em desenvolvimento de software e boas práticas de programação.
