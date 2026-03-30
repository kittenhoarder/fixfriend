import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import OverviewSection from './components/sections/OverviewSection'
import LeanExitSection from './components/sections/LeanExitSection'
import MarketSection from './components/sections/MarketSection'
import DefinitionSection from './components/sections/DefinitionSection'
import ProductSection from './components/sections/ProductSection'
import AcquirersSection from './components/sections/AcquirersSection'
import FinancialSection from './components/sections/FinancialSection'
import FunnelSection from './components/sections/FunnelSection'
import OperationsSection from './components/sections/OperationsSection'

const THEME_STORAGE_KEY = 'fixfriend-theme'

const SECTIONS = {
  overview: OverviewSection,
  product: ProductSection,
  sales: FunnelSection,
  financials: FinancialSection,
  operations: OperationsSection,
  market: MarketSection,
  leanExit: LeanExitSection,
  definition: DefinitionSection,
  acquirers: AcquirersSection,
}

export default function App({ onSwitchPortal }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [visibleTab, setVisibleTab] = useState('overview')
  const [transitionState, setTransitionState] = useState('idle') // 'idle' | 'exiting' | 'entering'
  const [pendingAnchor, setPendingAnchor] = useState(null)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return (window.localStorage.getItem(THEME_STORAGE_KEY) || 'dark')
  })
  const transitionRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    if (activeTab === visibleTab) return
    if (transitionState === 'idle') {
      setTransitionState('exiting')
    }
  }, [activeTab, visibleTab, transitionState])

  useEffect(() => {
    if (!pendingAnchor || visibleTab !== 'overview' || transitionState !== 'idle') return
    requestAnimationFrame(() => {
      const target = document.getElementById(pendingAnchor)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setPendingAnchor(null)
    })
  }, [pendingAnchor, visibleTab, transitionState])

  const handleTransitionEnd = (e) => {
    if (e.target !== transitionRef.current) return
    if (transitionState === 'exiting') {
      setVisibleTab(activeTab)
      setTransitionState('entering')
    } else if (transitionState === 'entering') {
      setTransitionState('idle')
    }
  }

  const ActiveSection = SECTIONS[visibleTab]

  return (
    <div className="app-shell flex h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Sidebar
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onAboutNavigate={() => {
          setActiveTab('overview')
          setPendingAnchor('about')
        }}
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onSwitchPortal={onSwitchPortal}
      />

      <main className="app-main-shell flex-1 overflow-y-auto overflow-x-hidden">
        <div
          ref={transitionRef}
          className={`section-transition h-full ${transitionState === 'exiting' ? 'section-transition--exit' : ''} ${transitionState === 'entering' ? 'section-transition--enter' : ''}`}
          onAnimationEnd={handleTransitionEnd}
        >
          <ActiveSection onNavigate={(tab) => setActiveTab(tab)} theme={theme} />
        </div>
      </main>
    </div>
  )
}
