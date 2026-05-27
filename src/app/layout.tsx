import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PageTwo.ph | Hidden Gem Clothes on Shopee Philippines',
  description: 'Handpicked underrated clothing shops on Shopee Philippines. Real finds, honest prices, no resellers. Updated every week.',
  keywords: 'shopee hidden gems, best shopee clothes philippines, affordable fashion shopee ph, underrated shopee shops, shopee finds 2025',
  authors: [{ name: 'PageTwo.ph' }],
  metadataBase: new URL('https://pagetwo.ph'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://pagetwo.ph',
    title: 'PageTwo.ph | Hidden Gem Clothes on Shopee Philippines',
    description: 'Handpicked underrated clothing shops on Shopee Philippines. Real finds, honest prices, no resellers.',
    siteName: 'PageTwo.ph',
    locale: 'en_PH',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'PageTwo.ph — Hidden gem clothes on Shopee Philippines' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PageTwo.ph | Hidden Gem Clothes on Shopee',
    description: 'Handpicked clothing shops on Shopee Philippines. Real finds, honest prices.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7492388540350253" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'PageTwo.ph',
              url: 'https://pagetwo.ph',
              description: 'Handpicked hidden gem clothing shops on Shopee Philippines.',
              publisher: { '@type': 'Organization', name: 'PageTwo.ph', url: 'https://pagetwo.ph' },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://pagetwo.ph/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-rust focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
