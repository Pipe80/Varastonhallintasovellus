const express = require('express')
const router = express.Router()

const {
  createOrderFromXML,
  getAllOrders,
  getOpenOrders
} = require('../controllers/orderControllers.js')

router.post('/createOrderFromXML', createOrderFromXML)
router.get('/getAllOrders', getAllOrders)
router.get('/getOpenOrders', getOpenOrders)

module.exports = router