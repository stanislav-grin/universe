import { PlanetRings } from './planet-rings'

interface PlanetProps {
  title: string
  selectedMoonsCount: number
}

export const Planet = ({ title, selectedMoonsCount }: PlanetProps) => {
  return (
    <div className="relative">
      <PlanetRings count={selectedMoonsCount} />

      <div className="flex items-center justify-center w-[100px] h-[100px] bg-[silver] rounded-full">
        <div className="text-xl font-bold">{title}</div>

        {selectedMoonsCount > 0 && (
          <span
            data-testid={`planet-counter-${title}`}
            className="absolute top-1 right-1 px-2 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center"
            aria-label={`${title}, ${selectedMoonsCount} moons selected`}
          >
            {selectedMoonsCount}
          </span>
        )}
      </div>
    </div>
  )
}
