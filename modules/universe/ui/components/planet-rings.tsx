const BASE_SCALE = 1.15
const STEP = 0.15

export const PlanetRings = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          role="presentation"
          aria-hidden
          className="absolute inset-0 rounded-full border-1 border-orange-300"
          style={{ transform: `scale(${BASE_SCALE + STEP * i})` }}
        />
      ))}
    </>
  )
}
