export default function SectionLoadingState({ label = 'Loading section…', className = '' }) {
  return (
    <div
      className={`panel-shell flex min-h-[18rem] items-center justify-center border px-4 py-12 ${className}`.trim()}
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-live="polite"
    >
      <span className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--text-tertiary)' }}>
        {label}
      </span>
    </div>
  )
}
