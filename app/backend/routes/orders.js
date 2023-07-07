const express = require('express')
const router = express.Router()

const {
  createOrderFromXML,
  getAllOrders,
  getOpenOrders,
  collectingStarted,
  editOrder,
  collectedOrder,
  itemsMissing
} = require('../controllers/orderControllers.js')

// route for receiving an order from webshop
router.post('/createOrderFromXML', createOrderFromXML)

// route for getting all orders in database
router.get('/getAllOrders', getAllOrders)

// route for getting all open orders in database
router.get('/getOpenOrders', getOpenOrders)

// route for starting collecting
// use this route when user selects an order for collecting
router.put('/collectingStarted/:id', collectingStarted)

// route for editing an order in database
// use this route to update each item that is collected
router.put('/editOrder/:id', editOrder)

// route for completelly collected orders
// use this route when user confirms that collecting is complete
router.put('/collectedOrder/:id', collectedOrder)

// route for missing items
// use this route if something can't be found from warehouse
router.put('/itemsMissing/:id', itemsMissing)

module.exports = router