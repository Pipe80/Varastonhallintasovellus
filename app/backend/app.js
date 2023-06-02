const express = require('express')
const app = express()
PORT = 3000

app.get('/', (req, res) => {
  res.status(200).send('Backend for IDS collector app.')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})