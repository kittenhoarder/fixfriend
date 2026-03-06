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

export default function Sidebar({ activeTab, onTabChange, onAboutOpen, theme, onThemeToggle }) {
  return (
    <>
      {/* Desktop sidebar — fixed left, full height */}
      <aside
        className="hidden lg:flex flex-col flex-shrink-0 h-screen border-r"
        style={{
          width: '220px',
          backgroundColor: 'var(--surface3)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Wordmark */}
        <div
          className="flex items-center px-5 py-5 border-b"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div>
            <span
              className="font-mono font-bold tracking-widest text-base"
              style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}
            >
              FIX
            </span>
            <span
              className="font-mono font-bold tracking-widest text-base"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.15em' }}
            >
              FRIEND
            </span>
            <div
              className="font-mono text-xs mt-0.5"
              style={{ color: 'var(--muted)', letterSpacing: '0.06em' }}
            >
              LEAN EXIT
            </div>
          </div>
        </div>

        {/* Nav tabs */}
        <nav className="flex-1 py-4 space-y-1">
          {NAV_TABS.map((tab) => {
            const IconComponent = ICON_MAP[tab.icon]
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150 hover:bg-[var(--surface2)] hover:text-[var(--text-secondary)]"
                style={{
                  borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                  backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
                }}
              >
                <IconComponent
                  size={15}
                  style={{ color: isActive ? 'var(--accent)' : 'inherit', flexShrink: 0 }}
                />
                <span
                  className="font-mono text-xs font-medium tracking-widest"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {tab.label}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Theme toggle + About at bottom */}
        <div className="py-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          <button
            onClick={onThemeToggle}
            className="w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150 hover:bg-[var(--surface2)] hover:text-[var(--text-secondary)]"
            style={{
              borderLeft: '3px solid transparent',
              color: 'var(--text-tertiary)',
            }}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={15} style={{ flexShrink: 0 }} /> : <Moon size={15} style={{ flexShrink: 0 }} />}
            <span
              className="font-mono text-xs font-medium tracking-widest"
              style={{ letterSpacing: '0.12em' }}
            >
              {theme === 'dark' ? 'LIGHT' : 'DARK'}
            </span>
          </button>
          <button
            onClick={onAboutOpen}
            className="w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150 hover:bg-[var(--surface2)] hover:text-[var(--text-secondary)]"
            style={{
              borderLeft: '3px solid transparent',
              color: 'var(--text-tertiary)',
            }}
          >
            <User size={15} style={{ color: 'inherit', flexShrink: 0 }} />
            <span
              className="font-mono text-xs font-medium tracking-widest"
              style={{ letterSpacing: '0.12em' }}
            >
              ABOUT
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile/tablet compact top nav */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center border-b"
        style={{
          backgroundColor: 'var(--surface3)',
          borderColor: 'var(--border-subtle)',
          minHeight: '56px',
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2 w-full">
          <div className="flex items-center pr-2 border-r" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="font-mono font-bold text-sm" style={{ color: 'var(--accent)' }}>
              FIX
            </span>
            <span className="font-mono font-bold text-sm" style={{ color: 'var(--text-secondary)' }}>
              FRIEND
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <label htmlFor="mobile-section-select" className="sr-only">
              Select section
            </label>
            <select
              id="mobile-section-select"
              value={activeTab}
              onChange={(e) => onTabChange(e.target.value)}
              className="w-full font-mono text-xs px-2.5 py-1.5 rounded border outline-none"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
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
            className="p-2 rounded border transition-colors"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
            }}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            onClick={onAboutOpen}
            className="p-2 rounded border transition-colors"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
            }}
            title="About"
          >
            <User size={14} />
          </button>
        </div>
      </div>
    </>
  )
}
