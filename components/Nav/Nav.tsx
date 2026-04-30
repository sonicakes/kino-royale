'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'
import clsx from 'clsx'

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
      <Link href="/" className={styles.logo}>
        <span className={styles.logoDisplay}>Kino</span>
        <span className={styles.logoUi}>Royale</span>
      </Link>
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
      <Link href="/episodes" className={styles.cta}>Listen</Link>
    </nav>
  )
}
