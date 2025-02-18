const nodemailer = require('nodemailer')
require('dotenv').config()

async function testEmail() {
  try {
    console.log('📧 Email User:', process.env.EMAIL_USER)
    console.log('🔑 Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Missing')

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    let info = await transporter.sendMail({
      from: `"Test User" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Test Email from Nodemailer',
      text: 'If you received this, Nodemailer is working!',
    })

    console.log('✅ Email sent successfully:', info.response)
  } catch (error) {
    console.error('❌ Email Error:', error)
  }
}

testEmail()
