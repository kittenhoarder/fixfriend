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
      style={{ backgroundColor: 'rgba(2,6,23,0.72)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="w-full max-w-xl rounded-xl border animate-fade-in-section"
        style={{
          backgroundColor: 'var(--surface3)',
          borderColor: 'var(--border-subtle)',
          boxShadow: '0 24px 80px var(--card-shadow)',
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div>
            <div
              className="font-mono font-bold text-base"
              style={{ color: 'var(--text-primary)' }}
            >
              {ABOUT.name}
            </div>
            <div
              className="text-xs mt-0.5"
              style={{ color: 'var(--text-secondary)' }}
            >
              {ABOUT.title}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded transition-colors duration-150 hover:bg-[var(--surface2)]"
            style={{ color: 'var(--text-secondary)' }}
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
                    className="font-mono text-xs px-2 py-1 rounded-sm border"
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
                <li key={i} className="flex items-start gap-2">
                  <span style={{ color: 'var(--text-secondary)', marginTop: '3px', flexShrink: 0 }}>—</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="px-4 py-3 rounded border mb-5"
            style={{
              borderColor: 'var(--accent-border-soft)',
              backgroundColor: 'var(--accent-softer)',
            }}
          >
            <p
              className="text-sm leading-relaxed italic"
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
              className="flex items-center gap-2 px-4 py-2.5 rounded border text-sm font-medium transition-all duration-150"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--accent-border-soft)',
                backgroundColor: 'var(--accent-soft)',
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
