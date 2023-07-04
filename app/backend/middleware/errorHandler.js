const APIError = require('../errors/apierror')
const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, _req, res, _next) => {
  if (err.name === 'ValidationError') {
    let errors = {}
    Object.keys(err.errors).forEach((key) => {
      errors.key = err.errors[key].message
    })
    return res.status(StatusCodes.BAD_REQUEST).send({ success: false, message: err.message})
  }
  if (err.code === 11000) {
    return res.status(StatusCodes.CONFLICT).send({ success: false, message: 'Duplicate order_id' })
  }
  if (err instanceof APIError) {
    console.log('Error code: ' + err.statusCode + ', error message: ' + err.message)
    return res.status(err.statusCode).json({ message: err.message})
  }  
  if (err.code === 'ENOENT') {
    return res.status(StatusCodes.NOT_FOUND).json( {message: 'No file found in path: ' + err.path })
  } 
  
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
}

module.exports = errorHandler