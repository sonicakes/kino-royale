import { TargetMotif } from '@/components/TargetMotif/TargetMotif'
import styles from './SectionHeader.module.css'

interface Props {
  children: React.ReactNode
}

export function SectionHeader({ children }: Props) {
  return (
    <div className={styles.root}>
      <TargetMotif size={32} opacity={0.5} />
      <h2 className={styles.label}>{children}</h2>
    </div>
  )
}
