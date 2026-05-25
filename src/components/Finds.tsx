'use client'
import { useState } from 'react'
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

const PAGE_SIZE = 12

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
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleCategory(cat: Category) {
    setActive(cat)
    setPage(1)
  }

  function handlePage(p: number) {
    setPage(p)
    document.getElementById('finds')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="px-12 py-24 max-sm:px-5" id="finds" aria-labelledby="finds-heading">

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

      {/* Filters + count row */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter by category">
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
        {filtered.length > 0 && (
          <span className="text-micro text-t-faint tracking-[0.08em] uppercase flex-shrink-0">
            {filtered.length} find{filtered.length !== 1 ? 's' : ''}
            {totalPages > 1 && ` · page ${page}/${totalPages}`}
          </span>
        )}
      </div>

      {/* Grid — 3 col desktop, 2 col tablet, 2 col mobile */}
      {paginated.length === 0 ? (
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-bg-2 border border-white/[0.06] overflow-hidden">
              <div className="aspect-square bg-bg-4" />
              <div className="p-5">
                <div className="h-2.5 w-20 bg-white/[0.06] mb-3 rounded-sm" />
                <div className="h-3 w-full bg-white/[0.04] mb-1.5 rounded-sm" />
                <div className="h-3 w-2/3 bg-white/[0.04] rounded-sm" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-2">
          {paginated.map(p => (
            <a
              key={p.id}
              href={p.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-2 border border-white/[0.06] overflow-hidden hover:border-white/[0.14] transition-colors duration-200 text-inherit no-underline block"
              aria-label={`${p.name} from ${p.shopName} — ₱${p.price}`}
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden bg-bg-4">
                {p.imageUrl ? (
                  <Image
                    src={p.imageUrl}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                    unoptimized
                  />
                ) : (
                  <PlaceholderImg />
                )}
                {p.badge && (
                  <span className={`absolute top-3 left-3 text-[0.58rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 ${BADGE_STYLES[p.badge]}`}>
                    {BADGE_LABELS[p.badge]}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5 pt-4">
                <div className="text-micro font-bold tracking-[0.12em] uppercase text-rust mb-1.5">{p.shopName}</div>
                <div className="text-sm font-normal text-t-primary leading-[1.5] mb-4 line-clamp-2">{p.name}</div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-syne font-bold text-xl text-white tabular-nums">₱{p.price.toLocaleString()}</span>
                  {p.originalPrice && (
                    <>
                      <span className="text-micro text-t-faint line-through">₱{p.originalPrice.toLocaleString()}</span>
                      <span className="text-micro font-bold text-shopee bg-shopee/10 px-1.5 py-0.5">
                        -{Math.round((1 - p.price / p.originalPrice) * 100)}%
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3.5 border-t border-white/[0.07]">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-[#C8943A] leading-none">
                      {p.rating ? '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating)) : '—'}
                    </span>
                    {p.sold ? (
                      <span className="text-micro text-t-faint">{p.sold} sold</span>
                    ) : null}
                  </div>
                  <span className="text-micro font-semibold text-shopee px-3 py-1.5 border border-shopee/25 group-hover:bg-shopee group-hover:text-white group-hover:border-shopee transition-colors duration-200">
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
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
            className="text-micro font-semibold tracking-[0.08em] uppercase px-4 py-2.5 border border-white/[0.07] text-t-muted hover:border-white/[0.13] hover:text-t-primary transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => handlePage(n)}
              aria-current={n === page ? 'page' : undefined}
              className={`text-micro font-semibold w-9 h-9 border transition-all duration-200 cursor-pointer ${
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
            className="text-micro font-semibold tracking-[0.08em] uppercase px-4 py-2.5 border border-white/[0.07] text-t-muted hover:border-white/[0.13] hover:text-t-primary transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
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
