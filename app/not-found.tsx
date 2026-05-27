import Link from 'next/link'
import { Nav } from '@/components/Nav/Nav'
import { Footer } from '@/components/Footer/Footer'
import { TargetMotif } from '@/components/TargetMotif/TargetMotif'

export const metadata = {
  title: '404 — Kino Royale',
}

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            opacity: 0.04,
          }}
        >
          <TargetMotif size={500} opacity={1} />
        </div>

        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            padding: '0 24px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-cobalt-glow)',
              marginBottom: 16,
            }}
          >
            Error
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(100px, 22vw, 200px)',
              letterSpacing: '0.05em',
              color: 'var(--color-white)',
              lineHeight: 1,
              margin: '0 0 8px',
            }}
          >
            404
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 4vw, 32px)',
              color: 'var(--color-silver)',
              margin: '0 0 12px',
            }}
          >
            This scene didn&apos;t make the cut.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 300,
              color: 'var(--color-silver-dim)',
              lineHeight: 1.72,
              margin: '0 0 40px',
            }}
          >
            The page you&apos;re looking for is darker than our darkest episode.
          </p>

          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 13,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: 'var(--color-teal)',
              color: 'var(--color-midnight)',
              padding: '12px 32px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Back to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
