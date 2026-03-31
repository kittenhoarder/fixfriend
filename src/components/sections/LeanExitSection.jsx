import BulletList from '../ui/BulletList'
import MermaidDiagram from '../ui/MermaidDiagram'
import NarrativeSection from '../ui/NarrativeSection'
import ProofStack from '../ui/ProofStack'
import StatusPill from '../ui/StatusPill'
import LazyLeanExitDownloads from '../../shared/ui/LazyLeanExitDownloads'
import {
  BUYER_DECISION_PROCESS,
  COMPETITION_MATRIX,
  CONTINUOUS_CHANGE_SIGNALS,
  ECONOMIC_BUYER_DECISION_PROCESS,
  FEATURE_PRIORITIES,
  GTM_PLAYBOOK,
  INTERVIEW_TRACKER,
  LEAN_EXIT_CASE,
  MARKET_MODEL,
  OPEN_QUESTIONS,
  PAIN_MATRIX,
  PRICING_TRACKER,
  PRODUCT_AUTONOMY_RULES,
  PRODUCT_CONTEXT_CORE,
  PRODUCT_MERMAID_DIAGRAMS,
  SALES_FUNNEL,
  UNIT_ECONOMICS,
  VALIDATION_PLAN,
} from '../../content/raidical/leanExit'
import { TONE_STYLES } from '../../data/toneStyles'

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

function SourceLink({ label, href }) {
  if (!label) return null
  if (!href) return <span style={{ color: 'var(--text-tertiary)' }}>{label}</span>

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4"
      style={{ color: 'var(--accent)' }}
    >
      {label}
    </a>
  )
}

function Shell({ children, className = '' }) {
  return (
    <div className={`panel-shell rounded-xl p-6 md:p-7 ${className}`.trim()}>
      {children}
    </div>
  )
}

function MetricCard({ label, value, detail, tone = 'accent' }) {
  const style = TONE_STYLES[tone] || TONE_STYLES.accent

  return (
    <article
      className="rounded-lg border p-4"
      style={{ borderColor: style.borderColor, backgroundColor: style.backgroundColor }}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: style.color }}>
        {label}
      </div>
      <div className="font-serif text-[1.85rem] leading-none mt-3" style={{ color: 'var(--text-primary)' }}>
        {value}
      </div>
      {detail ? (
        <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
          {detail}
        </p>
      ) : null}
    </article>
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
                  className="text-left font-mono text-[11px] uppercase tracking-[0.14em] py-3 px-4 border-b"
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
                    className="align-top py-3 px-4 border-b text-sm"
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

function quoteFor(entryId, label) {
  const entry = INTERVIEW_TRACKER.find((item) => item.id === entryId)
  const quote = entry?.keyQuotes?.find((item) => item.label === label)
  if (!entry || !quote) return null

  return {
    entry,
    quote,
  }
}

function StepList({ title, steps, tone = 'accent' }) {
  const style = TONE_STYLES[tone] || TONE_STYLES.accent

  return (
    <article className="rounded-lg border p-5" style={{ borderColor: style.borderColor, backgroundColor: style.backgroundColor }}>
      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: style.color }}>
        {title}
      </div>
      <ol className="mt-4 space-y-3 list-decimal list-inside">
        {steps.map((step) => (
          <li key={step} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {step}
          </li>
        ))}
      </ol>
    </article>
  )
}

function PriorityColumn({ label, items, tone }) {
  const style = TONE_STYLES[tone] || TONE_STYLES.accent

  return (
    <article className="rounded-lg border p-4" style={{ borderColor: style.borderColor, backgroundColor: style.backgroundColor }}>
      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: style.color }}>
        {label}
      </div>
      <div className="space-y-4 mt-4">
        {items.map((item) => (
          <div key={item.title}>
            <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              {item.title}
            </div>
            <div className="text-sm leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
              {item.reason}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default function LeanExitSection({ theme = 'dark' }) {
  const tomCommunication = quoteFor('tom-bloomberg', 'Communication drag')
  const igorMemory = quoteFor('igor-broadridge-connectivity', 'Operational memory')
  const quodBuyer = SALES_FUNNEL.activeBuyers.find((buyer) => buyer.name === 'Quod Financial')
  const virtuBuyer = SALES_FUNNEL.activeBuyers.find((buyer) => buyer.name === 'Virtu Europe')
  const bjornBuyer = SALES_FUNNEL.activeBuyers.find((buyer) => buyer.name === 'Bjorn Haggstrom')

  const wedgeProof = [
    {
      status: 'Interview-led',
      kind: 'Workflow pain',
      title: 'The first signal often arrives late and through the wrong channel.',
      quote: tomCommunication?.quote?.text,
      detail:
        'That creates the wedge. Teams are losing time before they even get to implementation because the notice, the context, and the coordination path are fragmented from the start.',
      attribution: `${tomCommunication?.entry?.name} · ${tomCommunication?.entry?.company}`,
      why: 'Venue-change response is a credible opening problem because it is recurring, bounded, and already painful before the coding work starts.',
    },
    {
      status: 'Validated',
      kind: 'Market signal',
      title: 'The environment is moving toward continuous change rather than slower release windows.',
      points: CONTINUOUS_CHANGE_SIGNALS.items.slice(0, 3).map((item) => item.title),
      sourceLabel: CONTINUOUS_CHANGE_SIGNALS.items[0].sourceLabel,
      sourceUrl: CONTINUOUS_CHANGE_SIGNALS.items[0].sourceUrl,
      why: 'The “why now” case is not abstract. Longer trading and clearing windows make change readiness and evidence quality more valuable.',
    },
  ]

  const boundaryProof = [
    {
      status: 'Interview-led',
      kind: 'Delivery signal',
      title: 'The missing system is the working bundle around each change.',
      quote: igorMemory?.quote?.text,
      detail:
        'Teams need the spec, the exceptions, the test evidence, and the decision trail to move together instead of being reconstructed later.',
      attribution: `${igorMemory?.entry?.name} · ${igorMemory?.entry?.company}`,
      why: 'This is why the product boundary has to stay narrow and workflow-centric rather than pretending to replace the underlying trading stack.',
    },
    {
      status: 'Interview-led',
      kind: 'Buyer signal',
      title: 'QA and handoff quality are a bigger bottleneck than raw coding throughput.',
      quote: quodBuyer?.quotes?.[0],
      detail: quodBuyer?.note,
      attribution: `${quodBuyer?.name} · ${quodBuyer?.contact}`,
      why: 'The product earns trust by compressing context, review, and evidence in a bounded UAT lane, not by promising unsupervised production autonomy.',
    },
  ]

  const economicProof = [
    {
      status: 'Interview-led',
      kind: 'Strategic signal',
      title: 'This looks more valuable as an embedded or acquired workflow capability than as a generic broad platform.',
      quote: bjornBuyer?.quotes?.[1],
      detail: bjornBuyer?.note,
      attribution: `${bjornBuyer?.name} · ${bjornBuyer?.contact}`,
      why: 'That is exactly the lean-exit logic: prove a wedge that larger firms would rather buy or embed faster than build internally.',
    },
    {
      status: 'Validated',
      kind: 'Pricing benchmark',
      title: 'Comparable workflow and automation software already supports serious enterprise pricing posture.',
      points: PRICING_TRACKER.slice(0, 3).map((item) => `${item.name}: ${item.signal}`),
      sourceLabel: PRICING_TRACKER[0]?.sourceLabel,
      sourceUrl: PRICING_TRACKER[0]?.sourceUrl,
      why: 'The pricing story is strongest when anchored to labor cost, workflow value, and public pricing signals rather than to generic AI rhetoric.',
    },
  ]

  const validationProof = [
    {
      status: virtuBuyer?.status,
      kind: 'Economic-buyer signal',
      title: 'The adoption barrier is trust in a bounded, auditable workflow.',
      quote: virtuBuyer?.quotes?.[1],
      detail: virtuBuyer?.note,
      attribution: `${virtuBuyer?.name} · ${virtuBuyer?.contact}`,
      why: 'The validation loop has to prove that the product is bounded, governed, and useful enough to enter a sensitive workflow.',
    },
    {
      status: 'Open question',
      kind: 'Discovery work',
      title: 'The next loop still has explicit questions to answer before the thesis is locked.',
      points: OPEN_QUESTIONS.slice(0, 4),
      sourceLabel: 'Current discovery plan',
      why: 'The strategic-acquirer case stays credible when it shows disciplined uncertainty instead of pretending the path is already fully proven.',
    },
  ]

  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        <div className="content-rail max-w-6xl mx-auto space-y-8">
          <Shell>
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-serif text-[2.6rem] sm:text-[3.3rem] leading-[0.92] max-w-5xl" style={{ color: 'var(--text-primary)' }}>
                  A workflow-control wedge that proves value before it predicts the future.
                </h1>
                <p className="text-base sm:text-[1.05rem] leading-relaxed max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
                  {LEAN_EXIT_CASE.intro}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {LEAN_EXIT_CASE.evidenceOverview.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-lg border p-4"
                    style={{
                      borderColor: item.label === 'Validated'
                        ? 'var(--status-success-border)'
                        : item.label === 'Hypothesis'
                          ? 'var(--status-warning-border)'
                          : 'var(--accent-border-soft)',
                      backgroundColor: item.label === 'Validated'
                        ? 'var(--status-success-soft)'
                        : item.label === 'Hypothesis'
                          ? 'var(--status-warning-soft)'
                          : 'var(--accent-softer)',
                    }}
                  >
                    <div className="mb-3">
                      <StatusPill tone={item.label === 'Validated' ? 'success' : item.label === 'Hypothesis' ? 'warning' : 'info'}>
                        {item.label}
                      </StatusPill>
                    </div>
                    <BulletList
                      items={item.items}
                      color={item.label === 'Validated' ? 'var(--status-success)' : item.label === 'Hypothesis' ? 'var(--status-warning)' : 'var(--accent)'}
                    />
                  </article>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <MetricCard label="Buyer-language line" value="Workflow-first" detail={LEAN_EXIT_CASE.wedge.buyerOneLiner} tone="warning" />
                <MetricCard label="Acquirer-language line" value="Strategic fit" detail={LEAN_EXIT_CASE.wedge.acquirerOneLiner} tone="accent" />
                <MetricCard label="Cycle-time compression" value="Days" detail={LEAN_EXIT_CASE.wedge.tenX} tone="success" />
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--text-tertiary)' }}>
                  Documents
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Keep the source documents close to the argument, but let the page itself carry the narrative and proof.
                </p>
                <LazyLeanExitDownloads />
              </div>
            </div>
          </Shell>

          <Shell>
            <NarrativeSection
              eyebrow="1. Wedge and thesis"
              title="The first wedge is venue-change response because it is painful, repeated, and bounded enough to prove quickly."
              lead="FIXFriend earns the right to a bigger strategic story by solving one recurring workflow mess first."
            >
              <div className="space-y-4 max-w-4xl">
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {LEAN_EXIT_CASE.wedge.tenX}
                </p>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  This is why the lean-exit narrative works better than a long-range category forecast. The goal is to show where the company can prove operational value now, then follow the research toward the strongest strategic-fit path.
                </p>
              </div>

              <ProofStack
                items={wedgeProof}
                intro="The strongest proof in the first chapter combines interview evidence with public market signals. The narrative claim and the research should sit in the same reading lane."
              />

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
                    Pain matrix
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {PAIN_MATRIX.wedgeExplanation}
                  </p>
                  <PainMatrixPlot items={PAIN_MATRIX.items} />
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
                    Wedge signals
                  </div>
                  <div className="space-y-4">
                    {PAIN_MATRIX.items
                      .filter((item) => item.frequency.includes('High') || item.impact.includes('High'))
                      .slice(0, 4)
                      .map((item) => (
                        <div key={item.id} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: 'var(--border-subtle)' }}>
                          <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                            {item.label}
                          </div>
                          <div className="text-xs font-mono mt-1" style={{ color: 'var(--text-tertiary)' }}>
                            {item.frequency} frequency · {item.impact} impact
                          </div>
                          <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                            {item.summary}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </NarrativeSection>
          </Shell>

          <Shell>
            <NarrativeSection
              eyebrow="2. Product boundary and workflow credibility"
              title="The product has to look like a disciplined workflow layer, not an undefined AI catch-all."
              lead="The product boundary is clear: what FIXFriend does, what it does not do, and why the operating model is credible to buyers who care about control."
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <article className="rounded-lg border p-5" style={{ borderColor: 'var(--status-success-border)', backgroundColor: 'var(--status-success-soft)' }}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                    It does
                  </div>
                  <div className="mt-4">
                    <BulletList items={LEAN_EXIT_CASE.scope.does} color="var(--status-success)" />
                  </div>
                </article>

                <article className="rounded-lg border p-5" style={{ borderColor: 'var(--status-warning-border)', backgroundColor: 'var(--status-warning-soft)' }}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-warning)' }}>
                    It does not
                  </div>
                  <div className="mt-4">
                    <BulletList items={LEAN_EXIT_CASE.scope.doesNot} color="var(--status-warning)" />
                  </div>
                </article>
              </div>

              <ProofStack
                items={boundaryProof}
                intro="The product boundary only becomes persuasive when the page makes the proof explicit: named workflow pain, named trust barriers, and a clearly bounded autonomy model."
              />

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
                    Competitive reading
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Public incumbents already cover onboarding, testing, connectivity, or adjacent assurance. The whitespace is the cross-party workflow and evidence layer that sits between those systems.
                  </p>
                  <Table
                    columns={[
                      { key: 'name', label: 'Option' },
                      { key: 'whatTheyDo', label: 'What they do' },
                      { key: 'gap', label: 'Why FIXFriend is different' },
                    ]}
                    rows={COMPETITION_MATRIX.filter((item) => ['Manual status quo', 'Broadridge', 'FIXFriend'].includes(item.name))}
                  />
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
                    Technical moat claim
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {PRODUCT_CONTEXT_CORE.summary}
                  </p>
                  <div className="rounded-lg border p-4" style={{ borderColor: 'var(--status-danger-border)', backgroundColor: 'var(--status-danger-soft)' }}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-danger)' }}>
                      Hard boundary
                    </div>
                    <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                      {PRODUCT_AUTONOMY_RULES.hardBoundary}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                      {PRODUCT_MERMAID_DIAGRAMS.architecture.title}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {PRODUCT_MERMAID_DIAGRAMS.architecture.subtitle}
                    </p>
                    <MermaidDiagram
                      diagram={PRODUCT_MERMAID_DIAGRAMS.architecture.diagram}
                      theme={theme}
                      minHeight={420}
                    />
                  </div>
                </div>
              </div>
            </NarrativeSection>
          </Shell>

          <Shell>
            <NarrativeSection
              eyebrow="3. Strategic relevance and economic logic"
              title="The company becomes strategically interesting if the wedge compounds into attach revenue, rollout speed, and client stickiness."
              lead="This chapter should connect the product shape to the business case: why an incumbent would care, how the economics work, and what evidence supports the pricing posture."
            >
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
                  Why this could be bought
                </div>
                <BulletList items={LEAN_EXIT_CASE.whyBought.points} color="var(--amber)" />
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {[MARKET_MODEL.tam, MARKET_MODEL.sam, MARKET_MODEL.som, MARKET_MODEL.strategicAttach].map((item) => (
                  <MetricCard
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    detail={item.detail}
                    tone={item.label === 'Strategic Attach' ? 'success' : 'accent'}
                  />
                ))}
              </div>

              <ProofStack
                items={economicProof}
                intro="The economic story is stronger when interview-led strategic signals sit beside pricing and market logic, not in different parts of the page."
              />

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
                    Pricing research tracker
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Public pricing signals belong inside the story because they reinforce how buyers already think about workflow, control, and enterprise automation spend.
                  </p>
                  <Table
                    columns={[
                      { key: 'name', label: 'Player' },
                      { key: 'signal', label: 'Pricing / budget signal' },
                      {
                        key: 'sourceLabel',
                        label: 'Source',
                        render: (_value, row) => <SourceLink label={row.sourceLabel} href={row.sourceUrl} />,
                      },
                    ]}
                    rows={PRICING_TRACKER.slice(0, 5)}
                  />
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
                    Unit economics
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {UNIT_ECONOMICS.intro}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {UNIT_ECONOMICS.roleWages.map((item) => (
                      <article
                        key={item.label}
                        className="rounded-lg border p-4"
                        style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
                      >
                        <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                          {item.label}
                        </div>
                        <div className="font-serif text-[1.55rem] leading-none mt-3" style={{ color: 'var(--text-primary)' }}>
                          {item.value}
                        </div>
                        <div className="text-xs mt-3">
                          <SourceLink label={item.sourceLabel} href={item.sourceUrl} />
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                        Pricing logic
                      </div>
                      <div className="mt-3">
                        <BulletList items={UNIT_ECONOMICS.pricingLogic} color="var(--accent)" />
                      </div>
                    </article>
                    <article className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                        Path to viability
                      </div>
                      <div className="mt-3">
                        <BulletList items={UNIT_ECONOMICS.viability} color="var(--status-success)" />
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </NarrativeSection>
          </Shell>

          <Shell>
            <NarrativeSection
              eyebrow="4. Validation plan and path to strategic relevance"
              title="The validation loop has to prove buyer pull, strategic fit, and a credible buy-or-embed path at the same time."
              lead="This chapter should close the lean-exit case by showing that the team knows what must be tested next, what counts as success, and how the wedge connects to broader strategic relevance."
            >
              <div className="grid gap-4 lg:grid-cols-[1.05fr,0.95fr]">
                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
                    Validation loop
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-warning)' }}>
                        Riskiest assumption
                      </div>
                      <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                        {VALIDATION_PLAN.riskiestAssumption}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                        Hypothesis
                      </div>
                      <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                        {VALIDATION_PLAN.hypothesis}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {VALIDATION_PLAN.timeline.map((item) => (
                        <div key={item.label} className="border-l pl-4" style={{ borderColor: 'var(--accent-border-soft)' }}>
                          <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                            {item.label}
                          </div>
                          <div className="text-sm mt-2" style={{ color: 'var(--text-primary)' }}>
                            {item.focus}
                          </div>
                          <div className="text-sm leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
                            {item.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <article className="rounded-lg border p-5" style={{ borderColor: 'var(--status-success-border)', backgroundColor: 'var(--status-success-soft)' }}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                      Success metrics
                    </div>
                    <div className="mt-4">
                      <BulletList items={VALIDATION_PLAN.successMetrics} color="var(--status-success)" />
                    </div>
                  </article>

                  <article className="rounded-lg border p-5" style={{ borderColor: 'var(--status-danger-border)', backgroundColor: 'var(--status-danger-soft)' }}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-danger)' }}>
                      Pivot triggers
                    </div>
                    <div className="mt-4">
                      <BulletList items={VALIDATION_PLAN.pivotTriggers} color="var(--status-danger)" />
                    </div>
                  </article>
                </div>
              </div>

              <ProofStack
                items={validationProof}
                intro="The next-step plan is strongest when interviews shape exactly what the team needs to validate next, rather than sitting as standalone research."
              />

              <div className="grid gap-4 lg:grid-cols-2">
                <StepList title={BUYER_DECISION_PROCESS.title} steps={BUYER_DECISION_PROCESS.steps} tone="warning" />
                <StepList title={ECONOMIC_BUYER_DECISION_PROCESS.title} steps={ECONOMIC_BUYER_DECISION_PROCESS.steps} tone="accent" />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
                    GTM playbook
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                        First 10
                      </div>
                      <div className="mt-3">
                        <BulletList items={GTM_PLAYBOOK.first10} color="var(--amber)" />
                      </div>
                    </article>
                    <article className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                        Next 100
                      </div>
                      <div className="mt-3">
                        <BulletList items={GTM_PLAYBOOK.next100} color="var(--accent)" />
                      </div>
                    </article>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
                    What gets built first
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <PriorityColumn label="MVP" items={FEATURE_PRIORITIES.mvp} tone="success" />
                    <PriorityColumn label="V2" items={FEATURE_PRIORITIES.v2} tone="accent" />
                    <PriorityColumn label="Future" items={FEATURE_PRIORITIES.future} tone="warning" />
                  </div>
                </div>
              </div>
            </NarrativeSection>
          </Shell>
        </div>
      </div>
    </div>
  )
}
