const express = require('express')
const router = express.Router()

const {
  getOrders,
  createJSONOrder,
  sendXML,
  createXMLOrderFromFile,
  createXMLOrder
} = require('../controllers/orderControllers.js')

router.get('/openOrders', getOrders)
router.get('/sendXML', sendXML)
router.post('/createJSONOrder', createJSONOrder)

router.post('/XMLOrderFromFile', createXMLOrderFromFile)
router.post('/XMLOrder', createXMLOrder)

module.exports = router