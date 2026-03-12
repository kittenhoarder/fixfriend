import { Linkedin, ArrowRight } from 'lucide-react'
import { CONTINUOUS_CHANGE_SIGNALS, THESIS } from '../../data/content'
import StatusPill from '../ui/StatusPill'
import LeanExitDownloads from '../LeanExitDownloads'

const panelShell = {
  background:
    'linear-gradient(135deg, rgba(249,115,22,0.1), transparent 28%), linear-gradient(315deg, rgba(59,130,246,0.08), transparent 36%), var(--surface)',
}

function StatCard({ stat }) {
  return (
    <article className="stat-card rounded-lg p-5 flex flex-col gap-3 border border-[var(--border-subtle)]">
      <p className="font-serif leading-none text-[2.35rem]" style={{ color: 'var(--text-primary)' }}>
        {stat.value}
      </p>
      <p className="font-mono font-semibold text-xs tracking-widest" style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}>
        {stat.label}
      </p>
      <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
        {stat.detail}
      </p>
    </article>
  )
}

export default function ThesisSection({ onNavigate }) {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-full px-8 py-16 lg:py-20 w-full max-w-3xl mx-auto"
      style={{ paddingTop: '72px' }}
    >
      <span
        className="eyebrow px-3 py-2 border block mb-8"
        style={{
          color: 'var(--text-secondary)',
          borderColor: 'var(--border-subtle)',
          background:
            'linear-gradient(90deg, rgba(249,115,22,0.12), rgba(59,130,246,0.08) 70%, transparent)',
        }}
      >
        STRATEGIC FIT BRIEF
      </span>

      <article
        className="panel-shell relative overflow-hidden p-7 md:p-9 mb-10"
        style={panelShell}
      >
        <header
          className="mb-5 grid gap-5 md:gap-6"
          style={{
            gridTemplateColumns: 'clamp(4.5rem, 14vw, 8.5rem) 1fr',
            alignItems: 'start',
          }}
        >
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5 w-full h-auto"
            style={{
              width: 'clamp(4.5rem, 14vw, 8.5rem)',
              height: 'clamp(4.5rem, 14vw, 8.5rem)',
              color: 'var(--amber)',
            }}
            fill="currentColor"
            aria-hidden
          >
            <path d="M175.656 22.375l-48.47 82.094c-23.017 4.384-43.547 11.782-60.124 22.374-24.436 15.613-40.572 37.414-45.5 67.875-4.79 29.62 1.568 68.087 24.125 116.093 93.162 22.88 184.08-10.908 257.25-18.813 37.138-4.012 71.196-.898 96.344 22.97 22.33 21.19 36.21 56.808 41.908 113.436 29.246-35.682 44.538-69.065 49.343-99.594 5.543-35.207-2.526-66.97-20.31-95.593-8.52-13.708-19.368-26.618-32-38.626l14.217-33-41.218 10.625c-8.637-6.278-17.765-12.217-27.314-17.782l-7.03-59.782-38.157 37.406c-12.418-5.186-25.184-9.804-38.158-13.812l-8.375-71.28-57.625 56.5c-9.344-1.316-18.625-2.333-27.812-2.97l-31.094-78.125zM222 325.345c-39.146 7.525-82.183 14.312-127.156 11.686 47.403 113.454 207.056 224.082 260.125 87-101.18 33.84-95.303-49.595-132.97-98.686z" />
          </svg>
          <h1
            className="font-serif leading-[0.94] col-start-2"
            style={{ fontSize: 'clamp(2.7rem, 8vw, 5.4rem)', color: 'var(--text-primary)' }}
          >
            {THESIS.headline.split('\n')[0]}
          </h1>
          <p
            className="font-serif leading-[0.94] col-span-full"
            style={{
              fontSize: 'clamp(2.7rem, 8vw, 5.4rem)',
              color: 'var(--accent)',
            }}
          >
            {THESIS.headline.split('\n').slice(1).map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        </header>

        <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          {THESIS.subheadline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <article className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>Buyer line</p>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>{THESIS.buyerOneLiner}</p>
          </article>
          <article className="rounded-lg border p-4" style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>Cycle-time compression</p>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>{THESIS.tenXClaim}</p>
          </article>
          <article className="rounded-lg border p-4" style={{ borderColor: 'var(--status-warning-border)', backgroundColor: 'var(--status-warning-soft)' }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-warning)' }}>Why strategic fit</p>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>{THESIS.leanExitWhy}</p>
          </article>
        </div>

        <article
          className="rounded-lg border p-5 mb-8"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
            {CONTINUOUS_CHANGE_SIGNALS.title}
          </p>
          <p className="text-sm leading-relaxed mt-3 mb-4 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            {CONTINUOUS_CHANGE_SIGNALS.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CONTINUOUS_CHANGE_SIGNALS.items.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border p-4"
                style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                  {item.detail}
                </p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-mono"
                  style={{ color: 'var(--accent)' }}
                >
                  {item.sourceLabel}
                </a>
              </article>
            ))}
          </div>
        </article>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('leanExit')}
            className="button-accent inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold"
          >
            Explore strategic fit
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => onNavigate('market')}
            className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            Explore the market
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

        <div className="mt-5 pt-5 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="font-mono text-[10px] tracking-widest mb-3" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.12em' }}>
            DOWNLOAD DOCUMENTS
          </p>
          <LeanExitDownloads />
        </div>
      </article>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {THESIS.stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {THESIS.vcTldr && (
        <>
          <article
            className="panel-shell rounded-lg p-5 mb-10"
            style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold tracking-widest block" style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}>
                {THESIS.vcTldr.title}
              </span>
              {THESIS.evidenceTypes.map((item) => (
                <StatusPill key={item.label} tone={item.tone}>{item.label}</StatusPill>
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {THESIS.vcTldr.marketSummary}
            </p>
            <ul className="grid gap-2 mb-4 list-none">
              {THESIS.vcTldr.highlights.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)' }}>•</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mb-2 font-mono text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
              Strategic-fit acquirers
            </p>
            <ul className="space-y-2">
              {THESIS.vcTldr.tier1Acquirers.map((a, i) => (
                <li key={i} className="text-sm">
                  <span style={{ color: 'var(--accent)' }}>{a.name}</span>
                  <span className="block" style={{ color: 'var(--text-secondary)' }}>{a.fit}</span>
                </li>
              ))}
            </ul>
          </article>
        </>
      )}

      <hr className="border-t mb-8" style={{ borderColor: 'var(--border-subtle)' }} />

      <section>
        <span className="font-mono text-xs font-medium tracking-wider block mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}>
          ABOUT THE FOUNDER
        </span>
        <article className="panel-shell p-5 flex flex-col sm:flex-row sm:items-start gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex-1">
            <p className="font-serif text-[1.7rem] leading-none mb-2" style={{ color: 'var(--text-primary)' }}>
              {THESIS.founderName}
            </p>
            <p className="text-xs mb-3" style={{ color: 'var(--text-tertiary)' }}>
              {THESIS.founderTitle}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {THESIS.founderSummary}
            </p>
          </div>
          <a
            href={THESIS.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline flex items-center gap-1.5 px-3 py-2 text-xs shrink-0"
            style={{ color: 'var(--accent)', borderColor: 'var(--accent-border-soft)' }}
          >
            <Linkedin size={12} />
            LinkedIn
          </a>
        </article>
      </section>
    </section>
  )
}
