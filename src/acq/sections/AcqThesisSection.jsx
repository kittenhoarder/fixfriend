import { Scale, TrendingUp, Lock } from 'lucide-react'
import { THESIS } from '../../content/acquirer/thesis'

const ICON_MAP = { Scale, TrendingUp, Lock }

function ThesisPillar({ pillar }) {
  const Icon = ICON_MAP[pillar.icon] || Lock

  return (
    <div
      className="flex flex-col border p-6"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--surface)',
      }}
    >
      {/* Icon + label */}
      <div className="mb-5 flex items-center gap-3">
        <span
          className="flex h-9 w-9 items-center justify-center border"
          style={{
            borderColor: 'var(--accent-border-soft)',
            backgroundColor: 'var(--accent-softer)',
            color: 'var(--accent)',
          }}
        >
          <Icon size={16} strokeWidth={1.8} />
        </span>
        <span
          className="font-mono text-xs uppercase tracking-[0.16em]"
          style={{ color: 'var(--text-secondary)' }}
        >
          {pillar.label}
        </span>
      </div>

      {/* Stat / headline */}
      <p
        className="font-mono mb-4 text-sm leading-relaxed tracking-[0.04em]"
        style={{ color: 'var(--accent)' }}
      >
        {pillar.stat}
      </p>

      {/* Detail */}
      <p className="mt-auto text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {pillar.detail}
      </p>
    </div>
  )
}

export default function AcqThesisSection() {
  return (
    <section className="px-8 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <div
            className="font-mono mb-3 text-[11px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {THESIS.eyebrow}
          </div>
          <h2
            className="font-serif mb-4 text-3xl leading-tight lg:text-4xl"
            style={{ color: 'var(--text-primary)', maxWidth: '600px' }}
          >
            {THESIS.headline}
          </h2>
        </div>

        {/* Pillar grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {THESIS.pillars.map((pillar) => (
            <ThesisPillar key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  )
}
