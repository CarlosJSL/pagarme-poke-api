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

Você primeiramente deve adquirir uma api_key se cadastrando no site da pagarme para ter acesso a api. 
Após isso, basta adicionar sua chave no arquivo utils.js 

```sh
	api_key: 'sua_chave', <<< adicionar sua chave nesse campo
	card_number: '4024007138010896',
	card_expiration_date: '1050',
	card_holder_name: 'Ash Ketchum',
	card_cvv: '123',
	amount: pokemon.price * quantity * 100,
```

Depois fazer o download do NodeJs
```sh
> sudo apt-get update
> sudo apt-get install nodejs
```

Clonar o projeto
```sh
> git clone https://github.com/CarlosJSL/pagarme-poke-api.git
```

Instalar as dependências do projeto
```sh
> npm i
```

E por fim, rodar o projeto localmente
```
> npm start 
```

Então acesse `http://localhost:3000/api/{endpoint_name}` para ter acesso a API REST


## Build
Através do webpack voce pode minificar o seu projeto em um só arquivo
```
> npm run build
```

## Testes
Voce pode rodar os testes com o seguinte comando
```
> npm test-unit
```
