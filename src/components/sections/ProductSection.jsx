import {
  AlertTriangle,
  Database,
  ShieldCheck,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import MermaidDiagram from '../ui/MermaidDiagram'
import BulletList from '../ui/BulletList'
import {
  PRODUCT_WORKFLOW_STAGES,
  PRODUCT_CONTENT,
  PRODUCT_OPERATING_MODEL,
  PRODUCT_AGENT_SYSTEM,
  PRODUCT_CONTEXT_CORE,
  PRODUCT_OUTPUTS,
  PRODUCT_AUTONOMY_RULES,
  PRODUCT_MERMAID_DIAGRAMS,
  INTERVIEW_TRACKER,
} from '../../data/content'
import { TONE_STYLES } from '../../data/toneStyles'

function SemanticCallout({ icon: Icon, label, body, tone = 'accent' }) {
  const style = TONE_STYLES[tone]

  return (
    <div
      className="rounded-lg border px-4 py-3"
      style={{ borderColor: style.borderColor, backgroundColor: style.backgroundColor }}
    >
      <div className="flex items-start gap-3">
        <Icon size={16} style={{ color: style.color, marginTop: '2px' }} />
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: style.color }}>
            {label}
          </div>
          <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}

function MetricStrip({ items }) {
  return (
    <div className="product-metric-strip">
      {items.map((item) => (
        <div key={item.label} className="product-metric-cell">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--text-tertiary)' }}>
            {item.label}
          </div>
          <div className="font-serif text-[1.35rem] leading-none mt-2" style={{ color: item.color }}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  )
}

function WorkflowStageCard({ stage, index }) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-8 w-8 items-center justify-center border"
          style={{
            borderColor: 'var(--accent-border-soft)',
            backgroundColor: 'var(--accent-softer)',
            color: 'var(--accent)',
          }}
        >
          <span className="font-mono text-[11px]">{String(index + 1).padStart(2, '0')}</span>
        </span>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
          {stage.label}
        </div>
      </div>

      <div className="product-stage-compare mt-4">
        <div className="product-stage-pane">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-danger)' }}>
            Today
          </div>
          <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
            {stage.today}
          </p>
          <p className="text-xs leading-relaxed mt-2" style={{ color: 'var(--text-tertiary)' }}>
            {stage.todayDrag}
          </p>
        </div>

        <div className="product-stage-pane">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
            With FIXFriend
          </div>
          <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
            {stage.fixfriend}
          </p>
          <p className="text-xs leading-relaxed mt-2" style={{ color: 'var(--text-tertiary)' }}>
            {stage.fixfriendImpact}
          </p>
        </div>
      </div>
    </div>
  )
}

function ProductSectionBlock({ eyebrow, title, children }) {
  return (
    <section className="product-flat-section">
      {eyebrow ? (
        <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-serif text-[2rem] leading-[0.95] mt-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      <div className="mt-4 space-y-4">
        {children}
      </div>
    </section>
  )
}

function FlatRows({ items, renderItem, className = 'product-row-list' }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.id ?? item.name} className="product-row">
          {renderItem(item)}
        </div>
      ))}
    </div>
  )
}

export default function ProductSection({ theme = 'dark' }) {
  const s = PRODUCT_CONTENT.solution
  const w = PRODUCT_CONTENT.whatCustomersBuy
  const t = PRODUCT_CONTENT.targetBuyer

  const productQuotes = INTERVIEW_TRACKER.flatMap((entry) => {
    return entry.keyQuotes.slice(0, 1).map((quote) => ({
      id: `${entry.id}-${quote.label}`,
      text: quote.text,
      attribution: `${entry.name}, ${entry.role}`,
    }))
  }).slice(0, 3)

  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      <SectionHeader
        label="PRODUCT"
        hideOnMobile
        right={(
          <span
            className="font-mono text-xs px-2.5 py-1.5 rounded-sm"
            style={{
              color: 'var(--accent)',
              backgroundColor: 'var(--accent-softer)',
              border: '1px solid var(--accent-border-soft)',
            }}
          >
            GAP + PRODUCT in one flow
          </span>
        )}
      />

      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        <div className="content-rail space-y-0">
          <ProductSectionBlock eyebrow="Product" title="From venue-change scramble to days-scale response">
            <p className="text-base leading-relaxed max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
              FIXFriend is an agent-operated change-response system for trading technology vendors, starting with venue change as the first wedge. It turns one repeated operational mess into one controlled workflow: capture the notice, recover the missing context, decide whether the change stays autonomous in UAT, structure human-actionable outputs in existing tools, and leave the evidence trail behind as the work happens.
            </p>

            <MetricStrip
              items={[
                { label: 'Bounded cases', value: 'Days', color: 'var(--status-success)' },
                { label: 'Execution boundary', value: 'UAT only', color: 'var(--accent)' },
                { label: 'Production writes', value: 'Never', color: 'var(--status-danger)' },
              ]}
            />

            <SemanticCallout
              icon={AlertTriangle}
              label="Production boundary"
              body="FIXFriend never deploys to production, never writes production config, and never acts in live production environments. The autonomy model stops at sandbox, test, and UAT."
              tone="danger"
            />

            <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                Visual walkthrough
              </div>
              <p className="text-sm leading-relaxed mt-2 max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
                Start with the operating flow before the detailed copy: minor changes stay autonomous to UAT, major changes escalate into a structured human project, and Expoty holds the shared context across both paths.
              </p>
              <div className="space-y-5 mt-4">
                {[PRODUCT_MERMAID_DIAGRAMS.minor, PRODUCT_MERMAID_DIAGRAMS.major].map((item) => (
                  <div key={item.title}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed mt-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {item.subtitle}
                    </p>
                    <MermaidDiagram diagram={item.diagram} theme={theme} minHeight={340} />
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                  {PRODUCT_MERMAID_DIAGRAMS.architecture.title}
                </div>
                <p className="text-sm leading-relaxed mt-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {PRODUCT_MERMAID_DIAGRAMS.architecture.subtitle}
                </p>
                <MermaidDiagram
                  diagram={PRODUCT_MERMAID_DIAGRAMS.architecture.diagram}
                  theme={theme}
                  minHeight={320}
                />
              </div>
            </div>
          </ProductSectionBlock>

          <ProductSectionBlock eyebrow="Workflow" title="Where the drag enters, and where FIXFriend removes it">
            <p className="text-sm leading-relaxed max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
              The product page now carries the gap directly. Each stage shows the current operational drag and the product response in the same reading sequence.
            </p>
            <div className="space-y-3">
              {PRODUCT_WORKFLOW_STAGES.map((stage, index) => (
                <WorkflowStageCard key={stage.id} stage={stage} index={index} />
              ))}
            </div>
          </ProductSectionBlock>

          <ProductSectionBlock eyebrow="Operating model" title={s.title}>
            <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
              {s.intro}
            </p>
            <BulletList items={s.bullets} color="var(--status-success)" />

            <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <h3 className="font-serif text-[1.6rem] leading-none" style={{ color: 'var(--text-primary)' }}>
                {s.boundary.title}
              </h3>
              <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                {s.boundary.body}
              </p>
            </div>

            <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                {w.label}
              </div>
              <h3 className="font-serif text-[1.6rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                {w.title}
              </h3>
              <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                {w.body}
              </p>
            </div>

            <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <h3 className="font-serif text-[1.6rem] leading-none" style={{ color: 'var(--text-primary)' }}>
                {t.title}
              </h3>
              <p className="text-sm mt-3" style={{ color: 'var(--text-primary)' }}>
                Primary buyer: {t.primary}
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                {t.budget}
              </p>
              <div className="mt-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-tertiary)' }}>
                  Buying triggers
                </div>
                <ul className="mt-2 space-y-1.5">
                  {t.triggers.map((trigger) => (
                    <li key={trigger} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {trigger}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ProductSectionBlock>

          <ProductSectionBlock eyebrow="System" title="Autonomy, context, outputs, and agents">
            <SemanticCallout
              icon={Database}
              label={PRODUCT_CONTEXT_CORE.title}
              body={PRODUCT_CONTEXT_CORE.summary}
              tone="accent"
            />

            <SemanticCallout
              icon={ShieldCheck}
              label="Hard boundary"
              body={PRODUCT_AUTONOMY_RULES.hardBoundary}
              tone="danger"
            />

            <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                Operating principles
              </div>
              <div className="mt-3">
                <BulletList items={PRODUCT_OPERATING_MODEL.principles} />
              </div>
            </div>

            <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                Interview-backed pain points
              </div>
              <div className="mt-3">
                <BulletList items={PRODUCT_CONTENT.painPoints} color="var(--amber)" />
              </div>
            </div>

            {productQuotes.length > 0 && (
              <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                  In their words
                </div>
                <FlatRows
                  items={productQuotes}
                  renderItem={(item) => (
                    <>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        “{item.text}”
                      </p>
                      <p className="text-xs mt-2 font-mono tracking-[0.12em]" style={{ color: 'var(--text-tertiary)' }}>
                        {item.attribution}
                      </p>
                    </>
                  )}
                />
              </div>
            )}

            <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                Workflow outputs
              </div>
              <FlatRows
                items={PRODUCT_OUTPUTS}
                className="product-inline-list"
                renderItem={(item) => (
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{item.name}:</strong>{' '}
                    {item.detail}
                  </p>
                )}
              />
            </div>

            <div className="border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                Agent system
              </div>
              <FlatRows
                items={PRODUCT_AGENT_SYSTEM}
                className="product-inline-list"
                renderItem={(agent) => (
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{agent.name}:</strong>{' '}
                    {agent.role}
                  </p>
                )}
              />
            </div>
          </ProductSectionBlock>

        </div>
      </div>
    </div>
  )
}
