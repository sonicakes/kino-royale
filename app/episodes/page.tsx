import { getAllEpisodes } from '@/lib/episodes'
import { Nav } from '@/components/Nav/Nav'
import { EpisodeGrid } from '@/components/EpisodeGrid/EpisodeGrid'
import { SectionHeader } from '@/components/SectionHeader/SectionHeader'
import { Footer } from '@/components/Footer/Footer'
import styles from './episodes.module.css'

export const metadata = {
  title: 'Episodes — Kino Royale',
}

export default function EpisodesPage() {
  const episodes = getAllEpisodes()

  return (
    <div className={styles.pageWrap}>
      <Nav />

      {/* Bond watermarks */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/bond.svg" className={styles.sil1} alt="" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/bond.svg" className={styles.sil2} alt="" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/bond.svg" className={styles.sil3} alt="" aria-hidden="true" />

      <main className="max-w-4xl mx-auto px-4 py-10 md:px-8 md:py-16">
        <div className="mb-4">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-cobalt-glow)',
              marginBottom: 12,
            }}
          >
            Kino Royale Productions
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(36px, 8vw, 64px)',
              fontWeight: 400,
              color: 'var(--color-white)',
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            Episodes
          </h1>
        </div>

        <div
          style={{
            height: '0.5px',
            backgroundColor: 'var(--color-navy-mid)',
            margin: '28px 0',
          }}
        />

        <div className="mb-8">
          <SectionHeader>All Episodes</SectionHeader>
        </div>

        <EpisodeGrid episodes={episodes} />
      </main>
      <Footer />
    </div>
  )
}
