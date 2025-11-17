'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-4 bg-blue-600">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-white">Ready to Secure Your Organization?</h2>
        <p className="text-lg text-blue-50">
          Get started with a free security assessment from our expert team.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {submitted ? 'Sent!' : 'Get Started'}
          </button>
        </form>

        <p className="text-sm text-blue-50">
          No credit card required. Free consultation with our security experts.
        </p>
      </div>
    </section>
  )
}
