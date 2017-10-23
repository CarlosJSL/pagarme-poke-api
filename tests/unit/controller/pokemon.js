import sinon from 'sinon'
import PokemonController from '../../../controllers/pokemon'
import Pokemon from '../../../models/pokemon'

describe('Controllers: Pokemon',() => {
    
    const defaultPokemon = [{
            name: 'Default pokemon',
            price: 2.2,
            sotck: 1
        }]

    const defaultRequest = {
        params: {}
    }

    describe('Cadastrar pokemon: create()',() => {
        it('Deve cadastrar um pokemon', () => {
            const requestWithBody = Object.assign({}, { body: defaultPokemon[0] }, defaultRequest);
            
            class fakePokemon {
                static create() {}
            }

            const response = {
                send: sinon.spy(),
                status: sinon.stub()
            }

            response.status.withArgs(201).resolves(response)

            sinon.stub(fakePokemon.prototype, 'create').withArgs().resolves();

            const pokemonController = new PokemonController(fakePokemon)

            return pokemonController.create(requestWithBody, response)
                .then(() => {
                     sinon.assert.calledWith(response.send);
                })

        })
    })
})