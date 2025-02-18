import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      name: string
      email: string
      image?: string
      role: string // Include role for admin check
    }
  }
}
