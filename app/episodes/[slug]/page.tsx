import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { marked } from 'marked'
import { getAllEpisodes, getEpisodeBySlug } from '@/lib/episodes'
import styles from './episode.module.css'
import { Nav } from '@/components/Nav/Nav'
import { AudioPlayer } from '@/components/AudioPlayer/AudioPlayer'
import { UnholyTrinity } from '@/components/UnholyTrinity/UnholyTrinity'
import { SectionHeader } from '@/components/SectionHeader/SectionHeader'
import { TargetMotif } from '@/components/TargetMotif/TargetMotif'
import { DiamondDivider } from '@/components/DiamondDivider/DiamondDivider'
import { Footer } from '@/components/Footer/Footer'

function fmtDate(d: string) {
  const [y, m, day] = d.split('-').map(Number)
  return `${day} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]} ${String(y).slice(2)}`
}

export function generateStaticParams() {
  return getAllEpisodes().map((ep) => ({ slug: ep.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const episode = getEpisodeBySlug(slug)
  if (!episode) return {}
  return {
    title: `${episode.title} — Kino Royale`,
    description: episode.description,
  }
}

export default async function EpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const episode = getEpisodeBySlug(slug)
  if (!episode) return notFound()

  const renderer = new marked.Renderer()
  renderer.link = ({ href, title, text }) => {
    let url = href ?? ''
    if (url && !url.startsWith('http') && !url.startsWith('/') && !url.startsWith('#') && !url.startsWith('mailto:')) {
      url = `https://${url}`
    }
    const external = url.startsWith('http')
    const titleAttr = title ? ` title="${title}"` : ''
    const targetAttr = external ? ' target="_blank" rel="noopener noreferrer"' : ''
    return `<a href="${url}"${titleAttr}${targetAttr}>${text}</a>`
  }

  const showNotesHtml = marked.parse(episode.showNotes.trim(), { renderer })

  return (
    <>
      <Nav />
      <main>
        {/* Episode hero */}
        <section
          style={{
            backgroundColor: 'var(--color-deep)',
            borderBottom: '0.5px solid var(--color-navy-mid)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Target motif in background */}
          <div
            style={{
              position: 'absolute',
              right: -80,
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}
          >
            <TargetMotif size={400} opacity={0.06} />
          </div>

          <div className="max-w-[900px] mx-auto px-4 pt-6 md:px-16 relative z-10">
            <Link
              href="/episodes"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-silver-dim)',
                textDecoration: 'none',
              }}
            >
              ← All Episodes
            </Link>
          </div>

          <div
            className="max-w-[900px] mx-auto px-4 py-10 md:px-16 md:py-14 flex flex-wrap gap-8 md:gap-12 items-start relative z-10"
          >
            {/* Cover art */}
            <div
              style={{
                flexShrink: 0,
                width: 250,
                height: 250,
                backgroundColor: 'var(--color-navy)',
                border: '0.5px solid var(--color-navy-mid)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {episode.coverArt && (
                <Image
                  src={episode.coverArt}
                  alt={episode.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>

            {/* Episode meta */}
            <div style={{ flex: 1, minWidth: 0, height: 250, overflowY: 'auto' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  fontWeight: 300,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-cobalt-glow)',
                  marginBottom: 10,
                }}
              >
                Episode {String(episode.number).padStart(2, '0')} · {episode.duration} · {fmtDate(episode.date)}
              </p>

              <h1
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(30px, 6vw, 56px)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-white)',
                  margin: '0 0 14px',
                  lineHeight: 1
                }}
              >
                {episode.title}
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 17,
                  fontWeight: 300,
                  color: 'var(--color-silver)',
                  lineHeight: 1.72,
                  margin: '0 0 18px',
                }}
              >
                {episode.description}
              </p>

              {episode.tags.length > 0 && (
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {episode.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 11,
                        fontWeight: 300,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-cobalt-glow)',
                        border: '0.5px solid var(--color-cobalt)',
                        padding: '3px 10px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Audio player */}
          <div className="max-w-[900px] mx-auto px-4 pb-10 md:px-16 md:pb-10">
            <AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />
          </div>
        </section>

        {/* Show notes + Unholy Trinity */}
        <div className="max-w-[900px] mx-auto px-4 py-10 md:px-16 md:py-12">

          {episode.showNotes.trim() && (
            <>
              <div style={{ marginBottom: 24 }}>
                <SectionHeader>Show Notes</SectionHeader>
              </div>
              <div
                className={styles.prose}
                dangerouslySetInnerHTML={{ __html: showNotesHtml }}
              />
              <DiamondDivider />
            </>
          )}

          <div style={{ marginBottom: 24 }}>
            <SectionHeader>The Unholy Trinity</SectionHeader>
          </div>
          <UnholyTrinity episode={episode} />
        </div>
      </main>
      <Footer />
    </>
  )
}
