import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'

const SPEED_CONFIG = {
  fast: { label: 'Fast', dotClass: 'dot-fast', color: 'var(--status-success)' },
  medium: { label: 'Medium', dotClass: 'dot-medium', color: 'var(--status-warning)' },
  slow: { label: 'Slow', dotClass: 'dot-slow', color: 'var(--text-secondary)' },
}

const CONFIDENCE_STYLE = {
  'Relationship-led': {
    color: 'var(--status-success)',
    borderColor: 'var(--status-success-border)',
    backgroundColor: 'var(--status-success-soft)',
  },
  'Publicly disclosed': {
    color: 'var(--accent)',
    borderColor: 'var(--accent-border-soft)',
    backgroundColor: 'var(--accent-softer)',
  },
  'Needs further diligence': {
    color: 'var(--status-warning)',
    borderColor: 'var(--status-warning-border)',
    backgroundColor: 'var(--status-warning-soft)',
  },
}

const TIER_CARD_CLASS = {
  1: 'tier-1-card',
  2: 'tier-2-card',
  3: 'tier-3-card',
  4: 'tier-3-card',
}

const TIER_ACCENT = {
  1: 'var(--status-success)',
  2: 'var(--accent)',
  3: 'var(--indigo)',
  4: 'var(--text-secondary)',
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
      <div className="text-sm leading-relaxed" style={{ color: accent ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
        {value}
      </div>
    </div>
  )
}

export default function AcquirerCard({ acquirer, tier, isExpanded, onToggle }) {
  const speed = SPEED_CONFIG[acquirer.decisionSpeed]
  const accentColor = TIER_ACCENT[tier]
  const tierCardClass = TIER_CARD_CLASS[tier]
  const confidenceStyle = CONFIDENCE_STYLE[acquirer.sourcingConfidence]
  const hasResearch = Boolean(
    acquirer.decisionMakers?.length
    && acquirer.recentDeals?.length
    && acquirer.sourceLinks?.length
  )

  return (
    <div
      className={`rounded-lg border cursor-pointer transition-all duration-200 ${tierCardClass}`}
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.025), transparent), var(--surface)',
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
            className="flex-shrink-0 w-8 h-8 border flex items-center justify-center mt-0.5"
            style={{
              backgroundColor: `${accentColor}14`,
              border: `1px solid ${accentColor}25`,
            }}
          >
            <BrandLogo logoKey={acquirer.logoKey} label={acquirer.name} size={22} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-serif text-[1.4rem] leading-none" style={{ color: 'var(--text-primary)' }}>
                {acquirer.name}
              </span>
              <span className="flex items-center gap-1.5">
                <span className={`inline-block w-2 h-2 rounded-full ${speed.dotClass}`} />
                <span className="font-mono text-xs" style={{ color: speed.color }}>
                  {speed.label}
                </span>
              </span>
              {confidenceStyle ? (
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1 border"
                  style={confidenceStyle}
                >
                  {acquirer.sourcingConfidence}
                </span>
              ) : null}
            </div>

            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                {acquirer.ownership}
              </span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>·</span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                {acquirer.revenue}
                {acquirer.revenueNote && <span style={{ color: 'var(--text-secondary)' }}> ({acquirer.revenueNote})</span>}
              </span>
            </div>

            <div className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {acquirer.oneliner}
            </div>

            <div className="font-mono text-[10px] mt-2 flex items-center gap-1" style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
              {isExpanded ? 'Click to collapse' : 'Click to expand'}
            </div>
          </div>

          <div className="flex-shrink-0 mt-1 transition-transform duration-200" style={{ color: 'var(--text-secondary)' }}>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </div>
      </div>

      <div className="card-expand" style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}>
        <div>
          <div className="px-4 pb-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <Field label="What They Own" value={acquirer.owns} />
              <Field label="What They Are Missing" value={acquirer.missing} accent />
            </div>

            <div className="border-t pt-4 mt-1" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-xs tracking-widest mb-2 uppercase" style={{ color: accentColor, letterSpacing: '0.1em', fontSize: '10px' }}>
                Strategic fit
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {acquirer.strategicFit || acquirer.fit}
              </p>
            </div>

            {acquirer.howTheyBuy ? (
              <div className="border-t pt-4 mt-4" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="font-mono text-xs tracking-widest mb-2 uppercase" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', fontSize: '10px' }}>
                  How they buy
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {acquirer.howTheyBuy}
                </p>
              </div>
            ) : null}

            {hasResearch ? (
              <>
                <div className="border-t pt-4 mt-4" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="font-mono text-xs tracking-widest mb-2 uppercase" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', fontSize: '10px' }}>
                    Recent strategic signals
                  </div>
                  <div className="space-y-3">
                    {acquirer.recentDeals.map((deal) => (
                      <div key={deal.label} className="rounded-lg border p-3" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                        <div className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-primary)' }}>
                          {deal.label}
                        </div>
                        <div className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                          {deal.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mt-4" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="font-mono text-xs tracking-widest mb-2 uppercase" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', fontSize: '10px' }}>
                    Named likely decision-makers
                  </div>
                  <div className="space-y-3">
                    {acquirer.decisionMakers.map((person) => (
                      <div key={person.name} className="rounded-lg border p-3" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                        <div className="text-sm" style={{ color: 'var(--text-primary)' }}>{person.name}</div>
                        <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{person.role}</div>
                        <div className="text-xs leading-relaxed mt-2" style={{ color: 'var(--text-tertiary)' }}>{person.note}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mt-4" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="font-mono text-xs tracking-widest mb-2 uppercase" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', fontSize: '10px' }}>
                    Source links
                  </div>
                  <div className="space-y-2">
                    {acquirer.sourceLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm underline underline-offset-4"
                        style={{ color: 'var(--accent)' }}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <ExternalLink size={13} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
