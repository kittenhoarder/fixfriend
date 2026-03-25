import { Zap, TrendingUp, ShieldCheck } from 'lucide-react'
import { OPERATIONS_MODEL } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'

const ICON_MAP = { Zap, TrendingUp, ShieldCheck }

const PILLAR_COLORS = [
  { border: 'var(--amber)', bg: 'rgba(249,115,22,0.06)', label: 'var(--amber)' },
  { border: 'var(--accent-border-soft)', bg: 'var(--accent-softer)', label: 'var(--accent)' },
  { border: 'var(--status-success)', bg: 'rgba(34,197,94,0.05)', label: 'var(--status-success)' },
]

export default function OperationsSection() {
  const { headline, subheadline, pillars } = OPERATIONS_MODEL

  return (
    <div className="flex flex-col h-full" style={{ paddingTop: '62px' }}>
      <SectionHeader label="OPERATIONS" />

      <div className="flex-1 overflow-y-auto">
        <div className="content-rail px-6 py-8 max-w-4xl mx-auto">

          {/* Headline */}
          <div className="mb-10">
            <h2 className="font-serif leading-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: 'var(--text-primary)' }}>
              {headline}
            </h2>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {subheadline}
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, i) => {
              const colors = PILLAR_COLORS[i]
              const IconComponent = ICON_MAP[pillar.icon]
              return (
                <article
                  key={pillar.title}
                  className="p-6 border"
                  style={{ borderColor: colors.border, backgroundColor: colors.bg }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    {IconComponent && (
                      <div
                        className="flex h-9 w-9 items-center justify-center border flex-shrink-0"
                        style={{ borderColor: colors.border, color: colors.label }}
                      >
                        <IconComponent size={16} strokeWidth={1.8} />
                      </div>
                    )}
                    <h3 className="font-mono text-sm font-medium tracking-wider" style={{ color: colors.label, letterSpacing: '0.1em' }}>
                      {pillar.title.toUpperCase()}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 border" style={{ borderColor: colors.label }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          {/* Tagline */}
          <div
            className="mt-10 p-5 border-l-2 border"
            style={{
              borderLeftColor: 'var(--amber)',
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface)',
            }}
          >
            <p className="font-mono text-[10px] tracking-widest mb-2" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              PRDCTV.WORK VISION
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Not generic AI tools. Not another layer of busywork. A set of focused systems for moments where clarity matters — where a dense situation needs to become an obvious next step. Each product is built around one of those moments.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
