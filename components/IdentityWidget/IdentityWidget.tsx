'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    netlifyIdentity?: {
      on: (event: string, cb: (user?: unknown) => void) => void
    }
  }
}

export function IdentityWidget() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity?.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return null
}
