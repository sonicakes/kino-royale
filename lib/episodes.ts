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

function coerceDuration(val: unknown): string {
  if (typeof val === 'string') return val
  if (typeof val === 'number') {
    const m = Math.floor(val / 60)
    const s = val % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }
  return String(val)
}

function readAllEpisodes(): Episode[] {
  return fs.readdirSync(EPISODES_DIR)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const raw = fs.readFileSync(path.join(EPISODES_DIR, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        ...(data as Omit<Episode, 'showNotes'>),
        date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
        duration: coerceDuration(data.duration),
        showNotes: content,
      }
    })
}

export function getAllEpisodes(): Episode[] {
  return readAllEpisodes()
    .filter(ep => !ep.preview)
    .sort((a, b) => b.number - a.number)
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return readAllEpisodes().find(ep => ep.slug === slug)
}
