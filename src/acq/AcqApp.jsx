import { useState, useEffect, useRef } from 'react'
import { Sun, Moon, ArrowLeft } from 'lucide-react'
import { ACQ_NAV_TABS } from './content'
import AcqHeroSection from './sections/AcqHeroSection'
import AcqSuiteSection from './sections/AcqSuiteSection'
import AcqThesisSection from './sections/AcqThesisSection'
import AcqProductsSection from './sections/AcqProductsSection'
import AcqFinancialsSection from './sections/AcqFinancialsSection'
import AcqLandscapeSection from './sections/AcqLandscapeSection'

const THEME_STORAGE_KEY = 'fixfriend-theme'

const SECTIONS = {
  hero: AcqHeroSection,
  suite: AcqSuiteSection,
  thesis: AcqThesisSection,
  products: AcqProductsSection,
  financials: AcqFinancialsSection,
  landscape: AcqLandscapeSection,
}

export default function AcqApp({ onSwitchPortal }) {
  const [activeTab, setActiveTab] = useState('hero')
  const [visibleTab, setVisibleTab] = useState('hero')
  const [transitionState, setTransitionState] = useState('idle')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem(THEME_STORAGE_KEY) || 'dark'
  })
  const transitionRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    if (activeTab === visibleTab) return
    if (transitionState === 'idle') setTransitionState('exiting')
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

  const navigate = (tab) => setActiveTab(tab)

  const ActiveSection = SECTIONS[visibleTab] || AcqHeroSection

  return (
    <div
      className="flex h-screen w-full flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* Top navigation bar */}
      <header
        className="flex flex-shrink-0 items-center justify-between border-b px-6 py-3"
        style={{
          backgroundColor: 'var(--surface3)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Left: branding */}
        <div className="flex items-center gap-4">
          <div>
            <div
              className="font-mono text-[8px] uppercase tracking-[0.18em]"
              style={{ color: 'var(--text-tertiary)' }}
            >
              PRDCTV.WORK
            </div>
            <div
              className="font-serif text-base leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              FIXFriend
            </div>
          </div>

          <div
            className="hidden h-5 border-l sm:block"
            style={{ borderColor: 'var(--border-subtle)' }}
          />

          {/* Tab navigation */}
          <nav className="hidden items-center gap-1 sm:flex">
            {ACQ_NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="font-mono px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition-colors"
                  style={{
                    color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                    backgroundColor: isActive ? 'var(--accent-softer)' : 'transparent',
                    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </nav>

          {/* Mobile select */}
          <select
            className="sm:hidden font-mono border px-2 py-1 text-[10px] outline-none"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {ACQ_NAV_TABS.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        {/* Right: controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="flex h-8 w-8 items-center justify-center border transition-colors"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
            }}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark'
              ? <Sun size={13} strokeWidth={1.8} />
              : <Moon size={13} strokeWidth={1.8} />}
          </button>

          {/* Switch portal button */}
          {onSwitchPortal && (
            <button
              onClick={() => onSwitchPortal('raidical')}
              className="font-mono hidden items-center gap-1.5 border px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] transition-opacity hover:opacity-80 sm:flex"
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-tertiary)',
                backgroundColor: 'var(--surface)',
              }}
            >
              <ArrowLeft size={10} strokeWidth={2} />
              Raidical
            </button>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <div
          ref={transitionRef}
          className={`section-transition h-full ${transitionState === 'exiting' ? 'section-transition--exit' : ''} ${transitionState === 'entering' ? 'section-transition--enter' : ''}`}
          onAnimationEnd={handleTransitionEnd}
        >
          <ActiveSection onNavigate={navigate} theme={theme} />
        </div>
      </main>
    </div>
  )
}
