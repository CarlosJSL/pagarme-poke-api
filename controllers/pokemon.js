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
      
      return this.Pokemon.findOrCreate({where:{name:req.body.name},
                                        defaults: { name: req.body.name, price: req.body.price }})
                 .then((result) =>  {
                   
                   if(result[1]){
                      return res.status(HttpStatus.CREATED).send(result)
                   }
                      return res.status(HttpStatus.OK).send("Pokemon já está cadastrado")
                  })
                 .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err))
  }

  async buy(req,res){
    
    const pokemon = await this.findOnePokemon(req,res);
      request(pagarmeRequest(pokemon,req.body.quantity))
      .then((body) => {
        if (body.status == 'paid') {
          
          pokemon.stock = pokemon.stock - req.body.quantity;
          // this.Pokemon.save()
          // 	.then((result) => {
          // 		res.send(result);
          // 	})
          res.status(201).send("Compra feita com sucesso!")
        }
      })
      .catch((err) => res.status(err.response).send(err.response))
  }

  async findOnePokemon(req,res){
   return this.Pokemon.findOne({where: {name: req.body.name}})
              .then((pokemon)=> {
                if (pokemon.stock < req.body.quantity) {
                  return res.status(HttpStatus.BAD_REQUEST).send({
                    error: 'Not enought ' + pokemon.name + ' in stock: ' + pokemon.stock
                  })
                }
                return pokemon
              })
              .catch((err)=> res.status(HttpStatus.NOT_FOUND).send("Pokémon não cadastrado no sistema"))
  }
}
export default PokemonController