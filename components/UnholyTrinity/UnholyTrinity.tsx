import clsx from 'clsx'
import type { Episode } from '@/lib/episodes'
import styles from './UnholyTrinity.module.css'

interface Props {
  episode: Episode
}

export function UnholyTrinity({ episode }: Props) {
  const hasBlog = !!episode.blogUrl
  const hasSimulator = !!episode.simulatorId

  return (
    <div className={styles.root}>
      {/* Current podcast — this page */}
      <div className={clsx(styles.card, styles.redTop)}>
        <span className={styles.eyebrow}>Now Playing</span>
        <span className={styles.title}>Kino Royale</span>
        <span className={styles.meta}>Ep. {String(episode.number).padStart(2, '0')} — {episode.title}</span>
        <span className={styles.link}>You are here</span>
      </div>

      {/* Blog review */}
      <a
        href={episode.blogUrl || '#'}
        className={clsx(styles.card, styles.tealTop, !hasBlog && styles.disabled)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.eyebrow}>Written Review</span>
        <span className={styles.title}>Cinefile Blog</span>
        <span className={styles.meta}>{hasBlog ? 'Read the full review' : 'Review coming soon'}</span>
        <span className={styles.link}>{hasBlog ? 'Read →' : '—'}</span>
      </a>

      {/* Royal Simulator */}
      <a
        href={hasSimulator ? `https://royal-simulator.netlify.app/scenarios/${episode.simulatorId}` : '#'}
        className={clsx(styles.card, styles.cobaltTop, !hasSimulator && styles.disabled)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.eyebrow}>Interactive Scenario</span>
        <span className={styles.title}>Royal Simulator</span>
        <span className={styles.meta}>{hasSimulator ? 'Play the scenario' : 'Scenario coming soon'}</span>
        <span className={styles.link}>{hasSimulator ? 'Play →' : '—'}</span>
      </a>
    </div>
  )
}
