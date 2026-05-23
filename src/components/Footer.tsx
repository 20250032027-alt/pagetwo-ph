export default function Footer() {
  return (
    <footer className="bg-[#0A0908] border-t border-white/[0.07]" role="contentinfo">
      {/* Affiliate disclosure */}
      <div className="px-12 py-3.5 border-b border-white/[0.07] text-micro text-t-faint leading-relaxed max-sm:px-6" role="note" aria-label="Affiliate disclosure">
        <strong className="text-t-muted font-semibold">Affiliate disclosure:</strong> Some links on this site are Shopee affiliate links. If you buy something through them, we may earn a small commission at no extra cost to you. We only list shops and products we have actually checked.
      </div>

      {/* Main footer */}
      <div className="px-12 pt-16 pb-8 max-sm:px-6">
        <div className="grid grid-cols-4 gap-12 pb-12 border-b border-white/[0.07] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8">
          <div className="max-lg:col-span-2 max-sm:col-span-1">
            <div className="font-syne font-extrabold text-lg tracking-tight text-white mb-3">
              Page<span className="text-rust">Two</span>.ph
            </div>
            <p className="text-small font-light text-t-muted leading-[1.75] max-w-[240px]">
              Underrated clothing shops on Shopee Philippines that never show up on page one. Updated every week, based in CDO.
            </p>
          </div>
          <div>
            <div className="text-micro font-bold tracking-[0.18em] uppercase text-t-primary mb-4">Explore</div>
            <ul className="flex flex-col gap-2.5">
              {[['#finds','Latest finds'],['#shops','Shop spotlight'],['#how','How it works'],['#newsletter','Newsletter']].map(([h,l]) => (
                <li key={h}><a href={h} className="text-small text-t-muted hover:text-t-primary transition-colors duration-150">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-micro font-bold tracking-[0.18em] uppercase text-t-primary mb-4">Follow</div>
            <ul className="flex flex-col gap-2.5">
              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-small text-t-muted hover:text-t-primary transition-colors duration-150">Pinterest</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-small text-t-muted hover:text-t-primary transition-colors duration-150">TikTok</a></li>
              <li><a href="#newsletter" className="text-small text-t-muted hover:text-t-primary transition-colors duration-150">Email list</a></li>
            </ul>
          </div>
          <div>
            <div className="text-micro font-bold tracking-[0.18em] uppercase text-t-primary mb-4">Legal</div>
            <ul className="flex flex-col gap-2.5">
              <li><a href="/privacy" className="text-small text-t-muted hover:text-t-primary transition-colors duration-150">Privacy Policy</a></li>
              <li><a href="/privacy#disclosure" className="text-small text-t-muted hover:text-t-primary transition-colors duration-150">Affiliate Disclosure</a></li>
              <li><a href="/privacy#cookies" className="text-small text-t-muted hover:text-t-primary transition-colors duration-150">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-2 pt-8">
          <span className="text-micro text-t-faint">&copy; 2025 PageTwo.ph. All rights reserved.</span>
          <span className="text-micro text-t-faint">Made in Cagayan de Oro, Philippines</span>
        </div>
        <p className="text-micro text-t-faint leading-relaxed mt-3 max-w-2xl">
          This site is not affiliated with Shopee or any of the shops listed. Product photos belong to their respective sellers. We earn a small commission through Shopee&apos;s affiliate program when you buy through our links. This does not affect which shops or products we feature.
        </p>
      </div>
    </footer>
  )
}
