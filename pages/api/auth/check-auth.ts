import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({ message: 'Email is required' })
  }

  try {
    // Query the database to check if the user is authorized
    const user = await prisma.user.findUnique({
      where: { email },
    })

    const isAuthorized = user !== null
    return res.status(200).json({ isAuthorized })
  } catch (error) {
    console.error('Error checking user authorization:', error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
