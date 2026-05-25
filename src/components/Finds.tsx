'use client'
import { useState } from 'react'
import { products } from '@/lib/data'
import type { Category } from '@/lib/types'

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all',         label: 'All' },
  { id: 'tops',        label: 'Tops' },
  { id: 'bottoms',     label: 'Bottoms' },
  { id: 'outerwear',   label: 'Outerwear' },
  { id: 'accessories', label: 'Accessories' },
]

const PAGE_SIZE = 16

const BADGE_STYLES = {
  gem:  'bg-rust text-white',
  sale: 'bg-shopee text-white',
  new:  'bg-[#1A3828] text-[#6EC992]',
}
const BADGE_LABELS = { gem: 'Hidden gem', sale: 'On sale', new: 'New find' }

const PlaceholderImg = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-white/20" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="m21 15-5-5L5 21"/>
    </svg>
    <span className="text-micro font-semibold tracking-[0.16em] uppercase text-t-faint">Photo coming soon</span>
  </div>
)

export default function Finds() {
  const [active, setActive] = useState<Category>('all')
  const [page, setPage] = useState(1)

  const filtered = active === 'all' ? products : products.filter(p => p.category === active)
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleCategory(cat: Category) {
    setActive(cat)
    setPage(1)
  }

  function handlePage(p: number) {
    setPage(p)
    // Scroll to top of section
    document.getElementById('finds')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="px-12 py-24 max-sm:px-6" id="finds" aria-labelledby="finds-heading">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-px bg-rust flex-shrink-0" aria-hidden="true" />
          <span className="text-micro font-semibold tracking-[0.22em] uppercase text-rust">Handpicked weekly</span>
        </div>
        <h2 className="font-syne font-bold text-white mb-3" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.08' }} id="finds-heading">
          Latest hidden gems
        </h2>
        <p className="text-small font-light text-t-muted leading-[1.8] max-w-md">
          We check every shop before anything goes up here. Real photos, real ratings, real stock.
        </p>
      </div>

      {/* Ad slot 1 */}
      <div className="border border-dashed border-white/10 min-h-[90px] flex items-center justify-center text-micro tracking-[0.14em] uppercase text-t-faint bg-white/[0.015] mb-12" aria-label="Advertisement">
        Advertisement
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-8" role="group" aria-label="Filter by category">
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            onClick={() => handleCategory(c.id)}
            aria-pressed={active === c.id}
            className={`text-micro font-semibold tracking-[0.08em] uppercase px-4 py-2 border transition-all duration-200 cursor-pointer ${
              active === c.id
                ? 'bg-rust border-rust text-white'
                : 'bg-transparent border-white/[0.07] text-t-muted hover:border-white/[0.13] hover:text-t-primary'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Count + page info */}
      {filtered.length > 0 && (
        <div className="flex items-center justify-between mb-6">
          <span className="text-micro text-t-faint tracking-[0.08em] uppercase">
            {filtered.length} find{filtered.length !== 1 ? 's' : ''}
          </span>
          {totalPages > 1 && (
            <span className="text-micro text-t-faint tracking-[0.08em] uppercase">
              Page {page} / {totalPages}
            </span>
          )}
        </div>
      )}

      {/* Grid */}
      {paginated.length === 0 ? (
        <div className="grid grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07] max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2" role="list">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-bg-base" role="listitem">
              <div className="aspect-[3/4] bg-bg-4 relative overflow-hidden">
                <PlaceholderImg />
              </div>
              <div className="p-5">
                <div className="text-micro font-bold tracking-[0.12em] uppercase text-rust mb-1">Shop name</div>
                <div className="text-small font-normal text-t-primary leading-[1.45] mb-3">Product name</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-syne font-bold text-lg text-white">₱—</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07] max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2" role="list">
          {paginated.map(p => (
            <a
              key={p.id}
              href={p.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-base block hover:bg-surface transition-colors duration-200 text-inherit no-underline"
              role="listitem"
              aria-label={`${p.name} from ${p.shopName} — ₱${p.price}`}
            >
              <div className="aspect-[3/4] bg-bg-4 relative overflow-hidden">
                {p.imageUrl ? (
                  <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <PlaceholderImg />
                )}
                {p.badge && (
                  <span className={`absolute top-3 left-3 text-[0.6rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 ${BADGE_STYLES[p.badge]}`}>
                    {BADGE_LABELS[p.badge]}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="text-micro font-bold tracking-[0.12em] uppercase text-rust mb-1">{p.shopName}</div>
                <div className="text-small font-normal text-t-primary leading-[1.45] mb-3">{p.name}</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-syne font-bold text-lg text-white tabular-nums">₱{p.price.toLocaleString()}</span>
                  {p.originalPrice && <span className="text-micro text-t-faint line-through">₱{p.originalPrice.toLocaleString()}</span>}
                  {p.originalPrice && (
                    <span className="text-micro font-bold text-shopee bg-shopee/10 px-1.5 py-0.5">
                      -{Math.round((1 - p.price / p.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.07]">
                  <span className="text-small text-[#C8943A]">
                    {p.rating ? '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating)) : '—'}
                  </span>
                  <span className="text-micro font-semibold text-shopee px-3 py-1.5 border border-shopee/25 hover:bg-shopee hover:text-white transition-colors duration-200">
                    Shopee ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className="text-micro font-semibold tracking-[0.08em] uppercase px-4 py-2 border border-white/[0.07] text-t-muted hover:border-white/[0.13] hover:text-t-primary transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => handlePage(n)}
              aria-label={`Page ${n}`}
              aria-current={n === page ? 'page' : undefined}
              className={`text-micro font-semibold tracking-[0.08em] px-3 py-2 border transition-all duration-200 cursor-pointer ${
                n === page
                  ? 'bg-rust border-rust text-white'
                  : 'border-white/[0.07] text-t-muted hover:border-white/[0.13] hover:text-t-primary'
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => handlePage(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
            className="text-micro font-semibold tracking-[0.08em] uppercase px-4 py-2 border border-white/[0.07] text-t-muted hover:border-white/[0.13] hover:text-t-primary transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            Next →
          </button>
        </div>
      )}

      {/* Ad slot 2 */}
      <div className="border border-dashed border-white/10 min-h-[90px] flex items-center justify-center text-micro tracking-[0.14em] uppercase text-t-faint bg-white/[0.015] mt-12" aria-label="Advertisement">
        Advertisement
      </div>
    </section>
  )
}
