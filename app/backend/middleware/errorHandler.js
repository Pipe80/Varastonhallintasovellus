const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, _req, res, _next) => {
  if (err.code === 'ENOENT') {
    return res.status(StatusCodes.NOT_FOUND).json( {message: 'No file found in path: ' + err.path })
  } else return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'There was an error' })
}

module.exports = errorHandler