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
        <div style={{ marginBottom: 48 }}>
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
              fontWeight: 300,
              color: 'var(--color-silver-dim)',
              margin: 0,
            }}
          >
            Why cinema? Why a podcast? Why all of this?
          </p>
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

          {/* Left: Pull quote */}
          <div>
            <CornerBox>
              <p
                style={{
                  fontFamily: 'var(--font-voice)',
                  fontStyle: 'italic',
                  fontSize: 26,
                  fontWeight: 300,
                  color: 'var(--color-silver)',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                "Cinema is not just what we watch — it's how we learn to see."
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
              About The Film Lady
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
              Kino Royale is a film criticism podcast from Sydney, Australia, hosted by the Film Lady — a writer, cinephile, and dedicated overthinker of things that were probably meant to be just entertainment.
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
              Each episode pairs a film with a written review on the Cinefile Blog and an interactive horror scenario in the Royal Simulator. Three ways into the same film. The Unholy Trinity.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-voice)',
                fontStyle: 'italic',
                fontSize: 17,
                fontWeight: 300,
                color: 'var(--color-silver-dim)',
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
            About Kino Royale
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
              Kino Royale launched in late 2024 as the audio component of Film Lady Productions — a platform that approaches each film from three angles simultaneously. The podcast is where the thinking happens out loud: messy, opinionated, occasionally wrong, and always worth arguing about.
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
