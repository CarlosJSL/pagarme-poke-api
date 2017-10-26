import sinon from 'sinon'
import PokemonController from '../../../controllers/pokemon'
import Pokemon from '../../../models/pokemon'

describe('Controllers: Pokemon', () => {
  const defaultPokemon = {
    name: 'Default pokemon',
    price: 2.2,
    stock: 1,
  }

  const listOfPokemons = [{
    name: 'Default pokemon',
    price: 2.2,
    stock: 1,
  }]


  describe('Cadastrar pokemon: create()', () => {
    it('Deve cadastrar um pokemon', () => {
      const request = { body: defaultPokemon }

      const response = {
        status(code) {
          this.httpcode = code
          return this
        },
        send(json) {
          this.body = json
          return this
        },
      }

      const pokemonRegistered = {
        id: 1,
        name: 'Default pokemon',
        price: 2.2,
        stock: 1,
        updatedAt: '2017-10-24T02:36:18.010Z',
        createdAt: '2017-10-24T02:36:18.010Z',
      }

      class fakePokemon {
        static create() {}
      }

      const createStub = sinon.stub(fakePokemon, 'create')
      createStub.withArgs(request).resolves(pokemonRegistered)

      const pokemonController = new PokemonController(fakePokemon)

      return pokemonController.register(request, response)
        .then((result) => {
          sinon.assert.match(result.body.id, 1)
          sinon.assert.match(result.body.name, 'Default pokemon')
          sinon.assert.match(result.body.price, 2.2)
          sinon.assert.match(result.body.stock, 1)
          sinon.assert.match(result.body.updatedAt, '2017-10-24T02:36:18.010Z')
          sinon.assert.match(result.body.createdAt, '2017-10-24T02:36:18.010Z')
        })
    })
  })

  describe('Lista todos os pokemons: getAll()', () => {
    it('Deve listar todos os pokemons', () => {
      const response = {
        status(code) {
          this.httpcode = code
          return this
        },
        send(json) {
          this.body = json
          return this
        },
      }

      class fakePokemon {
        static findAll() {}
      }


      const findAllStub = sinon.stub(fakePokemon, 'findAll')
      findAllStub.withArgs().resolves(listOfPokemons)

      const pokemonController = new PokemonController(fakePokemon)

      return pokemonController.getAll(response)
        .then((result) => {
          sinon.assert.match(result.body.length, 1)
        })
    })
  })
})
