'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'
import clsx from 'clsx'
import { CrownIcon } from '@/components/CrownIcon/CrownIcon'

const links = [
  { label: 'Episodes', href: '/episodes' },
  { label: 'The Story', href: '/story' },
  { label: 'Film Lady', href: '/story#film-lady' },
  { label: 'Universe', href: '/#universe' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoKino}>Kino</Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              styles.link,
              pathname === link.href && styles.active,
              link.href === '/episodes' && pathname.startsWith('/episodes') && styles.active,
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link href="/episodes" className={styles.ctaGhost}>Listen</Link>
      <Link href="/" className={styles.logoRoyale} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <CrownIcon size={12} />ROYALE
      </Link>
    </nav>
  )
}
