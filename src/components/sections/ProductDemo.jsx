import { useState } from 'react'
import {
  Building2,
  Landmark,
  ShieldCheck,
  FileText,
  Wrench,
  ClipboardCheck,
  AlertTriangle,
  Package,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from 'lucide-react'
import { PRODUCT_DEMO_STEPS } from '../../data/content'

const ICON_MAP = {
  Building2,
  Landmark,
  ShieldCheck,
  FileText,
  Wrench,
  ClipboardCheck,
  AlertTriangle,
  Package,
  FileCheck,
}

export default function ProductDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = PRODUCT_DEMO_STEPS
  const step = steps[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === steps.length - 1

  const handleNext = () => {
    if (isLast) setCurrentStep(0)
    else setCurrentStep((i) => i + 1)
  }

  const handleBack = () => {
    if (!isFirst) setCurrentStep((i) => i - 1)
  }

  const handleRestart = () => setCurrentStep(0)

  return (
    <div
      className="rounded-xl border p-6"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--surface)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className="font-mono text-xs font-semibold tracking-widest uppercase"
          style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}
        >
          Interactive product walk-through
        </h3>
        <div className="flex items-center gap-1">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentStep(i)}
              className="w-2 h-2 rounded-full transition-all duration-150"
              style={{
                backgroundColor: i === currentStep ? 'var(--accent)' : 'var(--border)',
                opacity: i === currentStep ? 1 : 0.6,
              }}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="min-h-[140px]">
        <h4
          className="font-mono font-semibold text-sm mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {step.title}
        </h4>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          {step.body}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {step.personaIcons.map((iconName, i) => {
            const Icon = ICON_MAP[iconName]
            if (!Icon) return null
            const label = step.personaLabels?.[i]
            return (
              <div
                key={`${currentStep}-${iconName}-${i}`}
                className="product-walkthrough-icon flex flex-col items-center gap-1"
                style={{ animationDelay: `${i * 65}ms` }}
              >
                <div
                  className="product-walkthrough-icon-box p-3 rounded-lg border flex items-center justify-center"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--surface2)',
                    color: 'var(--accent)',
                  }}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                {label && (
                  <span
                    className="font-mono text-xs text-center max-w-[80px]"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {label}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          {!isFirst ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-1.5 font-mono text-xs font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              <ChevronLeft size={14} />
              Back
            </button>
          ) : (
            <span />
          )}
        </div>
        <div className="flex items-center gap-2">
          {isLast && currentStep > 0 && (
            <button
              type="button"
              onClick={handleRestart}
              className="flex items-center gap-1.5 font-mono text-xs font-medium px-3 py-1.5 rounded border transition-colors"
              style={{
                color: 'var(--text-secondary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <RotateCcw size={12} />
              Restart
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1.5 font-mono text-xs font-semibold px-4 py-2 rounded transition-colors"
            style={{
              color: '#fff',
              backgroundColor: 'var(--accent)',
            }}
          >
            {isLast ? 'Done' : step.ctaLabel}
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
