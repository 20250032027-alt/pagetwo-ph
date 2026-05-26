'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { products } from '@/lib/data'
import type { Category } from '@/lib/types'

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all',         label: 'All' },
  { id: 'tops',        label: 'Tops' },
  { id: 'bottoms',     label: 'Bottoms' },
  { id: 'outerwear',   label: 'Outerwear' },
  { id: 'accessories', label: 'Accessories' },
]

const PAGE_SIZE = 9

const BADGE_STYLES = {
  gem:  'bg-rust text-white',
  sale: 'bg-shopee text-white',
  new:  'bg-[#1A3828] text-[#6EC992]',
}
const BADGE_LABELS = { gem: 'Hidden gem', sale: 'On sale', new: 'New find' }

// Shuffle once per session using a seeded-ish approach
function shuffleOnce<T>(arr: T[]): T[] {
  const seed = Math.floor(Date.now() / (1000 * 60 * 30)) // changes every 30 min
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.abs((seed * (i + 1) * 2654435761) % (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const PlaceholderImg = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-white/15" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="m21 15-5-5L5 21"/>
    </svg>
    <span className="text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-white/20">Photo coming soon</span>
  </div>
)

export default function Finds() {
  const [active, setActive] = useState<Category>('all')
  const [page, setPage]     = useState(1)

  // Shuffle once on mount, stable across re-renders
  const shuffled = useMemo(() => shuffleOnce(products), [])

  const filtered   = active === 'all' ? shuffled : shuffled.filter(p => p.category === active)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleCategory(cat: Category) {
    setActive(cat)
    setPage(1)
  }

  function handlePage(n: number) {
    setPage(n)
    document.getElementById('finds')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="px-12 py-28 max-sm:px-5" id="finds" aria-labelledby="finds-heading">

      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-5 h-px bg-rust flex-shrink-0" aria-hidden="true" />
          <span className="text-micro font-semibold tracking-[0.22em] uppercase text-rust">Handpicked weekly</span>
        </div>
        <h2 className="font-syne font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', letterSpacing: '-0.03em', lineHeight: '1.06' }} id="finds-heading">
          Latest hidden gems
        </h2>
        <p className="text-sm font-light text-t-muted leading-[1.9] max-w-sm">
          We check every shop before anything goes up here. Real photos, real ratings, real stock.
        </p>
      </div>

      {/* Ad slot 1 */}
      <div className="border border-dashed border-white/[0.07] min-h-[90px] flex items-center justify-center text-micro tracking-[0.14em] uppercase text-white/20 mb-16" aria-label="Advertisement">
        Advertisement
      </div>

      {/* Filters + count */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-10">
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter by category">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => handleCategory(c.id)}
              aria-pressed={active === c.id}
              className={`text-micro font-semibold tracking-[0.08em] uppercase px-5 py-2.5 border transition-all duration-200 cursor-pointer ${
                active === c.id
                  ? 'bg-rust border-rust text-white'
                  : 'bg-transparent border-white/[0.07] text-t-muted hover:border-white/20 hover:text-t-primary'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        {filtered.length > 0 && (
          <span className="text-micro text-white/25 tracking-[0.08em] uppercase flex-shrink-0">
            {filtered.length} finds{totalPages > 1 && ` · ${page}/${totalPages}`}
          </span>
        )}
      </div>

      {/* Grid — 3 col desktop, 2 col tablet/mobile */}
      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        {paginated.map(p => (
          <a
            key={p.id}
            href={p.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-inherit no-underline"
            aria-label={`${p.name} from ${p.shopName} — ₱${p.price}`}
          >
            {/* Image */}
            <div className="aspect-[4/5] relative overflow-hidden bg-[#111009] mb-6">
              {p.imageUrl ? (
                <Image
                  src={p.imageUrl}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  loading="lazy"
                  unoptimized
                />
              ) : (
                <PlaceholderImg />
              )}
              {p.badge && (
                <span className={`absolute top-4 left-4 text-[0.58rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 ${BADGE_STYLES[p.badge]}`}>
                  {BADGE_LABELS[p.badge]}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="space-y-3">
              <div className="text-micro font-bold tracking-[0.14em] uppercase text-rust">{p.shopName}</div>

              <div className="text-[0.9rem] font-normal text-t-primary leading-[1.55] line-clamp-2 min-h-[2.8rem]">{p.name}</div>

              <div className="flex items-baseline gap-3">
                <span className="font-syne font-bold text-2xl text-white tabular-nums">₱{p.price.toLocaleString()}</span>
                {p.originalPrice && (
                  <>
                    <span className="text-xs text-white/30 line-through">₱{p.originalPrice.toLocaleString()}</span>
                    <span className="text-[0.65rem] font-bold text-shopee">
                      -{Math.round((1 - p.price / p.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.07]">
                <div>
                  <div className="text-sm text-[#C8943A] leading-none mb-1">
                    {p.rating ? '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating)) : '—'}
                  </div>
                  {p.sold ? <div className="text-micro text-white/25">{p.sold.toLocaleString()} sold</div> : null}
                </div>
                <span className="text-micro font-semibold text-shopee px-4 py-2 border border-shopee/20 group-hover:bg-shopee group-hover:text-white group-hover:border-shopee transition-all duration-200">
                  Shopee ↗
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-20">
          <button
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
            className="text-micro font-semibold tracking-[0.08em] uppercase px-5 py-2.5 border border-white/[0.07] text-white/30 hover:border-white/20 hover:text-t-primary transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => handlePage(n)}
              aria-current={n === page ? 'page' : undefined}
              className={`text-micro font-semibold w-10 h-10 border transition-all duration-200 cursor-pointer ${
                n === page
                  ? 'bg-rust border-rust text-white'
                  : 'border-white/[0.07] text-white/30 hover:border-white/20 hover:text-t-primary'
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => handlePage(page + 1)}
            disabled={page === totalPages}
            className="text-micro font-semibold tracking-[0.08em] uppercase px-5 py-2.5 border border-white/[0.07] text-white/30 hover:border-white/20 hover:text-t-primary transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
          >
            Next →
          </button>
        </div>
      )}

      {/* Ad slot 2 */}
      <div className="border border-dashed border-white/[0.07] min-h-[90px] flex items-center justify-center text-micro tracking-[0.14em] uppercase text-white/20 mt-20" aria-label="Advertisement">
        Advertisement
      </div>
    </section>
  )
}
