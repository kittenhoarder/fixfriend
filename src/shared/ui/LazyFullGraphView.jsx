import { Suspense, lazy } from 'react'
import SectionLoadingState from './SectionLoadingState'

const FullGraphView = lazy(() => import('../../components/market/FullGraphView.jsx'))

export default function LazyFullGraphView(props) {
  return (
    <Suspense fallback={<SectionLoadingState label="Loading full graph…" className="min-h-[28rem]" />}>
      <FullGraphView {...props} />
    </Suspense>
  )
}
