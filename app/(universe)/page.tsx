import { Suspense } from 'react'

import { getPlanetsWithMoons } from '@/modules/universe/lib/data'
import { UniverseLoading, UniverseView } from '@/modules/universe/ui/views/universe-view'

export default async function UniversePage() {
  const planetsPromise = getPlanetsWithMoons()

  return (
    <Suspense fallback={<UniverseLoading />}>
      <UniverseView planetsPromise={planetsPromise} />
    </Suspense>
  )
}
