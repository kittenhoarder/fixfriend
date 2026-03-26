import { Fragment } from 'react'
import { FINANCIAL_MODEL, COMPETITOR_BENCHMARKS } from '../../data/content'
import SectionLayout from '../ui/SectionLayout'

function fmt(n) {
  if (n === 0) return '—'
  return '€' + Math.abs(n).toLocaleString()
}

function fmtSigned(n) {
  if (n === 0) return '—'
  return (n < 0 ? '(' : '') + '€' + Math.abs(n).toLocaleString() + (n < 0 ? ')' : '')
}

function StatCallout({ label, value, tone = 'default' }) {
  const colors = {
    default: { border: 'var(--border-subtle)', label: 'var(--text-tertiary)', value: 'var(--text-primary)' },
    positive: { border: 'var(--status-success)', label: 'var(--status-success)', value: 'var(--text-primary)' },
    negative: { border: 'var(--status-warning)', label: 'var(--status-warning)', value: 'var(--text-primary)' },
    accent: { border: 'var(--accent-border-soft)', label: 'var(--accent)', value: 'var(--text-primary)' },
  }
  const c = colors[tone]
  return (
    <div className="p-4 border flex flex-col gap-2" style={{ borderColor: c.border, backgroundColor: 'var(--surface)' }}>
      <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: c.label, letterSpacing: '0.14em' }}>
        {label}
      </span>
      <span className="font-serif text-[1.9rem] leading-none" style={{ color: c.value }}>
        {value}
      </span>
    </div>
  )
}

function CashFlowTable({ months }) {
  const rows = [
    { key: 'pilotsNew', label: 'Pilots signed', format: (v) => v === 0 ? '—' : v, section: 'rev', isCount: true },
    { key: 'pilotRev', label: 'Pilot revenue', format: fmt, section: 'rev' },
    { key: 'prodActive', label: 'Active production customers', format: (v) => v === 0 ? '—' : v, section: 'rev', isCount: true },
    { key: 'prodRev', label: 'Production revenue', format: fmt, section: 'rev' },
    { key: 'totalRev', label: 'Total revenue', format: fmt, section: 'rev', isBold: true },
    { key: 'cogs', label: 'COGS (15%)', format: (v) => v === 0 ? '—' : `(€${v.toLocaleString()})`, section: 'rev' },
    { key: 'grossProfit', label: 'Gross profit', format: fmt, section: 'rev', isBold: true },
    { key: 'founder', label: 'Founder / leadership', format: (v) => `(€${v.toLocaleString()})`, section: 'opex' },
    { key: 'engineering', label: 'Engineering / product', format: (v) => `(€${v.toLocaleString()})`, section: 'opex' },
    { key: 'aiCloud', label: 'AI / cloud', format: (v) => `(€${v.toLocaleString()})`, section: 'opex' },
    { key: 'travel', label: 'Travel / sales', format: (v) => `(€${v.toLocaleString()})`, section: 'opex' },
    { key: 'software', label: 'Software / tools', format: (v) => `(€${v.toLocaleString()})`, section: 'opex' },
    { key: 'ga', label: 'G&A', format: (v) => `(€${v.toLocaleString()})`, section: 'opex' },
    { key: 'legal', label: 'Legal / setup', format: (v) => v === 0 ? '—' : `(€${v.toLocaleString()})`, section: 'opex' },
    { key: 'misc', label: 'Misc. contingency', format: (v) => `(€${v.toLocaleString()})`, section: 'opex' },
    { key: 'totalOpex', label: 'Total operating expenses', format: (v) => `(€${v.toLocaleString()})`, section: 'opex', isBold: true },
    { key: 'ebitda', label: 'EBITDA / net burn', format: fmtSigned, section: 'cash', isBold: true },
    { key: 'openingCash', label: 'Opening cash', format: fmt, section: 'cash' },
    { key: 'closingCash', label: 'Closing cash', format: fmt, section: 'cash', isBold: true },
  ]

  const sectionColors = {
    rev: 'rgba(34,197,94,0.06)',
    opex: 'rgba(249,115,22,0.04)',
    cash: 'rgba(59,130,246,0.06)',
  }

  const sectionHeaders = {
    rev: { label: 'REVENUE', first: 'pilotsNew' },
    opex: { label: 'OPERATING EXPENSES', first: 'founder' },
    cash: { label: 'CASH POSITION', first: 'ebitda' },
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse" style={{ minWidth: '900px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <th
              className="text-left py-3 px-4 font-mono tracking-wider sticky left-0 z-10"
              style={{ color: 'var(--text-tertiary)', backgroundColor: 'var(--surface2)', width: '200px', minWidth: '200px', letterSpacing: '0.12em', fontSize: '9px' }}
            >
              LINE ITEM
            </th>
            {months.map((m) => (
              <th
                key={m.label}
                className="text-right py-3 px-3 font-mono tracking-wider"
                style={{ color: 'var(--text-tertiary)', backgroundColor: 'var(--surface2)', whiteSpace: 'nowrap', letterSpacing: '0.1em', fontSize: '9px' }}
              >
                {m.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => {
            const isFirstInSection = sectionHeaders[row.section]?.first === row.key
            const bgColor = sectionColors[row.section]
            return (
              <Fragment key={row.key}>
                {isFirstInSection && (
                  <tr>
                    <td
                      colSpan={months.length + 1}
                      className="pt-4 pb-1 px-4 font-mono"
                      style={{ color: 'var(--text-tertiary)', backgroundColor: 'var(--surface2)', fontSize: '9px', letterSpacing: '0.18em' }}
                    >
                      {sectionHeaders[row.section].label}
                    </td>
                  </tr>
                )}
                <tr
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    backgroundColor: row.isBold ? bgColor : 'transparent',
                  }}
                >
                  <td
                    className="py-2 px-4 sticky left-0 z-10"
                    style={{
                      color: row.isBold ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: row.isBold ? '600' : '400',
                      backgroundColor: row.isBold ? bgColor : 'var(--surface2)',
                      whiteSpace: 'nowrap',
                      fontSize: '11px',
                    }}
                  >
                    {row.label}
                  </td>
                  {months.map((m) => {
                    const val = m[row.key]
                    const formatted = row.format(val)
                    const isNegOrParen = typeof formatted === 'string' && (formatted.startsWith('(') || (row.key === 'ebitda' && val < 0))
                    return (
                      <td
                        key={m.label}
                        className="text-right py-2 px-3 font-mono tabular-nums"
                        style={{
                          color: isNegOrParen
                            ? 'var(--status-warning)'
                            : row.key === 'ebitda' && val > 0
                            ? 'var(--status-success)'
                            : row.isBold
                            ? 'var(--text-primary)'
                            : 'var(--text-secondary)',
                          fontWeight: row.isBold ? '600' : '400',
                          fontSize: '11px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {formatted}
                      </td>
                    )
                  })}
                </tr>
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function FinancialSection() {
  const { months, pricing, costs, breakEven, baseCase, currency } = FINANCIAL_MODEL

  return (
    <SectionLayout label="FINANCIALS">
      <div className="content-rail px-6 py-8 max-w-6xl mx-auto space-y-10">

          {/* Headline stats */}
          <div>
            <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              BASE CASE — 12 MONTHS (APR 2026 – MAR 2027)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCallout label="Starting cash" value="€400K" tone="default" />
              <StatCallout label="12M total revenue" value="€210K" tone="positive" />
              <StatCallout label="Break-even customers" value="~3" tone="accent" />
              <StatCallout label="Ending cash" value="€281.5K" tone="default" />
            </div>
          </div>

          {/* Base case interpretation */}
          <div className="p-5 border" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
            <p className="font-mono text-[10px] tracking-widest mb-3" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              BASE CASE INTERPRETATION
            </p>
            <ul className="space-y-2">
              {baseCase.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--amber)', flexShrink: 0 }}>•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* 12-month cash flow table */}
          <div>
            <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              12-MONTH CASH FLOW FORECAST
            </p>
            <div className="border" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface2)' }}>
              <CashFlowTable months={months} />
            </div>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-tertiary)' }}>
              Parentheses indicate negative / outflow. VAT excluded. This is a venture screen model, not a GAAP forecast.
            </p>
          </div>

          {/* Pricing tiers */}
          <div>
            <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              PRICING LOGIC
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pricing.map((tier, i) => (
                <article
                  key={tier.tier}
                  className="p-5 border flex flex-col gap-3"
                  style={{
                    borderColor: i === 0 ? 'var(--border-subtle)' : i === 1 ? 'var(--accent-border-soft)' : 'var(--status-success)',
                    backgroundColor: i === 0 ? 'var(--surface)' : i === 1 ? 'var(--accent-softer)' : 'rgba(34,197,94,0.05)',
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: i === 0 ? 'var(--text-tertiary)' : i === 1 ? 'var(--accent)' : 'var(--status-success)', letterSpacing: '0.16em' }}>
                      {tier.tier}
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: 'var(--text-tertiary)' }}>{tier.duration}</span>
                  </div>
                  <p className="font-serif text-2xl leading-none" style={{ color: 'var(--text-primary)' }}>
                    {tier.amount}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {tier.detail}
                  </p>
                  <p className="text-[11px] pt-2 border-t" style={{ color: 'var(--text-tertiary)', borderColor: 'var(--border-subtle)' }}>
                    Budget owner: {tier.budgetOwner}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Cost structure */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
                COST STRUCTURE
              </p>
              <div className="border divide-y" style={{ borderColor: 'var(--border-subtle)', '--divide-color': 'var(--border-subtle)' }}>
                {costs.map((cost, i) => (
                  <div key={i} className="flex items-start gap-4 p-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{cost.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{cost.note}</p>
                    </div>
                    <p className="text-sm font-mono text-right shrink-0" style={{ color: 'var(--amber)' }}>{cost.monthly}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Break-even */}
            <div>
              <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
                BREAK-EVEN ANALYSIS
              </p>
              <div className="p-5 border h-fit" style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}>
                <div className="space-y-3 mb-4">
                  {[
                    { label: 'Annualised fixed OpEx', value: '€297,000' },
                    { label: 'Average production ACV', value: '€120,000' },
                    { label: 'Gross margin', value: '85%' },
                    { label: 'Contribution per customer', value: '€102,000' },
                    { label: 'Break-even ARR needed', value: '€360,000' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-4">
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                      <span className="font-mono text-sm" style={{ color: 'var(--text-primary)' }}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="p-4 border text-center"
                  style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'rgba(59,130,246,0.1)' }}
                >
                  <p className="font-mono text-[10px] tracking-widest mb-1" style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}>RULE OF THUMB</p>
                  <p className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>
                    ~3 active production customers at €120K ACV
                  </p>
                </div>
                <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--text-secondary)' }}>
                  {breakEven.interpretation}
                </p>
              </div>
            </div>
          </div>

          {/* Competitor benchmarks */}
          <div>
            <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              COMPETITOR / ADJACENT PRICING BENCHMARKS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {COMPETITOR_BENCHMARKS.map((vendor) => (
                <article
                  key={vendor.name}
                  className="p-4 border flex flex-col gap-3"
                  style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-serif text-lg leading-none" style={{ color: 'var(--text-primary)' }}>
                      {vendor.name}
                    </span>
                    <span
                      className="font-mono text-[9px] px-2 py-1 border shrink-0"
                      style={{ color: 'var(--text-tertiary)', borderColor: 'var(--border-subtle)', letterSpacing: '0.1em' }}
                    >
                      {vendor.category}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-wider mb-1" style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}>PRICING SIGNAL</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{vendor.pricing}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-wider mb-1" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>IMPLICATION</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{vendor.implication}</p>
                  </div>
                  <div className="pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    <p className="font-mono text-[10px] tracking-wider mb-1" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.12em' }}>OUR DIFFERENTIATION</p>
                    <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{vendor.gap}</p>
                  </div>
                  {vendor.sourceUrl && (
                    <a
                      href={vendor.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono"
                      style={{ color: 'var(--accent)' }}
                    >
                      Source →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>

        </div>
    </SectionLayout>
  )
}
