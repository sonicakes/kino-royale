import Link from 'next/link'
import styles from './Footer.module.css'
import { CrownIcon } from '@/components/CrownIcon/CrownIcon'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoBlock}>
        <span className={styles.logoDisplay}>Kino</span>
        <span className={styles.logoUi}>Royale</span>
      </div>

      <div className={styles.links}>
        <a href="mailto:kinoroyalepodcast@gmail.com" className={styles.link}>kinoroyalepodcast@gmail.com</a>
        <a href="https://anchor.fm/s/1105f4e3c/podcast/rss" className={styles.link} target="_blank" rel="noopener noreferrer">RSS</a>
        <a
          href="https://github.com/sonicakes/kino-royale"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>

      <span className={styles.copy} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <CrownIcon size={13} />
        © {new Date().getFullYear()} Film Lady Productions
      </span>
    </footer>
  )
}
