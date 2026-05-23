export default function About() {
  return (
    <div className="bg-[#0A0908] border-t border-b border-white/[0.07] grid grid-cols-2 gap-16 items-center px-12 py-24 max-md:grid-cols-1 max-md:gap-8 max-sm:px-6" role="region" aria-labelledby="about-heading">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-5 h-px bg-rust flex-shrink-0" aria-hidden="true" />
          <span className="text-micro font-semibold tracking-[0.22em] uppercase text-rust">About</span>
        </div>
        <h2 className="font-syne font-bold text-white" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.08' }} id="about-heading">
          Why this site exists
        </h2>
      </div>
      <div className="text-base font-light text-t-muted leading-[1.85] space-y-4">
        <p>
          Shopee Philippines has thousands of sellers that never show up on the first page. They don&apos;t run ads. They don&apos;t have influencers. They just make or source good clothes at fair prices, and most people never find them.
        </p>
        <p>
          This site is a weekly curation of exactly those sellers. We check the shop, verify the photos, confirm the shipping, and then post a direct link. Nothing more. No reselling, no inflated prices — just the shop and the product.
        </p>
        <p>
          Based in Cagayan de Oro. Made for anyone in the Philippines who is tired of scrolling past the same paid listings.
        </p>
      </div>
    </div>
  )
}
