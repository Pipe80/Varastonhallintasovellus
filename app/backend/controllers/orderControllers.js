// XML => JSON and JSON => XML
const { XMLParser, XMLBuilder } = require('fast-xml-parser');
const parser = new XMLParser
// Read files
const { readFile } = require('fs')

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

module.exports = {
  getOrders,
}