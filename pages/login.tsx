import { signIn, signOut, useSession } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'

export default function Login() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-full max-w-md p-8 bg-gray-800 border border-gray-700 shadow-lg rounded-lg text-center">
        {/* Neon Glow Effect */}
        <div className="absolute inset-0 rounded-lg blur-md opacity-75 bg-gradient-to-r from-cyan-500 to-purple-600"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to the dashboard
          </h1>

          {session ? (
            <>
              <p className="mb-4 text-gray-300">Hello, {session.user?.name}!</p>
              <button
                onClick={() => signOut()}
                className="w-full flex items-center justify-center space-x-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-red-500/50"
              >
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => signIn('google', { callbackUrl: '/admin' })}
                className="w-full flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-blue-500/50"
              >
                <FaGoogle className="text-xl" />
                <span>Sign in with Google</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
