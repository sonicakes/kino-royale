'use client'

import { useAudioPlayer } from './useAudioPlayer'
import styles from './AudioPlayer.module.css'

interface Props {
  audioUrl: string
  title: string
}

export function AudioPlayer({ audioUrl, title }: Props) {
  const { audioRef, isPlaying, progress, currentTime, duration, toggle, seek, volume, setVolume, isDisabled } =
    useAudioPlayer(audioUrl)

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = ((e.clientX - rect.left) / rect.width) * 100
    seek(percent)
  }

  return (
    <div className={styles.player}>
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} preload="metadata" aria-label={title} />
      )}

      <button
        className={styles.playBtn}
        onClick={toggle}
        disabled={isDisabled}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg viewBox="0 0 16 16" className={styles.pauseIcon}>
            <rect x="3" y="2" width="3.5" height="12" />
            <rect x="9.5" y="2" width="3.5" height="12" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className={styles.playIcon}>
            <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
          </svg>
        )}
      </button>

      <div className={styles.controls}>
        {isDisabled ? (
          <span className={styles.comingSoon}>Audio coming soon</span>
        ) : (
          <>
            <div
              className={styles.progressBar}
              onClick={handleProgressClick}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.timeRow}>
              <span className={styles.time}>{currentTime}</span>
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
                  style={{ background: `linear-gradient(to right, var(--color-teal) ${volume * 100}%, var(--color-navy-mid) ${volume * 100}%)` }}
                  aria-label="Volume"
                />
              </div>
              <span className={styles.time}>{duration}</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
