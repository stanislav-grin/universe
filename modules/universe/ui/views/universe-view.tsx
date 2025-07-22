'use client'

import { use, useCallback, useState } from 'react'

import { LoadingState } from '@/components/loading-state'
import { PlanetWithMoons, SelectedMoonsByPlanet } from '@/modules/universe/types'
import { PlanetRow } from '@/modules/universe/ui/components/planet-row'

interface UniverseViewProps {
  planetsPromise: Promise<PlanetWithMoons[]>
}

export const UniverseView = ({ planetsPromise }: UniverseViewProps) => {
  const planets = use(planetsPromise)
  const [selectedMoonsByPlanet, onToggle] = usePlanets(planets)

  return (
    <main className="flex flex-col gap-y-15 p-15">
      {planets.map((planet) => (
        <PlanetRow
          key={planet.id}
          planet={planet}
          selectedMoons={selectedMoonsByPlanet[planet.id]}
          onToggleMoon={onToggle}
        />
      ))}
    </main>
  )
}

const usePlanets = (
  planets: PlanetWithMoons[]
): [SelectedMoonsByPlanet, (planetId: number, moonId: number) => void] => {
  const [selected, setSelected] = useState<SelectedMoonsByPlanet>(() => {
    return Object.fromEntries(planets.map((planet) => [planet.id, new Set<number>()]))
  })

  const onToggle = useCallback((planetId: number, moonId: number) => {
    setSelected((selected) => {
      const nextSet = new Set(selected[planetId])

      if (nextSet.has(moonId)) {
        nextSet.delete(moonId)
      } else {
        nextSet.add(moonId)
      }

      return { ...selected, [planetId]: nextSet }
    })
  }, [])

  return [selected, onToggle]
}

export const UniverseLoading = () => <LoadingState title="Loading Universe" description="It may take a while..." />
