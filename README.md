#  Sobre

<img src="https://uploaddeimagens.com.br/images/003/050/799/original/WhatsApp_Image_2021-01-25_at_00.38.41.jpeg?1611546036" width=400>

<img src="https://uploaddeimagens.com.br/images/003/050/800/original/WhatsApp_Image_2021-01-25_at_00.33.40.jpeg?1611546070 width=400>

Esse projeto faz parte do desafio imposto pela empresa Domatech para recutrar um novo dev de react!

# 📚 Instruções

## 🚨 Requisitos

Para rodar esse projeto, você precisará dos seguintes pacotes instalados:

* [NodeJS v10.16 or higher](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/)

## ⚡ Passo-a-Passo

### 1. Clonar o repositório

    $ git clone https://github.com/alvarobraz/desafio-tecnico-agenda.git

### 2. Inicializar o container utilizando DOCKER

    $ docker run --name somename -e POSTGRES_PASSWORD=password -d postgres

Se você já possuir um container com Postgres, rode:
    
    $ docker start "CONTAINER DOCKER ID"


### 3. Rode os seguintes comandos na pasta BACKEND para inicializar o servidor:

    $ cd backend

para instalar as dependências:

    $ yarn

Rodar as migrations:

    $ yarn sequelize db:create

    $ yarn sequelize db:migrate


Inicializar o servidor:

    $ yarn dev

### 4. Rode os seguintes comandos na pasta FRONTEND para iniciar a versão web:

para instalar as dependências:

    $ yarn

Inicializar o servidor:

    $ yarn start

### 6. Rode os seguintes comandos na pasta MOBILE para iniciar a versão mobile (Apenas Android)

para instalar as dependências:

    $ yarn

Inicializar o simulador:

    $ yarn react-native run-android

Abrir outro terminal:

    $yarn react-native start --reset-cache

    (r) no terminal e (r) no celular

Abrir outro terminal:

    $yarn android




# 👨‍💻 Tecnologias

## Backend

* NodeJS
* Express
* Docker
* Sequelize
* Axios
* Immer
* bcrypt.js
* cors
* jsonwebtoken
* multer
* Reactotron
* Yup
* multer
* ESLint
* Prettier

## Frontend

* ReactJs
* Redux
* Redux-Saga
* Axios
* Immer
* React-Icons
* @rocketseat/unform
* History
* styled-components
* React-Select
* React-Toastify
* Root import
* Reactotron
* Yup
* ESLint
* Prettier

## Mobile (Apenas iOS)

* React-Native
* Redux
* Redux-Saga
* React-Navigation
* React-Native-Camera
* Axios
* Immer
* styled-components
* Reactotron
* Root import
* ESLint
* Prettier


Made with ❤️ by [Alvaro Braz](https://www.linkedin.com/in/%C3%A1lvaro-adriano-braz-8b718425/) 🤙
