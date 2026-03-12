import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import ThesisSection from './components/sections/ThesisSection'
import LeanExitSection from './components/sections/LeanExitSection'
import MarketSection from './components/sections/MarketSection'
import DefinitionSection from './components/sections/DefinitionSection'
import ProductSection from './components/sections/ProductSection'
import AcquirersSection from './components/sections/AcquirersSection'
import AboutModal from './components/AboutModal'

const THEME_STORAGE_KEY = 'fixfriend-theme'

const SECTIONS = {
  thesis: ThesisSection,
  leanExit: LeanExitSection,
  market: MarketSection,
  definition: DefinitionSection,
  product: ProductSection,
  acquirers: AcquirersSection,
}

export default function App() {
  const [activeTab, setActiveTab] = useState('thesis')
  const [visibleTab, setVisibleTab] = useState('thesis')
  const [transitionState, setTransitionState] = useState('idle') // 'idle' | 'exiting' | 'entering'
  const [aboutOpen, setAboutOpen] = useState(false)
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
        onAboutOpen={() => setAboutOpen(true)}
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
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

      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
    </div>
  )
}
