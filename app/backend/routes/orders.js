const express = require('express')
const router = express.Router()

const {
  getOrders,
  createOrder,
} = require('../controllers/orderControllers.js')

router.get('/openOrders', getOrders)
router.post('/createOrder', createOrder)

module.exports = router