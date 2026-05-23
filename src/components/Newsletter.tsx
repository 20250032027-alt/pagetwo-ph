'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)

  const handle = () => {
    if (!email || !email.includes('@')) { setError(true); setTimeout(() => setError(false), 1500); return }
    setDone(true)
  }

  return (
    <section className="bg-[#111009] px-12 py-24 max-sm:px-6" id="newsletter" aria-labelledby="nl-heading">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-syne font-bold text-white mb-3" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', letterSpacing: '-0.025em' }} id="nl-heading">
          New finds every week.
        </h2>
        <p className="text-base font-light text-t-muted leading-[1.8] mb-8">
          Subscribe and get fresh Shopee picks in your inbox before they sell out. No spam, just good clothes at decent prices.
        </p>
        {done ? (
          <div className="bg-[#1A3828] border border-[#2A5A3A] px-6 py-4 text-small font-medium text-[#6EC992]">
            You&apos;re in. New finds hit your inbox every week.
          </div>
        ) : (
          <div className="flex gap-2 max-sm:flex-col" role="form" aria-label="Newsletter signup">
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input
              id="nl-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handle()}
              placeholder="your@email.com"
              autoComplete="email"
              aria-required="true"
              className={`flex-1 bg-[#171511] text-t-primary text-base font-light px-4 py-3.5 outline-none transition-colors duration-200 placeholder:text-t-faint border ${error ? 'border-rust' : 'border-white/[0.13] focus:border-rust'}`}
            />
            <button
              onClick={handle}
              className="bg-rust text-white text-small font-semibold tracking-[0.04em] px-7 py-3.5 hover:bg-rust-dim transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
