import type { Metadata } from 'next'
import { Bebas_Neue, DM_Serif_Display, Barlow_Condensed, Cormorant_Garamond } from 'next/font/google'
import { IdentityWidget } from '@/components/IdentityWidget/IdentityWidget'
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration/ServiceWorkerRegistration'
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
  title: 'Kino Royale — Dark Film Podcast',
  description: 'Dark film podcast hosted by Film Lady. Deep dives into dark cinema, TV and literature — as deep as Thunderball goes.',
  openGraph: {
    title: 'Kino Royale',
    description: 'Cinema criticism with a pretentious streak.',
    siteName: 'Kino Royale',
  },
  icons: {
    icon: [
      { url: '/crown.svg', type: 'image/svg+xml' },
    ],
    apple: '/crown.svg',
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
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
