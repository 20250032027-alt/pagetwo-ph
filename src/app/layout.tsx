import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PageTwo.ph | Hidden Gem Clothes on Shopee',
  description: 'Handpicked underrated clothing shops on Shopee. Real finds, honest prices, no resellers. Updated every week.',
  keywords: 'shopee hidden gems, best shopee clothes philippines, affordable fashion shopee ph, underrated shopee shops, shopee finds 2025',
  authors: [{ name: 'PageTwo.ph' }],
  metadataBase: new URL('https://pagetwo.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: 'https://pagetwo.com',
    title: 'PageTwo.ph | Hidden Gem Clothes on Shopee',
    description: 'Handpicked underrated clothing shops on Shopee. Real finds, honest prices, no resellers.',
    siteName: 'PageTwo.ph', locale: 'en',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'PageTwo.ph' }],
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'PageTwo.ph', url: 'https://pagetwo.com',
              description: 'Handpicked hidden gem clothing shops on Shopee Philippines.',
              publisher: { '@type': 'Organization', name: 'PageTwo.ph', url: 'https://pagetwo.com' },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
