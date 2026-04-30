import clsx from 'clsx'
import styles from './UniverseCard.module.css'

interface Props {
  eyebrow: string
  title: string
  description: string
  href: string
  accent?: 'teal' | 'cobalt'
  external?: boolean
}

export function UniverseCard({ eyebrow, title, description, href, accent = 'cobalt', external }: Props) {
  return (
    <a
      href={href}
      className={clsx(
        styles.card,
        accent === 'teal' ? styles.topBorderTeal : styles.topBorderCobalt,
      )}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span className={styles.eyebrow}>{eyebrow}</span>
      <span className={styles.title}>{title}</span>
      <p className={styles.description}>{description}</p>
      <span className={styles.arrow}>Visit →</span>
    </a>
  )
}
