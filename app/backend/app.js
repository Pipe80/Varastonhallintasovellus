const express = require('express')
const app = express()
const orders = require('./routes/orders')

PORT = 3000

const morgan = require('morgan')

app.use(express.static('./public'))
app.use(express.json())
// Logger middleware
app.use(morgan('combined'))

app.use('/api', orders)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})