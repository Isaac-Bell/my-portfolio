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
    async jwt({ token, user, account }) {
      if (account) {
        // Store OAuth token details when user logs in
        token.accessToken = account.access_token
        token.idToken = account.id_token
        token.provider = account.provider
      }

      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.image = user.image
      }

      return token
    },
    async session({ session, token }) {
      // Ensure session includes the token values
      session.user.id = token.id
      session.user.email = token.email
      session.user.name = token.name
      session.user.image = token.image
      session.accessToken = token.accessToken
      session.idToken = token.idToken

      return session
    },
    async redirect({ url, baseUrl }) {
      // Allow only relative URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`
      if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async signIn({ user, account }) {
      console.log('🔍 Debugging signIn Callback:', { user, account })

      if (!account) return false

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
        include: { accounts: true },
      })

      if (existingUser) {
        // Ensure user is using the correct provider
        const linkedAccount = existingUser.accounts.some(
          (acc) => acc.provider === account.provider
        )

        if (!linkedAccount) {
          console.error('⚠️ OAuth Account Not Linked')
          throw new Error('OAuthAccountNotLinked')
        }
      } else {
        // Create new user & link account if they don't exist
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image,
            accounts: {
              create: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                id_token: account.id_token,
                expires_at: account.expires_at,
              },
            },
          },
        })
      }

      return true
    },
  },
  session: { strategy: 'jwt' }, // Using JWT session storage
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
