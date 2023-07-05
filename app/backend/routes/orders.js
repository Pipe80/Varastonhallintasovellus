const express = require('express')
const router = express.Router()

const {
  createOrderFromXML,
  getAllOrders,
  getOpenOrders,
  editOrder,
  collectedOrder,
} = require('../controllers/orderControllers.js')

// route for receiving an order from webshop
router.post('/createOrderFromXML', createOrderFromXML)
// route for getting all orders in database
router.get('/getAllOrders', getAllOrders)
// route for getting all open orders in database
router.get('/getOpenOrders', getOpenOrders)
// route for editing an order in database
router.put('/editOrder/:id', editOrder)
// route for completelly collected orders
router.put('/collectedOrder/:id', collectedOrder)

module.exports = router