export default function SectionHeader({ index, label, right, hideOnMobile, compact }) {
  const showLeft = index != null && index !== '' || label != null && label !== ''

  return (
    <div
      className={[
        'px-4 sm:px-6 border-b flex flex-wrap items-center gap-2 flex-shrink-0 backdrop-blur-sm',
        compact ? 'py-2.5' : 'py-3',
        hideOnMobile ? 'hidden lg:flex' : '',
      ].filter(Boolean).join(' ')}
      style={{
        borderColor: 'var(--border-subtle)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent), rgba(5,5,5,0.18)',
      }}
    >
      {showLeft ? (
        <div className="flex items-center gap-2.5">
          <span
            className="inline-block h-px w-4"
            style={{ background: 'linear-gradient(90deg, var(--amber), transparent)' }}
          />
          {index ? (
            <span
              className="font-mono text-xs tracking-[0.14em]"
              style={{ color: 'var(--muted)' }}
            >
              {index}
            </span>
          ) : null}
          {label != null && label !== '' ? (
            <span
              className={`font-mono text-[13px] uppercase tracking-[0.18em] ${index ? 'ml-1.5' : ''}`}
              style={{ color: 'var(--text-secondary)' }}
            >
              {label}
            </span>
          ) : null}
        </div>
      ) : null}
      {right ? (
        <div className={`w-full sm:w-auto ${showLeft ? 'mt-1 sm:mt-0' : ''} sm:ml-auto`}>
          {right}
        </div>
      ) : null}
    </div>
  )
}
