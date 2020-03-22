require("dotenv").config()
const sgMail = require("@sendgrid/mail")
const xss = require("xss")
console.log(process.env.EMAIL_ADDRESS)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async function(event, context) {
  console.log("Sending Email")
  const data = JSON.parse(event.body)
  const cleanName = xss(data.name)
  const cleanEmail = xss(data.email)
  const cleanSubject = xss(data.subject)
  const cleanMessage = xss(data.message)

  const msg = {
    to: process.env.EMAIL_ADDRESS,
    from: "contact@scottperkins.dev",
    subject: `New Message From: ${cleanName} - ${cleanSubject}`,
    html: `<div><h1>${cleanSubject}</h1><h3><a href="mailto:${cleanEmail}">${cleanEmail}<a><h3><p>${cleanMessage}<p></div>`,
  }
  try {
    await sgMail.send(msg)
  } catch (error) {
    return { statusCode: 400, body: "Something Went Wrong" }
  }
  return {
    statusCode: 200,
    body: "Success",
  }
}
