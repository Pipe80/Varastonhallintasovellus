const Order = require('../models/Order')
const Order2 = require('../models/Order2')
const APIError = require('../errors/apierror')
const { StatusCodes } = require('http-status-codes')
// XML => JSON and JSON => XML
const { XMLParser, XMLBuilder } = require('fast-xml-parser');
const parser = new XMLParser
// Read files
const { readFile } = require('fs')

// This reads XML from a file and returns it in response
// This works
const sendXML = async (req, res, next) => {
  readFile('./data/order.xml', (err, data) => {
    let JSONOrder = parser.parse(data)
    res.json(JSONOrder)
  })
  
}

// This stores one order from XML-file to MongoDB
// This works
const createXMLOrderFromFile = async (req, res, next) => {
  //let JSONOrder
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

// At the moment this takes XML from req.body
const createXMLOrder = async (req, res, next) => {
  let XMLOrder = req.body
  console.log(XMLOrder)
  let JSONOrder = JSON.stringify(req.body)
  //JSON.parse(JSONOrder)
  console.log(JSONOrder)
  const order = await Order2.create(JSONOrder)
  //console.log(order)  
  res.status(StatusCodes.OK).json(JSONOrder)
}





// This reads XML from a file and returns it in response
const getOrders = async (_req, res, next) => {
  // use this if data is received in XML
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
// This needs a new model as Order is modified for XML
const createJSONOrder = async (req, res, _next) => {
  if (Object.keys(req.body).length === 0) {
    throw new APIError('No data in body', StatusCodes.BAD_REQUEST)
  }
  const order = await Order2.create(req.body)
  res.status(StatusCodes.CREATED).json({order})
}

module.exports = {
  getOrders,
  createJSONOrder,
  sendXML,
  createXMLOrderFromFile,
  createXMLOrder
}