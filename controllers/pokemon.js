import HttpStatus from 'http-status'

class PokemonController {

  constructor(Pokemon) {
    this.pokemon = Pokemon
  }

  getAll(req,res){
    
  }

  register(req,res){

      return this.pokemon.create(req.body)
                .then((pokemon) => {return res.status(201)
                                    .send(pokemon)})
                .catch(err => err)
  }

  buy(req,res){

  }

}
export default PokemonController