export default function Hero() {
  return (
    <section
      className="min-h-dvh flex flex-col justify-end px-12 pb-16 border-b border-white/[0.07] relative overflow-hidden max-sm:px-6 max-sm:pb-12"
      aria-labelledby="hero-heading"
    >
      {/* Background ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center font-syne font-extrabold text-white/[0.022] whitespace-nowrap pointer-events-none select-none"
        style={{ fontSize: 'clamp(8rem, 25vw, 26rem)', letterSpacing: '-0.06em' }}
        aria-hidden="true"
      >
        FINDS
      </div>

      <div className="relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-5 h-px bg-rust flex-shrink-0" aria-hidden="true" />
          <span className="text-micro font-semibold tracking-[0.22em] uppercase text-rust">
            Shopee Philippines
          </span>
        </div>

        <h1 className="t-giant text-white mb-6" id="hero-heading">
          Good clothes<br />
          on Shopee{' '}
          <em className="italic text-rust not-italic" style={{ fontStyle: 'italic' }}>exist.</em>
        </h1>

        <p className="text-base font-light text-t-muted leading-[1.75] max-w-lg mb-8">
          They just get buried under paid ads and resellers. We go through the listings so you don&apos;t have to, and link straight to the actual shop. No markup.
        </p>

        <div className="flex gap-4 flex-wrap max-sm:flex-col">
          <a
            href="#finds"
            className="inline-flex items-center gap-2 bg-rust text-white text-small font-semibold tracking-[0.04em] px-7 py-3.5 hover:bg-rust-dim transition-colors duration-200 hover:-translate-y-px active:translate-y-0"
          >
            Browse the finds
          </a>
          <a
            href="#shops"
            className="inline-flex items-center gap-2 bg-transparent text-t-primary text-small font-medium tracking-[0.04em] px-7 py-3.5 border border-white/[0.13] hover:border-white/35 hover:text-white transition-all duration-200"
          >
            See top shops
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-2 text-micro font-medium tracking-[0.12em] uppercase text-t-faint" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-rust to-transparent scroll-line" />
        Scroll
      </div>
    </section>
  )
}
