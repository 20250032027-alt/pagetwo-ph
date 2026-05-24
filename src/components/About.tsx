export default function About() {
  return (
    <div className="bg-ink2 border-b border-line" role="region" aria-labelledby="about-heading">
      {/* Big statement line */}
      <div className="border-b border-line overflow-hidden py-6 px-8 md:px-12">
        <p className="font-black text-hi/[0.06] whitespace-nowrap select-none" style={{ fontSize: 'clamp(3rem,8vw,7rem)', letterSpacing: '-0.04em', lineHeight: '1' }} aria-hidden="true">
          NOT PAGE ONE — PAGE TWO.
        </p>
      </div>

      <div className="px-8 md:px-12 max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-rust" aria-hidden="true" />
              <span className="label font-semibold uppercase tracking-[0.22em] text-rust">About</span>
            </div>
            <h2 className="font-black text-hi tracking-tight" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', letterSpacing: '-0.03em' }} id="about-heading">
              Why this site exists
            </h2>
          </div>
          <div className="space-y-5 text-base font-light text-mid leading-relaxed">
            <p>
              Shopee has thousands of sellers that never show up on the first page. They don&apos;t run ads. They don&apos;t have influencers. They just make or source good clothes at fair prices, and most people never find them.
            </p>
            <p>
              This site is a weekly curation of exactly those sellers. We check the shop, verify the photos, confirm the shipping, and then post a direct link. No reselling, no inflated prices — just the shop and the product.
            </p>
            <p>
              Made for anyone who is tired of scrolling past the same paid listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
