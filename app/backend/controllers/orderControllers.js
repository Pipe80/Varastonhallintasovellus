const Order = require('../models/Order')
const Order2 = require('../models/Order2')
const APIError = require('../errors/apierror')
const { StatusCodes } = require('http-status-codes')
// XML => JSON and JSON => XML
const { XMLParser, XMLBuilder } = require('fast-xml-parser');
const parser = new XMLParser
// Read files
const { readFile } = require('fs')

// This takes XML from req.body and stores it to MongoDB
// This works
const createOrderFromXML = async (req, res, next) => {
  // Check that body has data
  if (Object.keys(req.body).length === 0) {
    // If no data throw error
    throw new APIError('No data in body', StatusCodes.BAD_REQUEST)
  }
  // If body has data store it to variable
  let JSONOrder = req.body        
  console.log(JSONOrder)
  // Try catch for error handling
  try {
    // Asyncronic call to create a new Order to MongoDB
    await Order.create(JSONOrder)
    res.status(StatusCodes.CREATED).json(JSONOrder)
  } catch (err) {
    next(err)
  }  
}

// This controller returns all orders stored in database
// This works
const getAllOrders = async (req, res, next) => {
  const orders = await Order.find({})
  console.log(orders)
  if (orders.length === 0) throw new APIError('No orders in database', StatusCodes.NOT_FOUND)
  if (orders) res.status(StatusCodes.OK).json(orders)  
}

// This controller returns all orders that are marked as open
// This works
const getOpenOrders = async (req, res, next) => {
  const queryObject = {}
  queryObject.order_status = "In collection"
  const orders = await Order.find({'order.order_status': 'Open'})
  console.log(orders)
  res.status(StatusCodes.OK).json(orders)  
}

// Commented controller down from here were just for testing.
/* 
// This reads XML from a file and returns it in response
// This works
const sendXML = async (req, res, next) => {
  readFile('./data/order.xml', (err, data) => {
    if (err) {
      next(err)
    } else {
      let JSONOrder = parser.parse(data)
      res.json(JSONOrder)
    }    
  })  
}

// This stores one order from XML-file to MongoDB
// This works
const createXMLOrderFromFile = async (req, res, next) => {
  readFile('./data/order.xml', (err, data) => {
    if (err) {
      next(err)
    } else {
      let JSONOrder = parser.parse(data)      
      console.log(JSONOrder)
      let order = Order.create(JSONOrder)
      res.status(StatusCodes.CREATED).json(JSONOrder)
    }
  })
}



// This reads XML from a file and returns it in response
// This works
const getOrders = async (_req, res, next) => {  
  readFile('./data/orders.xml', (err, data) => {
    if (err) {
      next(err)
    } else {
      let jsonOrders = parser.parse(data)      
      res.json(jsonOrders)
    }
  })
}

// This takes JSON in req.body and stores it to MongoDB
// This works
const createJSONOrder = async (req, res, _next) => {
  if (Object.keys(req.body).length === 0) {
    throw new APIError('No data in body', StatusCodes.BAD_REQUEST)
  }
  const order = await Order2.create(req.body)
  res.status(StatusCodes.CREATED).json({order})
}

*/


module.exports = {
  createOrderFromXML,
  getAllOrders,
  getOpenOrders
}