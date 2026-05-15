import Image from 'next/image'
import { Nav } from '@/components/Nav/Nav'
import { CornerBox } from '@/components/CornerBox/CornerBox'
import { DiamondDivider } from '@/components/DiamondDivider/DiamondDivider'
import { Footer } from '@/components/Footer/Footer'

export const metadata = {
  title: 'The Story — Kino Royale',
}

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main className="max-w-[900px] mx-auto px-4 py-10 md:px-16 md:py-16">

        {/* Page header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 300,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-cobalt-glow)',
                marginBottom: 12,
              }}
            >
              Film Lady Productions
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
              The Story
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-voice)',
                fontStyle: 'italic',
                fontSize: 20,
                fontWeight: 400,
                color: '#B4CCEC',
                margin: 0,
              }}
            >
              Even though this is not James Bond saga pod, I would love to hear about your favourite Bond movie & actor.
            </p>
          </div>
          <div className="relative w-full md:w-[200px] md:flex-shrink-0" style={{ aspectRatio: '1 / 1' }}>
            <Image
              src="/cover-art-pod.png"
              alt="Kino Royale podcast cover art"
              fill
              style={{ objectFit: 'cover', border: '0.5px solid var(--color-navy-mid)' }}
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>
        </div>

        <div
          style={{
            height: '0.5px',
            backgroundColor: 'var(--color-navy-mid)',
            margin: '0 0 48px',
          }}
        />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

          {/* Left: Cover art + pull quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', border: '0.5px solid var(--color-navy-mid)' }}>
              <Image
                src="/me.png"
                alt="The Film Lady"
                fill
                style={{ objectFit: 'cover', objectPosition: 'bottom', filter: 'saturate(0.75) brightness(0.9)' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'var(--color-cobalt)',
                mixBlendMode: 'color',
                opacity: 0.4,
                pointerEvents: 'none',
              }} />
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '0.15em',
              color: 'var(--color-silver-dim)',
              margin: '-18px 0 0',
              textAlign: 'right',
            }}>
              Gemini-modified picture by Film Lady herself
            </p>
            <CornerBox>
              <p
                style={{
                  fontFamily: 'var(--font-voice)',
                  fontStyle: 'italic',
                  fontSize: 26,
                  fontWeight: 400,
                  color: '#B4CCEC',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                "Podcasting with a thick accent - what can go wrong?"
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-cobalt-glow)',
                  marginTop: 20,
                  marginBottom: 0,
                }}
              >
                — The Film Lady
              </p>
            </CornerBox>
          </div>

          {/* Right: Bio */}
          <div id="film-lady">
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 300,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-cobalt-glow)',
                marginBottom: 16,
              }}
            >
              Name is Lady. FILM LADY.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 17,
                fontWeight: 300,
                color: 'var(--color-silver)',
                lineHeight: 1.72,
                marginBottom: 16,
              }}
            >
              Kino Royale is a dark films criticism podcast from Sydney, Australia, hosted by the Film Lady — a writer, cinephile, Imperialist Russia exile, and dedicated overthinker of things that were probably meant to be just entertainment.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 17,
                fontWeight: 300,
                color: 'var(--color-silver)',
                lineHeight: 1.72,
                marginBottom: 16,
              }}
            >
              Sometimes an episode pairs a film with a written review on the Cinefile Blog and an interactive horror scenario in the Royal Simulator. Three ways into the same film. The Unholy Trinity. 
            </p>
            <p 
            style={{
                fontFamily: 'var(--font-body)',
                fontSize: 17,
                fontWeight: 300,
                color: 'var(--color-silver)',
                lineHeight: 1.72,
                marginBottom: 16,
              }}
            >Some other times, we do one-movie deep-dives, double-bills, book VS movie reviews, or even perouse movies lists. Occasionaly, we <span className='line-through font-bold text-[#c1272d]'>f</span><span className='font-bold italic pl-px text-[#c1272d]'>m</span>uck around & talk sh*t - this is an explicit pod!</p>
            <p
              style={{
                fontFamily: 'var(--font-voice)',
                fontStyle: 'italic',
                fontSize: 17,
                fontWeight: 400,
                color: '#B4CCEC',
                lineHeight: 1.72,
              }}
            >
              She reviews films nobody asked her to, at length, with absolute conviction.
            </p>

            {/* External links */}
            <div style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap' }}>
              <a
                href="https://letterboxd.com/filmladyroyal/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 14,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-teal)',
                  textDecoration: 'none',
                }}
              >
                Letterboxd →
              </a>
              <a
                href="https://bsky.app/profile/filmladyroyal.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 14,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-teal)',
                  textDecoration: 'none',
                }}
              >
                Bluesky →
              </a>
                 <a
                href="https://www.instagram.com/filmladyroyal/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 14,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-teal)',
                  textDecoration: 'none',
                }}
              >
                Instagram →
              </a>
            </div>
          </div>
        </div>

        <DiamondDivider />

        {/* About the podcast */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-cobalt-glow)',
              marginBottom: 20,
            }}
          >
            Shaken, not stirred.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 17,
                fontWeight: 300,
                color: 'var(--color-silver)',
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              Kino Royale launched in late 2025 as the audio component of Film Lady Productions — a platform that approaches each film from three angles simultaneously. The podcast is where the thinking happens out loud: messy, opinionated, occasionally wrong, and always worth arguing about.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 17,
                fontWeight: 300,
                color: 'var(--color-silver)',
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              The aesthetic is unapologetically cinematic. The palette comes from Bond. The typography comes from film posters. The name comes from the tension between high-art pretension ("Kino" — the German and Russian word for cinema) and cheap-thrill genre pleasure ("Royale").
            </p>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
