require('dotenv').config()
const Order = require('../models/Order')
const Order2 = require('../models/Order2')
const APIError = require('../errors/apierror')
const { StatusCodes } = require('http-status-codes')
// middleware for sending emails
const nodemailer = require('nodemailer');
// XML => JSON and JSON => XML
const { XMLParser, XMLBuilder } = require('fast-xml-parser');
const parser = new XMLParser
// Read files
const { readFile } = require('fs')

const sendEmail = (recipient, emailHeader, emailText) => {
   // Create transport for email
   let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  // Options for email
  const mailOptions = {
    from: process.env.SENDER_EMAIL, // Sender address
    to: recipient, // List of recipients
    subject: emailHeader, // Subject line
    text: emailText, // Plain text body
  };

  // Send email with given options
  transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
}

// This takes XML from req.body and stores it to MongoDB
// This works
const createOrderFromXML = async (req, res, next) => {
  // Check that body has data
  if (Object.keys(req.body).length === 0) {
    // If no data throw error
    throw new APIError('No data in body', StatusCodes.BAD_REQUEST)
  }
  // If body has data store it to variable
  let JSONOrder = req.body        
  console.log(JSONOrder)
  // Try catch for error handling
  try {
    // Asyncronic call to create a new Order to MongoDB
    await Order.create(JSONOrder)
    res.status(StatusCodes.CREATED).json(JSONOrder)
  } catch (err) {
    next(err)
  }  
}

// This controller returns all orders stored in database
// This works
const getAllOrders = async (_req, res, _next) => {
  const orders = await Order.find({})
  console.log(orders)
  if (orders.length === 0) throw new APIError('No orders in database', StatusCodes.NOT_FOUND)
  res.status(StatusCodes.OK).json(orders)  
}

// This controller returns all orders that are marked as open
// This works
const getOpenOrders = async (_req, res, _next) => {
  const queryObject = {}
  queryObject.order_status = "In collection"
  const orders = await Order.find({'order.order_status': 'Open'})
  console.log(orders)
  if (orders.length === 0) throw new APIError('No open orders in database', StatusCodes.NOT_FOUND)
  res.status(StatusCodes.OK).json(orders)  
}

// This controller is used to edit documents stored in MongoDB
// This works
const editOrder = async (req, res) => {
  console.log(req.params.id)   
  const idOfOrder = req.params.id  
  const newInformation = req.body 
  const editedOrder = await Order.findByIdAndUpdate(idOfOrder, newInformation, { runValidators: true })
  // If no document is found throw new APIError
  if (!editedOrder) throw new APIError(`No orders with id ${idOfOrder}`, StatusCodes.NOT_FOUND)
  // Respond that request was succesfull if document is found with
  // provided id.
  res.status(StatusCodes.OK).json({
    success: true,
    message: `Order updated!`
  })
}

// This controller is used to change the state of order
// This works
const collectingStarted = async (req, res) => {
  console.log(req.params.id)   
  const idOfOrder = req.params.id  
  const newInformation = req.body 
  const editedOrder = await Order.findByIdAndUpdate(idOfOrder, newInformation, { runValidators: true })
  // If no document is found throw new APIError
  if (!editedOrder) throw new APIError(`No orders with id ${idOfOrder}`, StatusCodes.NOT_FOUND)

  // Let's create information for email
  const recipient = newInformation.order.email
  const emailHeader = 'Keräily aloitettu'
  const emailText = `
    Terve ${newInformation.order.customer}!
    
    Tilauksesi keräily on aloitettu
    
    Ystävällisin terveisin
    Verkkokauppa
    `

  // Call sendEmail function with email information
  sendEmail(recipient, emailHeader, emailText)

  // Respond that request was succesfull if document is found with
  // provided id.
  res.status(StatusCodes.OK).json({
    success: true,
    message: `Order updated!`
  })
}

// This controller is used to receive a fully collected order
// This still needs connection to freight API
const collectedOrder = async (req, res) => {
  const idOfOrder = req.params.id  
  const newInformation = req.body 
  const editedOrder = await Order.findByIdAndUpdate(idOfOrder, newInformation, { runValidators: true })
  // If no document is found throw new APIError
  if (!editedOrder) throw new APIError(`No orders with id ${idOfOrder}`, StatusCodes.NOT_FOUND)  
  
  // Create transport for email
  let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  // Options for email
  const mailOptions = {
    from: process.env.SENDER_EMAIL, // Sender address
    to: `${newInformation.order.email}`, // List of recipients
    subject: 'Keräily on suoritettu', // Subject line
    text: `Terve ${newInformation.order.customer}`, // Plain text body
  };

  // Send email with given options
  transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });

  // Respond that request was succesful if document is found with
  // provided id.
  res.status(StatusCodes.OK).json({
    success: true,
    message: `Order updated!`
  })
}

module.exports = {
  createOrderFromXML,
  getAllOrders,
  getOpenOrders,
  editOrder,
  collectingStarted,
  collectedOrder
}