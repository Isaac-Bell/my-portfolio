import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Attach user ID and email to the session
      if (session.user) {
        session.user.id = user.id
        session.user.email = user.email
      }
      return session
    },
    async signIn({ user, account }) {
      console.log('🔍 Debugging signIn Callback:', { user, account })

      if (!account) return false

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
        include: { accounts: true },
      })

      if (existingUser) {
        // If user exists but used a different provider, prevent sign-in
        const linkedAccount = existingUser.accounts.some(
          (acc) => acc.provider === account.provider
        )

        if (!linkedAccount) {
          console.error('⚠️ OAuth Account Not Linked')
          return false
        }
      } else {
        // Create a new user if they don't exist
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image,
            accounts: {
              create: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
            },
          },
        })
      }

      return true
    },
  },
  session: { strategy: 'database' },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
