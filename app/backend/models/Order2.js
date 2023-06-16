const mongoose = require("mongoose")

const item2Schema = new mongoose.Schema({
  name: { type: String, require: true },
  productID: { type: String, require: true},
  itemStatus: { type: String, require: true}
})
const order2Schema = new mongoose.Schema({  
    orderID: { type: String, require: true },
    orderStatus: { type: String, require: true },
    customer: { type: String, require: true },
    address: { type: String, require: true },
    items: [item2Schema]
  
})

const Order2 = mongoose.model('Order2', order2Schema, 'orders')

module.exports = Order2