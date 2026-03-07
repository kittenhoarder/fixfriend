import { useState } from 'react'
import {
  AlertTriangle,
  ChevronRight,
  Clock3,
  FileCheck,
  HelpCircle,
  Landmark,
  Package,
  RotateCcw,
  ShieldCheck,
  Wrench,
  XCircle,
} from 'lucide-react'
import { PRODUCT_PANIC_SCENARIO } from '../../data/content'

const CORRECT_ALERT = PRODUCT_PANIC_SCENARIO.manual.alerts.find((alert) => alert.correct)
const CORRECT_SYSTEM_IDS = PRODUCT_PANIC_SCENARIO.manual.systems
  .filter((system) => system.correct)
  .map((system) => system.id)

const STAGES = [
  { id: 'manual-alert', label: 'Signal' },
  { id: 'manual-impact', label: 'Impact' },
  { id: 'manual-outcome', label: 'Fallout' },
  { id: 'auto-review', label: 'Runbook' },
  { id: 'auto-outcome', label: 'Control' },
]

function StageRail({ stage }) {
  const activeIndex = STAGES.findIndex((item) => item.id === stage)

  return (
    <div className="grid grid-cols-5 gap-2">
      {STAGES.map((item, index) => {
        const isPast = index < activeIndex
        const isActive = index === activeIndex

        return (
          <div key={item.id} className="space-y-2">
            <div
              className="h-1.5"
              style={{
                background: isActive || isPast
                  ? 'linear-gradient(90deg, var(--amber), var(--accent))'
                  : 'var(--border-subtle)',
              }}
            />
            <div
              className="font-mono text-[10px] uppercase tracking-[0.16em]"
              style={{ color: isActive ? 'var(--text-primary)' : 'var(--muted)' }}
            >
              {item.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MetricCard({ label, value, tone = 'neutral' }) {
  const toneStyles = {
    neutral: {
      borderColor: 'var(--border-subtle)',
      valueColor: 'var(--text-primary)',
      background: 'var(--surface)',
    },
    warning: {
      borderColor: 'var(--status-warning-border)',
      valueColor: 'var(--status-warning)',
      background: 'var(--status-warning-soft)',
    },
    success: {
      borderColor: 'var(--status-success-border)',
      valueColor: 'var(--status-success)',
      background: 'var(--status-success-soft)',
    },
    danger: {
      borderColor: 'var(--status-danger-border)',
      valueColor: 'var(--status-danger)',
      background: 'var(--status-danger-soft)',
    },
    info: {
      borderColor: 'var(--accent-border-soft)',
      valueColor: 'var(--accent)',
      background: 'var(--accent-softer)',
    },
  }

  const styles = toneStyles[tone] || toneStyles.neutral

  return (
    <div
      className="border px-3 py-3"
      style={{
        borderColor: styles.borderColor,
        background: styles.background,
      }}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
        {label}
      </div>
      <div className="font-serif text-[1.55rem] leading-none mt-2" style={{ color: styles.valueColor }}>
        {value}
      </div>
    </div>
  )
}

function FeedRow({ icon: Icon, label, detail, tone = 'neutral' }) {
  const colors = {
    neutral: 'var(--text-secondary)',
    warning: 'var(--status-warning)',
    danger: 'var(--status-danger)',
    success: 'var(--status-success)',
    info: 'var(--accent)',
  }

  return (
    <div className="flex items-start gap-3 border-b pb-3 last:border-b-0 last:pb-0" style={{ borderColor: 'var(--border-subtle)' }}>
      <span
        className="flex h-8 w-8 items-center justify-center border flex-shrink-0"
        style={{
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--surface)',
          color: colors[tone] || colors.neutral,
        }}
      >
        <Icon size={14} strokeWidth={1.8} />
      </span>
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-primary)' }}>
          {label}
        </div>
        <div className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {detail}
        </div>
      </div>
    </div>
  )
}

function ToggleSystemCard({ system, selected, disabled, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(system.id)}
      disabled={disabled}
      className="text-left rounded-md border p-4 transition-all duration-200"
      style={{
        borderColor: selected ? 'var(--accent-border-soft)' : 'var(--border-subtle)',
        background: selected
          ? 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(249,115,22,0.06) 90%, transparent)'
          : 'var(--surface2)',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.08), inset 0 -1px 1px rgba(255,255,255,0.03)',
        opacity: disabled ? 0.78 : 1,
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-primary)' }}>
          {system.label}
        </div>
        <div
          className="h-3 w-3 border"
          style={{
            borderColor: selected ? 'var(--accent)' : 'var(--border)',
            backgroundColor: selected ? 'var(--accent)' : 'transparent',
          }}
        />
      </div>
      <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {system.detail}
      </div>
    </button>
  )
}

function AlertCard({ alert, selectedState, disabled, onSelect }) {
  const borderColor = selectedState === 'correct'
    ? 'var(--status-success-border)'
    : selectedState === 'wrong'
      ? 'var(--status-danger-border)'
      : 'var(--border-subtle)'
  const background = selectedState === 'correct'
    ? 'var(--status-success-soft)'
    : selectedState === 'wrong'
      ? 'var(--status-danger-soft)'
      : 'var(--surface2)'

  return (
    <button
      type="button"
      onClick={() => onSelect(alert)}
      disabled={disabled}
      className="text-left rounded-md border p-4 transition-all duration-200"
      style={{
        borderColor,
        background,
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.08), inset 0 -1px 1px rgba(255,255,255,0.03)',
        opacity: disabled ? 0.84 : 1,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--text-primary)' }}>
            {alert.title}
          </div>
          <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {alert.detail}
          </div>
        </div>
        <span
          className="font-mono text-[10px] uppercase tracking-[0.14em]"
          style={{ color: alert.severity === 'critical' ? 'var(--status-warning)' : 'var(--muted)' }}
        >
          {alert.severity}
        </span>
      </div>
    </button>
  )
}

function getOutcome(mistakes, selectedSystems) {
  const missed = CORRECT_SYSTEM_IDS.filter((id) => !selectedSystems.includes(id)).length
  const falsePositives = selectedSystems.filter((id) => !CORRECT_SYSTEM_IDS.includes(id)).length
  const days = 11 + mistakes + (missed * 2) + falsePositives
  const incidents = missed > 0 ? 'Elevated' : falsePositives > 0 || mistakes > 0 ? 'Manageable' : 'Still high'
  const evidence = missed > 0 || falsePositives > 0 ? 'Fragmented' : 'Retrospective'

  return {
    missed,
    falsePositives,
    days,
    incidents,
    evidence,
  }
}

export default function ProductDemo() {
  const [stage, setStage] = useState('manual-alert')
  const [mistakes, setMistakes] = useState(0)
  const [wrongAlertIds, setWrongAlertIds] = useState([])
  const [selectedSystems, setSelectedSystems] = useState([])
  const [runbookApproved, setRunbookApproved] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const outcome = getOutcome(mistakes, selectedSystems)
  const remainingDays = Math.max(3, 9 - mistakes)
  const pressure = Math.min(96, 56 + (mistakes * 10) + (stage === 'manual-impact' ? 12 : 0) + (stage === 'manual-outcome' ? 18 : 0))

  function resetScenario() {
    setStage('manual-alert')
    setMistakes(0)
    setWrongAlertIds([])
    setSelectedSystems([])
    setRunbookApproved(false)
  }

  function handleAlertSelect(alert) {
    if (alert.correct) {
      setStage('manual-impact')
      return
    }

    if (!wrongAlertIds.includes(alert.id)) {
      setMistakes((value) => value + 1)
      setWrongAlertIds((value) => [...value, alert.id])
    }
  }

  function toggleSystem(id) {
    setSelectedSystems((current) => (
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    ))
  }

  function submitImpact() {
    setStage('manual-outcome')
  }

  function startFixfriendRun() {
    setStage('auto-review')
  }

  function approveRunbook() {
    setRunbookApproved(true)
    setStage('auto-outcome')
  }

  const feedItems = stage.startsWith('auto')
    ? [
        {
          icon: Package,
          label: 'FIXFriend agent online',
          detail: 'Agent detected and parsed venue delta within minutes.',
          tone: 'info',
        },
        {
          icon: Wrench,
          label: 'Agent mapped impacts',
          detail: 'Gateway config, cert suite, and evidence trail linked automatically.',
          tone: 'success',
        },
        {
          icon: FileCheck,
          label: 'Audit trail live',
          detail: 'Agent emits evidence to audit trail as work happens.',
          tone: 'success',
        },
      ]
    : [
        {
          icon: Landmark,
          label: 'Venue alert',
          detail: 'Mandatory Eurex FIX delta lands with a hard certification cutoff.',
          tone: 'warning',
        },
        {
          icon: AlertTriangle,
          label: 'Manual triage',
          detail: 'No automation layer exists between the spec change and the response plan.',
          tone: 'danger',
        },
        {
          icon: ShieldCheck,
          label: 'Regulator expectation',
          detail: 'When asked, the firm must show what changed, what was tested, and why it was safe.',
          tone: 'neutral',
        },
      ]

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
          <div className="max-w-2xl">
            <div className="eyebrow mb-3" style={{ color: 'var(--amber)' }}>
              Interactive Product Demo
            </div>
            <h3 className="font-serif text-[2.3rem] leading-[0.92]" style={{ color: 'var(--text-primary)' }}>
              {PRODUCT_PANIC_SCENARIO.title}
            </h3>
            <p className="text-sm md:text-base mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {PRODUCT_PANIC_SCENARIO.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-2 min-w-0 lg:w-[420px]">
            <div className="grid grid-cols-3 gap-2">
              <MetricCard label="Clock" value={`${remainingDays} days`} tone={stage.startsWith('auto') ? 'success' : 'warning'} />
              <MetricCard label="Pressure" value={`${pressure}%`} tone={stage.startsWith('auto') ? 'info' : 'danger'} />
              <MetricCard label="Mode" value={stage.startsWith('auto') ? 'Controlled' : 'Manual'} tone={stage.startsWith('auto') ? 'success' : 'warning'} />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowHelp((value) => !value)}
                className="button-outline inline-flex items-center gap-2 px-3 py-2 text-xs font-medium"
              >
                <HelpCircle size={14} />
                {showHelp ? 'Hide guide' : 'How this works'}
              </button>
            </div>
          </div>
        </div>

        {showHelp ? (
          <div className="grid gap-3 md:grid-cols-3">
            <div className="border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
                Step 1
              </div>
              <div className="font-serif text-[1.35rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                Spot the trigger
              </div>
              <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Find the alert that actually forces a certification cycle.
              </div>
            </div>
            <div className="border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
                Step 2
              </div>
              <div className="font-serif text-[1.35rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                Feel the burden
              </div>
              <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Choose what must change and see the manual fallout.
              </div>
            </div>
            <div className="border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
                Step 3
              </div>
              <div className="font-serif text-[1.35rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                See the product
              </div>
              <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Replay the same event with FIXFriend controlling the workflow.
              </div>
            </div>
          </div>
        ) : null}

        <StageRail stage={stage} />

        <div className="grid gap-4 lg:grid-cols-[0.78fr,1.42fr]">
          <div className="border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--text-tertiary)' }}>
              Control Room
            </div>
            <div className="space-y-4 mt-4">
              {feedItems.map((item) => (
                <FeedRow key={item.label} {...item} />
              ))}
            </div>

            {!stage.startsWith('auto') ? (
              <div className="mt-5 border p-4" style={{ borderColor: 'var(--status-warning-border)', backgroundColor: 'var(--status-warning-soft)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-warning)' }}>
                  Why this hurts
                </div>
                <div className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {PRODUCT_PANIC_SCENARIO.manual.pressureMoments.join(' ')}
                </div>
              </div>
            ) : (
              <div className="mt-5 border p-4" style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                  What FIXFriend changes
                </div>
                <div className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {PRODUCT_PANIC_SCENARIO.fixfriend.outcomes.join(' ')}
                </div>
              </div>
            )}
          </div>

          <div className="border p-4 md:p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
            {stage === 'manual-alert' ? (
              <>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
                      Round 1
                    </div>
                    <h4 className="font-serif text-[2rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                      Find the real trigger
                    </h4>
                  </div>
                  <div className="border px-3 py-2" style={{ borderColor: 'var(--status-danger-border)', backgroundColor: 'var(--status-danger-soft)' }}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-danger)' }}>
                      False picks
                    </div>
                    <div className="font-serif text-[1.5rem] leading-none mt-1" style={{ color: 'var(--text-primary)' }}>
                      {mistakes}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  Three alerts hit your desk. Only one creates a mandatory certification cycle. Pick the real one before the window compresses.
                </p>

                <div className="grid gap-3">
                  {PRODUCT_PANIC_SCENARIO.manual.alerts.map((alert) => (
                    <AlertCard
                      key={alert.id}
                      alert={alert}
                      selectedState={wrongAlertIds.includes(alert.id) ? 'wrong' : 'idle'}
                      onSelect={handleAlertSelect}
                    />
                  ))}
                </div>

                {wrongAlertIds.length > 0 ? (
                  <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: 'var(--status-danger)' }}>
                    <XCircle size={14} />
                    Wrong queue. The real spec change is still waiting while the clock burns.
                  </div>
                ) : null}
              </>
            ) : null}

            {stage === 'manual-impact' ? (
              <>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
                  Round 2
                </div>
                <h4 className="font-serif text-[2rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                  What breaks if you miss it?
                </h4>
                <p className="text-sm leading-relaxed mt-3 mb-5" style={{ color: 'var(--text-secondary)' }}>
                  You found the trigger: <span style={{ color: 'var(--text-primary)' }}>{CORRECT_ALERT.title}</span>. Now select every system that has to move before certification.
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {PRODUCT_PANIC_SCENARIO.manual.systems.map((system) => (
                    <ToggleSystemCard
                      key={system.id}
                      system={system}
                      selected={selectedSystems.includes(system.id)}
                      onToggle={toggleSystem}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 mt-5">
                  <button
                    type="button"
                    onClick={submitImpact}
                    disabled={selectedSystems.length === 0}
                    className="button-warm inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold disabled:opacity-50"
                  >
                    Lock choices
                    <ChevronRight size={15} />
                  </button>
                  <div className="text-xs text-right" style={{ color: 'var(--text-secondary)' }}>
                    Pick only the systems that must move.
                  </div>
                </div>
              </>
            ) : null}

            {stage === 'manual-outcome' ? (
              <>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--status-danger)' }}>
                  Manual Fallout
                </div>
                <h4 className="font-serif text-[2rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                  You can get through it. You just can’t get through it cleanly.
                </h4>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                  Engineering absorbs the change, certification gets squeezed, and evidence is still being assembled after the fact. The work happens, but the process stays fragile.
                </p>

                <div className="grid gap-3 md:grid-cols-3 mt-5">
                  <MetricCard label="Time to certify" value={`${outcome.days} days`} tone="danger" />
                  <MetricCard label="Evidence state" value={outcome.evidence} tone="warning" />
                  <MetricCard label="Incident risk" value={outcome.incidents} tone="danger" />
                </div>

                <div className="grid gap-3 md:grid-cols-2 mt-5">
                  <div className="border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
                      You missed
                    </div>
                    <div className="font-serif text-[1.6rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                      {outcome.missed}
                    </div>
                    <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      Critical systems that were not captured in the first response.
                    </div>
                  </div>
                  <div className="border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
                      You chased
                    </div>
                    <div className="font-serif text-[1.6rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                      {outcome.falsePositives}
                    </div>
                    <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      Systems that consumed time without reducing certification risk.
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <button
                    type="button"
                    onClick={startFixfriendRun}
                    className="button-accent inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold"
                  >
                    Run it with FIXFriend
                    <ChevronRight size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={resetScenario}
                    className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
                  >
                    <RotateCcw size={14} />
                    Restart drill
                  </button>
                </div>
              </>
            ) : null}

            {stage === 'auto-review' ? (
              <>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
                  Replay with FIXFriend
                </div>
                <h4 className="font-serif text-[2rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                  Same trigger. Different operating model.
                </h4>
                <p className="text-sm leading-relaxed mt-3 mb-5" style={{ color: 'var(--text-secondary)' }}>
                  FIXFriend parses the venue delta, maps impact, assembles the validation plan, and builds the evidence trail while the work is happening. Human review still sits before deployment.
                </p>

                <div className="grid gap-3">
                  {PRODUCT_PANIC_SCENARIO.fixfriend.runbook.map((item) => (
                    <div
                      key={item.id}
                      className="border p-4"
                      style={{
                        borderColor: 'var(--accent-border-soft)',
                        background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(249,115,22,0.05) 90%, transparent)',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="flex h-8 w-8 items-center justify-center border flex-shrink-0"
                          style={{
                            borderColor: 'var(--accent-border-soft)',
                            backgroundColor: 'var(--surface)',
                            color: 'var(--accent)',
                          }}
                        >
                          <FileCheck size={14} strokeWidth={1.8} />
                        </span>
                        <div>
                          <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-primary)' }}>
                            {item.label}
                          </div>
                          <div className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-4 mt-5">
                  <button
                    type="button"
                    onClick={approveRunbook}
                    className="button-accent inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
                  >
                    Approve runbook
                    <ChevronRight size={15} />
                  </button>
                </div>
              </>
            ) : null}

            {stage === 'auto-outcome' ? (
              <>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--status-success)' }}>
                  Controlled Outcome
                </div>
                <h4 className="font-serif text-[2rem] leading-none mt-2" style={{ color: 'var(--text-primary)' }}>
                  The work stays. The chaos disappears.
                </h4>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                  The same venue change still needs review, validation, and proof. FIXFriend turns those steps into a continuous, supervised workflow instead of a manual scramble.
                </p>

                <div className="grid gap-3 md:grid-cols-3 mt-5">
                  <MetricCard label="Time to certify" value="Hours" tone="success" />
                  <MetricCard label="Evidence state" value="Live" tone="info" />
                  <MetricCard label="Audit readiness" value="Immediate" tone="success" />
                </div>

                <div className="border p-4 mt-5" style={{ borderColor: 'var(--status-success-border)', backgroundColor: 'var(--status-success-soft)' }}>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center border flex-shrink-0"
                      style={{
                        borderColor: 'var(--status-success-border)',
                        backgroundColor: 'var(--surface)',
                        color: 'var(--status-success)',
                      }}
                    >
                      <ShieldCheck size={14} strokeWidth={1.8} />
                    </span>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-success)' }}>
                        What the buyer is actually buying
                      </div>
                      <div className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        A controlled change-response system that detects venue deltas, maps operational impact, runs validation, and emits audit-ready compliance evidence without waiting for the regulator to ask.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <button
                    type="button"
                    onClick={resetScenario}
                    className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
                  >
                    <RotateCcw size={14} />
                    Replay incident
                  </button>
                  <div className="inline-flex items-center gap-2 text-xs" style={{ color: runbookApproved ? 'var(--status-success)' : 'var(--text-secondary)' }}>
                    <Clock3 size={14} />
                    {runbookApproved ? 'Approved in a supervised flow.' : 'Awaiting human approval.'}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
