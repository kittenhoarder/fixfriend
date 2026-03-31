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
import InvestorStoryOverlay from './components/InvestorStoryOverlay'
import { INVESTOR_STORY } from './data/content'

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
  const [investorStoryOpen, setInvestorStoryOpen] = useState(false)
  const [investorStoryIndex, setInvestorStoryIndex] = useState(0)
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
    document.body.style.overflow = investorStoryOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [investorStoryOpen])

  useEffect(() => {
    if (activeTab === visibleTab) return
    if (transitionState === 'idle') {
      setTransitionState('exiting')
    }
  }, [activeTab, visibleTab, transitionState])

  useEffect(() => {
    if (!pendingAnchor || visibleTab !== 'overview' || transitionState !== 'idle') return
    window.requestAnimationFrame(() => {
      const target = document.getElementById(pendingAnchor)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setPendingAnchor(null)
    })
  }, [pendingAnchor, visibleTab, transitionState])

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
          <ActiveSection
            onNavigate={(tab) => setActiveTab(tab)}
            onOpenInvestorStory={() => {
              setInvestorStoryIndex(0)
              setInvestorStoryOpen(true)
            }}
            theme={theme}
          />
        </div>
      </main>
    </div>
  )
}
