import { getAllEpisodes } from '@/lib/episodes'

const SITE_URL = 'https://kino-royale.netlify.app/'

export async function GET() {
  const episodes = getAllEpisodes()

  const items = episodes
    .filter(ep => ep.audioUrl)
    .map(ep => `
      <item>
        <title><![CDATA[${ep.title}]]></title>
        <description><![CDATA[${ep.description}]]></description>
        <pubDate>${new Date(ep.date).toUTCString()}</pubDate>
        <enclosure url="${ep.audioUrl}" type="audio/mpeg" length="0"/>
        <itunes:duration>${ep.duration}</itunes:duration>
        <guid isPermaLink="true">${SITE_URL}/episodes/${ep.slug}</guid>
        <link>${SITE_URL}/episodes/${ep.slug}</link>
      </item>
    `).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>Kino Royale</title>
    <description>Cinema criticism with a pretentious streak, a royal pedigree, and absolutely no restraint.</description>
    <link>${SITE_URL}</link>
    <language>en-au</language>
    <itunes:author>The Film Lady</itunes:author>
    <itunes:category text="Arts">
      <itunes:category text="Film Reviews"/>
    </itunes:category>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
