'use client'
import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section className="min-h-[100dvh] relative flex flex-col overflow-hidden border-b border-line" aria-labelledby="hero-heading">

      {/* Ghost background number — asymmetric, off-right */}
      <div
        className="absolute right-[-5vw] top-[50%] -translate-y-1/2 font-black text-white/[0.025] pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(12rem, 35vw, 32rem)', letterSpacing: '-0.06em' }}
        aria-hidden="true"
      >
        02
      </div>

      {/* Thin vertical rule — left accent */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-line hidden lg:block" aria-hidden="true" />

      {/* Content — left aligned, bottom anchored */}
      <div className="flex-1 flex flex-col justify-end px-8 md:px-12 pb-16 pt-32 relative z-10 max-w-[1400px] mx-auto w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-8 h-px bg-rust flex-shrink-0" aria-hidden="true" />
          <span className="label font-semibold uppercase tracking-[0.22em] text-rust">Shopee Philippines</span>
        </motion.div>

        {/* Headline — split layout, not centered */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">
          <div>
            <motion.h1
              id="hero-heading"
              className="font-black text-hi leading-none tracking-tighter"
              style={{ fontSize: 'clamp(3rem, 9vw, 9rem)', letterSpacing: '-0.04em', lineHeight: '0.92' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Good clothes<br />
              on Shopee{' '}
              <em className="text-rust not-italic">exist.</em>
            </motion.h1>
          </div>

          {/* Right column — descriptor + CTA */}
          <motion.div
            className="lg:max-w-[320px] lg:pb-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base font-light text-mid leading-relaxed mb-8">
              They get buried under paid ads and resellers. We go through the listings so you don&apos;t have to, and link straight to the actual shop. No markup.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a href="#finds" className="inline-flex items-center justify-center gap-2 bg-rust text-white small font-semibold tracking-[0.04em] px-6 py-3.5 hover:bg-rust-dark transition-colors duration-200 active:scale-[0.98]">
                Browse the finds
              </a>
              <a href="#shops" className="inline-flex items-center justify-center gap-2 bg-transparent text-hi small font-medium tracking-[0.04em] px-6 py-3.5 border border-line2 hover:border-hi/30 transition-colors duration-200">
                See top shops
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom meta row */}
        <motion.div
          className="flex items-center justify-between mt-16 pt-6 border-t border-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-8">
            {[['—', 'Verified finds'], ['—', 'Trusted shops'], ['—', 'Avg. price']].map(([n, l]) => (
              <div key={l}>
                <div className="font-black text-hi text-xl tracking-tight">{n}</div>
                <div className="label uppercase tracking-[0.14em] text-lo font-medium mt-0.5">{l}</div>
              </div>
            ))}
          </div>
          <div className="hidden sm:flex flex-col items-center gap-2 label uppercase tracking-[0.12em] text-lo font-medium">
            <div className="w-px h-10 bg-gradient-to-b from-rust to-transparent animate-scroll-line" />
            <ArrowDown size={12} weight="bold" className="text-rust" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
