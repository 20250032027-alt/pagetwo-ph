'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react'

export default function Newsletter() {
  const [email, setEmail]   = useState('')
  const [done, setDone]     = useState(false)
  const [error, setError]   = useState(false)

  const handle = () => {
    if (!email || !email.includes('@')) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return
    }
    setDone(true)
  }

  return (
    <section className="bg-ink3 border-b border-line py-20 md:py-28" id="newsletter" aria-labelledby="nl-heading">
      <div className="px-8 md:px-12 max-w-[1400px] mx-auto">

        {/* Left-aligned, not centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-rust" aria-hidden="true" />
              <span className="label font-semibold uppercase tracking-[0.22em] text-rust">Newsletter</span>
            </div>
            <h2 className="font-black text-hi tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', letterSpacing: '-0.03em' }} id="nl-heading">
              New finds every week.
            </h2>
            <p className="text-base font-light text-mid leading-relaxed">
              Subscribe and get fresh Shopee picks in your inbox before they sell out. No spam, just good clothes at decent prices.
            </p>
          </div>

          <div>
            {done ? (
              <div className="flex items-center gap-3 bg-[#1A3828] border border-[#2A5A3A] px-6 py-5">
                <CheckCircle size={20} className="text-[#6EC992]" weight="fill" />
                <span className="small font-medium text-[#6EC992]">You&apos;re in. New finds hit your inbox every week.</span>
              </div>
            ) : (
              <div role="form" aria-label="Newsletter signup">
                <label htmlFor="nl-email" className="label uppercase tracking-[0.16em] text-mid font-semibold block mb-3">
                  Your email
                </label>
                <div className="flex gap-0">
                  <input
                    id="nl-email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handle()}
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-required="true"
                    className={`flex-1 bg-ink border text-hi small font-light px-5 py-4 outline-none transition-colors duration-200 placeholder:text-lo ${error ? 'border-rust' : 'border-line2 focus:border-rust'}`}
                  />
                  <button
                    onClick={handle}
                    className="bg-rust text-white small font-semibold px-6 py-4 hover:bg-rust-dark transition-colors duration-200 inline-flex items-center gap-2 active:scale-[0.98] whitespace-nowrap border border-rust"
                  >
                    Subscribe <ArrowRight size={14} weight="bold" />
                  </button>
                </div>
                {error && <p className="label text-rust mt-2 font-medium">Please enter a valid email address.</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
