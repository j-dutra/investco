# Empresa de investimento: InvestCo

Este projeto faz parte de um desafio proposto em nossas mentorias, dentro do Programa Desenvolve 2023, promovido pelo Grupo Booticário. A idéia é que seja algo onde possamos práticar os conhecimentos adquiridos na trilha de desenvolvimento fullstack.

### Para rodar o Projeto

Estando na pasta raiz do projeto digite:

### `npm install`

### `npm start`

### `npm run build`


## Sobre o Projeto

Funcionalidade: 
Cadastro de usuarios - administradores e investidores. O software deve permitir que os usuários se cadastrem e criem uma conta na plataforma

Monitoramento de carteira

Análise de risco

Sugestão de investimentos


Primeira Etapa:
Cadastro de usuarios


Além de cadastrar o usuario, o sistema deve ser capaz de realizar o login do mesmo, para realizar o login podemos solicitar apenas email e senha e validar se as informações estão corretas. Após verificar se o email e senha estão corretos, temos que saber qual é a role do usuario, se ele for admin deve aparecer na tela a mensagem, “Ola Administrador” e se for investidor deve aparecer na tela “Ola Investidor”.


Tarefas:
FrontEd
Criar um formulario de cadastro do usuario, o formulario deve contemplar todos os campos das classes Usuario, Administrador e Investidor.
Criar formulario para login do usuário, o formulario deve ter os campos de email/user e senha.

Backend:
Modelar as classes do diagrama acima
Criar conexão com banco de dados
Criar controller com rota para cadastrar usuário.
Criar controller com rota para realizar login do usuário
Criar service que salva usuario no banco de dados

