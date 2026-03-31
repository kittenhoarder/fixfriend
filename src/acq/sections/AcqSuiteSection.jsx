import { SUITE } from '../../content/acquirer/suite'

// Reuse STATUS_CONFIG shape but Discover/Execute/Govern are always 'live'

const STATUS_CONFIG = {
  live: { label: 'Live', color: 'var(--status-success)' },
  'in-development': { label: 'In Development', color: 'var(--status-warning)' },
  roadmap: { label: 'Roadmap', color: 'var(--status-info)' },
}

function ProductCard({ product }) {
  const status = STATUS_CONFIG[product.status] || STATUS_CONFIG.live

  return (
    <div
      className="flex flex-col border p-6 transition-colors"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--surface)',
      }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3
            className="font-serif text-xl leading-none"
            style={{ color: 'var(--text-primary)' }}
          >
            {product.name}
          </h3>
          <p
            className="font-mono mt-1 text-xs tracking-[0.1em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {product.tagline}
          </p>
        </div>
        <span
          className="font-mono shrink-0 border px-2 py-0.5 text-[11px] tracking-[0.14em] uppercase"
          style={{ borderColor: status.color, color: status.color }}
        >
          {status.label}
        </span>
      </div>

      <div className="mt-auto space-y-3 border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
        {/* IP Summary */}
        <div>
          <div
            className="font-mono mb-1 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            IP & Moat
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {product.ipSummary}
          </p>
        </div>

        {/* Revenue lever */}
        <div>
          <div
            className="font-mono mb-1 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Revenue lever
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {product.revenueLever}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AcqSuiteSection() {
  return (
    <section className="px-8 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <div
            className="font-mono mb-3 text-[11px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {SUITE.eyebrow}
          </div>
          <h2
            className="font-serif mb-4 text-3xl leading-tight lg:text-4xl"
            style={{ color: 'var(--text-primary)', maxWidth: '600px' }}
          >
            Two modes. One product.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)', maxWidth: '620px' }}
          >
            {SUITE.narrativeParagraph}
          </p>
        </div>

        {/* Synergy callout */}
        <div
          className="mb-10 border-l-2 py-3 pl-5"
          style={{
            borderColor: 'var(--amber)',
            backgroundColor: 'rgba(249,115,22,0.06)',
          }}
        >
          <p
            className="font-mono text-sm leading-relaxed tracking-[0.08em]"
            style={{ color: 'var(--text-secondary)' }}
          >
            {SUITE.synergyCallout}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {SUITE.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Futures note */}
        {SUITE.futuresNote && (
          <p
            className="font-mono mt-6 text-[11px] tracking-[0.1em]"
            style={{ color: 'var(--muted)' }}
          >
            {SUITE.futuresNote}
          </p>
        )}
      </div>
    </section>
  )
}
