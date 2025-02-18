import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // 1️⃣ Store message in PostgreSQL
    const savedMessage = await prisma.message.create({
      data: { name, email, message },
    });

    // 2️⃣ Send email notification using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Message sent and saved successfully!" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
