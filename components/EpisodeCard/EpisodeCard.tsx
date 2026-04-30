import Link from 'next/link'
import clsx from 'clsx'
import type { Episode } from '@/lib/episodes'
import styles from './EpisodeCard.module.css'

interface Props {
  episode: Episode
}

export function EpisodeCard({ episode }: Props) {
  return (
    <Link href={`/episodes/${episode.slug}`} className={styles.card}>
      <span className={styles.number}>
        {String(episode.number).padStart(2, '0')}
      </span>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{episode.title}</span>
          <span className={styles.meta}>{episode.duration} · {new Date(episode.date).getFullYear()}</span>
        </div>
        <p className={styles.description}>{episode.description}</p>
        {episode.tags.length > 0 && (
          <div className={styles.tags}>
            {episode.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className={clsx(styles.playBtn, !episode.audioUrl && styles.playBtnDisabled)} aria-hidden="true">
        <svg viewBox="0 0 16 16" className={styles.playIcon}>
          <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
        </svg>
      </div>
    </Link>
  )
}
