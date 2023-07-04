const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pcs: { type: String, required: true },
  product_id: { type: String, required: true},
  item_status: { type: String, required: true}
})
const orderSchema = new mongoose.Schema({
  order: {
    order_id: { type: String, required: true },
    order_status: { type: String, required: true },
    customer: { type: String, required: true },
    address: { type: String, required: true },
    items: {item: [itemSchema]}
  }
})

const Order = mongoose.model('Order', orderSchema, 'orders')

module.exports = Order