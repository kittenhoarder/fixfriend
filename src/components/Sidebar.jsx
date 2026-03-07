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
              className="mt-1 h-10 w-10 border flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{
                borderColor: 'var(--accent-border-soft)',
                background:
                  'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(59,130,246,0.08))',
                color: 'var(--amber)',
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                style={{ minWidth: 32, minHeight: 32 }}
              >
                <path
                  fill="currentColor"
                  d="M175.656 22.375l-48.47 82.094c-23.017 4.384-43.547 11.782-60.124 22.374-24.436 15.613-40.572 37.414-45.5 67.875-4.79 29.62 1.568 68.087 24.125 116.093 93.162 22.88 184.08-10.908 257.25-18.813 37.138-4.012 71.196-.898 96.344 22.97 22.33 21.19 36.21 56.808 41.908 113.436 29.246-35.682 44.538-69.065 49.343-99.594 5.543-35.207-2.526-66.97-20.31-95.593-8.52-13.708-19.368-26.618-32-38.626l14.217-33-41.218 10.625c-8.637-6.278-17.765-12.217-27.314-17.782l-7.03-59.782-38.157 37.406c-12.418-5.186-25.184-9.804-38.158-13.812l-8.375-71.28-57.625 56.5c-9.344-1.316-18.625-2.333-27.812-2.97l-31.094-78.125zM222 325.345c-39.146 7.525-82.183 14.312-127.156 11.686 47.403 113.454 207.056 224.082 260.125 87-101.18 33.84-95.303-49.595-132.97-98.686z"
                />
              </svg>
            </div>
            <div>
              <div className="font-serif leading-none text-[1.7rem]" style={{ color: 'var(--text-primary)' }}>
                FIXFriend
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
                <span
                  className="min-w-0 font-mono font-medium tracking-[0.12em] text-sm"
                  style={{ color: isActive ? 'var(--text-primary)' : 'inherit' }}
                >
                  {tab.label}
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
          backgroundColor: 'var(--surface2)',
          borderColor: 'var(--border-subtle)',
          minHeight: '62px',
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2 w-full">
          <div className="flex items-center gap-2 pr-3 border-r" style={{ borderColor: 'var(--border-subtle)' }}>
            <div
              className="h-10 w-10 border flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{
                borderColor: 'var(--accent-border-soft)',
                background: 'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(59,130,246,0.08))',
                color: 'var(--amber)',
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                style={{ minWidth: 32, minHeight: 32 }}
              >
                <path
                  fill="currentColor"
                  d="M175.656 22.375l-48.47 82.094c-23.017 4.384-43.547 11.782-60.124 22.374-24.436 15.613-40.572 37.414-45.5 67.875-4.79 29.62 1.568 68.087 24.125 116.093 93.162 22.88 184.08-10.908 257.25-18.813 37.138-4.012 71.196-.898 96.344 22.97 22.33 21.19 36.21 56.808 41.908 113.436 29.246-35.682 44.538-69.065 49.343-99.594 5.543-35.207-2.526-66.97-20.31-95.593-8.52-13.708-19.368-26.618-32-38.626l14.217-33-41.218 10.625c-8.637-6.278-17.765-12.217-27.314-17.782l-7.03-59.782-38.157 37.406c-12.418-5.186-25.184-9.804-38.158-13.812l-8.375-71.28-57.625 56.5c-9.344-1.316-18.625-2.333-27.812-2.97l-31.094-78.125zM222 325.345c-39.146 7.525-82.183 14.312-127.156 11.686 47.403 113.454 207.056 224.082 260.125 87-101.18 33.84-95.303-49.595-132.97-98.686z"
                />
              </svg>
            </div>
            <div>
              <div className="font-serif text-lg leading-none" style={{ color: 'var(--text-primary)' }}>
                FIXFriend
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
