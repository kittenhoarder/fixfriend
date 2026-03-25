import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { LANDSCAPE } from '../content'

function AcquirerCard({ acquirer }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="border transition-colors"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--surface)',
      }}
    >
      {/* Card header — always visible */}
      <button
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <div className="min-w-0">
          <div
            className="font-mono text-sm font-medium tracking-[0.06em]"
            style={{ color: 'var(--text-primary)' }}
          >
            {acquirer.name}
          </div>
          <div
            className="font-mono mt-0.5 text-[11px] uppercase tracking-[0.12em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {acquirer.category}
          </div>
        </div>
        <span style={{ color: 'var(--text-tertiary)', flexShrink: 0, marginTop: 2 }}>
          {expanded
            ? <ChevronDown size={14} strokeWidth={1.8} />
            : <ChevronRight size={14} strokeWidth={1.8} />}
        </span>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div
          className="border-t px-5 pb-5 pt-4 space-y-4"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div>
            <div
              className="font-mono mb-1 text-[11px] uppercase tracking-[0.14em]"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Strategic fit rationale
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {acquirer.fitRationale}
            </p>
          </div>
          <div>
            <div
              className="font-mono mb-1 text-[11px] uppercase tracking-[0.14em]"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Combined entity value
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {acquirer.combinedValue}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

function TierGroup({ tier }) {
  return (
    <div className="mb-8">
      {/* Tier header */}
      <div className="mb-4 flex items-center gap-3">
        <span
          className="font-mono flex h-6 w-6 items-center justify-center border text-[10px] font-bold"
          style={{
            borderColor: 'var(--accent-border-soft)',
            backgroundColor: 'var(--accent-softer)',
            color: 'var(--accent)',
          }}
        >
          {tier.tier}
        </span>
        <div>
          <div
            className="font-mono text-xs font-medium uppercase tracking-[0.14em]"
            style={{ color: 'var(--text-primary)' }}
          >
            {tier.label}
          </div>
          <div
            className="font-mono text-[11px] tracking-[0.08em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {tier.description}
          </div>
        </div>
      </div>

      {/* Acquirer cards */}
      <div className="space-y-2 pl-9">
        {tier.acquirers.map((acquirer, i) => (
          <AcquirerCard key={i} acquirer={acquirer} />
        ))}
      </div>
    </div>
  )
}

export default function AcqLandscapeSection() {
  return (
    <section className="px-8 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <div
            className="font-mono mb-3 text-[11px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {LANDSCAPE.eyebrow}
          </div>
          <h2
            className="font-serif mb-4 text-3xl leading-tight lg:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Strategic acquirer map
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)', maxWidth: '580px' }}
          >
            {LANDSCAPE.intro}
          </p>
        </div>

        {/* Tier groups */}
        {LANDSCAPE.tiers.map((tier) => (
          <TierGroup key={tier.tier} tier={tier} />
        ))}
      </div>
    </section>
  )
}
