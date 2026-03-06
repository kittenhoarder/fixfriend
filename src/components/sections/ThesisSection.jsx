import { Linkedin, ArrowRight } from 'lucide-react'
import { THESIS } from '../../data/content'

function StatCard({ stat }) {
  return (
    <div className="stat-card rounded-lg p-5 flex flex-col gap-2">
      <div
        className="font-mono font-bold leading-none"
        style={{ fontSize: '2rem', color: 'var(--accent)' }}
      >
        {stat.value}
      </div>
      <div
        className="font-mono font-semibold text-xs tracking-widest"
        style={{ color: 'var(--text-primary)', letterSpacing: '0.1em' }}
      >
        {stat.label}
      </div>
      <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
        {stat.detail}
      </div>
    </div>
  )
}

export default function ThesisSection({ onNavigate }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-full px-8 py-16 lg:py-20"
      style={{ paddingTop: '72px' }}
    >
      <div className="w-full max-w-3xl mx-auto">

        {/* Label */}
        <div className="mb-6">
          <span
            className="font-mono text-xs tracking-widest px-3 py-1 rounded-sm border"
            style={{
              color: 'var(--accent)',
              borderColor: 'rgba(14,165,233,0.3)',
              backgroundColor: 'rgba(14,165,233,0.06)',
              letterSpacing: '0.15em',
            }}
          >
            LEAN EXIT THESIS
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-mono font-bold leading-tight mb-6"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', color: 'var(--text-primary)' }}
        >
          {THESIS.headline.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          className="text-base leading-relaxed mb-12 max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          {THESIS.subheadline}
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {THESIS.stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* CTA */}
        <div className="mb-12">
          <button
            onClick={() => onNavigate('market')}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:opacity-85"
            style={{ color: 'var(--accent)' }}
          >
            Explore the thesis
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-8"
          style={{ borderColor: 'var(--border-subtle)' }}
        />

        {/* Founder — always visible */}
        <div>
          <span
            className="font-mono text-xs font-medium tracking-wider block mb-4"
            style={{ color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}
          >
            ABOUT THE FOUNDER
          </span>
          <div
            className="pt-4 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div
                  className="font-semibold mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {THESIS.founderName}
                </div>
                <div
                  className="text-xs mb-3"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {THESIS.founderTitle}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {THESIS.founderSummary}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={THESIS.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded border text-xs transition-all duration-150"
                  style={{
                    color: 'var(--accent)',
                    borderColor: 'var(--accent-border-soft)',
                    backgroundColor: 'var(--accent-soft)',
                  }}
                >
                  <Linkedin size={12} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
