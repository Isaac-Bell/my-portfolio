import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  try {
    console.log('✅ Received request body:', req.body)

    // 1️⃣ Save message to the database
    const savedMessage = await prisma.message.create({
      data: { name, email, message },
    })

    console.log('✅ Message saved to DB:', savedMessage)

    // 2️⃣ Configure Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 3️⃣ Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Message',
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }

    // 4️⃣ Send email
    await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully!')

    return res
      .status(200)
      .json({ message: 'Message sent and saved successfully!' })
  } catch (error: any) {
    console.error('❌ Error processing contact form:', error)

    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message || error,
    })
  }
}
