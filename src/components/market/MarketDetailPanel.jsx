import { MARKET_NODES, MARKET_DEFAULT_DETAIL, DEFINITION } from '../../data/content'
import StatusPill from '../ui/StatusPill'
import BrandLogo from '../ui/BrandLogo'

const STATUS_TONES = {
  amber: 'warning',
  green: 'success',
  blue: 'info',
  red: 'danger',
}

function Section({ label, children }) {
  return (
    <div className="mb-4">
      <div
        className="font-mono text-xs tracking-widest mb-2 uppercase"
        style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
      >
        {label}
      </div>
      <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </div>
    </div>
  )
}

function PanelHeading({ node, label, titleColor = 'var(--text-primary)' }) {
  return (
    <>
      <div
        className="font-mono text-xs tracking-widest mb-3 uppercase"
        style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
      >
        {label}
      </div>
      <div className="flex items-center gap-3 mb-3">
        <BrandLogo logoKey={node.id} label={node.title} size={24} />
        <h3 className="font-serif text-[1.7rem] leading-none" style={{ color: titleColor }}>
          {node.title}
        </h3>
      </div>
    </>
  )
}

function DefaultPanel() {
  const d = MARKET_DEFAULT_DETAIL
  return (
    <div className="animate-slide-in-right">
      <div
        className="font-mono text-xs tracking-widest mb-3 uppercase"
        style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
      >
        OVERVIEW
      </div>
      <h3
        className="font-serif text-[1.8rem] leading-none mb-3"
        style={{ color: 'var(--text-primary)' }}
      >
        {d.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {d.body}
      </p>
      <p
        className="font-mono text-xs px-3 py-2 border"
        style={{
          color: 'var(--text-secondary)',
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--surface3)',
        }}
      >
        {d.hint}
      </p>
    </div>
  )
}

function RegulatoryPanel({ node }) {
  return (
    <div className="animate-slide-in-right">
      <PanelHeading node={node} label="REGULATION" />
      <div className="mb-4">
        <StatusPill tone={STATUS_TONES[node.statusColor]}>{node.status}</StatusPill>
      </div>
      {node.risk && (
        <div
          className="text-xs px-3 py-2 border mb-4"
          style={{
            color: 'var(--status-warning)',
            borderColor: 'var(--status-warning-border)',
            backgroundColor: 'var(--status-warning-soft)',
          }}
        >
          Risk: {node.risk}
        </div>
      )}
      {node.note && (
        <div
          className="text-xs px-3 py-2 border mb-4"
          style={{
            color: 'var(--status-info)',
            borderColor: 'var(--status-info-border)',
            backgroundColor: 'var(--status-info-soft)',
          }}
        >
          Note: {node.note}
        </div>
      )}
      {node.priorities ? (
        <Section label="Key Priorities">
          <ul className="space-y-1.5">
            {node.priorities.map((p, i) => (
              <li key={i} className="flex items-center gap-2">
                <span style={{ color: 'var(--accent)' }}>•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <Section label="Summary">{node.body}</Section>
      )}
      <Section label="Key Implication">
        <span style={{ color: 'var(--text-primary)' }}>{node.implication}</span>
      </Section>
    </div>
  )
}

function VenuesPanel({ node }) {
  return (
    <div className="animate-slide-in-right">
      <PanelHeading node={node} label="SUPPLY SIDE" />
      <div className="flex flex-wrap gap-1.5 mb-4">
        {node.venues.map((v) => (
          <span
            key={v}
            className="font-mono text-xs px-2 py-0.5 rounded-sm border"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface)',
            }}
          >
            {v}
          </span>
        ))}
      </div>
      <Section label="What Happens">{node.body}</Section>
      <Section label="Scale">{node.scale}</Section>
    </div>
  )
}

function TriggerPanel({ node }) {
  return (
    <div className="animate-slide-in-right">
      <PanelHeading node={node} label="THE TRIGGER" titleColor="var(--status-warning)" />
      <div className="mb-4">
        <StatusPill tone="warning">{node.status}</StatusPill>
      </div>
      <Section label="What It Is">{node.body}</Section>
      <Section label="Why It Matters">
        <span style={{ color: 'var(--text-primary)' }}>{node.implication}</span>
      </Section>
    </div>
  )
}

function InlineBold({ text }) {
  const parts = []
  let rest = text
  let key = 0
  while (rest.length) {
    const bold = rest.match(/\*\*([^*]+)\*\*/)
    if (bold) {
      const before = rest.slice(0, bold.index)
      if (before) parts.push(<span key={key++}>{before}</span>)
      parts.push(<strong key={key++} style={{ color: 'var(--text-primary)' }}>{bold[1]}</strong>)
      rest = rest.slice(bold.index + bold[0].length)
    } else {
      parts.push(<span key={key++}>{rest}</span>)
      break
    }
  }
  return <>{parts}</>
}

function VendorsPanel({ node }) {
  const ms = DEFINITION.marketSize
  return (
    <div className="animate-slide-in-right">
      <PanelHeading node={node} label="VENDOR LAYER" />
      <div
        className="font-mono text-xs px-2 py-1 rounded-sm mb-4 inline-block"
        style={{
          color: 'var(--accent)',
          backgroundColor: 'var(--accent-soft)',
          border: '1px solid var(--accent-border-soft)',
        }}
      >
        {node.count}
      </div>
      <Section label="Includes">{node.includes}</Section>
      <Section label="Why This Layer Matters">{node.body}</Section>
      <Section label="Today">
        <span style={{ color: 'var(--status-danger)' }}>{node.today}</span>
      </Section>

      <div
        className="mt-6 pt-4 border-t"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <div
          className="font-mono text-xs tracking-widest mb-3 uppercase"
          style={{ color: 'var(--amber)', letterSpacing: '0.1em' }}
        >
          Market size
        </div>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <div>
            <span className="font-mono text-xs font-semibold block mb-1" style={{ color: 'var(--text-primary)' }}>
              {ms.entry.label}
            </span>
            <p className="whitespace-pre-line">
              {ms.entry.body.split('\n\n').map((p, i) => (
                <span key={i}>
                  {i > 0 && <><br /><br /></>}
                  {p.split('\n').map((line, j) => (
                    <span key={j}>
                      <InlineBold text={line} />
                      {j < p.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          </div>
          {ms.attach ? (
            <div>
              <span className="font-mono text-xs font-semibold block mb-1" style={{ color: 'var(--text-primary)' }}>
                {ms.attach.label}
              </span>
              <p>{ms.attach.body}</p>
            </div>
          ) : null}
          <div>
            <span className="font-mono text-xs font-semibold block mb-1" style={{ color: 'var(--text-primary)' }}>
              {ms.expansion.label}
            </span>
            <p>{ms.expansion.body}</p>
          </div>
        </div>
        <div
          className="mt-3 rounded-lg px-3 py-2 border"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
        >
          <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>SAM: </span>
          <span style={{ color: 'var(--text-primary)' }}><InlineBold text={ms.sam} /></span>
        </div>
        <div
          className="mt-2 rounded-lg px-3 py-2 border"
          style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}
        >
          <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>SOM: </span>
          <span style={{ color: 'var(--text-secondary)' }}>{ms.som}</span>
        </div>
      </div>
    </div>
  )
}

function FirmsPanel({ node }) {
  return (
    <div className="animate-slide-in-right">
      <PanelHeading node={node} label="DOWNSTREAM CLIENTS" />
      <div
        className="font-mono text-xs px-2 py-1 rounded-sm mb-4 inline-block"
        style={{
          color: 'var(--accent)',
          backgroundColor: 'var(--accent-soft)',
          border: '1px solid var(--accent-border-soft)',
        }}
      >
        {node.count}
      </div>
      <Section label="Includes">{node.includes}</Section>
      <Section label="What They Feel">{node.body}</Section>
      <Section label="Today">
        <span style={{ color: 'var(--status-danger)' }}>{node.today}</span>
      </Section>
    </div>
  )
}

function RegulatorsPanel({ node }) {
  return (
    <div className="animate-slide-in-right">
      <PanelHeading node={node} label="OVERSIGHT" />
      <Section label="EU Regulators">{node.eu}</Section>
      <Section label="UK (Separate Regime)">{node.uk}</Section>
      <Section label="What They Demand">{node.body}</Section>
      <Section label="How They're Evolving">
        <span style={{ color: 'var(--text-primary)' }}>{node.evolution}</span>
      </Section>
    </div>
  )
}

const PANEL_MAP = {
  mifir: RegulatoryPanel,
  aiact: RegulatoryPanel,
  dora: RegulatoryPanel,
  esma: RegulatoryPanel,
  venues: VenuesPanel,
  trigger: TriggerPanel,
  vendors: VendorsPanel,
  firms: FirmsPanel,
  regulators: RegulatorsPanel,
}

export default function MarketDetailPanel({ activeNodeId }) {
  if (!activeNodeId) return <DefaultPanel />

  const node = MARKET_NODES[activeNodeId]
  if (!node) return <DefaultPanel />

  const PanelComponent = PANEL_MAP[activeNodeId]
  if (!PanelComponent) return <DefaultPanel />

  return <PanelComponent key={activeNodeId} node={node} />
}
