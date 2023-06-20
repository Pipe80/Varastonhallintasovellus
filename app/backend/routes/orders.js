const express = require('express')
const router = express.Router()

const {
  createOrderFromXML,
  getOpenOrders
} = require('../controllers/orderControllers.js')

router.post('/createOrderFromXML', createOrderFromXML)
router.get('/getOpenOrders', getOpenOrders)

module.exports = router