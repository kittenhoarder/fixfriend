import { DEALS } from '../../content/raidical/acquirers'

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
                <div className="font-mono text-xs text-center">
                  <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{deal.acquirer}</div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>↓</div>
                  <div className="mt-0.5" style={{ color: 'var(--text-secondary)' }}>{deal.target}</div>
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
          <span>May 2025</span>
          <span>Feb 2026</span>
        </div>

        <div className="relative" style={{ height: '92px' }}>
          <div
            className="absolute left-0 right-0"
            style={{
              top: '16px',
              height: '1px',
              backgroundColor: 'var(--border-subtle)',
            }}
          />

          {SORTED_DEALS.map((deal, i) => {
            const pct = getPosition(i)
            const isActive = activeDealId === deal.id
            const statusType = getStatusType(deal)
            const dotColor = getDotColor(statusType)
            const isFloor2 = i % 2 === 0
            const FLOOR1_TOP = 28
            const FLOOR2_TOP = 62
            const STEM_HEIGHT = FLOOR2_TOP - FLOOR1_TOP - 4

            return (
              <div
                key={deal.id}
                className="absolute flex flex-col items-center text-center"
                style={{
                  left: `${pct}%`,
                  top: 0,
                  transform: 'translateX(-50%)',
                  width: 'max-content',
                  maxWidth: '120px',
                  minHeight: '92px',
                }}
              >
                <button
                  type="button"
                  onClick={() => onDealClick(deal.id)}
                  className="rounded-full focus:outline-none flex-shrink-0"
                  style={{
                    width: isActive ? 20 : 16,
                    height: isActive ? 20 : 16,
                    marginTop: isActive ? 4 : 8,
                    backgroundColor: dotColor,
                    boxShadow: isActive
                      ? `0 0 0 4px ${dotColor}30, 0 0 12px ${dotColor}40`
                      : `0 0 6px ${dotColor}50`,
                    transition: 'all 0.15s',
                    animation: `fade-in-up 0.35s ease-out ${i * 80}ms forwards`,
                    opacity: 0,
                  }}
                  title={`${deal.acquirer} ↓ ${deal.target}`}
                />
                {isFloor2 ? (
                  <>
                    <div
                      className="w-px flex-shrink-0"
                      style={{
                        height: `${STEM_HEIGHT}px`,
                        backgroundColor: isActive ? dotColor : 'var(--border-subtle)',
                        transition: 'background-color 0.15s',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => onDealClick(deal.id)}
                      className="font-mono text-center w-full focus:outline-none absolute left-1/2 flex flex-col items-center"
                      style={{
                        top: `${FLOOR2_TOP}px`,
                        transform: 'translateX(-50%)',
                        color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
                        transition: 'color 0.15s',
                        fontSize: '0.65rem',
                        lineHeight: 1.25,
                      }}
                    >
                      <span style={{ color: isActive ? dotColor : 'var(--text-secondary)' }}>{deal.acquirer}</span>
                      <span style={{ color: 'var(--text-tertiary)', fontSize: '0.5rem' }}>↓</span>
                      <span>{deal.target}</span>
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => onDealClick(deal.id)}
                    className="font-mono text-center w-full focus:outline-none absolute left-1/2 flex flex-col items-center"
                    style={{
                      top: `${FLOOR1_TOP}px`,
                      transform: 'translateX(-50%)',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
                      transition: 'color 0.15s',
                      fontSize: '0.65rem',
                      lineHeight: 1.25,
                    }}
                  >
                    <span style={{ color: isActive ? dotColor : 'var(--text-secondary)' }}>{deal.acquirer}</span>
                    <span style={{ color: 'var(--text-tertiary)', fontSize: '0.5rem' }}>↓</span>
                    <span>{deal.target}</span>
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
