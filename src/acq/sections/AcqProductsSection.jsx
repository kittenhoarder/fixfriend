import { SUITE, PRODUCTS_DEEP_DIVE } from '../content'

const STATUS_CONFIG = {
  live: { label: 'Live', color: 'var(--status-success)' },
  'in-development': { label: 'In Development', color: 'var(--status-warning)' },
  roadmap: { label: 'Roadmap', color: 'var(--status-info)' },
}

function DefensibilityBar({ score }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="h-1.5 w-5"
            style={{
              backgroundColor: n <= score ? 'var(--accent)' : 'var(--border-subtle)',
              opacity: n <= score ? 1 : 0.4,
            }}
          />
        ))}
      </div>
      <span
        className="font-mono text-[11px] tracking-[0.1em]"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {score}/5 defensibility
      </span>
    </div>
  )
}

function ProductRow({ product }) {
  const status = STATUS_CONFIG[product.status] || STATUS_CONFIG.live
  const defensibility = PRODUCTS_DEEP_DIVE.defensibility[product.id] || { score: 3, note: '' }

  return (
    <div
      className="border p-6 lg:p-8"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--surface)',
      }}
    >
      {/* Product header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h3
              className="font-serif text-2xl leading-none"
              style={{ color: 'var(--text-primary)' }}
            >
              {product.name}
            </h3>
            <span
              className="font-mono shrink-0 border px-2 py-0.5 text-[11px] tracking-[0.14em] uppercase"
              style={{ borderColor: status.color, color: status.color }}
            >
              {status.label}
            </span>
          </div>
          <p
            className="font-mono mt-1 text-xs tracking-[0.1em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {product.tagline}
          </p>
        </div>
        <DefensibilityBar score={defensibility.score} />
      </div>

      {/* Three columns: IP / Revenue lever / Integration */}
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <div
            className="font-mono mb-2 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            IP & Moat
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {product.ipSummary}
          </p>
        </div>
        <div>
          <div
            className="font-mono mb-2 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Revenue lever
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {product.revenueLever}
          </p>
        </div>
        <div>
          <div
            className="font-mono mb-2 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Integration angle
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {product.integrationAngle}
          </p>
        </div>
      </div>

      {/* Defensibility note */}
      {defensibility.note && (
        <div
          className="mt-5 border-t pt-4 text-sm leading-relaxed"
          style={{ borderColor: 'var(--border-subtle)', color: 'var(--muted)' }}
        >
          <span
            className="font-mono mr-2 text-[11px] uppercase tracking-[0.14em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Note:
          </span>
          {defensibility.note}
        </div>
      )}
    </div>
  )
}

export default function AcqProductsSection() {
  return (
    <section className="px-8 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <div
            className="font-mono mb-3 text-[11px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {PRODUCTS_DEEP_DIVE.eyebrow}
          </div>
          <h2
            className="font-serif mb-4 text-3xl leading-tight lg:text-4xl"
            style={{ color: 'var(--text-primary)', maxWidth: '600px' }}
          >
            How FIXFriend works
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)', maxWidth: '580px' }}
          >
            {PRODUCTS_DEEP_DIVE.intro}
          </p>
        </div>

        {/* Product rows */}
        <div className="space-y-4">
          {SUITE.products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
