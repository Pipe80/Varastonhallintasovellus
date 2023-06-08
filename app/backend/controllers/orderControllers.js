// XML => JSON and JSON => XML
const { XMLParser, XMLBuilder } = require('fast-xml-parser');
const parser = new XMLParser
// Read files
const { readFileSync } = require('fs')

// orders from a JSON-file
//const { orders } = require('./data/orders')

// orders from an XML-file
const xmlOrders = readFileSync('./data/orders.xml')
// parse XML order to JSON-object
let jsonOrders = parser.parse(xmlOrders)

const getOrders = (req, res) => {
  // use this if data is received in XML
  res.json(jsonOrders)
  // use this if data is receiced as JSON
  //res.json(orders)
}

module.exports = {
  getOrders,
}