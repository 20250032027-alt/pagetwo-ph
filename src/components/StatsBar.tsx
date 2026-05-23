const stats = [
  { n: '—', l: 'Verified finds' },
  { n: '—', l: 'Trusted shops' },
  { n: '—', l: 'Avg. price' },
]
export default function StatsBar() {
  return (
    <div className="grid grid-cols-3 border-t border-b border-white/[0.07] max-sm:grid-cols-1" role="region" aria-label="Site statistics">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`py-12 text-center ${i < stats.length - 1 ? 'border-r border-white/[0.07] max-sm:border-r-0 max-sm:border-b' : ''}`}
        >
          <div className="font-syne font-extrabold text-white leading-none mb-2" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', letterSpacing: '-0.04em' }}>
            {s.n}
          </div>
          <div className="text-micro font-semibold tracking-[0.16em] uppercase text-t-faint">{s.l}</div>
        </div>
      ))}
    </div>
  )
}
