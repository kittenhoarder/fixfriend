import { Linkedin, ArrowRight } from 'lucide-react'
import { CONTINUOUS_CHANGE_SIGNALS, THESIS } from '../../content/raidical/overview'
import StatusPill from '../ui/StatusPill'
import FIXFriendLogo from '../ui/FIXFriendLogo'
import LeanExitDownloads from '../LeanExitDownloads'
import FoundingTeam from '../ui/FoundingTeam'

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
        LEAN EXIT BRIEF
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
          <FIXFriendLogo
            className="mt-0.5 w-full h-auto"
            style={{
              width: 'clamp(4.5rem, 14vw, 8.5rem)',
              height: 'clamp(4.5rem, 14vw, 8.5rem)',
              color: 'var(--amber)',
            }}
            aria-hidden
          />
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
            <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--status-warning)' }}>Why lean exit</p>
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
            Explore lean exit
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
            Lead founder
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

      <FoundingTeam
        className="w-full"
        intro="FIXFriend is built by a founding trio combining deep trading infrastructure context with venture strategy and scalable engineering."
      />
    </section>
  )
}
