import {
  Home,
  Globe,
  BookOpen,
  AlertTriangle,
  Package,
  Crosshair,
  TrendingUp,
  User,
  Sun,
  Moon,
} from 'lucide-react'
import { NAV_TABS } from '../data/content'

const ICON_MAP = {
  Home,
  Globe,
  BookOpen,
  AlertTriangle,
  Package,
  Crosshair,
  TrendingUp,
}

function NavButton({ isActive, children, ...props }) {
  return (
    <button
      className="group w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-200"
      style={{
        borderLeft: isActive ? '2px solid var(--amber)' : '2px solid transparent',
        background: isActive
          ? 'linear-gradient(90deg, rgba(249,115,22,0.14), rgba(59,130,246,0.08) 72%, transparent)'
          : 'transparent',
        color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Sidebar({ activeTab, onTabChange, onAboutOpen, theme, onThemeToggle }) {
  return (
    <>
      <aside
        className="hidden lg:flex flex-col flex-shrink-0 h-screen border-r"
        style={{
          width: '236px',
          backgroundColor: 'var(--surface3)',
          borderColor: 'var(--border-subtle)',
          boxShadow: 'inset -1px 0 0 rgba(255,255,255,0.03)',
        }}
      >
        <div className="px-5 py-5 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="eyebrow mb-3" style={{ color: 'var(--text-tertiary)' }}>
            Investor Explorer
          </div>
          <div className="flex items-start gap-3">
            <div
              className="mt-1 h-10 w-10 border"
              style={{
                borderColor: 'var(--accent-border-soft)',
                background:
                  'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(59,130,246,0.08))',
              }}
            />
            <div>
              <div className="font-serif leading-none text-[1.7rem]" style={{ color: 'var(--text-primary)' }}>
                FixFriend
              </div>
              <div
                className="font-mono text-[11px] mt-2"
                style={{ color: 'var(--muted)', letterSpacing: '0.16em' }}
              >
                LEAN EXIT SYSTEM
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          {NAV_TABS.map((tab) => {
            const IconComponent = ICON_MAP[tab.icon]
            const isActive = activeTab === tab.id
            return (
              <NavButton key={tab.id} isActive={isActive} onClick={() => onTabChange(tab.id)}>
                <span
                  className="flex h-8 w-8 items-center justify-center border transition-all duration-200"
                  style={{
                    borderColor: isActive ? 'var(--accent-border-soft)' : 'var(--border-subtle)',
                    backgroundColor: isActive ? 'var(--accent-softer)' : 'transparent',
                    color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                    boxShadow: isActive ? 'inset 0 0 0 1px rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <IconComponent size={15} strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span
                    className="block font-mono text-[11px] font-medium tracking-[0.16em]"
                    style={{ color: isActive ? 'var(--text-primary)' : 'inherit' }}
                  >
                    {tab.label}
                  </span>
                  <span className="block text-[11px] mt-1" style={{ color: 'var(--muted)' }}>
                    Section {String(NAV_TABS.findIndex((item) => item.id === tab.id) + 1).padStart(2, '0')}
                  </span>
                </span>
              </NavButton>
            )
          })}
        </nav>

        <div className="py-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          <NavButton
            isActive={false}
            onClick={onThemeToggle}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span
              className="flex h-8 w-8 items-center justify-center border"
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--surface)',
              }}
            >
              {theme === 'dark' ? <Sun size={15} strokeWidth={1.8} /> : <Moon size={15} strokeWidth={1.8} />}
            </span>
            <span className="font-mono text-[11px] font-medium tracking-[0.16em]">
              {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
            </span>
          </NavButton>
          <NavButton isActive={false} onClick={onAboutOpen}>
            <span
              className="flex h-8 w-8 items-center justify-center border"
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--surface)',
              }}
            >
              <User size={15} strokeWidth={1.8} />
            </span>
            <span className="font-mono text-[11px] font-medium tracking-[0.16em]">ABOUT</span>
          </NavButton>
        </div>
      </aside>

      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center border-b backdrop-blur-md"
        style={{
          background: 'rgba(13,14,17,0.88)',
          borderColor: 'var(--border-subtle)',
          minHeight: '62px',
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2 w-full">
          <div className="flex items-center gap-2 pr-3 border-r" style={{ borderColor: 'var(--border-subtle)' }}>
            <div
              className="h-7 w-7 border"
              style={{
                borderColor: 'var(--accent-border-soft)',
                background: 'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(59,130,246,0.08))',
              }}
            />
            <div>
              <div className="font-serif text-lg leading-none" style={{ color: 'var(--text-primary)' }}>
                FixFriend
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <label htmlFor="mobile-section-select" className="sr-only">
              Select section
            </label>
            <select
              id="mobile-section-select"
              value={activeTab}
              onChange={(e) => onTabChange(e.target.value)}
              className="w-full font-mono text-[11px] px-3 py-2 border outline-none"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
                letterSpacing: '0.12em',
              }}
            >
              {NAV_TABS.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={onThemeToggle}
            className="flex h-10 w-10 items-center justify-center border transition-colors"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
            }}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={14} strokeWidth={1.8} /> : <Moon size={14} strokeWidth={1.8} />}
          </button>

          <button
            onClick={onAboutOpen}
            className="flex h-10 w-10 items-center justify-center border transition-colors"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
            }}
            title="About"
          >
            <User size={14} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </>
  )
}
