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
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
