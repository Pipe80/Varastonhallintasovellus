const express = require('express')
const app = express()
const { orders } = require('./data/orders')
PORT = 3000

app.use(express.json())

// Frontpage with some text
app.get('/', (req, res) => {
  res.status(200).send('Backend for IDS collector app.')
})

// Route that serves all open orders
app.get('/api/openOrders', (req, res) => {
  res.json(orders)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})