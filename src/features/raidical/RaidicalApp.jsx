import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { INVESTOR_STORY } from '../../content/raidical/overview'
import { raidicalPortalConfig } from './registry'
import { useSectionTransition } from '../../shared/navigation/useSectionTransition'
import PortalSectionRenderer from '../../shared/portal/PortalSectionRenderer'
import { toggleTheme, useTheme } from '../../shared/theme/useTheme'

const InvestorStoryOverlay = lazy(() => import('../../components/InvestorStoryOverlay.jsx'))

export default function RaidicalApp({ onSwitchPortal }) {
  const [theme, setTheme] = useTheme()
  const [pendingAnchor, setPendingAnchor] = useState(null)
  const [investorStoryOpen, setInvestorStoryOpen] = useState(false)
  const [investorStoryIndex, setInvestorStoryIndex] = useState(0)
  const {
    activeSectionId,
    visibleSectionId,
    transitionState,
    transitionRef,
    setActiveSectionId,
    handleTransitionEnd,
  } = useSectionTransition(raidicalPortalConfig.initialTab)

  const sectionsById = useMemo(
    () => Object.fromEntries(raidicalPortalConfig.sections.map((section) => [section.id, section])),
    [],
  )

  const visibleSection = sectionsById[visibleSectionId]

  useEffect(() => {
    document.body.style.overflow = investorStoryOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [investorStoryOpen])

  useEffect(() => {
    if (!pendingAnchor || visibleSectionId !== raidicalPortalConfig.initialTab || transitionState !== 'idle') {
      return
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(pendingAnchor)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setPendingAnchor(null)
    })
  }, [pendingAnchor, transitionState, visibleSectionId])

  useEffect(() => {
    if (!investorStoryOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setInvestorStoryOpen(false)
        return
      }

      if (event.key === 'ArrowRight') {
        setInvestorStoryIndex((current) => Math.min(current + 1, INVESTOR_STORY.slides.length - 1))
      }

      if (event.key === 'ArrowLeft') {
        setInvestorStoryIndex((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [investorStoryOpen])

  return (
    <div className="app-shell flex h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
      {investorStoryOpen ? (
        <Suspense fallback={null}>
          <InvestorStoryOverlay
            open={investorStoryOpen}
            story={INVESTOR_STORY}
            activeIndex={investorStoryIndex}
            theme={theme}
            onClose={() => {
              setInvestorStoryOpen(false)
              setInvestorStoryIndex(0)
            }}
            onNext={() => setInvestorStoryIndex((current) => Math.min(current + 1, INVESTOR_STORY.slides.length - 1))}
            onPrev={() => setInvestorStoryIndex((current) => Math.max(current - 1, 0))}
          />
        </Suspense>
      ) : null}

      <Sidebar
        tabs={raidicalPortalConfig.tabs}
        activeTab={activeSectionId}
        onTabChange={setActiveSectionId}
        onAboutNavigate={() => {
          setActiveSectionId(raidicalPortalConfig.initialTab)
          setPendingAnchor('about')
        }}
        theme={theme}
        onThemeToggle={() => setTheme((currentTheme) => toggleTheme(currentTheme))}
        onSwitchPortal={onSwitchPortal}
      />

      <main className="app-main-shell flex-1 overflow-y-auto overflow-x-hidden">
        <div
          ref={transitionRef}
          className={`section-transition h-full ${transitionState === 'exiting' ? 'section-transition--exit' : ''} ${transitionState === 'entering' ? 'section-transition--enter' : ''}`}
          onAnimationEnd={handleTransitionEnd}
        >
          <PortalSectionRenderer
            loader={visibleSection.load}
            fallbackLabel={`Loading ${visibleSection.label.toLowerCase()}…`}
            props={{
              onNavigate: setActiveSectionId,
              onOpenInvestorStory: () => {
                setInvestorStoryIndex(0)
                setInvestorStoryOpen(true)
              },
              theme,
            }}
          />
        </div>
      </main>
    </div>
  )
}
