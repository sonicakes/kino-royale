import { ImageResponse } from 'next/og'

export const alt = 'Kino Royale — A Podcast About Film'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020810',
        }}
      >
        {/* Subtle cobalt glow behind crown */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(26,74,138,0.18) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Crown */}
        <svg width="300" height="200" viewBox="-120 -80 240 160" xmlns="http://www.w3.org/2000/svg">
          <path d="M-90,60 L-90,-10 L-80,-12 L-48,18 L0,-62 L48,18 L80,-12 L90,-10 L90,60 Z" fill="#c1272d" />
          <rect x="-100" y="54" width="24" height="8" fill="#c1272d" />
          <rect x="76" y="54" width="24" height="8" fill="#c1272d" />
        </svg>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', gap: '0px' }}>
          <span style={{ fontSize: '108px', fontFamily: 'serif', fontStyle: 'italic', color: '#EEF6FA', lineHeight: 1 }}>
            Kino
          </span>
          <span style={{ fontSize: '36px', fontFamily: 'sans-serif', color: '#C8DCE0', letterSpacing: '0.48em', textTransform: 'uppercase' }}>
            Royale
          </span>
        </div>

        {/* Tagline */}
        <div style={{ marginTop: '24px', fontSize: '18px', fontFamily: 'sans-serif', color: '#4A6878', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          A Podcast About Film
        </div>
      </div>
    ),
    { ...size },
  )
}
