import HttpStatus from 'http-status'
import pagarmeRequest from '../utils'
import request from 'request-promise'

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
      
      return this.Pokemon.create(req.body)
                 .then((result) =>  res.status(HttpStatus.CREATED).send(result))
                 .catch(err => res.status(400).send(err))
  }

  async buy(req,res){
    
    const pokemon = await this.findOnePokemon(req);
      
      request(pagarmeRequest(pokemon,req.body.quantity))
      .then((body) => {
        if (body.status == 'paid') {
          
          pokemon.stock = pokemon.stock - req.body.quantity;
          // this.Pokemon.save()
          // 	.then((result) => {
          // 		res.send(result);
          // 	})
          res.status(201).send("CADASTRADO")
        }
      })
      .catch((err) => res.status(err.response).send(err.response))
  }

  async findOnePokemon(req){
   return this.Pokemon.findOne({
      where: {
        name: req.body.name
      }
    })
    .then((pokemon)=> {
      if (pokemon.stock < req.body.quantity) {
        return res.status(400).send({
      		error: 'Not enought ' + pokemon.name + ' in stock: ' + pokemon.stock
        })
      }
      return pokemon
    })
    .catch((err)=> res.status(err.response.statusCode).send(err.response.body))
  }
}
export default PokemonController