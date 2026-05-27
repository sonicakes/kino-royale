import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kino Royale',
    short_name: 'Kino Royale',
    description: 'Cinema criticism with a pretentious streak, a royal pedigree, and absolutely no restraint.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020810',
    theme_color: '#020810',
    icons: [
      {
        src: '/crown.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
