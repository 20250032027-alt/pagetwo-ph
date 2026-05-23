'use client'
export default function Nav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.querySelector('nav')
    const offset = nav ? nav.offsetHeight + 16 : 72
    window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
  }
  return (
    <nav className="sticky top-0 z-[100] bg-black/92 backdrop-blur-lg border-b border-white/[0.07] h-14 flex items-center justify-between px-12 max-sm:px-6">
      <a href="/" className="font-syne font-extrabold text-base tracking-tight text-white" aria-label="PageTwo.ph home">
        Page<span className="text-rust">Two</span>.ph
      </a>
      <ul className="flex items-center gap-8 max-md:hidden" role="navigation" aria-label="Main navigation">
        {[['finds','Finds'],['shops','Shops'],['how','How it works'],['newsletter','Newsletter']].map(([id, label]) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-micro font-semibold tracking-[0.14em] uppercase text-t-muted hover:text-white transition-colors duration-150 cursor-pointer bg-transparent border-0"
            >
              {label}
            </button>
          </li>
        ))}
        <li>
          <a href="/privacy" className="text-micro font-semibold tracking-[0.14em] uppercase text-t-muted hover:text-white transition-colors duration-150">
            Privacy
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-2 text-micro font-semibold tracking-[0.1em] uppercase text-t-faint" aria-label="Updated weekly">
        <span className="w-1.5 h-1.5 rounded-full bg-rust pulse-dot" aria-hidden="true" />
        Updated weekly
      </div>
    </nav>
  )
}
