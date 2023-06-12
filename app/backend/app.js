require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const PORT = process.env.PORT
const orders = require('./routes/orders')
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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})