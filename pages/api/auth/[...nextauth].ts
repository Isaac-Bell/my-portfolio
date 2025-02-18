import NextAuth, { NextAuthOptions, User, Account, Session } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      if (session.user) {
        session.user.id = user.id
        session.user.email = user.email ?? ''
      }
      return session
    },
    async signIn({ user, account }: { user: User; account: Account | null }) {
      console.log('🔍 Debugging signIn Callback:', { user, account })

      if (!account) return false

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! },
        include: { accounts: true },
      })

      if (existingUser) {
        // ✅ Explicitly define type for acc to avoid implicit 'any' error
        const linkedAccount = existingUser.accounts.some(
          (acc) => (acc as Account).provider === account.provider
        )

        if (!linkedAccount) {
          console.error('⚠️ OAuth Account Not Linked')
          return false
        }
      } else {
        // Create a new user if they don't exist
        await prisma.user.create({
          data: {
            email: user.email!,
            name: user.name,
            image: user.image,
            accounts: {
              create: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                type: account.type,
                access_token: account.access_token,
                expires_at: account.expires_at,
                id_token: account.id_token,
                refresh_token: account.refresh_token,
                scope: account.scope,
                token_type: account.token_type,
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
