import { INTERVIEW_TRACKER } from '../../data/content'

function InterviewCard({ entry }) {
  const primaryQuote = entry.keyQuotes?.[0]
  const highSignals = Object.entries(entry.painRatings || {}).filter(([, rating]) => rating === 'High' || rating === 'Medium–High')
  const workflowStages = entry.workflowStages?.length ? entry.workflowStages : ['TBD']

  return (
    <article
      className="rounded-xl border p-4 md:p-5 lg:p-6"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
    >
      <div className="grid gap-5 lg:grid-cols-[280px,minmax(0,1fr)] lg:items-start">
        <div className="min-w-0">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
            {entry.company}
          </div>
          <h3 className="font-serif text-[1.35rem] leading-tight mt-2" style={{ color: 'var(--text-primary)' }}>
            {entry.name}
          </h3>
          <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
            {entry.role}
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--text-tertiary)' }}>
            {entry.userType}
          </p>
          <div className="grid gap-2 mt-4 text-xs" style={{ color: 'var(--text-tertiary)' }}>
            <div>
              <span className="font-mono uppercase tracking-[0.12em]">Channel:</span> {entry.channel || 'TBD'}
            </div>
            <div>
              <span className="font-mono uppercase tracking-[0.12em]">Date:</span> {entry.date || 'TBD'}
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {entry.status ? (
              <div
                className="inline-flex font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1 border rounded-sm"
                style={{
                  color: entry.status.toLowerCase().includes('yet') ? 'var(--amber)' : 'var(--status-success)',
                  borderColor: entry.status.toLowerCase().includes('yet') ? 'var(--amber-dim)' : 'var(--status-success-border)',
                  backgroundColor: entry.status.toLowerCase().includes('yet') ? 'rgba(245,158,11,0.06)' : 'var(--status-success-soft)',
                }}
              >
                {entry.status}
              </div>
            ) : (
              <div
                className="inline-flex font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1 border rounded-sm"
                style={{
                  color: 'var(--text-tertiary)',
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--surface3)',
                }}
              >
                Status TBD
              </div>
            )}
            <div
              className="inline-flex font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1 border rounded-sm"
              style={{
                color: 'var(--text-tertiary)',
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--surface3)',
              }}
            >
              {entry.buyerInfluence || 'Influence TBD'}
            </div>
          </div>

          <div className="mt-4">
            {primaryQuote ? (
              <blockquote
                className="text-sm leading-relaxed border-l pl-3"
                style={{ borderColor: 'var(--accent-border-soft)', color: 'var(--text-secondary)' }}
              >
                “{primaryQuote.text}”
              </blockquote>
            ) : (
              <div className="text-sm leading-relaxed border-l pl-3" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-tertiary)' }}>
                No primary quote captured yet.
              </div>
            )}
          </div>

          <div className="grid gap-4 mt-5 md:grid-cols-2">
            <div className="rounded-lg border p-3" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-tertiary)' }}>
                Workflow stages
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {workflowStages.map((stage) => (
                  <span
                    key={stage}
                    className="font-mono text-[10px] px-2 py-1 border rounded-sm uppercase tracking-[0.12em]"
                    style={{
                      color: 'var(--text-tertiary)',
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-3" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-tertiary)' }}>
                Strongest signals
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {highSignals.length > 0 ? (
                  highSignals.map(([signal, rating]) => (
                    <span
                      key={signal}
                      className="font-mono text-[10px] px-2 py-1 border rounded-sm"
                      style={{
                        color: 'var(--text-secondary)',
                        borderColor: 'var(--accent-border-soft)',
                        backgroundColor: 'var(--accent-softer)',
                      }}
                    >
                      {signal}: {rating}
                    </span>
                  ))
                ) : (
                  <span
                    className="font-mono text-[10px] px-2 py-1 border rounded-sm"
                    style={{
                      color: 'var(--text-tertiary)',
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    No signal ratings yet
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function parseInterviewDate(date) {
  const match = /^(\d{4})-(\d{2})$/.exec(date || '')
  if (!match) return null
  const year = Number(match[1])
  const month = Number(match[2])
  return year * 100 + month
}

export default function InterviewsPanel() {
  const sortedInterviews = [...INTERVIEW_TRACKER].sort((a, b) => {
    const aDate = parseInterviewDate(a.date)
    const bDate = parseInterviewDate(b.date)
    if (aDate === null && bDate === null) return 0
    if (aDate === null) return 1
    if (bDate === null) return -1
    return bDate - aDate
  })

  return (
    <div className="h-full overflow-y-auto p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
              MARKET SIGNALS
            </div>
            <h2 className="font-serif text-[2rem] leading-[0.95] mt-2" style={{ color: 'var(--text-primary)' }}>
              Interview evidence
            </h2>
            <p className="text-sm leading-relaxed mt-3 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              Direct conversations with vendors, traders, workflow owners, and one scheduled asset-manager lead. This view
              is the fastest way to see how the same venue-change pain shows up across the buy-side and sell-side in
              different words but the same workflow.
            </p>
          </div>
          <div className="font-mono text-xs px-3 py-2 border rounded-sm" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
            {INTERVIEW_TRACKER.length} interviews
          </div>
        </div>

        <div className="space-y-4 mt-6">
          {sortedInterviews.map((entry) => (
            <InterviewCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  )
}
