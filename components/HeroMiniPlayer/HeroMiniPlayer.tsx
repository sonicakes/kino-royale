'use client'

import { useAudioPlayer } from '@/components/AudioPlayer/useAudioPlayer'
import styles from './HeroMiniPlayer.module.css'

interface Props {
  audioUrl: string
  title: string
  duration?: string
}

export function HeroMiniPlayer({ audioUrl, title, duration }: Props) {
  const { audioRef, isPlaying, progress, currentTime, duration: elapsed, toggle, seek, volume, setVolume, isDisabled } =
    useAudioPlayer(audioUrl)

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    seek(((e.clientX - rect.left) / rect.width) * 100)
  }

  return (
    <div className={styles.card}>
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} preload="metadata" aria-label={title} />
      )}

      <div className={styles.body}>
        <div className={styles.titleRow}>
          {title && <span className={styles.title}>{title}</span>}
          {duration && <span className={styles.meta}>{duration}</span>}
        </div>

        {isDisabled ? (
          <span className={styles.comingSoon}>Audio coming soon</span>
        ) : (
          <>
            <div className={styles.progressTrack} onClick={handleProgressClick}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.timeRow}>
              <span className={styles.time}>{elapsed}</span>
              <div className={styles.volumeGroup}>
                <svg className={styles.volumeIcon} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M1 5.5h3l4-3.5v12L4 10.5H1V5.5z" />
                  <path d="M10 4.5a4.5 4.5 0 010 7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={volume}
                  onChange={e => setVolume(Number(e.target.value))}
                  className={styles.volumeSlider}
                  style={{ background: `linear-gradient(to right, var(--color-cobalt-glow) ${volume * 100}%, var(--color-navy-mid) ${volume * 100}%)` }}
                  aria-label="Volume"
                />
              </div>
              <span className={styles.time}>{isPlaying ? 'Now Playing' : 'GO ON NOW'}</span>
            </div>
          </>
        )}
      </div>

      <button
        className={`${styles.playBtn} ${isDisabled ? styles.disabled : ''}`}
        onClick={toggle}
        disabled={isDisabled}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg viewBox="0 0 16 16" className={`${styles.icon} ${styles.pause}`}>
            <rect x="3" y="2" width="3.5" height="12" />
            <rect x="9.5" y="2" width="3.5" height="12" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className={styles.icon}>
            <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
          </svg>
        )}
      </button>
    </div>
  )
}
