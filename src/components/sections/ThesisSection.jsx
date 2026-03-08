import { useRef, useState, useCallback } from 'react'
import { Linkedin, ArrowRight, FileDown, Loader } from 'lucide-react'
import { THESIS } from '../../data/content'
import { OnePager } from '../OnePager'

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
  const onePagerRef = useRef(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = useCallback(async () => {
    if (!onePagerRef.current || isGenerating) return
    setIsGenerating(true)
    try {
      const html2pdf = (await import('html2pdf.js')).default
      await html2pdf()
        .from(onePagerRef.current)
        .set({
          margin: 0,
          filename: 'FIXFriend-VC-OnePager.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 2.5,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#08090b',
            logging: false,
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .save()
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setIsGenerating(false)
    }
  }, [isGenerating])

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
            className="absolute right-0 bottom-0 h-16 w-16 border-t border-l"
            style={{ borderColor: 'var(--border-subtle)' }}
          />
          <div
            className="mb-5 gap-5 md:gap-6"
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(4.5rem, 14vw, 8.5rem) 1fr',
              alignItems: 'start',
            }}
          >
            <div
              className="mt-0.5"
              style={{ color: 'var(--amber)' }}
              aria-hidden
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                style={{ width: 'clamp(4.5rem, 14vw, 8.5rem)', height: 'clamp(4.5rem, 14vw, 8.5rem)' }}
                fill="currentColor"
              >
                <path d="M175.656 22.375l-48.47 82.094c-23.017 4.384-43.547 11.782-60.124 22.374-24.436 15.613-40.572 37.414-45.5 67.875-4.79 29.62 1.568 68.087 24.125 116.093 93.162 22.88 184.08-10.908 257.25-18.813 37.138-4.012 71.196-.898 96.344 22.97 22.33 21.19 36.21 56.808 41.908 113.436 29.246-35.682 44.538-69.065 49.343-99.594 5.543-35.207-2.526-66.97-20.31-95.593-8.52-13.708-19.368-26.618-32-38.626l14.217-33-41.218 10.625c-8.637-6.278-17.765-12.217-27.314-17.782l-7.03-59.782-38.157 37.406c-12.418-5.186-25.184-9.804-38.158-13.812l-8.375-71.28-57.625 56.5c-9.344-1.316-18.625-2.333-27.812-2.97l-31.094-78.125zM222 325.345c-39.146 7.525-82.183 14.312-127.156 11.686 47.403 113.454 207.056 224.082 260.125 87-101.18 33.84-95.303-49.595-132.97-98.686z" />
              </svg>
            </div>
            <h1
              className="font-serif leading-[0.94]"
              style={{ fontSize: 'clamp(2.7rem, 8vw, 5.4rem)', color: 'var(--text-primary)' }}
            >
              {THESIS.headline.split('\n')[0]}
            </h1>
            <div
              className="font-serif leading-[0.94]"
              style={{
                gridColumn: '1 / -1',
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
            </div>
          </div>

          <p
            className="text-base leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {THESIS.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all"
              style={{
                color: isGenerating ? 'var(--text-tertiary)' : 'var(--emerald)',
                borderColor: 'rgba(34,197,94,0.35)',
                background: 'rgba(34,197,94,0.08)',
                opacity: isGenerating ? 0.65 : 1,
                cursor: isGenerating ? 'wait' : 'pointer',
              }}
              title="Download VC one-pager as PDF"
            >
              {isGenerating ? <Loader size={14} className="animate-spin" /> : <FileDown size={14} />}
              {isGenerating ? 'Generating…' : 'One-Pager PDF'}
            </button>
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

        {THESIS.vcTldr && (
          <div
            className="panel-shell rounded-lg p-5 mb-10"
            style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
          >
            <span
              className="font-mono text-xs font-semibold tracking-widest block mb-3"
              style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}
            >
              TL;DR FOR VCs
            </span>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {THESIS.vcTldr.marketSummary}
            </p>
            <div className="mb-2 font-mono text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
              Tier-1 acquirer fit
            </div>
            <ul className="space-y-2">
              {THESIS.vcTldr.tier1Acquirers.map((a, i) => (
                <li key={i} className="text-sm flex flex-wrap gap-x-2 gap-y-0">
                  <span style={{ color: 'var(--accent)' }}>{a.name}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>— {a.fit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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

      {/* Hidden one-pager — rendered off-screen for PDF capture */}
      <div style={{ position: 'fixed', left: '-9999px', top: '-9999px', zIndex: -1, pointerEvents: 'none' }}>
        <OnePager ref={onePagerRef} />
      </div>
    </div>
  )
}
