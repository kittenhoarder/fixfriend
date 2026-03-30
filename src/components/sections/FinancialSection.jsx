import { Fragment } from 'react'
import { COMPETITOR_BENCHMARKS, FINANCIAL_MODEL } from '../../data/content'
import NarrativeSection from '../ui/NarrativeSection'
import ProofStack from '../ui/ProofStack'
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
    positive: { border: 'var(--status-success-border)', label: 'var(--status-success)', value: 'var(--text-primary)' },
    accent: { border: 'var(--accent-border-soft)', label: 'var(--accent)', value: 'var(--text-primary)' },
  }
  const c = colors[tone] || colors.default

  return (
    <div className="rounded-lg border p-4 flex flex-col gap-2" style={{ borderColor: c.border, backgroundColor: 'var(--surface)' }}>
      <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: c.label }}>
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
    <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface2)' }}>
      <table className="w-full text-xs border-collapse" style={{ minWidth: '900px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <th
              className="text-left py-3 px-4 font-mono tracking-wider sticky left-0 z-10"
              style={{ color: 'var(--text-tertiary)', backgroundColor: 'var(--surface2)', width: '200px', minWidth: '200px', letterSpacing: '0.12em', fontSize: '10px' }}
            >
              LINE ITEM
            </th>
            {months.map((m) => (
              <th
                key={m.label}
                className="text-right py-3 px-3 font-mono tracking-wider"
                style={{ color: 'var(--text-tertiary)', backgroundColor: 'var(--surface2)', whiteSpace: 'nowrap', letterSpacing: '0.1em', fontSize: '10px' }}
              >
                {m.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isFirstInSection = sectionHeaders[row.section]?.first === row.key
            const bgColor = sectionColors[row.section]

            return (
              <Fragment key={row.key}>
                {isFirstInSection ? (
                  <tr>
                    <td
                      colSpan={months.length + 1}
                      className="pt-4 pb-1 px-4 font-mono"
                      style={{ color: 'var(--text-tertiary)', backgroundColor: 'var(--surface2)', fontSize: '10px', letterSpacing: '0.18em' }}
                    >
                      {sectionHeaders[row.section].label}
                    </td>
                  </tr>
                ) : null}
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

function PricingCard({ tier, tone }) {
  const styles = {
    default: { borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)', label: 'var(--text-tertiary)' },
    accent: { borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)', label: 'var(--accent)' },
    success: { borderColor: 'var(--status-success-border)', backgroundColor: 'var(--status-success-soft)', label: 'var(--status-success)' },
  }
  const style = styles[tone]

  return (
    <article className="rounded-lg border p-5 flex flex-col gap-3" style={{ borderColor: style.borderColor, backgroundColor: style.backgroundColor }}>
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: style.label }}>
          {tier.tier}
        </span>
        <span className="font-mono text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
          {tier.duration}
        </span>
      </div>
      <p className="font-serif text-[2rem] leading-none" style={{ color: 'var(--text-primary)' }}>
        {tier.amount}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {tier.detail}
      </p>
      <p className="text-sm leading-relaxed pt-3 border-t" style={{ color: 'var(--text-tertiary)', borderColor: 'var(--border-subtle)' }}>
        Budget owner: {tier.budgetOwner}
      </p>
    </article>
  )
}

export default function FinancialSection() {
  const { months, pricing, costs, breakEven, baseCase } = FINANCIAL_MODEL

  const modelProof = [
    {
      status: 'Validated',
      kind: 'Model assumption',
      title: 'The base case is intentionally lean, not an aggressive growth story.',
      points: baseCase.slice(0, 2),
      sourceLabel: 'Internal model',
      why: 'The model stays disciplined and credible by keeping the team narrow, hiring measured, and the path to viability dependent on only a handful of real customers.',
    },
    {
      status: 'Validated',
      kind: 'Break-even logic',
      title: 'The operating model works if a small number of production accounts convert.',
      detail: breakEven.interpretation,
      points: [
        `Annualised fixed OpEx: €${breakEven.fixedOpex.toLocaleString()}`,
        `Average production ACV: €${breakEven.avgAcv.toLocaleString()}`,
        `Contribution per customer: €${breakEven.contributionPerCustomer.toLocaleString()}`,
      ],
      sourceLabel: 'Internal model',
      why: 'The commercial logic stays focused: validate the wedge first, then earn the right to scale.',
    },
  ]

  const benchmarkProof = COMPETITOR_BENCHMARKS.slice(0, 2).map((vendor) => ({
    status: 'Validated',
    kind: 'Pricing benchmark',
    title: vendor.name,
    detail: `${vendor.pricing}. ${vendor.implication}`,
    sourceLabel: vendor.name,
    sourceUrl: vendor.sourceUrl,
    why: vendor.gap,
  }))

  const runwayProof = [
    {
      status: 'Validated',
      kind: 'Cost discipline',
      title: 'Headcount and infrastructure costs step up only as the model converts into production usage.',
      points: costs.slice(0, 4).map((cost) => `${cost.label}: ${cost.monthly}`),
      sourceLabel: 'Cost structure',
      why: 'Spend follows proof. The model is built to learn first and scale only after the wedge is validated.',
    },
    {
      status: 'Validated',
      kind: 'Cash signal',
      title: 'The 12-month plan preserves runway while still funding discovery, pilots, and production readiness.',
      detail: 'This is a venture screen model with a clear conversion dependency: pilots have to turn into a small set of real production accounts.',
      points: [
        'Starting cash: €400K',
        '12M total revenue: €210K',
        'Ending cash: €281.5K',
      ],
      sourceLabel: 'Cash flow forecast',
      why: 'The model is credible because it can test the thesis seriously without pretending the company already has scale economics.',
    },
  ]

  return (
    <SectionLayout label="FINANCIALS" mobileNav headerProps={{ compact: true }}>
      <div className="content-rail px-6 py-8 max-w-6xl mx-auto space-y-14">
        <NarrativeSection
          eyebrow="Model summary"
          title="A lean commercial model built to prove the wedge before scaling the company."
          lead="The financial model mirrors the product strategy: narrow initial scope, a credible pilot-to-production path, and enough runway to learn without pretending the business is already mature."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <StatCallout label="Starting cash" value="€400K" tone="default" />
            <StatCallout label="12M total revenue" value="€210K" tone="positive" />
            <StatCallout label="Break-even customers" value="~3" tone="accent" />
            <StatCallout label="Ending cash" value="€281.5K" tone="default" />
          </div>

          <ProofStack
            items={modelProof}
            intro="The model needs to communicate that the team understands what has to be true commercially, and what still needs to be validated."
          />
        </NarrativeSection>

        <NarrativeSection
          eyebrow="Pricing logic"
          title="Pricing is anchored to workflow value, budget ownership, and comparable enterprise software posture."
          lead="Pricing is structured to show why the pilot is easy to buy, why production sits at meaningful enterprise ACV, and why expansion grows from proven workflow trust."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <PricingCard tier={pricing[0]} tone="default" />
            <PricingCard tier={pricing[1]} tone="accent" />
            <PricingCard tier={pricing[2]} tone="success" />
          </div>

          <ProofStack
            items={benchmarkProof}
            intro="Public benchmarks belong inside the argument: they reinforce that regulated workflow software can command serious pricing even before FIXFriend proves its exact final shape."
          />
        </NarrativeSection>

        <NarrativeSection
          eyebrow="Runway and conversion"
          title="The model only works if pilots convert into a small number of real production accounts."
          lead="The table matters, but the interpretation should land first: the company can fund the discovery loop, carry early implementation cost, and still preserve runway if the wedge translates into paid production usage."
        >
          <div className="rounded-lg border p-5" style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}>
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
            <div className="rounded-lg border p-4 text-center" style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] mb-1" style={{ color: 'var(--accent)' }}>
                Rule of thumb
              </p>
              <p className="font-serif text-xl" style={{ color: 'var(--text-primary)' }}>
                ~3 active production customers at €120K ACV
              </p>
            </div>
          </div>

          <CashFlowTable months={months} />

          <p className="text-xs mt-2" style={{ color: 'var(--text-tertiary)' }}>
            Parentheses indicate negative / outflow. VAT excluded. This is a venture screen model, not a GAAP forecast.
          </p>

          <ProofStack
            items={runwayProof}
            intro="The supporting detail clarifies the shape of the model without burying the main takeaway under labels and mechanics."
          />
        </NarrativeSection>
      </div>
    </SectionLayout>
  )
}
