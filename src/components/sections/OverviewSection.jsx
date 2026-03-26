import { Linkedin, ArrowRight, ChevronRight } from 'lucide-react'
import { BRAND, CONTINUOUS_CHANGE_SIGNALS, THESIS } from '../../data/content'
import StatusPill from '../ui/StatusPill'
import SynthAgentLogo from '../ui/SynthAgentLogo'
import LeanExitDownloads from '../LeanExitDownloads'
import FoundingTeam from '../ui/FoundingTeam'

const panelShell = {
  background:
    'linear-gradient(135deg, rgba(249,115,22,0.1), transparent 28%), linear-gradient(315deg, rgba(59,130,246,0.08), transparent 36%), var(--surface)',
}

function ProductCard({ product }) {
  const accentMap = {
    live: { border: 'var(--status-success)', bg: 'rgba(34,197,94,0.06)', label: 'var(--status-success)' },
    'in development': { border: 'var(--accent-border-soft)', bg: 'var(--accent-softer)', label: 'var(--accent)' },
    roadmap: { border: 'var(--border-subtle)', bg: 'transparent', label: 'var(--text-tertiary)' },
  }
  const colors = accentMap[product.status] || accentMap.roadmap

  return (
    <article
      className="p-5 flex flex-col gap-3 border"
      style={{ borderColor: colors.border, backgroundColor: colors.bg }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-serif text-xl leading-none" style={{ color: 'var(--text-primary)' }}>
          {product.name}
        </span>
        <StatusPill tone={product.statusTone}>{product.status}</StatusPill>
      </div>
      <p className="font-mono text-[10px] tracking-wider" style={{ color: colors.label, letterSpacing: '0.1em' }}>
        {product.tagline}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {product.description}
      </p>
    </article>
  )
}

export default function OverviewSection({ onNavigate }) {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-full px-6 py-16 lg:py-20 w-full max-w-3xl mx-auto"
      style={{ paddingTop: '72px' }}
    >
      {/* Brand hierarchy eyebrow */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        <span
          className="eyebrow px-3 py-1.5 border font-mono text-[10px] tracking-widest"
          style={{ color: 'var(--text-tertiary)', borderColor: 'var(--border-subtle)' }}
        >
          PRDCTV.WORK
        </span>
        <ChevronRight size={12} style={{ color: 'var(--text-tertiary)' }} />
        <span
          className="eyebrow px-3 py-1.5 border font-mono text-[10px] tracking-widest"
          style={{
            color: 'var(--text-secondary)',
            borderColor: 'var(--border-subtle)',
            background: 'linear-gradient(90deg, rgba(249,115,22,0.12), rgba(59,130,246,0.08) 70%, transparent)',
          }}
        >
          SYNTHAGENTS
        </span>
      </div>

      {/* Hero panel */}
      <article
        className="panel-shell relative overflow-hidden p-7 md:p-9 mb-8 w-full"
        style={panelShell}
      >
        <header className="mb-6 grid gap-5 md:gap-6" style={{ gridTemplateColumns: 'clamp(4rem, 12vw, 7.5rem) 1fr', alignItems: 'start' }}>
          <SynthAgentLogo
            className="mt-0.5 w-full h-auto"
            style={{ width: 'clamp(4rem, 12vw, 7.5rem)', height: 'clamp(4rem, 12vw, 7.5rem)', color: 'var(--amber)' }}
            aria-hidden
          />
          <h1
            className="font-serif leading-[0.94] col-start-2"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 4.6rem)', color: 'var(--text-primary)' }}
          >
            SynthAgents
          </h1>
          <p
            className="font-serif leading-snug col-span-full"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.55rem)', color: 'var(--accent)' }}
          >
            {BRAND.umbrella.tagline}
          </p>
        </header>

        {/* MVP Definition */}
        <div
          className="p-4 mb-6 border-l-2"
          style={{
            borderLeftColor: 'var(--amber)',
            backgroundColor: 'rgba(249,115,22,0.06)',
            borderTop: '1px solid var(--border-subtle)',
            borderRight: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <p className="font-mono text-[10px] tracking-widest mb-2" style={{ color: 'var(--amber)', letterSpacing: '0.14em' }}>
            PROBLEM WE SOLVE
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            {BRAND.mvpDefinition}
          </p>
        </div>

        {/* Product suite */}
        <div className="mb-6">
          <p className="font-mono text-[10px] tracking-widest mb-3" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.14em' }}>
            PRODUCT SUITE
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {BRAND.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* About PRDCTV.WORK */}
        <div
          className="mb-6 p-4 border"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
        >
          <p className="font-mono text-[10px] tracking-widest mb-2" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.14em' }}>
            PRDCTV.WORK
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {BRAND.studio.about}
          </p>
        </div>

        {/* Continuous change signals */}
        <article
          className="border p-5 mb-6"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--accent)' }}>
            {CONTINUOUS_CHANGE_SIGNALS.title}
          </p>
          <p className="text-sm leading-relaxed mb-4 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            {CONTINUOUS_CHANGE_SIGNALS.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CONTINUOUS_CHANGE_SIGNALS.items.map((item) => (
              <div
                key={item.title}
                className="border p-4"
                style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--amber)' }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.detail}
                </p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-mono"
                  style={{ color: 'var(--accent)' }}
                >
                  {item.sourceLabel} →
                </a>
              </div>
            ))}
          </div>
        </article>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
            onClick={() => onNavigate('product')}
            className="button-accent inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold"
          >
            See the product
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => onNavigate('financials')}
            className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            View financials
          </button>
          <button
            onClick={() => onNavigate('sales')}
            className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            Sales funnel
          </button>
          <a
            href={THESIS.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Linkedin size={14} />
            Owen on LinkedIn
          </a>
        </div>

        <div className="pt-5 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="font-mono text-[10px] tracking-widest mb-3" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.12em' }}>
            DOWNLOAD DOCUMENTS
          </p>
          <LeanExitDownloads />
        </div>
      </article>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 w-full">
        {THESIS.stats.map((stat) => (
          <article
            key={stat.id}
            className="stat-card p-5 flex flex-col gap-3 border"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
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
        ))}
      </div>

      <FoundingTeam
        className="w-full mb-8"
        intro="FIXFriend is built by a founding trio combining deep trading infrastructure context with venture strategy and scalable engineering."
      />

      {/* Strategy nav */}
      <div className="w-full flex flex-wrap items-center gap-3 pb-4">
        <span className="font-mono text-[10px] tracking-widest" style={{ color: 'var(--text-tertiary)' }}>DEEP DIVES →</span>
        {[
          { id: 'market', label: 'Market map' },
          { id: 'leanExit', label: 'Lean exit brief' },
          { id: 'acquirers', label: 'Acquirers' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="font-mono text-[11px] px-3 py-1.5 border transition-colors"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
              letterSpacing: '0.1em',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  )
}
