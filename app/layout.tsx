import type { Metadata } from 'next'
import { Bebas_Neue, DM_Serif_Display, Barlow_Condensed, Cormorant_Garamond } from 'next/font/google'
import { IdentityWidget } from '@/components/IdentityWidget/IdentityWidget'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-voice',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kino Royale — A Podcast About Film',
  description: 'Cinema criticism with a pretentious streak, a royal pedigree, and absolutely no restraint.',
  openGraph: {
    title: 'Kino Royale',
    description: 'Cinema criticism with a pretentious streak.',
    siteName: 'Kino Royale',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${barlowCondensed.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
      </head>
      <body>
        {children}
        <IdentityWidget />
      </body>
    </html>
  )
}
