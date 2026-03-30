import {
  Briefcase,
  Home,
  Globe,
  BookOpen,
  Package,
  Crosshair,
  User,
  Sun,
  Moon,
  Target,
  LineChart,
  Settings,
  ArrowRight,
} from 'lucide-react'
import { NAV_TABS } from '../data/content'
import SynthAgentLogo from './ui/SynthAgentLogo'

const ICON_MAP = {
  Home,
  Briefcase,
  Globe,
  BookOpen,
  Package,
  Crosshair,
  Target,
  LineChart,
  Settings,
}

function NavButton({ isActive, children, ...props }) {
  return (
    <button
      className="group w-full flex items-center gap-2.5 px-4 py-2 text-left transition-all duration-200"
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

const buyerTabs = NAV_TABS.filter((t) => t.group === 'buyer')
const strategyTabs = NAV_TABS.filter((t) => t.group === 'strategy')

export default function Sidebar({ activeTab, onTabChange, onAboutOpen, theme, onThemeToggle, onSwitchPortal }) {
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
          <div className="eyebrow mb-1" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.12em', fontSize: '10px' }}>
            PRDCTV.WORK
          </div>
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 border flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{
                borderColor: 'var(--accent-border-soft)',
                background:
                  'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(59,130,246,0.08))',
                color: 'var(--amber)',
              }}
            >
              <SynthAgentLogo size={32} />
            </div>
            <div>
              <div className="font-serif leading-none text-[1.45rem]" style={{ color: 'var(--text-primary)' }}>
                SynthAgents
              </div>
              <div className="font-mono text-[9px] mt-0.5" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}>
                FIXFriend
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-3 overflow-y-auto">
          {buyerTabs.map((tab) => {
            const IconComponent = ICON_MAP[tab.icon]
            const isActive = activeTab === tab.id
            return (
              <NavButton key={tab.id} isActive={isActive} onClick={() => onTabChange(tab.id)}>
                <span
                  className="flex h-7 w-7 items-center justify-center border transition-all duration-200"
                  style={{
                    borderColor: isActive ? 'var(--accent-border-soft)' : 'var(--border-subtle)',
                    backgroundColor: isActive ? 'var(--accent-softer)' : 'transparent',
                    color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                    boxShadow: isActive ? 'inset 0 0 0 1px rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <IconComponent size={13} strokeWidth={1.8} />
                </span>
                <span
                  className="min-w-0 font-mono font-medium tracking-[0.1em] text-[11px]"
                  style={{ color: isActive ? 'var(--text-primary)' : 'inherit' }}
                >
                  {tab.label}
                </span>
              </NavButton>
            )
          })}

          <div
            className="mx-4 my-2 flex items-center gap-2"
            style={{ borderTop: '1px solid var(--border-subtle)' }}
          >
            <span
              className="pt-2 font-mono text-[9px] tracking-[0.18em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              STRATEGY & RESEARCH
            </span>
          </div>

          {strategyTabs.map((tab) => {
            const IconComponent = ICON_MAP[tab.icon]
            const isActive = activeTab === tab.id
            return (
              <NavButton key={tab.id} isActive={isActive} onClick={() => onTabChange(tab.id)}>
                <span
                  className="flex h-7 w-7 items-center justify-center border transition-all duration-200"
                  style={{
                    borderColor: isActive ? 'var(--accent-border-soft)' : 'var(--border-subtle)',
                    backgroundColor: isActive ? 'var(--accent-softer)' : 'transparent',
                    color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                    boxShadow: isActive ? 'inset 0 0 0 1px rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <IconComponent size={13} strokeWidth={1.8} />
                </span>
                <span
                  className="min-w-0 font-mono font-medium tracking-[0.1em] text-[11px]"
                  style={{ color: isActive ? 'var(--text-primary)' : 'inherit' }}
                >
                  {tab.label}
                </span>
              </NavButton>
            )
          })}
        </nav>

        <div className="py-2.5 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          {onSwitchPortal ? (
            <NavButton isActive={false} onClick={() => onSwitchPortal('acquirer')}>
              <span
                className="flex h-7 w-7 items-center justify-center border"
                style={{
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-softer)',
                }}
              >
                <ArrowRight size={13} strokeWidth={1.8} />
              </span>
              <span className="font-mono text-[10px] font-medium tracking-[0.18em]" style={{ color: 'var(--accent)' }}>
                ACQUIRER PORTAL
              </span>
            </NavButton>
          ) : null}
          <NavButton isActive={false} onClick={onAboutOpen}>
            <span
              className="flex h-7 w-7 items-center justify-center border"
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--surface)',
              }}
            >
              <User size={13} strokeWidth={1.8} />
            </span>
            <span className="font-mono text-[10px] font-medium tracking-[0.18em]">ABOUT</span>
          </NavButton>
          <NavButton
            isActive={false}
            onClick={onThemeToggle}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span
              className="flex h-7 w-7 items-center justify-center border"
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--surface)',
              }}
            >
              {theme === 'dark' ? <Sun size={13} strokeWidth={1.8} /> : <Moon size={13} strokeWidth={1.8} />}
            </span>
            <span className="font-mono text-[10px] font-medium tracking-[0.18em]">
              {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
            </span>
          </NavButton>
        </div>
      </aside>

      {/* Mobile header */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center border-b backdrop-blur-md"
        style={{
          backgroundColor: 'var(--surface2)',
          borderColor: 'var(--border-subtle)',
          minHeight: '56px',
        }}
      >
        <div className="flex items-center gap-2 px-2.5 py-1.5 w-full">
          <div className="flex items-center gap-2 pr-2.5 border-r" style={{ borderColor: 'var(--border-subtle)' }}>
            <div
              className="h-9 w-9 border flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{
                borderColor: 'var(--accent-border-soft)',
                background: 'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(59,130,246,0.08))',
                color: 'var(--amber)',
              }}
            >
              <SynthAgentLogo size={28} />
            </div>
            <div>
              <div className="font-serif text-base leading-none" style={{ color: 'var(--text-primary)' }}>
                SynthAgents
              </div>
              <div className="font-mono text-[8px] mt-0.5" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.08em' }}>
                PRDCTV.WORK
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
              className="w-full font-mono text-[10px] px-2.5 py-1.5 border outline-none"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
                letterSpacing: '0.1em',
              }}
            >
              <optgroup label="PRODUCT">
                {buyerTabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </optgroup>
              <optgroup label="STRATEGY & RESEARCH">
                {strategyTabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <button
            onClick={onThemeToggle}
            className="flex h-9 w-9 items-center justify-center border transition-colors"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
            }}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={13} strokeWidth={1.8} /> : <Moon size={13} strokeWidth={1.8} />}
          </button>

          <button
            onClick={onAboutOpen}
            className="flex h-9 w-9 items-center justify-center border transition-colors"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
            }}
            title="About"
          >
            <User size={13} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </>
  )
}
