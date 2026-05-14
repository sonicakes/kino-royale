import Image from 'next/image'
import { Nav } from '@/components/Nav/Nav'
import { SectionHeader } from '@/components/SectionHeader/SectionHeader'
import { DiamondDivider } from '@/components/DiamondDivider/DiamondDivider'
import { Footer } from '@/components/Footer/Footer'
import styles from './blueprint.module.css'

export const metadata = {
  title: 'Blueprint — Kino Royale',
}

const palette = [
  { name: 'Midnight',    hex: '#020810' },
  { name: 'Deep',        hex: '#060D1A' },
  { name: 'Navy',        hex: '#0C1828' },
  { name: 'Navy Mid',    hex: '#1A3A50' },
  { name: 'Cobalt',      hex: '#1A4A8A' },
  { name: 'Cobalt Mid',  hex: '#2860B0' },
  { name: 'Cobalt Glow', hex: '#4A8AD4' },
  { name: 'Teal',        hex: '#7DD4D0' },
  { name: 'Teal Dim',    hex: '#3A7878' },
  { name: 'Silver',      hex: '#C8DCE0' },
  { name: 'Silver Dim',  hex: '#4A6878' },
  { name: 'White',       hex: '#EEF6FA' },
  { name: 'Red',         hex: '#c1272d', note: 'highlight · used sparingly' },
]

const fonts = [
  {
    name: 'DM Serif Display',
    role: 'Hero title · pull quotes',
    sample: 'Cinema',
    sampleStyle: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic' as const,
      fontSize: 'clamp(48px, 9vw, 88px)',
      fontWeight: 400,
      color: 'var(--color-white)',
      lineHeight: 1,
    },
    note: 'Warm, feminine, italic. The "Kino" in the hero. Used sparingly so it lands.',
  },
  {
    name: 'Bebas Neue',
    role: 'Nav · metadata · CTAs · headings',
    sample: 'ROYALE',
    sampleStyle: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'clamp(48px, 9vw, 88px)',
      letterSpacing: '0.18em',
      color: 'var(--color-white)',
      lineHeight: 1,
    },
    note: 'Cold, geometric, all-caps. The counter-weight. Every label and nav link.',
  },
  {
    name: 'Barlow Condensed',
    role: 'Body text · descriptions · eyebrows',
    sample: 'The art of the overly long film review.',
    sampleStyle: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(20px, 3.5vw, 32px)',
      fontWeight: 300,
      color: 'var(--color-silver)',
      lineHeight: 1.3,
    },
    note: 'Weight 300 throughout. All running copy, metadata labels, and card text.',
  },
  {
    name: 'Cormorant Garamond',
    role: 'Film Lady voice only',
    sample: 'She reviews films nobody asked her to.',
    sampleStyle: {
      fontFamily: 'var(--font-voice)',
      fontStyle: 'italic' as const,
      fontSize: 'clamp(20px, 3.5vw, 32px)',
      fontWeight: 300,
      color: 'var(--color-silver-dim)',
      lineHeight: 1.4,
    },
    note: 'Italic only. Reserved exclusively for first-person Film Lady prose.',
  },
]

const references = [
  {
    film: 'Thunderball',
    year: '1965',
    contribution: 'Palette · Title treatment',
    body: 'The two-colour stacked title — bold roman on top, lighter italic below — is the direct ancestor of the Kino / ROYALE logo split. The underwater world gives the site its feeling of being submerged in blue light, looking up.',
    imageFile: 'thunderball.jpg',
  },
  {
    film: 'The Living Daylights',
    year: '1987',
    contribution: 'Composition · Light source · Colour depth',
    body: 'Near-black navy as the dominant tone. A single light source top-left. A silhouette figure partially cropped by the left edge. The homepage hero is a direct homage to this poster — same tension between darkness and a figure caught mid-movement.',
    imageFile: 'living-daylights.jpg',
  },
]

export default function BlueprintPage() {
  return (
    <>
      <Nav />
      <main className="max-w-[900px] mx-auto px-4 py-10 md:px-16 md:py-16">

        {/* Page header */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-cobalt-glow)',
              marginBottom: 12,
            }}
          >
            Design & Aesthetic
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(38px, 8vw, 68px)',
              fontWeight: 400,
              color: 'var(--color-white)',
              lineHeight: 0.9,
              margin: '0 0 16px',
            }}
          >
            Blueprint
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-voice)',
              fontStyle: 'italic',
              fontSize: 24,
              fontWeight: 300,
              color: 'var(--color-silver-dim)',
              margin: 0,
            }}
          >
            The palette, the type, the Bond posters it all came from.
          </p>
        </div>

        <div style={{ height: '0.5px', backgroundColor: 'var(--color-navy-mid)', margin: '0 0 0' }} />

        {/* Poster artwork — full-width feature strip */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/blueprint/headphones.svg"
          alt="Kino Royale poster artwork — headphones"
          style={{ width: '100%', display: 'block' }}
        />
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          fontWeight: 300,
          letterSpacing: '0.15em',
          color: 'var(--color-silver-dim)',
          opacity: 0.6,
          textAlign: 'right',
          marginBottom: 56,
          marginTop: 8,
        }}>
          Artwork by <a href="https://unsplash.com/illustrations/person-wearing-vr-headset-submerged-in-water-A62qYyCVdG8" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-cobalt-glow)', textDecoration: 'none' }}>Haerul Ambiya, Unsplash</a>
        </p>

        {/* Palette */}
        <div style={{ marginBottom: 16 }}>
          <SectionHeader>The Palette</SectionHeader>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            fontWeight: 300,
            color: 'var(--color-silver-dim)',
            lineHeight: 1.72,
            marginBottom: 32,
          }}
        >
          Iridescent Midnight — twelve tokens, all blue. Backgrounds elevate from midnight through navy to deep. Cobalt glow for labels. Teal for everything you can press.
        </p>
        <div className={styles.swatchGrid}>
          {palette.map(({ name, hex, note }) => (
            <div key={hex} className={styles.swatch}>
              <div className={styles.swatchBlock} style={{ backgroundColor: hex }} />
              <span className={styles.swatchName}>{name}</span>
              <span className={styles.swatchHex}>{hex}</span>
              {note && <span className={styles.swatchNote}>{note}</span>}
            </div>
          ))}
        </div>

        <DiamondDivider />

        {/* Typography */}
        <div style={{ marginBottom: 16 }}>
          <SectionHeader>The Type</SectionHeader>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            fontWeight: 300,
            color: 'var(--color-silver-dim)',
            lineHeight: 1.72,
            marginBottom: 32,
          }}
        >
          Four typefaces. Two of them are in deliberate tension — the warmth of DM Serif Display against the cold geometry of Bebas Neue. That friction is the site.
        </p>
        <div className={styles.fontGrid}>
          {fonts.map(({ name, role, sample, sampleStyle, note }) => (
            <div key={name} className={styles.fontCard}>
              <p className={styles.fontSample} style={sampleStyle}>{sample}</p>
              <div className={styles.fontMeta}>
                <span className={styles.fontName}>{name}</span>
                <span className={styles.fontRole}>{role}</span>
                <span className={styles.fontNote}>{note}</span>
              </div>
            </div>
          ))}
        </div>

        <DiamondDivider />

        {/* Silhouette gallery */}
        <div style={{ marginBottom: 16 }}>
          <SectionHeader>The Silhouettes</SectionHeader>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 300, color: 'var(--color-silver-dim)', lineHeight: 1.72, marginBottom: 32 }}>
          Three figures. Each one placed differently — in the hero, in the logo, in the wider world of the site. All illustrations used under the Unsplash Licence.
        </p>
        <div className={styles.artGallery}>

          {/* 1 — Hero figure */}
          <div className={styles.artItem}>
            <div className={styles.artImageSlot}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/blueprint/silhouette-reference.svg" alt="Hero figure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span className={styles.artLabel}>The Figure · Homepage hero</span>
            <p className={styles.artDesc}>
              Made by  
<a href="https://unsplash.com/illustrations/stylized-profile-of-a-womans-face-in-orange-XBwYBCsIs-A"> gilang yuda alyahya on Unsplash</a> — a proper illustrated poster artwork, not a flat silhouette. The original amber palette was re-coloured to the site's cool blue-midnight tones. She is under water, absorbing light from above. The bubbles rise.
            </p>
          </div>

          {/* 2 — Logo / cover */}
          <div className={styles.artItem}>
            <div className={styles.artImageSlot}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/blueprint/og-cover.svg" alt="Logo silhouette" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span className={styles.artLabel}>The Logo · Nav &amp; podcast cover</span>
            <p className={styles.artDesc}>
              The same artist, a different figure —   Made by  
<a href="https://unsplash.com/illustrations/abstract-profile-of-a-womans-face-with-red-lips-Ot8ZfxddEzw"> gilang yuda alyahya on Unsplash</a>: more mysterious, more still. Used as the nav logo mark and on every episode's podcast cover art. Recolored to cobalt blues. The OG red lips made me inspired to include the red highlight in my site.
            </p>
          </div>

          {/* 3 — Bond figure */}
          <div className={styles.artItem}>
            <div className={styles.artImageSlot}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/blueprint/bond.svg" alt="Bond figure" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <span className={styles.artLabel}>The Reference · Bond</span>
            <p className={styles.artDesc}>
              The third piece is by <a href="https://unsplash.com/illustrations/a-scuba-diver-is-floating-in-the-ocean-jtBdNWat7No" target="_blank">
Muhammad Afandi on Unsplash</a>. Warm amber and deep navy — the original palette before the re-colour into cobalts & teals. Added some drop shadows to highlight our boy James & included a few bubbles to keep him alive & kicking.
            </p>
          </div>

        </div>

        <DiamondDivider />

        {/* Bond poster references */}
        <div style={{ marginBottom: 16 }}>
          <SectionHeader>The References</SectionHeader>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 300, color: 'var(--color-silver-dim)', lineHeight: 1.72, marginBottom: 40 }}>
          Two Bond film posters. That's where this entire visual language came from.
        </p>
        <div className={styles.refGrid} style={{ marginBottom: 0 }}>
          {references.map(({ film, year, contribution, body, imageFile }) => (
            <div key={film}>
              <div className={styles.imageSlotWide} style={{ marginBottom: 24 }}>
                {/* Drop poster images at public/blueprint/{imageFile} */}
                <Image
                  src={`/blueprint/${imageFile}`}
                  alt={`${film} poster`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className={styles.imagePlaceholder}>{film} poster</div>
              </div>
              <div className={styles.refCard}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-cobalt-glow)', marginBottom: 8 }}>
                  {year} · {contribution}
                </p>
                <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: 32, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-white)', margin: '0 0 16px' }}>
                  {film}
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 300, color: 'var(--color-silver)', lineHeight: 1.72, margin: 0 }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <DiamondDivider />

        {/* Coded motifs */}
        <div style={{ marginBottom: 16 }}>
          <SectionHeader>How the Motifs Are Built</SectionHeader>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 300, color: 'var(--color-silver-dim)', lineHeight: 1.72, marginBottom: 32 }}>
          Every decorative element on this site is hand-coded SVG — no images, no libraries.
        </p>
        <div className={styles.motifRow}>

          {/* Bubble divider */}
          <div className={styles.motifCard}>
            <div className={styles.motifPreview}>
              <DiamondDivider />
            </div>
            <p className={styles.motifTitle}>Bubble Divider</p>
            <p className={styles.motifBody}>
              Seven SVG circles in a row, each rendered as its own inline SVG element sized exactly to its radius. No fill — only a 1.5px stroke. Radii vary from 3px to 7px, giving an organic, floating quality.
            </p>
            <p className={styles.motifDetail}>
              Colours alternate between cobalt glow (<code style={{ fontFamily: 'monospace', fontSize: 13 }}>#4A8AD4</code>) and red (<code style={{ fontFamily: 'monospace', fontSize: 13 }}>#c1272d</code>) at opacities between 0.35 and 0.55 — low enough that neither dominates. The red ones are the same accent used in the silhouette lips and the Royal Simulator card.
            </p>
          </div>

          {/* Light orb */}
          <div className={styles.motifCard}>
            <div className={styles.motifLightPreview}>
              <svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="bp-blur-outer"><feGaussianBlur stdDeviation="18" /></filter>
                  <filter id="bp-blur-mid"><feGaussianBlur stdDeviation="8" /></filter>
                  <filter id="bp-blur-core"><feGaussianBlur stdDeviation="4" /></filter>
                </defs>
                <ellipse cx="60" cy="40" rx="180" ry="130" fill="#1A4A8A" opacity="0.55" filter="url(#bp-blur-outer)" />
                <ellipse cx="50" cy="30" rx="100" ry="80" fill="#2860B0" opacity="0.45" filter="url(#bp-blur-mid)" />
                <ellipse cx="44" cy="24" rx="44" ry="34" fill="#4A8AD4" opacity="0.42" filter="url(#bp-blur-core)" />
                <line x1="60" y1="20" x2="400" y2="200" stroke="#2860B0" strokeWidth="50" opacity="0.06" />
                <line x1="50" y1="20" x2="330" y2="200" stroke="#2860B0" strokeWidth="36" opacity="0.05" />
                <ellipse cx="60" cy="10" rx="120" ry="8" fill="none" stroke="#4A8AD4" strokeWidth="0.5" opacity="0.22" />
                <circle cx="90" cy="160" r="3" fill="none" stroke="#2860B0" strokeWidth="0.5" opacity="0.28" />
                <circle cx="150" cy="130" r="2" fill="none" stroke="#2860B0" strokeWidth="0.5" opacity="0.2" />
                <circle cx="70" cy="110" r="4" fill="none" stroke="#1A4A8A" strokeWidth="0.5" opacity="0.22" />
              </svg>
            </div>
            <p className={styles.motifTitle}>Light Orb — Water Background</p>
            <p className={styles.motifBody}>
              Three concentric SVG ellipses, each with a different <code style={{ fontFamily: 'monospace', fontSize: 13 }}>feGaussianBlur</code> filter (stdDeviation 24 → 10 → 6). Stacked from largest to smallest, they create a soft atmospheric glow that reads as light refracted through water.
            </p>
            <p className={styles.motifDetail}>
              Wide stroked lines (strokeWidth 25–80) at 3–6% opacity fan out from the light source as descending rays. Thin ellipses at the top edge simulate surface ripples. Small unfilled circles scattered around the lower half are rising bubbles — the same structural technique as the divider, but placed spatially rather than in a row. The whole SVG is mirrored with <code style={{ fontFamily: 'monospace', fontSize: 13 }}>scaleX(-1)</code> so the light source lands top-left where the silhouette stands.
            </p>
          </div>

        </div>

      </main>
      <Footer />
    </>
  )
}
