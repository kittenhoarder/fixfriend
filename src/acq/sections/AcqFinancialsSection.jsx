import { FINANCIALS } from '../../content/acquirer/financials'

function MetricCard({ label, value, note }) {
  return (
    <div
      className="border p-5"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--surface)',
      }}
    >
      <div
        className="font-mono mb-2 text-[11px] uppercase tracking-[0.16em]"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {label}
      </div>
      <div
        className="font-serif mb-1 text-2xl leading-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {value}
      </div>
      {note && (
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {note}
        </p>
      )}
    </div>
  )
}

function CompDealRow({ deal, index }) {
  return (
    <div
      className="flex flex-wrap items-start gap-4 py-3"
      style={{
        borderTop: index > 0 ? '1px solid var(--border-subtle)' : 'none',
      }}
    >
      <div className="min-w-0 flex-1">
        <div className="font-mono text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
          {deal.name}
        </div>
        {deal.note && (
          <div className="mt-0.5 text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
            {deal.note}
          </div>
        )}
      </div>
      <div className="shrink-0 text-right">
        <div
          className="font-mono text-sm font-medium"
          style={{ color: 'var(--accent)' }}
        >
          {deal.multiple}
        </div>
        <div
          className="font-mono text-xs"
          style={{ color: 'var(--muted)' }}
        >
          {deal.year}
        </div>
      </div>
    </div>
  )
}

export default function AcqFinancialsSection() {
  return (
    <section className="px-8 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <div
            className="font-mono mb-3 text-[11px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {FINANCIALS.eyebrow}
          </div>
          <h2
            className="font-serif mb-4 text-3xl leading-tight lg:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Financial snapshot & exit thesis
          </h2>
        </div>

        {/* Metric cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Current ARR"
            value={FINANCIALS.currentArr}
          />
          <MetricCard
            label="12-month revenue (founder-led)"
            value={FINANCIALS.projectedArr.month12}
          />
          <MetricCard
            label="24-month ARR (acquirer distribution)"
            value={FINANCIALS.projectedArr.month24}
          />
          <MetricCard
            label="Exit multiple range"
            value={FINANCIALS.exitMultipleRange}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Comparable deals */}
          <div
            className="border p-6"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface)',
            }}
          >
            <div
              className="font-mono mb-4 text-[11px] uppercase tracking-[0.16em]"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Comparable deals
            </div>
            <div>
              {FINANCIALS.compDeals.map((deal, i) => (
                <CompDealRow key={i} deal={deal} index={i} />
              ))}
            </div>
          </div>

          {/* Assumptions */}
          <div
            className="border p-6"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface)',
            }}
          >
            <div
              className="font-mono mb-4 text-[11px] uppercase tracking-[0.16em]"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Key assumptions
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {FINANCIALS.assumptions}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
