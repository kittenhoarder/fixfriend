import { DEALS } from '../../data/content'

const SORTED_DEALS = [...DEALS].sort((a, b) => a.dateSort.localeCompare(b.dateSort))
const N = SORTED_DEALS.length
const PADDING_PCT = 10

function getPosition(i) {
  if (N <= 1) return 50
  return PADDING_PCT + (i / (N - 1)) * (100 - 2 * PADDING_PCT)
}

function getStatusType(deal) {
  if (deal.status === 'In play') return 'warning'
  if (deal.status.toLowerCase().includes('closed')) return 'success'
  return 'info'
}

function getDotColor(statusType) {
  if (statusType === 'warning') return 'var(--status-warning)'
  if (statusType === 'success') return 'var(--status-success)'
  return 'var(--status-info)'
}

export default function Timeline({ activeDealId, onDealClick }) {
  return (
    <div className="w-full">
      <div className="md:hidden">
        <div className="font-mono text-xs mb-2" style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
          Tap a deal for details
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory">
          {SORTED_DEALS.map((deal) => {
            const isActive = activeDealId === deal.id
            const statusType = getStatusType(deal)
            const dotColor = getDotColor(statusType)
            return (
              <button
                key={deal.id}
                onClick={() => onDealClick(deal.id)}
                className="min-w-[230px] snap-start rounded-lg border p-3 text-left transition-all"
                style={{
                  borderColor: isActive ? dotColor : 'var(--border-subtle)',
                  backgroundColor: isActive ? 'var(--accent-softer)' : 'var(--surface)',
                }}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-xs"
                    style={{ color: dotColor }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }} />
                    {deal.status}
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                    {deal.date}
                  </span>
                </div>
                <div className="font-mono text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {deal.acquirer}
                </div>
                <div className="font-mono text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  → {deal.target}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="hidden md:block">
        <div
          className="font-mono text-xs mb-2"
          style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}
        >
          Click a dot for details
        </div>

        <div
          className="flex justify-between mb-1 font-mono text-xs"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span>Aug 2025</span>
          <span>Feb 2026</span>
        </div>

        <div className="relative" style={{ height: '48px' }}>
          <div
            className="absolute top-1/2 left-0 right-0"
            style={{
              height: '1px',
              backgroundColor: 'var(--border-subtle)',
              transform: 'translateY(-50%)',
            }}
          />

          {SORTED_DEALS.map((deal, i) => {
            const pct = getPosition(i)
            const isActive = activeDealId === deal.id
            const dotColor = getDotColor(getStatusType(deal))

            return (
              <div
                key={deal.id}
                className="absolute"
                style={{
                  left: `${pct}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <button
                  onClick={() => onDealClick(deal.id)}
                  className="timeline-dot relative flex items-center justify-center rounded-full focus:outline-none"
                  style={{
                    width: isActive ? '20px' : '16px',
                    height: isActive ? '20px' : '16px',
                    backgroundColor: dotColor,
                    boxShadow: isActive
                      ? `0 0 0 4px ${dotColor}30, 0 0 12px ${dotColor}40`
                      : `0 0 6px ${dotColor}50`,
                    transition: 'all 0.15s',
                    animation: `fade-in-up 0.35s ease-out ${i * 80}ms forwards`,
                    opacity: 0,
                  }}
                  title={`${deal.acquirer} → ${deal.target}`}
                />
              </div>
            )
          })}
        </div>

        <div className="relative mt-4" style={{ height: '56px' }}>
          {SORTED_DEALS.map((deal, i) => {
            const pct = getPosition(i)
            const isActive = activeDealId === deal.id
            const dotColor = getDotColor(getStatusType(deal))

            return (
              <button
                key={deal.id}
                onClick={() => onDealClick(deal.id)}
                className="absolute text-left"
                style={{
                  left: `${pct}%`,
                  top: '0',
                  transform: 'translateX(-50%)',
                  maxWidth: '120px',
                  whiteSpace: 'nowrap',
                }}
              >
                <div
                  className="font-mono font-semibold leading-tight"
                  style={{
                    color: isActive ? dotColor : 'var(--text-secondary)',
                    transition: 'color 0.15s',
                    fontSize: '0.65rem',
                  }}
                >
                  {deal.acquirer}
                </div>
                <div
                  className="font-mono leading-tight"
                  style={{
                    color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
                    transition: 'color 0.15s',
                    fontSize: '0.65rem',
                  }}
                >
                  → {deal.target}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
