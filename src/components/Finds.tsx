'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image, ArrowSquareOut, Tag } from '@phosphor-icons/react'
import { products } from '@/lib/data'
import type { Category } from '@/lib/types'

const CATS: { id: Category; label: string }[] = [
  { id: 'all',       label: 'All' },
  { id: 'tops',      label: 'Tops' },
  { id: 'bottoms',   label: 'Bottoms' },
  { id: 'sets',      label: 'Sets & co-ords' },
  { id: 'outerwear', label: 'Outerwear' },
  { id: 'y2k',       label: 'Y2K & vintage' },
  { id: 'basics',    label: 'Basics' },
]

const BADGE = {
  gem:  { cls: 'bg-rust text-white',              label: 'Hidden gem' },
  sale: { cls: 'bg-shopee text-white',             label: 'On sale' },
  new:  { cls: 'bg-[#1A3828] text-[#6EC992]',     label: 'New find' },
}

const EMPTY_COUNT = 8

/* Isolated empty card — no re-render cost */
const EmptyCard = ({ index }: { index: number }) => (
  <motion.div
    className="bg-ink border-r border-b border-line flex flex-col"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
  >
    {/* Image placeholder */}
    <div className="aspect-[3/4] bg-ink3 flex flex-col items-center justify-center gap-3 relative">
      <Image size={28} className="text-lo" weight="thin" />
      <span className="label uppercase tracking-[0.16em] text-lo font-medium">Coming soon</span>
    </div>
    {/* Info skeleton */}
    <div className="p-5 flex-1 flex flex-col gap-3">
      <div className="label uppercase tracking-[0.12em] text-rust font-bold">Shop name</div>
      <div className="space-y-1.5">
        <div className="h-3 bg-line w-4/5" />
        <div className="h-3 bg-line w-3/5" />
      </div>
      <div className="h-5 bg-line w-2/5 mt-auto" />
      <div className="flex items-center justify-between pt-3 border-t border-line">
        <div className="h-3 bg-line w-20" />
        <div className="h-6 w-20 bg-line" />
      </div>
    </div>
  </motion.div>
)

export default function Finds() {
  const [active, setActive] = useState<Category>('all')
  const filtered = active === 'all' ? products : products.filter(p => p.category === active)
  const isEmpty  = filtered.length === 0

  return (
    <section className="px-8 md:px-12 py-20 md:py-28 max-w-[1400px] mx-auto" id="finds" aria-labelledby="finds-heading">

      {/* Header — left aligned, not centered */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-rust" aria-hidden="true" />
            <span className="label font-semibold uppercase tracking-[0.22em] text-rust">Handpicked weekly</span>
          </div>
          <h2 className="font-black text-hi tracking-tight leading-none" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', letterSpacing: '-0.03em' }} id="finds-heading">
            Latest hidden gems
          </h2>
          <p className="small font-light text-mid leading-relaxed mt-3 max-w-md">
            We check every shop before anything goes up here. Real photos, real ratings, real stock.
          </p>
        </div>
        <div className="label uppercase tracking-[0.14em] text-lo font-medium">
          {products.length > 0 ? `${products.length} finds` : 'Loading soon'}
        </div>
      </div>

      {/* Ad slot 1 */}
      <div className="border border-dashed border-white/[0.08] min-h-[90px] flex items-center justify-center label tracking-[0.14em] uppercase text-lo bg-white/[0.01] mb-10" aria-label="Advertisement">
        Advertisement
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-8 border-b border-line pb-6" role="group" aria-label="Filter by category">
        {CATS.map(c => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            aria-pressed={active === c.id}
            className={`label font-semibold uppercase tracking-[0.1em] px-4 py-2 border transition-all duration-200 cursor-pointer ${
              active === c.id
                ? 'bg-rust border-rust text-white'
                : 'bg-transparent border-line text-mid hover:border-line2 hover:text-hi'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-line"
        role="list"
        aria-label="Product listings"
      >
        <AnimatePresence mode="popLayout">
          {isEmpty
            ? Array.from({ length: EMPTY_COUNT }).map((_, i) => <EmptyCard key={i} index={i} />)
            : filtered.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink border-r border-b border-line flex flex-col hover:bg-surface transition-colors duration-200"
                role="listitem"
                aria-label={`${p.name} from ${p.shopName} — ₱${p.price}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                layout
              >
                <div className="aspect-[3/4] bg-ink3 relative overflow-hidden">
                  {p.imageUrl
                    ? <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                    : <div className="w-full h-full flex items-center justify-center"><Image size={28} className="text-lo" weight="thin" /></div>
                  }
                  {p.badge && (
                    <span className={`absolute top-3 left-3 label font-bold uppercase tracking-[0.1em] px-2.5 py-1 ${BADGE[p.badge].cls}`}>
                      {BADGE[p.badge].label}
                    </span>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col gap-2">
                  <div className="label uppercase tracking-[0.12em] text-rust font-bold">{p.shopName}</div>
                  <div className="small font-normal text-hi leading-snug flex-1">{p.name}</div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-black text-hi text-lg" style={{ fontVariantNumeric: 'tabular-nums' }}>₱{p.price}</span>
                    {p.originalPrice && <span className="label text-lo line-through">₱{p.originalPrice}</span>}
                    {p.originalPrice && <span className="label font-bold text-shopee bg-shopee/10 px-1.5 py-0.5">-{Math.round((1-p.price/p.originalPrice)*100)}%</span>}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-line mt-auto">
                    <span className="text-[#C8943A] text-sm tracking-wide">{p.rating ? '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5-Math.round(p.rating)) : '—'}</span>
                    <span className="label font-semibold text-shopee px-3 py-1.5 border border-shopee/25 hover:bg-shopee hover:text-white transition-colors inline-flex items-center gap-1">
                      Shopee <ArrowSquareOut size={11} weight="bold" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))
          }
        </AnimatePresence>
      </div>

      {/* Ad slot 2 */}
      <div className="border border-dashed border-white/[0.08] min-h-[90px] flex items-center justify-center label tracking-[0.14em] uppercase text-lo bg-white/[0.01] mt-10" aria-label="Advertisement">
        Advertisement
      </div>
    </section>
  )
}
