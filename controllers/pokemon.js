import HttpStatus from 'http-status'

class PokemonController {

  constructor(Pokemon) {
    this.Pokemon = Pokemon
  }

  getAll(res){
    
    return this.Pokemon.findAll()
               .then((result) => res.status(HttpStatus.OK).send(result))
               .catch(err => err)
  }

  register(req,res){
      
      return this.Pokemon.create(req)
                 .then((result) => res.status(HttpStatus.CREATED).send(result))
                 .catch(err => err)
  }

  buy(req,res){

  }

}
export default PokemonController