const express = require('express')
const router = express.Router()

const {
  createOrderFromXML,
  getAllOrders,
  getOpenOrders,
  editOrder
} = require('../controllers/orderControllers.js')

router.post('/createOrderFromXML', createOrderFromXML)
router.get('/getAllOrders', getAllOrders)
router.get('/getOpenOrders', getOpenOrders)
router.put('/editOrder/:id', editOrder)

module.exports = router