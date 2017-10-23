import PokemonController from '../controllers/pokemon'

export default (app) => {
  const pokemonController = new PokemonController(app.datasource.models.pokemon)

  app.route('/api/get-pokemons')
     .get((req, res) => pokemonController.getAll(req,res))
    
  app.route('/api/create-pokemons')
     .post((req, res) => pokemonController.create(req,res))

  app.route('/api/buy-pokemons')
     .post((req, res) => pokemonController.buy(req,res))
};