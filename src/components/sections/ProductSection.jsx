import { PRODUCT_CONTENT } from '../../data/content'
import { Check } from 'lucide-react'
import ProductDemo from './ProductDemo'

export default function ProductSection() {
  const s = PRODUCT_CONTENT.solution
  const w = PRODUCT_CONTENT.whatCustomersBuy
  const t = PRODUCT_CONTENT.targetBuyer

  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      <div
        className="hidden lg:flex px-6 py-4 border-b flex-shrink-0"
        style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
      >
        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--muted)', letterSpacing: '0.12em' }}>
          PRODUCT
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <ProductDemo />
          </div>

          <div className="max-w-3xl">
            <h2
              className="font-mono font-bold text-sm tracking-wider mb-3"
              style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}
            >
              {s.title}
            </h2>
            <p className="text-sm leading-relaxed mb-4 whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
              {s.intro}
            </p>
            <ul className="space-y-2 mb-6">
              {s.bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="panel-shell rounded-lg px-4 py-4 mb-8"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
            >
              <h3 className="font-serif text-[1.5rem] leading-none mb-3" style={{ color: 'var(--text-primary)' }}>
                {s.supervised.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {s.supervised.body}
              </p>
            </div>

            <div className="border-t pt-6" style={{ borderColor: 'var(--border-subtle)' }}>
              <h2
                className="font-mono font-bold text-sm tracking-wider mb-2"
                style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}
              >
                {w.title}
              </h2>
              <div
                className="font-mono text-xs font-semibold mb-2 px-2.5 py-1.5 rounded inline-block"
                style={{
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-softer)',
                  border: '1px solid var(--accent-border-soft)',
                }}
              >
                {w.label}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                {w.body}
              </p>
            </div>

            <div className="border-t pt-6 mt-8" style={{ borderColor: 'var(--border-subtle)' }}>
              <h2
                className="font-mono font-bold text-sm tracking-wider mb-3"
                style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}
              >
                {t.title}
              </h2>
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Primary buyer: {t.primary}
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {t.budget}
              </p>
              <div className="font-mono text-xs tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>
                Purchase triggers
              </div>
              <ul className="flex flex-wrap gap-2">
                {t.triggers.map((trigger) => (
                  <li
                    key={trigger}
                    className="text-xs px-2 py-1 rounded border"
                    style={{
                      color: 'var(--text-secondary)',
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
