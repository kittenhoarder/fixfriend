import { Lock, ArrowRight } from 'lucide-react'
import { HERO } from '../content'

export default function AcqHeroSection({ onNavigate }) {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center px-8 py-16 lg:px-16"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(59,130,246,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Confidentiality badge */}
        <div className="mb-10 flex items-center gap-2">
          <span
            className="font-mono flex items-center gap-1.5 border px-3 py-1 text-[11px] tracking-[0.2em] uppercase"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-tertiary)',
              backgroundColor: 'var(--surface)',
            }}
          >
            <Lock size={9} strokeWidth={2} />
            {HERO.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif mb-6 text-4xl leading-tight lg:text-5xl xl:text-6xl"
          style={{ color: 'var(--text-primary)' }}
        >
          {HERO.headline}
        </h1>

        {/* Subheadline */}
        <p
          className="mb-10 text-base leading-relaxed lg:text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          {HERO.subheadline}
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${HERO.ctaEmail}`}
            className="button-accent inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-medium"
          >
            {HERO.ctaLabel}
            <ArrowRight size={14} strokeWidth={2} />
          </a>
          <button
            onClick={() => onNavigate('suite')}
            className="font-mono inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase transition-opacity hover:opacity-80"
            style={{ color: 'var(--text-tertiary)' }}
          >
            View product suite
            <ArrowRight size={11} strokeWidth={2} />
          </button>
        </div>

        {/* Confidentiality footnote */}
        <p
          className="font-mono mt-16 text-[11px] leading-relaxed tracking-[0.08em]"
          style={{ color: 'var(--muted)', maxWidth: '520px' }}
        >
          {HERO.confidentialityNote}
        </p>
      </div>
    </section>
  )
}
