import { Suspense, lazy } from 'react'
import SectionLoadingState from './SectionLoadingState'

const LeanExitDownloads = lazy(() => import('../../components/LeanExitDownloads.jsx'))

export default function LazyLeanExitDownloads() {
  return (
    <Suspense fallback={<SectionLoadingState label="Loading downloads…" className="min-h-[10rem]" />}>
      <LeanExitDownloads />
    </Suspense>
  )
}
