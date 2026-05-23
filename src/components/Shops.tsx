'use client'
import { motion } from 'framer-motion'
import { ArrowSquareOut, Storefront } from '@phosphor-icons/react'
import { shops } from '@/lib/data'

const PLACEHOLDERS = Array.from({ length: 4 }, (_, i) => ({
  id: String(i), initials: '—', name: 'Shop name',
  description: 'Shop description — what they sell, why you should care, anything specific about their quality or story that makes them worth visiting.',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'], rating: undefined, shopeeUrl: '#',
}))

export default function Shops() {
  const display = shops.length > 0 ? shops : PLACEHOLDERS

  return (
    <section className="bg-ink2 border-t border-b border-line py-20 md:py-28" id="shops" aria-labelledby="shops-heading">
      <div className="px-8 md:px-12 max-w-[1400px] mx-auto">

        {/* Asymmetric header */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-end mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-px bg-rust" aria-hidden="true" />
              <span className="label font-semibold uppercase tracking-[0.22em] text-rust">Verified sellers</span>
            </div>
            <h2 className="font-black text-hi tracking-tight" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', letterSpacing: '-0.03em' }} id="shops-heading">
              Shops worth bookmarking
            </h2>
          </div>
          <p className="small font-light text-mid leading-relaxed">
            These are the sellers we keep going back to. Good quality, prices that make sense, actual stock in the Philippines.
          </p>
        </div>

        {/* 2-col grid — not 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-line" role="list">
          {display.map((shop, i) => (
            <motion.div
              key={shop.id}
              className="bg-ink border-r border-b border-line p-8 md:p-10 hover:bg-surface transition-colors duration-200"
              role="listitem"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Avatar */}
              <div className="w-11 h-11 flex items-center justify-center bg-ink3 border border-line mb-6">
                {shop.initials === '—'
                  ? <Storefront size={20} className="text-lo" weight="thin" />
                  : <span className="font-black text-sm text-rust">{shop.initials}</span>
                }
              </div>

              <div className="font-black text-hi text-xl tracking-tight mb-2">{shop.name}</div>
              <p className="small font-light text-mid leading-relaxed mb-6">{shop.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {shop.tags.map(t => (
                  <span key={t} className="label font-semibold uppercase tracking-[0.1em] px-2.5 py-1 border border-line2 text-lo">{t}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-line">
                <span className="small text-mid">
                  {shop.rating
                    ? <><strong className="text-hi font-semibold">{shop.rating}</strong> rating</>
                    : <span className="text-lo">— rating</span>
                  }
                </span>
                <a
                  href={shop.shopeeUrl}
                  target={shop.shopeeUrl !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="label font-semibold text-shopee px-3 py-2 border border-shopee/25 hover:bg-shopee hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                  aria-label={`Visit ${shop.name} on Shopee`}
                >
                  Visit shop <ArrowSquareOut size={11} weight="bold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
