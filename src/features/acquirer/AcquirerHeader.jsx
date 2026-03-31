import { ArrowLeft, Moon, Sun } from 'lucide-react'
import { toggleTheme } from '../../shared/theme/useTheme'

export default function AcquirerHeader({
  tabs,
  activeTab,
  onTabChange,
  theme,
  onThemeChange,
  onSwitchPortal,
}) {
  return (
    <header
      className="flex flex-shrink-0 items-center justify-between border-b px-4 py-3 sm:px-6"
      style={{
        backgroundColor: 'var(--surface3)',
        borderColor: 'var(--border-subtle)',
      }}
    >
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

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Acquirer portal sections">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                aria-pressed={isActive}
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

        <label htmlFor="acquirer-section-select" className="sr-only">
          Select acquirer portal section
        </label>
        <select
          id="acquirer-section-select"
          className="font-mono border px-2 py-1 text-[10px] outline-none sm:hidden"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-secondary)',
          }}
          value={activeTab}
          onChange={(event) => onTabChange(event.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onThemeChange(toggleTheme(theme))}
          className="flex h-8 w-8 items-center justify-center border transition-colors"
          style={{
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-secondary)',
            backgroundColor: 'var(--surface)',
          }}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark'
            ? <Sun size={13} strokeWidth={1.8} />
            : <Moon size={13} strokeWidth={1.8} />}
        </button>

        {onSwitchPortal ? (
          <button
            type="button"
            onClick={() => onSwitchPortal('raidical')}
            className="font-mono hidden items-center gap-1.5 border px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] transition-opacity hover:opacity-80 sm:flex"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-tertiary)',
              backgroundColor: 'var(--surface)',
            }}
            aria-label="Switch to Raidical portal"
          >
            <ArrowLeft size={10} strokeWidth={2} />
            Raidical
          </button>
        ) : null}
      </div>
    </header>
  )
}
