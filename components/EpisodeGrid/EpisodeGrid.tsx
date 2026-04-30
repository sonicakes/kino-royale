import type { Episode } from '@/lib/episodes'
import { EpisodeCard } from '@/components/EpisodeCard/EpisodeCard'

interface Props {
  episodes: Episode[]
}

export function EpisodeGrid({ episodes }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {episodes.map(ep => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </div>
  )
}
