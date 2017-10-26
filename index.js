import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import request from 'request-promise'
import config from './config/config'
import datasource from './config/datasource'
import pokemonRouter from './routes/pokemon'

const app = express()

app.config = config
app.datasource = datasource(app)

app.use(bodyParser.json())
app.use(morgan('tiny'))

const port = process.env.port || 3000

app.set('port', port)

pokemonRouter(app)

export default app

