import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { Episode } from '@/lib/episodes'
import styles from './EpisodeCard.module.css'

function fmtDate(d: string) {
  const [y, m, day] = d.split('-').map(Number)
  return `${day} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]} ${String(y).slice(2)}`
}

interface Props {
  episode: Episode
}

export function EpisodeCard({ episode }: Props) {
  return (
    <Link href={`/episodes/${episode.slug}`} className={styles.card}>
      <div className={styles.cover}>
        {episode.coverArt && (
          <Image
            src={episode.coverArt}
            alt={episode.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="200px"
          />
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{episode.title}</span>
        </div>
        <span className={styles.meta}>EP {String(episode.number).padStart(2, '0')} · {episode.duration} · {fmtDate(episode.date)}</span>
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
