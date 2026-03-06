import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ThesisSection from './components/sections/ThesisSection'
import MarketSection from './components/sections/MarketSection'
import DefinitionSection from './components/sections/DefinitionSection'
import GapSection from './components/sections/GapSection'
import ProductSection from './components/sections/ProductSection'
import AcquirersSection from './components/sections/AcquirersSection'
import DealFlowSection from './components/sections/DealFlowSection'
import AboutModal from './components/AboutModal'

const THEME_STORAGE_KEY = 'fixfriend-theme'

const SECTIONS = {
  thesis: ThesisSection,
  market: MarketSection,
  definition: DefinitionSection,
  gap: GapSection,
  product: ProductSection,
  acquirers: AcquirersSection,
  dealflow: DealFlowSection,
}

export default function App() {
  const [activeTab, setActiveTab] = useState('thesis')
  const [aboutOpen, setAboutOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return (window.localStorage.getItem(THEME_STORAGE_KEY) || 'dark')
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const ActiveSection = SECTIONS[activeTab]

  return (
    <div className="flex h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Sidebar
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onAboutOpen={() => setAboutOpen(true)}
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />

      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <div key={activeTab} className="animate-fade-in-section h-full">
          <ActiveSection onNavigate={(tab) => setActiveTab(tab)} theme={theme} />
        </div>
      </main>

      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
    </div>
  )
}
