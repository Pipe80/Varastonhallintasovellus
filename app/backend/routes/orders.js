const express = require('express')
const router = express.Router()

const {
  getOrders,
} = require('../controllers/orderControllers.js')

router.get('/openOrders', getOrders)

module.exports = router