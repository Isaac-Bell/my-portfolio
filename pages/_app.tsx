import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className="flex-grow">
        {' '}
        <Component {...pageProps} />{' '}
      </main>
      ;
      <Analytics />
    </SessionProvider>
  )
}
