'use client'

import { useState, useEffect, useRef } from 'react'
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
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (open) firstMenuLinkRef.current?.focus()
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoGroup}>
          <CrownIcon size={38} />
          <div className={styles.logoText}>
            <span className={styles.logoKino}>Kino</span>
            <span className={styles.logoRoyale}>ROYALE</span>
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
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              ref={i === 0 ? firstMenuLinkRef : undefined}
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
