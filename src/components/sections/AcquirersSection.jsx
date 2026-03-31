import TierGroup from '../acquirers/TierGroup'
import { ACQUIRERS, ACQUIRER_PAGE_OVERVIEW, INTERVIEW_TRACKER } from '../../content/raidical/acquirers'
import SectionHeader from '../ui/SectionHeader'

export default function AcquirersSection() {
  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      <SectionHeader
        label="ACQUIRERS"
        hideOnMobile
        compact
        right={(
          <div className="ml-auto hidden md:flex items-center gap-4">
            {[
              { label: 'Fast', dotClass: 'dot-fast', color: 'var(--status-success)' },
              { label: 'Medium', dotClass: 'dot-medium', color: 'var(--status-warning)' },
              { label: 'Slow', dotClass: 'dot-slow', color: 'var(--text-secondary)' },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span className={`inline-block w-2 h-2 rounded-full ${item.dotClass}`} />
                <span
                  className="font-mono text-xs"
                  style={{ color: item.color }}
                >
                  {item.label}
                </span>
              </span>
            ))}
            <span
              className="font-mono text-xs ml-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Tier 1–2 deep research with deal proof
            </span>
          </div>
        )}
      />

      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        <div className="content-rail space-y-6">
          <div className="panel-shell rounded-xl p-5 md:p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
              Acquirer landscape
            </div>
            <h2 className="font-serif text-[2rem] leading-[0.95] mt-2" style={{ color: 'var(--text-primary)' }}>
              {ACQUIRER_PAGE_OVERVIEW.title}
            </h2>
            <p className="text-sm leading-relaxed mt-4 max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
              {ACQUIRER_PAGE_OVERVIEW.summary}
            </p>

            <div className="space-y-3 mt-5">
              {ACQUIRER_PAGE_OVERVIEW.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border p-4"
                  style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                >
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mt-5" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                Current market flow
              </div>
              <div className="space-y-2 mt-3">
                {ACQUIRER_PAGE_OVERVIEW.marketFlow.map((item) => (
                  <div key={item} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 mt-5" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                Operator voices
              </div>
              <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                Interviews with vendors, traders, and workflow owners (Bloomberg/Broadway, NASDAQ, Broadridge, and
                Squarepoint) back up the acquirer thesis: the same venue-change workflow gap shows up in day-to-day
                operations, and it points to a broader change-response problem that acquirers can see at portfolio and
                platform level.
              </p>
              <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {INTERVIEW_TRACKER.map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-lg border p-3"
                    style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-primary)' }}>
                      {entry.company}
                    </div>
                    <div className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {entry.role}
                    </div>
                    <div className="text-xs mt-2" style={{ color: 'var(--text-tertiary)' }}>
                      User type: {entry.userType}
                    </div>
                    {entry.keyQuotes?.[0]?.text ? (
                      <div className="text-xs leading-relaxed mt-3" style={{ color: 'var(--text-tertiary)' }}>
                        “{entry.keyQuotes[0].text}”
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {ACQUIRERS.map((group) => (
            <TierGroup key={group.tier} group={group} />
          ))}
        </div>
      </div>
    </div>
  )
}
