'use client'
import { motion } from 'framer-motion'
import { MagnifyingGlass, Checks, Link, PinterestLogo } from '@phosphor-icons/react'

const STEPS = [
  { n: '01', icon: MagnifyingGlass, t: 'We find it first',   d: 'We scroll Shopee search, TikTok Shop PH, and our own FYP daily. If something stops the scroll, we dig into the seller before sharing it anywhere.' },
  { n: '02', icon: Checks,          t: 'We check the shop',  d: 'Ratings, actual customer photos, shipping time, and whether the description matches what shows up at the door. If any of that feels off, it does not go up.' },
  { n: '03', icon: Link,            t: 'We post the link',   d: 'A direct link to the Shopee listing. You go straight to the seller. No markup, no middleman, nothing between you and the actual shop.' },
  { n: '04', icon: PinterestLogo,   t: 'We pin it',          d: 'Every find gets pinned on Pinterest for outfit inspo. More eyes on the shop means the seller keeps getting orders. Everybody wins.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 border-b border-line" id="how" aria-labelledby="how-heading">
      <div className="px-8 md:px-12 max-w-[1400px] mx-auto mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-px bg-rust" aria-hidden="true" />
          <span className="label font-semibold uppercase tracking-[0.22em] text-rust">The process</span>
        </div>
        <h2 className="font-black text-hi tracking-tight" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', letterSpacing: '-0.03em' }} id="how-heading">
          How we pick what goes on here
        </h2>
        <p className="small font-light text-mid leading-relaxed mt-3 max-w-md">
          Not every cheap Shopee listing is worth your time. Here is how we decide what makes the cut.
        </p>
      </div>

      {/* Zig-zag — not 3-col cards (taste skill rule) */}
      <div className="border-t border-line">
        {STEPS.map((s, i) => {
          const Icon = s.icon
          const even = i % 2 === 0
          return (
            <motion.div
              key={s.n}
              className={`grid grid-cols-1 lg:grid-cols-2 border-b border-line ${even ? '' : 'lg:direction-rtl'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Number + icon side */}
              <div className={`flex items-center justify-between px-8 md:px-16 py-12 border-line bg-ink2 ${even ? 'lg:border-r' : 'lg:order-2 lg:border-l'}`}>
                <div
                  className="font-black text-white/[0.05] leading-none"
                  style={{ fontSize: 'clamp(5rem,12vw,10rem)', letterSpacing: '-0.05em' }}
                  aria-hidden="true"
                >
                  {s.n}
                </div>
                <div className="w-16 h-16 flex items-center justify-center border border-line">
                  <Icon size={28} className="text-rust" weight="thin" />
                </div>
              </div>

              {/* Text side */}
              <div className={`px-8 md:px-16 py-12 flex flex-col justify-center ${even ? '' : 'lg:order-1'}`}>
                <div className="label uppercase tracking-[0.18em] text-rust font-semibold mb-3">{s.n}</div>
                <div className="font-bold text-hi text-lg mb-3 tracking-tight">{s.t}</div>
                <p className="small font-light text-mid leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
