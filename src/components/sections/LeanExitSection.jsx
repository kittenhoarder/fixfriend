import {
  Briefcase,
  Compass,
  Download,
  FlaskConical,
  LineChart,
  Milestone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import StatusPill from '../ui/StatusPill'
import LeanExitDownloads from '../LeanExitDownloads'
import {
  LEAN_EXIT_CASE,
  BUSINESS_MODEL_CANVAS,
  MARKET_MODEL,
  FEATURE_PRIORITIES,
  PRICING_TRACKER,
  VALIDATION_PLAN,
  COMPETITION_MATRIX,
  GTM_PLAYBOOK,
  OPEN_QUESTIONS,
  PAIN_MATRIX,
  BUYER_DECISION_PROCESS,
  ECONOMIC_BUYER_DECISION_PROCESS,
  PRODUCT_CONTEXT_CORE,
  PRODUCT_AUTONOMY_RULES,
  PRODUCT_MERMAID_DIAGRAMS,
  UNIT_ECONOMICS,
} from '../../data/content'
import MermaidDiagram from '../ui/MermaidDiagram'
import BulletList from '../ui/BulletList'
import { TONE_STYLES } from '../../data/toneStyles'

const EVIDENCE_TONES = {
  Validated: 'success',
  Hypothesis: 'warning',
  'Open Question': 'info',
}

function getPainBucket(level) {
  const normalized = (level || '').toLowerCase()
  if (normalized.startsWith('high') || normalized.startsWith('medium-high')) return 'high'
  return 'medium'
}

function getPainMatrixCell(item) {
  const frequency = getPainBucket(item.frequency)
  const impact = getPainBucket(item.impact)
  return `${impact}-${frequency}`
}

function PainMatrixPlot({ items }) {
  const cells = [
    {
      id: 'high-high',
      title: 'Wedge now',
      tone: 'success',
      description: 'Recurring, high-impact pain where FIXFriend can win first.',
    },
    {
      id: 'high-medium',
      title: 'Important but less constant',
      tone: 'warning',
      description: 'Painful when it appears, but not the best first proof point.',
    },
    {
      id: 'medium-high',
      title: 'Constant friction',
      tone: 'info',
      description: 'Shows up often, but usually with narrower delivery impact.',
    },
    {
      id: 'medium-medium',
      title: 'Supporting issues',
      tone: 'neutral',
      description: 'Relevant context, but not the opening wedge on its own.',
    },
  ]

  return (
    <div className="space-y-3">
      <div className="pain-matrix-grid">
        {cells.map((cell) => {
          const style = TONE_STYLES[cell.tone]
          const cellItems = items.filter((item) => getPainMatrixCell(item) === cell.id)

          return (
            <div
              key={cell.id}
              className="rounded-lg border p-4"
              style={{ borderColor: style.borderColor, backgroundColor: style.backgroundColor }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: style.color }}>
                {cell.title}
              </div>
              <p className="text-xs leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                {cell.description}
              </p>
              <div className="mt-3 space-y-2">
                {cellItems.map((item) => (
                  <div key={item.id} className="rounded-md border px-3 py-2" style={{ borderColor: style.borderColor }}>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {item.label}
                    </div>
                    <div className="text-[11px] font-mono mt-1" style={{ color: 'var(--text-tertiary)' }}>
                      {item.frequency} frequency · {item.impact} impact
                    </div>
                  </div>
                ))}
                {cellItems.length === 0 ? (
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    No current interview themes clustered here.
                  </div>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>

      <div className="pain-matrix-axis">
        <span>Lower frequency</span>
        <span>Higher frequency</span>
      </div>
      <div className="pain-matrix-y-label" style={{ color: 'var(--text-tertiary)' }}>
        Higher delivery impact sits on the top row; lower-impact supporting issues sit on the bottom row.
      </div>
    </div>
  )
}

function EvidenceBadge({ label }) {
  return <StatusPill tone={EVIDENCE_TONES[label] || 'neutral'}>{label}</StatusPill>
}

function ModuleHeader({ icon: Icon, title, evidence, subtitle }) {
  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center border"
          style={{
            borderColor: 'var(--accent-border-soft)',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(249,115,22,0.08))',
            color: 'var(--accent)',
          }}
        >
          <Icon size={18} />
        </span>
        <div>
          <h3 className="font-serif text-[2rem] leading-none" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          {subtitle ? (
            <p className="text-sm mt-2 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <EvidenceBadge label={evidence} />
      </div>
    </div>
  )
}

function Shell({ children, accent = 'var(--border-subtle)', className = '' }) {
  return (
    <div
      className={`panel-shell rounded-xl p-5 md:p-6 ${className}`}
      style={{
        borderColor: accent,
      }}
    >
      {children}
    </div>
  )
}


function SourceLink({ label, href }) {
  if (!href) return <span style={{ color: 'var(--text-tertiary)' }}>{label}</span>
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs underline underline-offset-4"
      style={{ color: 'var(--accent)' }}
    >
      {label}
    </a>
  )
}

function Table({ columns, rows }) {
  return (
    <>
      <div className="space-y-3 md:hidden">
        {rows.map((row, index) => (
          <div
            key={row.name || row.title || index}
            className="rounded-lg border p-4"
            style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
          >
            <div className="space-y-3">
              {columns.map((column) => (
                <div key={column.key}>
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.12em] mb-1"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {column.label}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="text-left font-mono text-[11px] uppercase tracking-[0.14em] pb-3 pr-4 border-b"
                  style={{ color: 'var(--text-tertiary)', borderColor: 'var(--border-subtle)' }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.name || row.title || index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="align-top py-3 pr-4 border-b text-sm"
                    style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-subtle)' }}
                  >
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function ArtifactHeader({ title, subtitle }) {
  return (
    <div className="mb-4">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
        Artifact
      </div>
      <h4 className="font-serif text-[1.6rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h4>
      <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
        {subtitle}
      </p>
    </div>
  )
}

export default function LeanExitSection({ theme = 'dark' }) {
  const pricingRows = PRICING_TRACKER.map((item) => ({
    ...item,
    sourceLabel: item.sourceLabel,
    sourceUrl: item.sourceUrl,
  }))

  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      <SectionHeader
        label="LEAN EXIT"
        hideOnMobile
        compact
        right={(
          <div className="flex flex-wrap items-center gap-1.5">
            <StatusPill tone="success">Lean exit</StatusPill>
            <StatusPill tone="info">Strategic-fit method</StatusPill>
            <StatusPill tone="warning">Vendor-side wedge</StatusPill>
          </div>
        )}
      />

      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        <div className="content-rail space-y-6">
          <Shell accent="var(--accent-border-soft)">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                Lean Exit Thesis
              </div>
              <h2 className="font-serif text-[2.5rem] leading-[0.92] mt-3 max-w-4xl" style={{ color: 'var(--text-primary)' }}>
                A workflow-control wedge that proves value before it predicts the future.
              </h2>
              <p className="text-base leading-relaxed mt-4 max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
                {LEAN_EXIT_CASE.intro}
              </p>
            </div>

            <div className="grid gap-3 mt-6 lg:grid-cols-3">
              {LEAN_EXIT_CASE.evidenceOverview.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border p-4"
                  style={{
                    borderColor:
                      item.label === 'Validated'
                        ? 'var(--status-success-border)'
                        : item.label === 'Hypothesis'
                          ? 'var(--status-warning-border)'
                          : 'var(--accent-border-soft)',
                    backgroundColor:
                      item.label === 'Validated'
                        ? 'var(--status-success-soft)'
                        : item.label === 'Hypothesis'
                          ? 'var(--status-warning-soft)'
                          : 'var(--accent-softer)',
                  }}
                >
                  <div className="mb-3">
                    <EvidenceBadge label={item.label} />
                  </div>
                  <BulletList
                    items={item.items}
                    color={
                      item.label === 'Validated'
                        ? 'var(--status-success)'
                        : item.label === 'Hypothesis'
                          ? 'var(--status-warning)'
                          : 'var(--accent)'
                    }
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <LeanExitDownloads />
            </div>
          </Shell>

          <Shell>
            <ModuleHeader
              icon={Sparkles}
              title="1. The Wedge"
              evidence={LEAN_EXIT_CASE.wedge.evidence}
              subtitle="Lead with buyer language, then immediately translate that into the acquirer lens."
            />
            <div className="grid gap-4 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4">
                <div className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                    Buyer-language line
                  </div>
                  <div className="text-lg leading-relaxed mt-3" style={{ color: 'var(--text-primary)' }}>
                    {LEAN_EXIT_CASE.wedge.buyerOneLiner}
                  </div>
                </div>
                <div className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                    Acquirer-language line
                  </div>
                  <div className="text-base leading-relaxed mt-3" style={{ color: 'var(--text-primary)' }}>
                    {LEAN_EXIT_CASE.wedge.acquirerOneLiner}
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--accent-border-soft)', background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(249,115,22,0.06) 95%, transparent)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                  Cycle-time compression
                </div>
                <div className="text-base leading-relaxed mt-3" style={{ color: 'var(--text-primary)' }}>
                  {LEAN_EXIT_CASE.wedge.tenX}
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-tertiary)' }}>
                      From
                    </div>
                    <div className="font-serif text-[2rem] leading-none mt-2" style={{ color: 'var(--status-danger)' }}>
                      {LEAN_EXIT_CASE.wedge.quantifiedFrom}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-tertiary)' }}>
                      To
                    </div>
                    <div className="font-serif text-[2rem] leading-none mt-2" style={{ color: 'var(--status-success)' }}>
                      {LEAN_EXIT_CASE.wedge.quantifiedTo}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-tertiary)' }}>
                      Measured as
                    </div>
                    <div className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                      {LEAN_EXIT_CASE.wedge.quantifiedLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Shell>

          <Shell>
            <ModuleHeader
              icon={ShieldCheck}
              title="2. What It Is / What It Is Not"
              evidence={LEAN_EXIT_CASE.scope.evidence}
              subtitle="The boundary matters. This should look like a strategic workflow layer, not a vague AI catch-all."
            />
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--status-success-border)', backgroundColor: 'var(--status-success-soft)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                  It does
                </div>
                <div className="mt-4">
                  <BulletList items={LEAN_EXIT_CASE.scope.does} color="var(--status-success)" />
                </div>
              </div>
              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--status-warning-border)', backgroundColor: 'var(--status-warning-soft)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-warning)' }}>
                  It does not
                </div>
                <div className="mt-4">
                  <BulletList items={LEAN_EXIT_CASE.scope.doesNot} color="var(--status-warning)" />
                </div>
              </div>
            </div>
          </Shell>

          <Shell>
            <ModuleHeader
              icon={Briefcase}
              title="3. Why This Could Be Bought"
              evidence={LEAN_EXIT_CASE.whyBought.evidence}
              subtitle="The question is not just whether the pain is real. It is whether the workflow gap is strategically interesting to an incumbent."
            />
            <div className="grid gap-4 lg:grid-cols-[1.05fr,0.95fr]">
              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                <BulletList items={LEAN_EXIT_CASE.whyBought.points} />
              </div>
              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                  Strategic reading
                </div>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                  Public incumbents already market onboarding, testing, and connectivity. FIXFriend has to look valuable beside those systems, not instead of them. The whitespace is autonomous minor-change coordination, structured major-change escalation, and provenance-backed execution inside the buyer&apos;s existing workflow stack.
                </p>
              </div>
            </div>
          </Shell>

          <Shell>
            <ModuleHeader
              icon={LineChart}
              title="4. Business Logic"
              evidence="Hypothesis"
              subtitle="Keep the economics realistic for a discovery-led path: narrow direct wedge, high-signal design partners, and strategic attach upside."
            />
            <div className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {[MARKET_MODEL.tam, MARKET_MODEL.sam, MARKET_MODEL.som, MARKET_MODEL.strategicAttach].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border p-4"
                    style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                      {item.label}
                    </div>
                    <div className="font-serif text-[1.8rem] leading-none mt-3" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </div>
                    <div className="text-xs leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="Market-model method"
                  subtitle="Show the optimistic case, but keep the path from public-source inputs to headline numbers visible."
                />
                <BulletList items={MARKET_MODEL.methodology} color="var(--accent)" />
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="Business model canvas"
                  subtitle="Compact view of who pays, why they pay, and how this becomes strategically relevant."
                />
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                  {[
                    ['Customer Segments', BUSINESS_MODEL_CANVAS.customerSegments],
                    ['Value Proposition', [BUSINESS_MODEL_CANVAS.valueProp]],
                    ['Channels', BUSINESS_MODEL_CANVAS.channels],
                    ['Revenue Streams', BUSINESS_MODEL_CANVAS.revenueStreams],
                    ['Cost Structure', BUSINESS_MODEL_CANVAS.costStructure],
                  ].map(([label, rows]) => (
                    <div
                      key={label}
                      className="rounded-lg border p-4"
                      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                        {label}
                      </div>
                      <div className="space-y-2 mt-3">
                        {rows.map((row) => (
                          <div key={row} className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {row}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="Pricing research tracker"
                  subtitle="Use public sources to frame the market honestly; treat FIXFriend pricing as an explicit hypothesis."
                />
                <Table
                  columns={[
                    { key: 'name', label: 'Player' },
                    { key: 'signal', label: 'Pricing / budget signal' },
                    { key: 'logic', label: 'Why it matters' },
                    {
                      key: 'evidence',
                      label: 'Evidence',
                      render: (value) => <EvidenceBadge label={value} />,
                    },
                    {
                      key: 'sourceLabel',
                      label: 'Source',
                      render: (_value, row) => <SourceLink label={row.sourceLabel} href={row.sourceUrl} />,
                    },
                  ]}
                  rows={pricingRows}
                />
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title={UNIT_ECONOMICS.title}
                  subtitle="Anchor pricing and viability to documented labor cost before talking about strategic upside."
                />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {UNIT_ECONOMICS.intro}
                </p>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 mt-4">
                  {UNIT_ECONOMICS.roleWages.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border p-4"
                      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                        {item.label}
                      </div>
                      <div className="font-serif text-[1.6rem] leading-none mt-3" style={{ color: 'var(--text-primary)' }}>
                        {item.value}
                      </div>
                      <div className="mt-3">
                        <SourceLink label={item.sourceLabel} href={item.sourceUrl} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-3 mt-5">
                  <div className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                      Workflow model
                    </div>
                    <div className="mt-3">
                      <BulletList items={UNIT_ECONOMICS.workflowModel} color="var(--accent)" />
                    </div>
                  </div>
                  <div className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                      Pricing logic
                    </div>
                    <div className="mt-3">
                      <BulletList items={UNIT_ECONOMICS.pricingLogic} color="var(--status-success)" />
                    </div>
                  </div>
                  <div className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                      Path to viability
                    </div>
                    <div className="mt-3">
                      <BulletList items={UNIT_ECONOMICS.viability} color="var(--amber)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Shell>

          <Shell>
            <ModuleHeader
              icon={FlaskConical}
              title="5. Evidence Plan"
              evidence="Open Question"
              subtitle="The first validation loop has two jobs: prove direct customer pull and test whether the wedge also matters strategically to larger platforms."
            />
            <div className="space-y-5">
              <div className="border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-warning)' }}>
                  Riskiest assumption
                </div>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-primary)' }}>
                  {VALIDATION_PLAN.riskiestAssumption}
                </p>
              </div>

              <div className="border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                  Hypothesis
                </div>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                  {VALIDATION_PLAN.hypothesis}
                </p>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                  Six-week experiment loop
                </div>
                <div className="space-y-4 mt-4">
                  {VALIDATION_PLAN.timeline.map((item) => (
                    <div key={item.label} className="border-l pl-4" style={{ borderColor: 'var(--accent-border-soft)' }}>
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                        {item.label}
                      </div>
                      <div className="text-sm mt-2" style={{ color: 'var(--text-primary)' }}>
                        {item.focus}
                      </div>
                      <div className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                    Success metrics
                  </div>
                  <div className="mt-3">
                    <BulletList items={VALIDATION_PLAN.successMetrics} color="var(--status-success)" />
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-danger)' }}>
                    Pivot triggers
                  </div>
                  <div className="mt-3">
                    <BulletList items={VALIDATION_PLAN.pivotTriggers} color="var(--status-danger)" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="Interview-backed pain matrix"
                  subtitle="This is not a generic market map. It is a wedge-selection tool: which interview-backed pains are both recurring and severe enough to anchor the first product promise."
                />
                <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr]">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                      Reading the matrix
                    </div>
                    <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                      X-axis: {PAIN_MATRIX.axes.x}. Y-axis: {PAIN_MATRIX.axes.y}. The upper-right quadrant is the point of the exercise: pains that show up repeatedly and create enough delivery damage to justify a focused workflow product.
                    </p>
                    <div className="mt-4">
                      <PainMatrixPlot items={PAIN_MATRIX.items} />
                    </div>
                    <div
                      className="rounded-lg border px-4 py-3 mt-4"
                      style={{ borderColor: 'var(--status-success-border)', backgroundColor: 'var(--status-success-soft)' }}
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                        Why the wedge sits here
                      </div>
                      <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                        {PAIN_MATRIX.wedgeExplanation}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                      What each theme means
                    </div>
                    <div className="space-y-2 mt-3">
                      {PAIN_MATRIX.items.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-lg border p-3"
                          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                        >
                          <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                            {item.label}
                          </div>
                          <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                            Frequency: <span className="font-mono">{item.frequency}</span> · Impact:{' '}
                            <span className="font-mono">{item.impact}</span> · Interview support:{' '}
                            <span className="font-mono">{item.interviewSupport.length}</span>
                          </div>
                          <div className="text-xs leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                            {item.summary}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Shell>

          <Shell>
            <ModuleHeader
              icon={Milestone}
              title="6. Path to Strategic Relevance"
              evidence="Open Question"
              subtitle="Still answer the GTM question, but in a way that fits strategic-fit discovery instead of a heavy scale-sales story."
            />
            <div className="space-y-4">
              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="GTM playbook"
                  subtitle="First 10 direct, next 100 through leverage."
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                      First 10
                    </div>
                    <div className="mt-3">
                      <BulletList items={GTM_PLAYBOOK.first10} />
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                      Next 100
                    </div>
                    <div className="mt-3">
                      <BulletList items={GTM_PLAYBOOK.next100} color="var(--accent)" />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4 mt-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-tertiary)' }}>
                    Cost logic
                  </div>
                  <div className="mt-3">
                    <BulletList items={GTM_PLAYBOOK.costs} color="var(--amber)" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="Open questions"
                  subtitle="Disciplined uncertainty around the next discovery loop."
                />
                <BulletList items={OPEN_QUESTIONS} color="var(--status-info)" />
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="Competition matrix"
                  subtitle="Differentiate the wedge without pretending no one does anything adjacent."
                />
                <Table
                  columns={[
                    { key: 'name', label: 'Option' },
                    {
                      key: 'evidence',
                      label: 'Evidence',
                      render: (value) => <EvidenceBadge label={value} />,
                    },
                    { key: 'whatTheyDo', label: 'What they do' },
                    { key: 'gap', label: 'Why it falls short here' },
                  ]}
                  rows={COMPETITION_MATRIX}
                />
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="Buyer and economic-buyer decision flows"
                  subtitle="Clarify who feels the pain, who signs for the product, and who ultimately decides whether the company is strategically interesting to buy."
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                      Product buyer journey
                    </div>
                    <ol className="mt-3 space-y-2 list-decimal list-inside">
                      {BUYER_DECISION_PROCESS.steps.map((step) => (
                        <li key={step} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                      Economic-buyer (acquirer) journey
                    </div>
                    <ol className="mt-3 space-y-2 list-decimal list-inside">
                      {ECONOMIC_BUYER_DECISION_PROCESS.steps.map((step) => (
                        <li key={step} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
                <ArtifactHeader
                  title="Feature prioritization"
                  subtitle="Build only the workflow layer required to prove the wedge."
                />
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    ['MVP', FEATURE_PRIORITIES.mvp, 'var(--status-success)'],
                    ['V2', FEATURE_PRIORITIES.v2, 'var(--accent)'],
                    ['Future', FEATURE_PRIORITIES.future, 'var(--amber)'],
                  ].map(([label, items, color]) => (
                    <div
                      key={label}
                      className="rounded-lg border p-4"
                      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color }}>
                        {label}
                      </div>
                      <div className="space-y-4 mt-4">
                        {items.map((item) => (
                          <div key={item.title}>
                            <div className="text-sm" style={{ color: 'var(--text-primary)' }}>{item.title}</div>
                            <div className="text-xs leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
                              {item.reason}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Shell>

          <Shell>
            <div className="flex flex-col gap-6">
              <div>
                <ModuleHeader
                  icon={Compass}
                  title="Agent System + Expoty Core"
                  evidence="Hypothesis"
                  subtitle="The technical moat is narrow-agent coordination around a shared context core, not one giant tool-heavy agent."
                />
                <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                  Expoty holds the shared context, specialist agents stay narrow, and deterministic autonomy rules stop the system before anything touches production.
                </p>
                <div
                  className="rounded-lg border p-4 mt-4"
                  style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                    Context core
                  </div>
                  <div className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                    {PRODUCT_CONTEXT_CORE.summary}
                  </div>
                </div>
                <div
                  className="rounded-lg border p-4 mt-4"
                  style={{ borderColor: 'var(--status-danger-border)', backgroundColor: 'var(--status-danger-soft)' }}
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-danger)' }}>
                    Hard boundary
                  </div>
                  <div className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                    {PRODUCT_AUTONOMY_RULES.hardBoundary}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--amber)' }}>
                  {PRODUCT_MERMAID_DIAGRAMS.architecture.title}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {PRODUCT_MERMAID_DIAGRAMS.architecture.subtitle}
                </p>
                <MermaidDiagram
                  diagram={PRODUCT_MERMAID_DIAGRAMS.architecture.diagram}
                  theme={theme}
                  minHeight={520}
                />
              </div>
            </div>
          </Shell>

          <Shell>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                  External research baseline
                </div>
                <p className="text-sm mt-2 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
                  These public sources sharpen the differentiation case. They are here to prevent overclaiming whitespace, not to pretend the acquirer thesis is already proven.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                <Download size={14} />
                Included in tracker and competition artefacts
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5 mt-5">
              {PRICING_TRACKER.filter((item) => item.sourceUrl).map((item) => (
                <a
                  key={item.name}
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border p-4 transition-colors"
                  style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                    Source
                  </div>
                  <div className="text-sm mt-2" style={{ color: 'var(--text-primary)' }}>
                    {item.name}
                  </div>
                  <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.sourceLabel}
                  </div>
                </a>
              ))}
            </div>
          </Shell>
        </div>
      </div>
    </div>
  )
}
