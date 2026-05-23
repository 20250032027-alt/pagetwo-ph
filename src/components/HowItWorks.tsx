const steps = [
  { n: '01', t: 'We find it first', d: 'We scroll Shopee search, TikTok Shop PH, and our own FYP daily. If something stops the scroll, we dig into the seller before sharing it anywhere.' },
  { n: '02', t: 'We check the shop', d: 'Ratings, actual customer photos, shipping time, and whether the description matches what shows up at the door. If any of that feels off, it does not go up.' },
  { n: '03', t: 'We post the link', d: 'A direct link to the Shopee listing. You go straight to the seller. No markup, no middleman, nothing between you and the actual shop.' },
  { n: '04', t: 'We pin it', d: 'Every find gets pinned on Pinterest for outfit inspo. More eyes on the shop means the seller keeps getting orders. Everybody wins.' },
]
export default function HowItWorks() {
  return (
    <section className="px-12 py-24 max-sm:px-6" id="how" aria-labelledby="how-heading">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-px bg-rust flex-shrink-0" aria-hidden="true" />
          <span className="text-micro font-semibold tracking-[0.22em] uppercase text-rust">The process</span>
        </div>
        <h2 className="font-syne font-bold text-white mb-3" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.08' }} id="how-heading">
          How we pick what goes on here
        </h2>
        <p className="text-small font-light text-t-muted leading-[1.8] max-w-md">
          Not every cheap Shopee listing is worth your time. Here is how we decide what makes the cut.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {steps.map(s => (
          <div key={s.n} className="bg-bg-base p-8 max-sm:p-6">
            <div className="font-syne font-extrabold leading-none mb-6 text-rust/10" style={{ fontSize: 'clamp(3rem,5vw,5rem)', letterSpacing: '-0.04em' }}>
              {s.n}
            </div>
            <div className="text-small font-bold text-t-primary mb-2">{s.t}</div>
            <div className="text-small font-light text-t-muted leading-[1.75]">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
