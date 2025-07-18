import { getPlanetsWithMoons } from '@/modules/universe/lib/data'
import { UniverseView } from '@/modules/universe/ui/views/universe-view'

export default async function UniversePage() {
  const planets = await getPlanetsWithMoons()

  return <UniverseView planets={planets} />
}
