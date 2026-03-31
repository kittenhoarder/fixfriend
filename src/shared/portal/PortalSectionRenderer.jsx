import { Suspense, lazy, useMemo } from 'react'
import SectionLoadingState from '../ui/SectionLoadingState'

export default function PortalSectionRenderer({ loader, props = {}, fallbackLabel }) {
  const SectionComponent = useMemo(() => lazy(loader), [loader])

  return (
    <Suspense fallback={<SectionLoadingState label={fallbackLabel} />}>
      <SectionComponent {...props} />
    </Suspense>
  )
}
