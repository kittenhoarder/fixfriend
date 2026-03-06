import { useState } from 'react'
import Timeline from '../dealflow/Timeline'
import DealDetail from '../dealflow/DealDetail'
import { DEALS } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import BrandLogo from '../ui/BrandLogo'

const DEAL_MAP = Object.fromEntries(DEALS.map((d) => [d.id, d]))

export default function DealFlowSection() {
  const [activeDealId, setActiveDealId] = useState(null)

  function handleDealClick(id) {
    setActiveDealId((prev) => (prev === id ? null : id))
  }

  const activeDeal = activeDealId ? DEAL_MAP[activeDealId] : null

  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      <SectionHeader
        label="DEAL FLOW"
        hideOnMobile
        right={(
          <div className="ml-auto hidden md:flex items-center gap-4">
            {[
              { label: 'Closed', color: 'var(--status-success)' },
              { label: 'In play', color: 'var(--status-warning)' },
              { label: 'Expected', color: 'var(--status-info)' },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-mono text-xs" style={{ color: item.color }}>
                  {item.label}
                </span>
              </span>
            ))}
          </div>
        )}
      />

      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        <div className="mb-6">
          <h2
            className="font-mono font-bold text-base mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            5 Verified Deals — 12 Months
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Click a deal marker to see the detail and pattern evidence.
          </p>
        </div>

        <div
          className="rounded-lg border p-4 lg:p-6 mb-6"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
        >
          <Timeline
            activeDealId={activeDealId}
            onDealClick={handleDealClick}
          />
        </div>

        {activeDeal ? (
          <div className="mb-6">
            <DealDetail deal={activeDeal} />
          </div>
        ) : (
          <div
            className="rounded-lg border p-4 mb-6 text-center"
            style={{
              backgroundColor: 'var(--accent-softer)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <p
              className="font-mono text-xs"
              style={{ color: 'var(--text-secondary)' }}
            >
              Select a deal from the timeline above to explore the detail
            </p>
          </div>
        )}

        <div
          className="rounded-lg border p-5"
          style={{
            backgroundColor: 'var(--accent-softer)',
            borderColor: 'var(--accent-border-soft)',
          }}
        >
          <div
            className="font-mono text-xs font-bold tracking-widest mb-3"
            style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}
          >
            PATTERN
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            Private and PE-backed firms close in weeks to months. Public companies
            acquire, but decision cycles are longer.
          </p>
          <div
            className="border-t pt-4"
            style={{ borderColor: 'var(--accent-border-soft)' }}
          >
            <div
              className="font-mono text-xs tracking-widest mb-2"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em' }}
            >
              FIXFRIEND TIER 1 PRIVATE TARGETS
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'ion', label: 'ION' },
                { key: 'murex', label: 'Murex' },
                { key: 'six', label: 'SIX' },
                { key: 'tt', label: 'Trading Technologies' },
                { key: 'kaizen', label: 'Kaizen' },
              ].map((item) => (
                <span
                  key={item.label}
                  className="font-mono text-xs px-2 py-1 rounded-sm border inline-flex items-center gap-1.5"
                  style={{
                    color: 'var(--status-success)',
                    borderColor: 'var(--status-success-border)',
                    backgroundColor: 'var(--status-success-soft)',
                  }}
                >
                  <BrandLogo logoKey={item.key} label={item.label} size={14} />
                  {item.label}
                </span>
              ))}
            </div>
            <p
              className="text-xs mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              Decision-makers, not committees. →
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
