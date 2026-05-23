import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | PageTwo.ph',
  description: 'Privacy Policy for PageTwo.ph — how we collect, use, and protect your data. Includes affiliate disclosure and cookie policy.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/privacy' },
}

const TOC = [
  ['overview','Overview'],
  ['disclosure','Affiliate Disclosure'],
  ['data','Information We Collect'],
  ['cookies','Cookies and Advertising'],
  ['adsense','Google AdSense'],
  ['third-party','Third-Party Links'],
  ['children','Children\'s Privacy'],
  ['rights','Your Rights'],
  ['changes','Changes to This Policy'],
  ['contact','Contact'],
]

export default function Privacy() {
  return (
    <div style={{ background: '#000', color: '#F0EBE3', minHeight: '100vh', fontFamily: "'Manrope', sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.07)', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px' }}>
        <Link href="/" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', color: '#FAFAF8', textDecoration: 'none' }}>
          Page<span style={{ color: '#C8522E' }}>Two</span>.ph
        </Link>
        <Link href="/" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A8278', textDecoration: 'none' }}>
          &larr; Back to site
        </Link>
      </nav>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '64px 48px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#FAFAF8', marginBottom: 12 }}>
          Privacy Policy
        </h1>
        <div style={{ fontSize: '0.8125rem', color: '#4A453F', marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <strong style={{ color: '#8A8278' }}>Last updated:</strong> May 2025 &nbsp;&bull;&nbsp;
          <strong style={{ color: '#8A8278' }}>Site:</strong> PageTwo.ph
        </div>

        {/* TOC */}
        <div style={{ background: '#0A0908', border: '1px solid rgba(255,255,255,0.07)', padding: '24px 32px', marginBottom: 48 }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FAFAF8', marginBottom: 16 }}>Contents</div>
          <ol style={{ listStyle: 'decimal', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TOC.map(([id, label], i) => (
              <li key={id} style={{ fontSize: '0.8125rem', color: '#8A8278' }}>
                <a href={`#${id}`} style={{ color: '#8A8278', textDecoration: 'none' }}>{i + 1}. {label}</a>
              </li>
            ))}
          </ol>
        </div>

        {[
          { id: 'overview', title: '1. Overview', content: `PageTwo.ph is a curated clothing discovery site that links to products sold on Shopee Philippines. This Privacy Policy explains how we handle information when you visit our site, what data third-party services may collect through our pages, and what choices you have. By using this site, you agree to the practices described in this policy.` },
          { id: 'disclosure', title: '2. Affiliate Disclosure', highlight: `PageTwo.ph participates in the Shopee affiliate program. This means we may earn a small commission when you click a link on our site and make a purchase on Shopee. This does not increase the price you pay. We only feature shops and products we have personally verified.`, content: `Affiliate links are marked with "Shopee ↗" throughout the site. We are committed to only recommending products we genuinely believe are worth buying, regardless of whether a commission is earned.` },
          { id: 'data', title: '3. Information We Collect', content: `We do not collect personal information directly. We do not run a user login system, and we do not store your name, address, or payment details. The following data may be collected automatically through third-party services:\n\n• Usage data — pages visited, time spent, browser type, device type, and referring URL, collected by analytics services.\n• IP address — your approximate location may be inferred from your IP address by analytics or advertising services.\n• Email address — if you subscribe to our newsletter, your email is stored through our email service provider and used only to send you updates. You can unsubscribe at any time.` },
          { id: 'cookies', title: '4. Cookies and Advertising', content: `This site uses cookies — small text files stored on your device.\n\n• Essential cookies — needed for the site to function.\n• Analytics cookies — help us understand how visitors use the site via Google Analytics. Data is anonymized where possible.\n• Advertising cookies — placed by Google AdSense to serve relevant ads. These may track your browsing across other websites.\n\nYou can opt out of interest-based ads at google.com/settings/ads, or manage cookies through your browser settings.` },
          { id: 'adsense', title: '5. Google AdSense', content: `We use Google AdSense to display advertisements. AdSense uses cookies and web beacons to show ads based on your interests and prior browsing behavior. We do not sell your data to advertisers. Advertising data is handled by Google under their own Privacy Policy at policies.google.com/privacy.` },
          { id: 'third-party', title: '6. Third-Party Links', content: `This site contains links to Shopee product listings and external platforms such as Pinterest and TikTok. When you click these links, you leave our site and are subject to those platforms' own privacy policies. We are not responsible for the content or privacy practices of third-party websites.` },
          { id: 'children', title: '7. Children\'s Privacy', content: `This site is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information through this site, please contact us and we will delete it promptly.` },
          { id: 'rights', title: '8. Your Rights', content: `Depending on where you are located, you may have the right to:\n\n• Request access to data we hold about you\n• Request correction or deletion of your data\n• Withdraw consent for email communications at any time (via unsubscribe link)\n• Opt out of advertising cookies via Google Ads Settings or browser controls` },
          { id: 'changes', title: '9. Changes to This Policy', content: `We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the site after changes are posted means you accept the updated policy.` },
          { id: 'contact', title: '10. Contact', content: '' },
        ].map(section => (
          <div key={section.id} id={section.id}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#FAFAF8', marginTop: 48, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {section.title}
            </h2>
            {section.highlight && (
              <div style={{ background: '#0A0908', borderLeft: '3px solid #C8522E', padding: '16px 24px', margin: '24px 0', fontSize: '0.9375rem', color: '#8A8278', lineHeight: 1.75 }}>
                {section.highlight}
              </div>
            )}
            {section.content && section.content.split('\n\n').map((para, i) => (
              <p key={i} style={{ color: '#8A8278', marginBottom: 16, lineHeight: 1.85, fontSize: '0.9375rem' }}>
                {para.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < para.split('\n').length - 1 && <br />}</span>
                ))}
              </p>
            ))}
            {section.id === 'contact' && (
              <div style={{ background: '#0A0908', border: '1px solid rgba(255,255,255,0.07)', padding: '24px 32px', marginTop: 48 }}>
                <p style={{ color: '#8A8278', fontSize: '0.9375rem', marginBottom: 16 }}>If you have questions about this Privacy Policy or want to exercise your rights, contact us at:</p>
                <p style={{ color: '#8A8278', fontSize: '0.9375rem', lineHeight: 1.85 }}>
                  <strong style={{ color: '#F0EBE3' }}>PageTwo.ph</strong><br />
                  Cagayan de Oro, Northern Mindanao, Philippines<br />
                  Email: <a href="mailto:hello@pagetwo.ph" style={{ color: '#C8522E', textDecoration: 'none' }}>hello@pagetwo.ph</a>
                </p>
              </div>
            )}
          </div>
        ))}
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <p style={{ fontSize: '0.75rem', color: '#4A453F' }}>&copy; 2025 PageTwo.ph. All rights reserved.</p>
        <Link href="/" style={{ fontSize: '0.75rem', color: '#8A8278', textDecoration: 'none' }}>Back to site</Link>
      </footer>
    </div>
  )
}
