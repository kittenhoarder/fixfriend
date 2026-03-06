import { Linkedin, ArrowRight } from 'lucide-react'
import { THESIS } from '../../data/content'

function StatCard({ stat }) {
  return (
    <div className="stat-card rounded-lg p-5 flex flex-col gap-3">
      <div
        className="font-serif leading-none"
        style={{ fontSize: '2.35rem', color: 'var(--text-primary)' }}
      >
        {stat.value}
      </div>
      <div
        className="font-mono font-semibold text-xs tracking-widest"
        style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}
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
        <div className="mb-8">
          <span
            className="eyebrow px-3 py-2 border"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--border-subtle)',
              background:
                'linear-gradient(90deg, rgba(249,115,22,0.12), rgba(59,130,246,0.08) 70%, transparent)',
            }}
          >
            LEAN EXIT THESIS
          </span>
        </div>

        <div
          className="panel-shell relative overflow-hidden p-7 md:p-9 mb-10"
          style={{
            background:
              'linear-gradient(135deg, rgba(249,115,22,0.1), transparent 28%), linear-gradient(315deg, rgba(59,130,246,0.08), transparent 36%), var(--surface)',
          }}
        >
          <div
            className="absolute right-0 top-0 h-16 w-16 border-l border-b"
            style={{ borderColor: 'var(--border-subtle)' }}
          />
          <h1
            className="font-serif leading-[0.94] mb-5 max-w-2xl"
            style={{ fontSize: 'clamp(2.7rem, 8vw, 5.4rem)', color: 'var(--text-primary)' }}
          >
            {THESIS.headline.split('\n').map((line, i) => (
              <span
                key={i}
                style={{ color: i === THESIS.headline.split('\n').length - 1 ? 'var(--accent)' : 'inherit' }}
              >
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>

          <p
            className="text-base leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {THESIS.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('market')}
              className="button-accent inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold"
            >
              Explore the thesis
              <ArrowRight size={15} />
            </button>
            <a
              href={THESIS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Linkedin size={14} />
              Founder profile
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {THESIS.stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        <div
          className="border-t mb-8"
          style={{ borderColor: 'var(--border-subtle)' }}
        />

        <div>
          <span
            className="font-mono text-xs font-medium tracking-wider block mb-4"
            style={{ color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}
          >
            ABOUT THE FOUNDER
          </span>
          <div
            className="panel-shell p-5"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div
                  className="font-serif text-[1.7rem] leading-none mb-2"
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
                  className="button-outline flex items-center gap-1.5 px-3 py-2 text-xs"
                  style={{
                    color: 'var(--accent)',
                    borderColor: 'var(--accent-border-soft)',
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
