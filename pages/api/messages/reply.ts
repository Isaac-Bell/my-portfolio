import prisma from '../../../lib/prisma'
import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { id, email, replyText } = req.body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Admin" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Re: Your Message',
      text: replyText,
    })

    await prisma.message.update({
      where: { id },
      data: {
        replied: true as boolean,
        replyText,
      },
    })

    return res.status(200).json({ message: 'Reply sent successfully' })
  }
}
