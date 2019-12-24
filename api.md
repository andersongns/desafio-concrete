FORMAT: 1A
HOST: https://desafio-concrete-back-node.herokuapp.com

# Desafio - Concrete

Desafio em node para seleção.

# Group API

## Cadastro de usuário [/sign-up]

### Cadastro de usuário [POST]

-   Request Realização de cadastro de um usuário.

    -   Headers

              Accept: application/json
              Content-Type: application/json

    -   Attributes (Usuário)

-   Response 201 (application/json)

    -   Attributes (Usuário)

## Autenticação [/sign-in]

### Autenticação [POST]

-   Request Solicitação de autenticação.

    -   Headers

              Accept: application/json
              Content-Type: application/json

    -   Attributes (Autenticação)

-   Response 201 (application/json)
    -   Attributes (UsuárioDeRetorno)
-   Response 401 (application/json)
    -   Attributes (Error)

## Consulta de Usuários por ID [/users/:_id]

### Consulta de Usuários por ID [GET]

-   Request Consultar informações do usuário.

-   Response 200 (application/json)

    -   Attributes (UsuárioDeRetorno)

-   Response 404 (application/json)
    -   Attributes (Error)

# Data Structures

## Usuário (object)

-   \_id ( string ) - Identificador da ferramenta
-   nome ( string ) - Nome do usuário
-   email ( string ) - E-mail do usuário
-   senha ( string ) - Senha do usuário
-   telefones (array[Telefone])

## UsuárioDeRetorno (object)

-   \_id ( string ) - Identificador da ferramenta
-   nome ( string ) - Nome do usuário
-   email ( string ) - E-mail do usuário
-   senha ( string ) - Senha do usuário
-   telefones (array[Telefone])
-   token (string) - Token do usuário
-   ultimo_login (string) - Data de registro do ultimo login

## Telefone (object)

-   numero (string) - Telefone do usuário
-   ddd (string) - DDD do telefone

## Autenticação (object)

-   email ( string ) - E-mail do usuário
-   senha ( string ) - Senha do usuário

## Error (object)

-   message (string) - Mensagem contendo a causa do erro
