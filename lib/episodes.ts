import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const EPISODES_DIR = path.join(process.cwd(), 'content/episodes')

export interface Episode {
  id: string
  slug: string
  number: number
  title: string
  date: string
  duration: string
  description: string
  showNotes: string
  audioUrl: string
  coverArt: string
  tags: string[]
  blogUrl: string
  simulatorId: string
  preview?: boolean
}

export function getAllEpisodes(): Episode[] {
  const files = fs.readdirSync(EPISODES_DIR).filter(f => f.endsWith('.md'))

  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(EPISODES_DIR, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        ...(data as Omit<Episode, 'showNotes'>),
        showNotes: content,
      }
    })
    .sort((a, b) => b.number - a.number)
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return getAllEpisodes().find(ep => ep.slug === slug)
}
