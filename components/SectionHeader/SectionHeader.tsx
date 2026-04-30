import { TargetMotif } from '@/components/TargetMotif/TargetMotif'
import styles from './SectionHeader.module.css'

interface Props {
  children: React.ReactNode
}

export function SectionHeader({ children }: Props) {
  return (
    <div className={styles.root}>
      <TargetMotif size={32} opacity={0.5} />
      <span className={styles.label}>{children}</span>
    </div>
  )
}
