const mongoose = require("mongoose")

const itemScema = new mongoose.Schema({
  name: { type: String, require: true },
  productID: { type: Number, require: true},
  itemStatus: { type: String, require: true}
})
const orderSchema = new mongoose.Schema({
  orderID: { type: Number, require: true },
  orderStatus: { type: String, require: true },
  customer: { type: String, require: true },
  address: { type: String, require: true },
  items: [itemScema]
})

const Order = mongoose.model('Order', orderSchema, 'orders')

module.exports = Order