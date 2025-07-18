'use client'

import { ErrorState } from '@/components/error-state'

const UniverseError = () => (
  <ErrorState title="Error loading Universe" description="Universe was not able to load :( Please try again!" />
)

export default UniverseError
