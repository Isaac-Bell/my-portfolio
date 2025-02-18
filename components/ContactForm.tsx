import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required.' })
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (response.ok) {
        setStatus({
          type: 'success',
          message:
            result.message +
            ' Thanks for getting in touch. I look forward to speaking with you soon!',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: result.message })
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      })
    }

    setLoading(false)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-neutral-400 text-black focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 mb-2 "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-neutral-400 focus:outline-none text-black"
            placeholder="your@email.com"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-neutral-400 focus:outline-none text-black placeholder-gray-400"
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-neutral-900 text-white py-3 px-6 rounded-md hover:bg-neutral-800 transition-all duration-200 transform hover:-translate-y-0.5"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && (
          <p
            className={`mt-4 text-center ${
              status.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
