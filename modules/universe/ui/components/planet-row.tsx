import { memo } from 'react'

import { PlanetWithMoons } from '@/modules/universe/types'
import { Moon } from '@/modules/universe/ui/components/moon'

import { Planet } from './planet'

interface PlanetRowProps {
  planet: PlanetWithMoons
  selectedMoons: Set<number>
  onToggleMoon: (planetId: number, moonId: number) => void
}

export const PlanetRow = memo(function PlanetRow({ planet, selectedMoons, onToggleMoon }: PlanetRowProps) {
  return (
    <div className="flex items-center gap-x-12">
      <Planet title={planet.title} selectedMoonsCount={selectedMoons.size} />

      {planet.moons.map((moon) => (
        <Moon
          key={moon.id}
          title={moon.title}
          selected={selectedMoons.has(moon.id)}
          onClick={() => onToggleMoon(moon.planetId, moon.id)}
        />
      ))}
    </div>
  )
})
