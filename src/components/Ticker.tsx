export default function Ticker() {
  const items = ['PageTwo.ph','×','Philippines','×','Real Prices','×','No Resellers','×','Updated Weekly','×','Good Clothes Exist','×']
  const doubled = [...items, ...items]
  return (
    <div className="bg-rust overflow-hidden whitespace-nowrap py-2.5" aria-hidden="true">
      <div className="ticker-animate inline-flex gap-12">
        {doubled.map((item, i) => (
          <span key={i} className={`font-syne text-small font-bold tracking-[0.12em] uppercase flex-shrink-0 ${item === '×' ? 'text-white/40' : 'text-white'}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
