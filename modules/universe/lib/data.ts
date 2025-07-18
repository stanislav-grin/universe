import { moons, planets } from '@/modules/universe/constants/universe'
import { PlanetWithMoons } from '@/modules/universe/types'

export const getPlanetsWithMoons = async (): Promise<PlanetWithMoons[]> => {
  const planetsById: { [key: number]: PlanetWithMoons } = {}

  for (const planet of planets) {
    planetsById[planet.id] = { ...planet, moons: [] }
  }

  for (const moon of moons) {
    const planet = planetsById[moon.planetId]

    if (planet) {
      planet.moons.push(moon)
    } else {
      console.warn(`Unable to find the planet by ID: ${moon.planetId}`)
    }
  }

  return Object.values(planetsById)
}
