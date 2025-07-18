import { getPlanetsWithMoons } from '@/modules/universe/lib/data'
import { UniverseView } from '@/modules/universe/ui/views/universe-view'

export default function UniversePage() {
  const planets = getPlanetsWithMoons()

  return <UniverseView planets={planets} />
}
