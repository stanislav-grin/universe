export interface PlanetItem {
  id: number
  title: string
}

export interface MoonItem {
  id: number
  title: string
  planetId: number
}

export interface PlanetWithMoons extends PlanetItem {
  moons: MoonItem[]
}

export type SelectedMoonsByPlanet = Record<number, Set<number>>
