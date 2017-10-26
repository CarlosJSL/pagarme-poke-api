<p align="center">
  <img src="https://pagamento-me.s3.amazonaws.com/wp-content/uploads/2014/05/pagar.me_.jpg" width="900" height="400"/>
</p>

# Pagarme 
Refactoring da API  para venda de Pokemons

## Estrutura do diretório
```sh
.
├── config
│	└── config.js
│	└── datasource.js
├── controllers
│   ├── pokemon.js
│    
├── models
│   ├── pokemon.js
│      
├── routes
│	└── pokemon.js
├── tests
├── index.js
└── server.js
└── package.json
```


## Tecnologias
- ES6
- Babel
- NodeJS
- Express
- Sequelize
- SQLite
- Eslint
- Webpack

### Pokemon
|      METODO      |     ENDPOINT              |        FUNÇÃO                                    
|------------------|---------------------------|-----------------------
| GET              | /api/get-pokemons         | Listar todos os pokemons cadastrados
| POST             | /api/create-pokemons      | Cadastrar pokemons no sistema
| POST             | /api/buy-pokemons         | Comprar pokemons




## Rodando localmente


Você primeiramente precisará instalar o SQLite3 

```sh
> sudo add-apt-repository ppa:jonathonf/backports
> sudo apt-get update && sudo apt-get install sqlite3
```

Depois fazer o download do NodeJs
```sh
> sudo apt-get update
> sudo apt-get install nodejs
```

Clonar o projeto
```sh
> git clone https://gitlab.com/carlosjsl95/survivorProject.git
```

Instalar as dependências do projeto
```sh
> npm i
```

E por fim, rodar o projeto localmente
```
> npm start (pasta server)
```

Então acesse `http://localhost:3000/api/{endpoint_name}` para ter acesso a API REST


## Testes
Voce pode rodar os testes com o seguinte comando
```
> npm test-unit
```
