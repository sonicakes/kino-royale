import styles from './CornerBox.module.css'

interface Props {
  children: React.ReactNode
  className?: string
}

export function CornerBox({ children, className }: Props) {
  return (
    <div className={`${styles.root} ${className ?? ''}`}>
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />
      {children}
    </div>
  )
}
