require('dotenv').config()
const APIError = require('../errors/apierror')
const { StatusCodes } = require('http-status-codes')
// middleware for sending emails
const nodemailer = require('nodemailer');

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

module.exports = sendEmail