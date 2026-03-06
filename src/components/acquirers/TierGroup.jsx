import { useState } from 'react'
import AcquirerCard from './AcquirerCard'

const TIER_COLORS = {
  green: 'var(--status-success)',
  blue: 'var(--accent)',
  indigo: 'var(--indigo)',
}

export default function TierGroup({ group }) {
  const [expandedId, setExpandedId] = useState(null)
  const accentColor = TIER_COLORS[group.tierColor] || 'var(--text-secondary)'

  function handleToggle(id) {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="mb-8">
      {/* Tier header */}
      <div
        className="flex items-center gap-3 mb-4 pb-3 border-b"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <div
          className="font-mono text-xs font-bold tracking-widest"
          style={{ color: accentColor, letterSpacing: '0.15em' }}
        >
          TIER {group.tier}
        </div>
        <div
          className="w-px h-3"
          style={{ backgroundColor: 'var(--border)' }}
        />
        <div
          className="font-mono text-xs tracking-wider font-semibold"
          style={{ color: 'var(--text-primary)', letterSpacing: '0.08em' }}
        >
          {group.tierLabel}
        </div>
        <div
          className="text-xs ml-1"
          style={{ color: 'var(--muted)' }}
        >
          — {group.tierSubtitle}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-3">
        {group.acquirers.map((acquirer) => (
          <AcquirerCard
            key={acquirer.id}
            acquirer={acquirer}
            tier={group.tier}
            isExpanded={expandedId === acquirer.id}
            onToggle={() => handleToggle(acquirer.id)}
          />
        ))}
      </div>
    </div>
  )
}
