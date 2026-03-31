import { useMemo } from 'react'
import AcquirerHeader from './AcquirerHeader'
import { acquirerPortalConfig } from './registry'
import { useSectionTransition } from '../../shared/navigation/useSectionTransition'
import PortalSectionRenderer from '../../shared/portal/PortalSectionRenderer'
import { useTheme } from '../../shared/theme/useTheme'

export default function AcquirerApp({ onSwitchPortal }) {
  const [theme, setTheme] = useTheme()
  const {
    activeSectionId,
    visibleSectionId,
    transitionState,
    transitionRef,
    setActiveSectionId,
    handleTransitionEnd,
  } = useSectionTransition(acquirerPortalConfig.initialTab)

  const sectionsById = useMemo(
    () => Object.fromEntries(acquirerPortalConfig.sections.map((section) => [section.id, section])),
    [],
  )

  const visibleSection = sectionsById[visibleSectionId]

  return (
    <div
      className="flex h-screen w-full flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <AcquirerHeader
        tabs={acquirerPortalConfig.tabs}
        activeTab={activeSectionId}
        onTabChange={setActiveSectionId}
        theme={theme}
        onThemeChange={setTheme}
        onSwitchPortal={onSwitchPortal}
      />

      <main className="flex-1 overflow-y-auto overflow-x-hidden">
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
              theme,
            }}
          />
        </div>
      </main>
    </div>
  )
}
