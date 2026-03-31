import { useState } from 'react'
import {
  AlertTriangle,
  Bot,
  Database,
  FileCheck,
  FileText,
  GitBranch,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
} from 'lucide-react'
import {
  PRODUCT_CONTEXT_CORE,
  PRODUCT_OPERATING_MODEL,
} from '../../content/raidical/product'
import { TONE_STYLES } from '../../data/toneStyles'

const SCENARIOS = [
  { id: 'minor', label: 'Minor Change Autopilot' },
  { id: 'major', label: 'Major Change Escalation' },
]

const OUTPUT_ICONS = {
  'Requirements bundle': FileText,
  'UAT branch and implementation plan': GitBranch,
  'Regression tests and results': TestTube2,
  'Update docs and explainer': FileText,
  'Jira tickets and owner routing': Workflow,
  'Structured channel summary': MessagesSquare,
  'Audit log with spec sources': ShieldCheck,
  'Escalation project page': FileText,
  'Jira epic and owner tags': Workflow,
  'Confluence or Notion brief': FileText,
  'Blocked-state channel summary': MessagesSquare,
  'Publisher outreach log': AlertTriangle,
  'Audit bundle and decision record': ShieldCheck,
}

function MetricCard({ label, value, tone = 'neutral' }) {
  const styles = TONE_STYLES[tone] || TONE_STYLES.neutral
  // neutral tone uses text-primary for the value to keep it prominent
  const valueColor = tone === 'neutral' ? 'var(--text-primary)' : styles.color

  return (
    <div
      className="border px-3 py-3"
      style={{
        borderColor: styles.borderColor,
        background: styles.backgroundColor,
      }}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
        {label}
      </div>
      <div className="font-serif text-[1.45rem] leading-none mt-2" style={{ color: valueColor }}>
        {value}
      </div>
    </div>
  )
}

function StepRow({ index, text }) {
  return (
    <div className="flex items-start gap-3 border-b pb-3 last:border-b-0 last:pb-0" style={{ borderColor: 'var(--border-subtle)' }}>
      <span
        className="flex h-8 w-8 items-center justify-center border flex-shrink-0"
        style={{
          borderColor: 'var(--accent-border-soft)',
          backgroundColor: 'var(--surface)',
          color: 'var(--accent)',
        }}
      >
        <span className="font-mono text-[11px]">{index}</span>
      </span>
      <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {text}
      </div>
    </div>
  )
}

function OutputCard({ label }) {
  const Icon = OUTPUT_ICONS[label] || Sparkles

  return (
    <div
      className="rounded-lg border p-4"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
    >
      <div className="flex items-start gap-3">
        <span
          className="flex h-8 w-8 items-center justify-center border flex-shrink-0"
          style={{
            borderColor: 'var(--border-subtle)',
            backgroundColor: 'var(--surface)',
            color: 'var(--accent)',
          }}
        >
          <Icon size={14} strokeWidth={1.8} />
        </span>
        <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {label}
        </div>
      </div>
    </div>
  )
}

export default function ProductDemo() {
  const [scenario, setScenario] = useState('minor')
  const lane = PRODUCT_OPERATING_MODEL.lanes[scenario]

  return (
    <div
      className="panel-shell rounded-xl p-5 md:p-6"
      style={{
        borderColor: 'var(--border-subtle)',
        background:
          'linear-gradient(135deg, rgba(249,115,22,0.08), transparent 25%), linear-gradient(315deg, rgba(59,130,246,0.08), transparent 35%), var(--surface)',
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="eyebrow mb-3" style={{ color: 'var(--amber)' }}>
              Product Operating Demo
            </div>
            <h3 className="font-serif text-[2.3rem] leading-[0.92]" style={{ color: 'var(--text-primary)' }}>
              Autonomous for bounded minor changes. Coordinated for major ones.
            </h3>
            <p className="text-sm md:text-base mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              FIXFriend monitors venue notices, retrieves source context through Expoty, decides whether the change can
              run autonomously in UAT, and either emits the working bundle or opens a structured human project with channel-ready outputs.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 lg:w-[420px]">
            {lane.metrics.map((metric) => (
              <MetricCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
            ))}
          </div>
        </div>

        <div
          className="rounded-lg border px-4 py-3"
          style={{ borderColor: 'var(--status-danger-border)', backgroundColor: 'var(--status-danger-soft)' }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle size={16} style={{ color: 'var(--status-danger)', marginTop: '2px' }} />
            <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Agents operate only in sandboxed environments, test environments, or UAT. FIXFriend never deploys to
              production, never writes production config, and never acts in live production environments.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map((item) => {
            const active = item.id === scenario
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setScenario(item.id)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border"
                style={{
                  borderColor: active ? 'var(--accent-border-soft)' : 'var(--border-subtle)',
                  backgroundColor: active ? 'var(--accent-softer)' : 'var(--surface)',
                  color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {item.id === 'minor' ? <Bot size={14} /> : <AlertTriangle size={14} />}
                {item.label}
              </button>
            )
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.92fr,1.08fr]">
          <div className="border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
              {lane.label}
            </div>
            <h4 className="font-serif text-[1.9rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
              {lane.trigger}
            </h4>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
              {lane.summary}
            </p>

            <div className="space-y-4 mt-5">
              {lane.steps.map((step, index) => (
                <StepRow key={step} index={index + 1} text={step} />
              ))}
            </div>

            <div
              className="rounded-lg border p-4 mt-5"
              style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                Result
              </div>
              <div className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                {lane.result}
              </div>
            </div>
          </div>

          <div className="border p-4 md:p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
            <div className="grid gap-3 md:grid-cols-2">
              {lane.outputs.map((output) => (
                <OutputCard key={output} label={output} />
              ))}
            </div>

            <div
              className="rounded-lg border p-4 mt-5"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center border flex-shrink-0"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--accent)',
                  }}
                >
                  <Database size={14} strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-primary)' }}>
                    {PRODUCT_CONTEXT_CORE.title}
                  </div>
                  <div className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                    {PRODUCT_CONTEXT_CORE.summary}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg border p-4 mt-4"
              style={{ borderColor: 'var(--status-success-border)', backgroundColor: 'var(--status-success-soft)' }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center border flex-shrink-0"
                  style={{
                    borderColor: 'var(--status-success-border)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--status-success)',
                  }}
                >
                  <FileCheck size={14} strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                    What the buyer is actually buying
                  </div>
                  <div className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                    A system that sources specs, closes coordination gaps, generates UAT-ready outputs in existing
                    workflows, and leaves provenance-backed evidence behind as the work happens.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
