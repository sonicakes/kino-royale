'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'
import clsx from 'clsx'
import { CrownIcon } from '@/components/CrownIcon/CrownIcon'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Episodes', href: '/episodes' },
  { label: 'The Story', href: '/story' },
  { label: 'Blueprint', href: '/blueprint' },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoGroup}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/blueprint/silhouette-cover.svg" className={styles.logoSilhouette} alt="" aria-hidden="true" />
          <div className={styles.logoText}>
            <span className={styles.logoKino}>Kino</span>
            <span className={styles.logoRoyale}><CrownIcon size={10} />ROYALE</span>
          </div>
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
        <Link href="/episodes" className={styles.ctaGhost}>Listen</Link>
        <button
          className={styles.hamburger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={clsx(styles.bar, open && styles.bar1Open)} />
          <span className={clsx(styles.bar, open && styles.bar2Open)} />
          <span className={clsx(styles.bar, open && styles.bar3Open)} />
        </button>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                styles.mobileLink,
                pathname === link.href && styles.mobileLinkActive,
                link.href === '/episodes' && pathname.startsWith('/episodes') && styles.mobileLinkActive,
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/episodes" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Listen Now
          </Link>
        </div>
      )}
    </>
  )
}
