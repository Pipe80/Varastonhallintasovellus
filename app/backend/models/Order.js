const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
  name: { type: String, require: true },
  product_id: { type: String, require: true},
  item_status: { type: String, require: true}
})
const orderSchema = new mongoose.Schema({
  order: {
    order_id: { type: String, require: true },
    order_status: { type: String, require: true },
    customer: { type: String, require: true },
    address: { type: String, require: true },
    items: {item: [itemSchema]}
  }
})

const Order = mongoose.model('Order', orderSchema, 'orders')

module.exports = Order