// Lazy load heavy components
import { lazy, Suspense } from 'react'

// Lazy load ParticleBackground (only needed on desktop)
export const ParticleBackground = lazy(() => import('./ParticleBackground'))

// Loading fallback
export const LazyParticleBackground = () => (
    <Suspense fallback={<div />}>
        <ParticleBackground />
    </Suspense>
)
