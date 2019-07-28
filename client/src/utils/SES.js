//this will handel the sending of the email, barring any cors issues...

const sendEmail = () => { 
const AWS = require("aws-sdk")
AWS.config.loadFromPath("../config.json")
console.log("hi")
}

module.exports = {
  sendEmail:sendEmail
}
