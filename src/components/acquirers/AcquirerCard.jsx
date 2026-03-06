import { ChevronDown, ChevronUp } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'

const SPEED_CONFIG = {
  fast: { label: 'Fast', dotClass: 'dot-fast', color: 'var(--status-success)' },
  medium: { label: 'Medium', dotClass: 'dot-medium', color: 'var(--status-warning)' },
  slow: { label: 'Slow', dotClass: 'dot-slow', color: 'var(--text-secondary)' },
}

const TIER_CARD_CLASS = {
  1: 'tier-1-card',
  2: 'tier-2-card',
  3: 'tier-3-card',
}

const TIER_ACCENT = {
  1: 'var(--status-success)',
  2: 'var(--accent)',
  3: 'var(--indigo)',
}

function Field({ label, value, accent }) {
  return (
    <div className="mb-3">
      <div
        className="font-mono text-xs tracking-widest mb-1 uppercase"
        style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', fontSize: '10px' }}
      >
        {label}
      </div>
      <div
        className="text-sm leading-relaxed"
        style={{ color: accent ? 'var(--text-primary)' : 'var(--text-secondary)' }}
      >
        {value}
      </div>
    </div>
  )
}

export default function AcquirerCard({ acquirer, tier, isExpanded, onToggle }) {
  const speed = SPEED_CONFIG[acquirer.decisionSpeed]
  const accentColor = TIER_ACCENT[tier]
  const tierCardClass = TIER_CARD_CLASS[tier]

  return (
    <div
      className={`rounded-lg border cursor-pointer transition-all duration-200 ${tierCardClass}`}
      style={{
        backgroundColor: 'var(--surface)',
        overflow: 'hidden',
      }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onToggle()
        }
      }}
      aria-expanded={isExpanded}
      aria-label={`${acquirer.name} details`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div
            className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center mt-0.5"
            style={{
              backgroundColor: `${accentColor}14`,
              border: `1px solid ${accentColor}25`,
            }}
          >
            <BrandLogo logoKey={acquirer.logoKey} label={acquirer.name} size={22} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="font-mono font-semibold text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {acquirer.name}
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${speed.dotClass}`}
                />
                <span
                  className="font-mono text-xs"
                  style={{ color: speed.color }}
                >
                  {speed.label}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span
                className="font-mono text-xs"
                style={{ color: 'var(--text-secondary)' }}
              >
                {acquirer.ownership}
              </span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>·</span>
              <span
                className="font-mono text-xs"
                style={{ color: 'var(--text-secondary)' }}
              >
                {acquirer.revenue}
                {acquirer.revenueNote && (
                  <span style={{ color: 'var(--text-secondary)' }}> ({acquirer.revenueNote})</span>
                )}
              </span>
            </div>
            <div
              className="text-xs mt-1.5 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {acquirer.oneliner}
            </div>
            <div
              className="font-mono text-[10px] mt-2 flex items-center gap-1"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}
            >
              {isExpanded ? 'Click to collapse' : 'Click to expand'}
            </div>
          </div>

          <div
            className="flex-shrink-0 mt-1 transition-transform duration-200"
            style={{ color: 'var(--text-secondary)' }}
          >
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </div>
      </div>

      <div
        className="card-expand"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div>
          <div
            className="px-4 pb-4 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <Field label="What They Own" value={acquirer.owns} />
              <Field
                label="What They're Missing"
                value={acquirer.missing}
                accent
              />
              <Field label="Recent M&A" value={acquirer.recentMA} />
              <Field label="Decision Speed" value={`${speed.label} (${acquirer.decisionSpeed === 'fast' ? 'weeks to months' : acquirer.decisionSpeed === 'medium' ? 'months' : 'quarters'})`} />
            </div>
            <div
              className="mt-2 pt-3 border-t"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <div
                className="font-mono text-xs tracking-widest mb-2 uppercase"
                style={{ color: accentColor, letterSpacing: '0.1em', fontSize: '10px' }}
              >
                FIXFriend Fit
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
              >
                {acquirer.fit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
