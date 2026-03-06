import { Clock, Zap } from 'lucide-react'
import { GAP } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'

function ProcessStep({ step, tint, isLast }) {
  const isRed = tint === 'red'
  const highlightColor = isRed ? 'var(--status-danger)' : 'var(--status-success)'
  const dimColor = isRed ? 'var(--status-danger-soft)' : 'var(--status-success-soft)'
  const dimBorder = isRed ? 'var(--status-danger-border)' : 'var(--status-success-border)'

  return (
    <div className="relative flex gap-3 pb-4" style={{ paddingBottom: isLast ? 0 : '16px' }}>
      {/* Vertical connector line */}
      {!isLast && (
        <div
          className="absolute"
          style={{
            left: '15px',
            top: '28px',
            width: '1px',
            bottom: '-4px',
            background: `linear-gradient(to bottom, ${isRed ? 'var(--status-danger)' : 'var(--status-success)'}, transparent)`,
            opacity: 0.4,
          }}
        />
      )}

      {/* Step number circle */}
      <div
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-mono text-xs font-bold z-10"
        style={{
          backgroundColor: step.highlight ? dimColor : 'var(--surface2)',
          border: `1px solid ${step.highlight ? dimBorder : 'var(--border-subtle)'}`,
          color: step.highlight ? highlightColor : 'var(--text-secondary)',
        }}
      >
        {step.number}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="font-mono text-xs font-semibold tracking-wider"
            style={{
              color: step.highlight ? highlightColor : 'var(--text-secondary)',
              letterSpacing: '0.08em',
            }}
          >
            {step.title}
          </span>
          {step.time && (
            <span
              className="font-mono text-xs px-1.5 py-0.5 rounded-sm flex items-center gap-1"
              style={{
                color: isRed ? 'var(--status-danger)' : 'var(--status-success)',
                backgroundColor: isRed ? 'var(--status-danger-soft)' : 'var(--status-success-soft)',
              }}
            >
              <Clock size={9} />
              {step.time}
            </span>
          )}
        </div>
        <p
          className="text-xs leading-relaxed"
          style={{ color: step.highlight ? 'var(--text-secondary)' : 'var(--text-tertiary)' }}
        >
          {step.detail}
        </p>
      </div>
    </div>
  )
}

function FlowPanel({ data }) {
  const isRed = data.tint === 'red'
  const accentColor = isRed ? 'var(--status-danger)' : 'var(--accent)'
  const totalBg = isRed ? 'var(--status-danger-soft)' : 'var(--accent-soft)'
  const totalBorder = isRed ? 'var(--status-danger-border)' : 'var(--accent-border-soft)'
  const totalColor = isRed ? 'var(--status-danger)' : 'var(--accent)'

  return (
    <div
      className="rounded-lg border h-full flex flex-col"
      style={{
        borderColor: isRed ? 'var(--status-danger-border)' : 'var(--accent-border-soft)',
        backgroundColor: isRed ? 'var(--status-danger-soft)' : 'var(--accent-softer)',
      }}
    >
      {/* Panel header */}
      <div
        className="px-5 py-4 border-b flex items-center gap-3"
        style={{ borderColor: isRed ? 'var(--status-danger-border)' : 'var(--accent-border-soft)' }}
      >
        <div
          className="w-2.5 h-2.5"
          style={{ backgroundColor: accentColor }}
        />
        <div>
          <div
            className="font-mono text-sm font-bold tracking-widest"
            style={{ color: accentColor, letterSpacing: '0.15em' }}
          >
            {data.title}
          </div>
          <div
            className="text-xs mt-0.5"
            style={{ color: 'var(--muted)' }}
          >
            {data.subtitle}
          </div>
        </div>
        {!isRed && (
          <div className="ml-auto">
            <Zap size={16} style={{ color: 'var(--accent)', opacity: 0.7 }} />
          </div>
        )}
      </div>

      {/* Process steps */}
      <div className="flex-1 px-5 py-4">
        {data.steps.map((step, i) => (
          <ProcessStep
            key={step.number}
            step={step}
            tint={data.tint}
            isLast={i === data.steps.length - 1}
          />
        ))}
      </div>

      {/* Total */}
      <div
        className="px-5 py-3 mx-5 mb-4 rounded font-mono text-xs font-bold tracking-wider text-center"
        style={{
          backgroundColor: totalBg,
          border: `1px solid ${totalBorder}`,
          color: totalColor,
          letterSpacing: '0.08em',
        }}
      >
        {data.total}
      </div>

      {/* Risk callout or summary */}
      {data.risk && (
        <div
          className="mx-5 mb-5 px-4 py-3 rounded border text-xs leading-relaxed"
          style={{
            color: 'var(--text-secondary)',
            borderColor: 'var(--status-danger-border)',
            backgroundColor: 'var(--status-danger-soft)',
          }}
        >
          {data.risk}
        </div>
      )}
      {data.summary && (
        <div
          className="mx-5 mb-5 px-4 py-3 rounded border text-xs leading-relaxed font-medium"
          style={{
            color: 'var(--text-primary)',
            borderColor: 'var(--accent-border-soft)',
            backgroundColor: 'var(--accent-softer)',
          }}
        >
          {data.summary}
        </div>
      )}
    </div>
  )
}

export default function GapSection() {
  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      {/* Section header */}
      <SectionHeader
        label="THE GAP"
        hideOnMobile
        right={(
          <span
            className="font-mono text-xs px-2.5 py-1.5 rounded-sm"
            style={{
              color: 'var(--accent)',
              backgroundColor: 'var(--accent-soft)',
              border: '1px solid var(--accent-border-soft)',
            }}
          >
            MISSING LAYER — No one owns this today
          </span>
        )}
      />

      {/* Split-screen comparison */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-6 overflow-y-auto">
        <FlowPanel data={GAP.today} />
        <FlowPanel data={GAP.automated} />
      </div>
    </div>
  )
}
