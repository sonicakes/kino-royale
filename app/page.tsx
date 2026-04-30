import { getAllEpisodes } from '@/lib/episodes'
import { Nav } from '@/components/Nav/Nav'
import { Hero } from '@/components/Hero/Hero'
import { EpisodeGrid } from '@/components/EpisodeGrid/EpisodeGrid'
import { SectionHeader } from '@/components/SectionHeader/SectionHeader'
import { DiamondDivider } from '@/components/DiamondDivider/DiamondDivider'
import { UniverseCard } from '@/components/UniverseCard/UniverseCard'
import { Footer } from '@/components/Footer/Footer'

export default function HomePage() {
  const episodes = getAllEpisodes().slice(0, 2)

  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Latest Episodes */}
        <section className="max-w-4xl mx-auto px-8 py-20">
          <div className="mb-8">
            <SectionHeader>Latest Episodes</SectionHeader>
          </div>
          <EpisodeGrid episodes={episodes} />
          <div className="mt-8">
            <a
              href="/episodes"
              className="font-ui text-xs tracking-widest uppercase text-silver-dim hover:text-silver transition-colors"
              style={{ fontFamily: 'var(--font-ui)', fontSize: 12, letterSpacing: '0.18em', color: 'var(--color-silver-dim)', textDecoration: 'none' }}
            >
              All Episodes →
            </a>
          </div>
        </section>

        <DiamondDivider />

        {/* Universe strip */}
        <section id="universe" className="max-w-4xl mx-auto px-8 pb-20">
          <div className="mb-8">
            <SectionHeader>The Unholy Trinity</SectionHeader>
          </div>
          <div className="flex gap-4 flex-wrap">
            <UniverseCard
              eyebrow="Written Review"
              title="Cinefile Blog"
              description="Film criticism in long form — essays, reviews, and takes worth arguing about."
              href="https://cinefile-blog.netlify.app"
              accent="teal"
              external
            />
            <UniverseCard
              eyebrow="Podcast"
              title="Kino Royale"
              description="You're already here. Cinema criticism with absolutely no restraint."
              href="/episodes"
              accent="cobalt"
            />
            <UniverseCard
              eyebrow="Interactive Scenario"
              title="Royal Simulator"
              description="Horror scenario generator. Play the film. Make the wrong choices."
              href="https://royalsimulator.netlify.app"
              accent="cobalt"
              external
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
