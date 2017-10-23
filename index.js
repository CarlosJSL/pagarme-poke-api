import express from 'express'
import bodyParser from 'body-parser'
import request from  'request-promise'
import config from './config/config' 
import datasource from './config/datasource'
import pokemonRouter from './routes/pokemon'

const app = express()

app.config = config;
app.datasource = datasource(app)

app.use(bodyParser.json())
app.use(morgan('tiny'))

app.set('port', 3000)

pokemonRouter(app)

export default app

