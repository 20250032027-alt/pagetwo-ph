import { shops } from '@/lib/data'

const PLACEHOLDER_SHOPS = Array.from({ length: 4 }, (_, i) => ({
  id: String(i),
  initials: '—',
  name: 'Shop name',
  description: 'Shop description — what they sell, why you should care, anything specific about their quality or story that makes them worth visiting.',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  rating: undefined,
  shopeeUrl: '#',
}))

export default function Shops() {
  const display = shops.length > 0 ? shops : PLACEHOLDER_SHOPS
  return (
    <section className="px-12 py-24 bg-[#0A0908] max-sm:px-6" id="shops" aria-labelledby="shops-heading">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-px bg-rust flex-shrink-0" aria-hidden="true" />
          <span className="text-micro font-semibold tracking-[0.22em] uppercase text-rust">Verified sellers</span>
        </div>
        <h2 className="font-syne font-bold text-white mb-3" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.08' }} id="shops-heading">
          Shops worth bookmarking
        </h2>
        <p className="text-small font-light text-t-muted leading-[1.8] max-w-md">
          These are the sellers we keep going back to. Good quality, prices that make sense, actual stock in the Philippines.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07] max-md:grid-cols-1" role="list">
        {display.map((shop) => (
          <div key={shop.id} className="bg-bg-base p-12 hover:bg-surface transition-colors duration-200 max-sm:p-6" role="listitem">
            <div className="w-11 h-11 rounded-full flex items-center justify-center font-syne font-extrabold text-sm mb-6 bg-bg-4 text-rust">
              {shop.initials}
            </div>
            <div className="font-syne font-bold text-white text-xl tracking-tight mb-2">{shop.name}</div>
            <div className="text-small font-light text-t-muted leading-[1.8] mb-6">{shop.description}</div>
            <div className="flex flex-wrap gap-2 mb-6">
              {shop.tags.map(t => (
                <span key={t} className="text-micro font-semibold tracking-[0.1em] uppercase px-2.5 py-1 border border-white/[0.13] text-t-faint">{t}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.07]">
              <span className="text-small text-t-muted">
                {shop.rating ? <><strong className="text-t-primary font-semibold">{shop.rating}</strong> rating</> : <span className="text-t-faint">— rating</span>}
              </span>
              <a
                href={shop.shopeeUrl}
                target={shop.shopeeUrl !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-micro font-semibold text-shopee px-3 py-2 border border-shopee/25 hover:bg-shopee hover:text-white transition-colors duration-200"
                aria-label={`Visit ${shop.name} on Shopee`}
              >
                Visit shop ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
