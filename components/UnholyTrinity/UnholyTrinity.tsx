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
      {hasBlog ? (
        <a
          href={episode.blogUrl}
          className={clsx(styles.card, styles.tealTop)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.eyebrow}>Written Review</span>
          <span className={styles.title}>Cinefile Blog</span>
          <span className={styles.meta}>Read the full review</span>
          <span className={styles.link}>Read →</span>
        </a>
      ) : (
        <div className={clsx(styles.card, styles.tealTop, styles.disabled)} aria-hidden="true">
          <span className={styles.eyebrow}>Written Review</span>
          <span className={styles.title}>Cinefile Blog</span>
          <span className={styles.meta}>Review coming soon</span>
          <span className={styles.link}>—</span>
        </div>
      )}

      {/* Royal Simulator */}
      {hasSimulator ? (
        <a
          href={`https://royal-simulator.netlify.app/scenarios/${episode.simulatorId}`}
          className={clsx(styles.card, styles.cobaltTop)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.eyebrow}>Interactive Scenario</span>
          <span className={styles.title}>Royal Simulator</span>
          <span className={styles.meta}>Play the scenario</span>
          <span className={styles.link}>Play →</span>
        </a>
      ) : (
        <div className={clsx(styles.card, styles.cobaltTop, styles.disabled)} aria-hidden="true">
          <span className={styles.eyebrow}>Interactive Scenario</span>
          <span className={styles.title}>Royal Simulator</span>
          <span className={styles.meta}>Scenario coming soon</span>
          <span className={styles.link}>—</span>
        </div>
      )}
    </div>
  )
}
