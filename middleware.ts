import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  console.log('🔍 Debugging Token:', token) // Helpful for debugging

  // Define protected routes
  const protectedRoutes = [
    '/admin',
    '/admin/user-access',
    '/admin/messages',
    '/admin/analytics',
    '/admin/system-logs',
  ]

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      console.warn('🚫 No token found. Redirecting to login...')
      return NextResponse.redirect(new URL('/api/auth/signin', req.url))
    }

    // ✅ Allow dynamic admin emails via ENV or Database
    const allowedEmails = process.env.ADMIN_EMAILS
      ? process.env.ADMIN_EMAILS.split(',') // Use environment variable for flexibility
      : ['isaacmosesbell@gmail.com']

    if (!token.email || !allowedEmails.includes(token.email)) {
      console.warn(`⚠️ Unauthorized access attempt by ${token.email}`)
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
  }

  return NextResponse.next()
}

// ✅ Apply middleware only to admin routes
export const config = {
  matcher: ['/admin/:path*'],
}
