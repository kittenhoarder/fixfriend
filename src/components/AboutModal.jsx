import { useEffect } from 'react'
import { X, Linkedin, ArrowRight } from 'lucide-react'
import { ABOUT } from '../data/content'

export default function AboutModal({ onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background:
          'radial-gradient(circle at top, rgba(59,130,246,0.14), transparent 30%), rgba(2,4,8,0.76)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="w-full max-w-xl border animate-fade-in-section overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.025), transparent), var(--surface3)',
          borderColor: 'var(--border-subtle)',
          boxShadow: '0 36px 90px -40px var(--card-shadow)',
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div>
            <div className="eyebrow mb-2" style={{ color: 'var(--text-tertiary)' }}>
              Founder
            </div>
            <div className="font-serif text-[1.9rem] leading-none" style={{ color: 'var(--text-primary)' }}>
              {ABOUT.name}
            </div>
            <div
              className="text-xs mt-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              {ABOUT.title}
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center border transition-colors duration-150"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface)',
            }}
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-5">
          <div className="mb-5">
            <div
              className="font-mono text-xs tracking-widest mb-3 uppercase"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', fontSize: '10px' }}
            >
              Career
            </div>
            <div className="flex flex-wrap items-center gap-1">
              {ABOUT.career.map((role, i) => (
                <span key={role} className="flex items-center gap-1">
                  <span
                    className="font-mono text-xs px-2.5 py-1.5 rounded-sm border"
                    style={{
                      color: i === ABOUT.career.length - 1 ? 'var(--status-success)' : 'var(--text-secondary)',
                      borderColor: i === ABOUT.career.length - 1 ? 'var(--status-success-border)' : 'var(--border-subtle)',
                      backgroundColor: i === ABOUT.career.length - 1 ? 'var(--status-success-soft)' : 'var(--surface)',
                    }}
                  >
                    {role}
                  </span>
                  {i < ABOUT.career.length - 1 && (
                    <ArrowRight size={10} style={{ color: 'var(--text-secondary)' }} />
                  )}
                </span>
              ))}
            </div>
          </div>

          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: 'var(--text-secondary)' }}
          >
            {ABOUT.summary}
          </p>

          <div className="mb-5">
            <div
              className="font-mono text-xs tracking-widest mb-3 uppercase"
              style={{ color: 'var(--accent)', letterSpacing: '0.1em', fontSize: '10px' }}
            >
              Direct Experience — Compliance Evidence Gap
            </div>
            <ul className="space-y-2">
              {ABOUT.experience.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>•</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="px-4 py-4 border mb-5"
            style={{
              borderColor: 'var(--accent-border-soft)',
              background:
                'linear-gradient(135deg, rgba(249,115,22,0.09), rgba(59,130,246,0.06) 58%, transparent), var(--surface)',
            }}
          >
            <p
              className="font-serif text-[1.35rem] leading-relaxed italic"
              style={{ color: 'var(--text-primary)' }}
            >
              &ldquo;{ABOUT.closing}&rdquo;
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={ABOUT.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline flex items-center gap-2 px-4 py-2.5 text-sm font-medium"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--accent-border-soft)',
              }}
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
