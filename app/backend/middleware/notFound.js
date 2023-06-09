const { StatusCodes } = require('http-status-codes')

const notFound = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send({ error: 'Unknown endpoint' })
}

module.exports = notFound