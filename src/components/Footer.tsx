import { PinterestLogo, TiktokLogo, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'

export default function Footer() {
  return (
    <footer className="bg-ink2" role="contentinfo">
      {/* Disclosure */}
      <div className="px-8 md:px-12 py-3.5 border-b border-line" role="note">
        <p className="label text-lo leading-relaxed">
          <strong className="text-mid font-semibold">Affiliate disclosure:</strong> Some links are Shopee affiliate links. If you buy through them, we may earn a small commission at no extra cost to you. We only list shops and products we have actually checked.
        </p>
      </div>

      {/* Main */}
      <div className="px-8 md:px-12 max-w-[1400px] mx-auto pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-line">

          <div>
            <div className="font-black text-lg text-hi tracking-tight mb-3">
              Page<span className="text-rust">Two</span>.ph
            </div>
            <p className="small font-light text-mid leading-relaxed max-w-[220px]">
              Underrated clothing shops on Shopee Philippines that never show up on page one. Updated every week, CDO.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-lo hover:text-pinterest transition-colors duration-150">
                <PinterestLogo size={20} weight="fill" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-lo hover:text-hi transition-colors duration-150">
                <TiktokLogo size={20} weight="fill" />
              </a>
              <a href="#newsletter" aria-label="Email newsletter" className="text-lo hover:text-hi transition-colors duration-150">
                <EnvelopeSimple size={20} weight="fill" />
              </a>
            </div>
          </div>

          {[
            { title: 'Explore', links: [['#finds','Latest finds'],['#shops','Shop spotlight'],['#how','How it works'],['#newsletter','Newsletter']] },
            { title: 'Follow',  links: [['https://pinterest.com','Pinterest'],['https://tiktok.com','TikTok'],['#newsletter','Email list']] },
            { title: 'Legal',   links: [['/privacy','Privacy Policy'],['/privacy#disclosure','Affiliate Disclosure'],['/privacy#cookies','Cookie Policy']] },
          ].map(col => (
            <div key={col.title}>
              <div className="label font-bold uppercase tracking-[0.18em] text-hi mb-4">{col.title}</div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="small text-mid hover:text-hi transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-8">
          <span className="label text-lo">&copy; 2025 PageTwo.ph. All rights reserved.</span>
          <span className="label text-lo">Made in Cagayan de Oro, Philippines</span>
        </div>
        <p className="label text-lo leading-relaxed mt-4 max-w-2xl">
          Not affiliated with Shopee or any listed shop. Product photos belong to their respective sellers. We earn a small commission through Shopee&apos;s affiliate program when you buy through our links.
        </p>
      </div>
    </footer>
  )
}
