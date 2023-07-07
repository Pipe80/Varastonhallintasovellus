const mongoose = require('mongoose')

const connectMongoDB = (url) => {
  mongoose.set('strictQuery', false)
  mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
}

module.exports = connectMongoDB