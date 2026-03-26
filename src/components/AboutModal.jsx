import { useEffect } from 'react'
import { X } from 'lucide-react'
import { THESIS } from '../data/content'
import FoundingTeam from './ui/FoundingTeam'

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
        className="w-full max-w-2xl border animate-fade-in-section overflow-hidden"
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
              Founding team
            </div>
            <div className="font-serif text-[1.9rem] leading-none" style={{ color: 'var(--text-primary)' }}>
              {THESIS.founderName}
            </div>
            <div className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
              {THESIS.founderSummary}
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
          <FoundingTeam
            compact
            title={null}
            intro="Owen brings the trading infrastructure depth, Chris brings venture strategy, and Varsha brings engineering execution."
          />
        </div>
      </div>
    </div>
  )
}
