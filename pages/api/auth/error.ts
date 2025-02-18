import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.error('❌ NextAuth Error:', req.query.error)
  res.redirect('/auth/error?message=' + req.query.error)
}
