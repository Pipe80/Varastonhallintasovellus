require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const orders = require('./routes/orders')
const PORT = process.env.PORT
const mongoDB = process.env.MONGO_URI
const connectMongoDB = require('./db/mongoDB')
const mongoose = require('mongoose')

const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')

const morgan = require('morgan')

app.use(express.static('./public'))
app.use(express.json())
// Logger middleware
app.use(morgan('combined'))

app.use('/api', orders)

app.use(notFound)
app.use(errorHandler)

async function start() {
  connectMongoDB(mongoDB)
  app.listen(PORT, () => console.log(`Server listening to port: ${PORT}`))

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'Connection error: '))
  db.once('open', () => console.log('Database "IDS" connected.'))
}

start()