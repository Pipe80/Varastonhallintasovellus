const mongoose = require("mongoose")

const item2Schema = new mongoose.Schema({
  name: { type: String, require: true },
  product_id: { type: String, require: true},
  item_status: { type: String, require: true}
})
const order2Schema = new mongoose.Schema({  
    order_id: { type: String, require: true },
    order_status: { type: String, require: true },
    customer: { type: String, require: true },
    address: { type: String, require: true },
    items: [item2Schema]
  
})

const Order2 = mongoose.model('Order2', order2Schema, 'orders')

module.exports = Order2