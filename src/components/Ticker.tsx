import { Star } from '@phosphor-icons/react/dist/ssr'

const items = [
  'PageTwo', 'Shopee Finds', 'Real Prices',
  'No Resellers', 'Updated Weekly', 'Good Clothes Exist',
  'PageTwo', 'Shopee Finds', 'Real Prices',
  'No Resellers', 'Updated Weekly', 'Good Clothes Exist',
]

export default function Ticker() {
  return (
    <div className="bg-rust overflow-hidden py-2.5 border-y border-rust" aria-hidden="true">
      <div className="animate-ticker inline-flex gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 label font-bold uppercase tracking-[0.16em] text-white flex-shrink-0">
            <Star size={10} weight="fill" className="text-white/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
