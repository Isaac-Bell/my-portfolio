import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Sidebar from './SideBar'
import Header from './Header'
import { useEffect, useState } from 'react'

// Function to fetch authorized user list from the database
async function checkAuthorization(email: string | null): Promise<boolean> {
  if (!email) return false

  try {
    const response = await fetch('/api/check-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()
    return data.isAuthorized // Returns true if authorized, false otherwise
  } catch (error) {
    console.error('Error checking authorization:', error)
    return false
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)

  useEffect(() => {
    if (status === 'loading') return // Wait for session to load

    // If no session, redirect to login
    if (!session) {
      router.push('/api/auth/signin')
      return
    }

    // Check authorization status with the database
    checkAuthorization(session.user?.email).then((authorized) => {
      setIsAuthorized(authorized)

      if (!authorized) {
        router.push('/unauthorized')
      }
    })
  }, [session, status, router])

  if (status === 'loading' || isAuthorized === null) {
    return <p className="text-white text-center mt-10">Loading...</p> // Show loading state
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

export default Layout
