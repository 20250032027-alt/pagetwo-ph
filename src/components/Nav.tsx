'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'

const links = [
  { id: 'finds',      label: 'Finds' },
  { id: 'shops',      label: 'Shops' },
  { id: 'how',        label: 'How it works' },
  { id: 'newsletter', label: 'Newsletter' },
]

export default function Nav() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.querySelector('nav')
    window.scrollTo({ top: el.offsetTop - (nav?.offsetHeight ?? 56) - 16, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`sticky top-0 z-[100] flex items-center justify-between px-8 md:px-12 h-14 transition-all duration-300 ${scrolled ? 'bg-ink/95 backdrop-blur-xl border-b border-line' : 'bg-transparent'}`}>
        {/* Logo — Link instead of <a> */}
        <Link href="/" className="font-black text-base tracking-[-0.03em] text-hi" aria-label="PageTwo.ph home">
          Page<span className="text-rust">Two</span>.ph
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="label uppercase tracking-[0.18em] text-mid hover:text-hi transition-colors duration-150 cursor-pointer bg-transparent border-0 font-semibold"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <Link href="/privacy" className="label uppercase tracking-[0.18em] text-mid hover:text-hi transition-colors duration-150 font-semibold">
              Privacy
            </Link>
          </li>
        </ul>

        {/* Live indicator + mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 label uppercase tracking-[0.14em] text-lo font-semibold">
            <span className="w-1.5 h-1.5 bg-rust animate-pulse-dot" aria-hidden="true" />
            Weekly
          </div>
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden text-mid hover:text-hi transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[90] bg-ink/98 flex flex-col justify-center px-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {links.map(l => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="font-black text-hi hover:text-rust transition-colors cursor-pointer bg-transparent border-0 text-left w-full"
                  style={{ fontSize: 'clamp(2rem,8vw,3.5rem)', letterSpacing: '-0.03em' }}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/privacy"
                className="font-black text-mid hover:text-rust transition-colors"
                style={{ fontSize: 'clamp(2rem,8vw,3.5rem)', letterSpacing: '-0.03em' }}
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
