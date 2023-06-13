const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
  name: { type: String, require: true },
  productID: { type: String, require: true},
  itemStatus: { type: String, require: true}
})
const orderSchema = new mongoose.Schema({
  order: {
    orderID: { type: String, require: true },
    orderStatus: { type: String, require: true },
    customer: { type: String, require: true },
    address: { type: String, require: true },
    items: {item: [itemSchema]}
  }
})

const Order = mongoose.model('Order', orderSchema, 'orders')

module.exports = Order