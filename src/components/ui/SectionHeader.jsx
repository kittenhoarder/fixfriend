export default function SectionHeader({ index, label, right, hideOnMobile, compact }) {
  const showLeft = index != null && index !== '' || label != null && label !== ''

  return (
    <div
      className={[
        'px-6 border-b flex flex-wrap items-center gap-3 flex-shrink-0',
        compact ? 'py-2' : 'py-4',
        hideOnMobile ? 'hidden lg:flex' : '',
      ].filter(Boolean).join(' ')}
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
    >
      {showLeft ? (
        <div>
          {index ? (
            <span
              className="font-mono text-xs tracking-widest"
              style={{ color: 'var(--muted)', letterSpacing: '0.12em' }}
            >
              {index}
            </span>
          ) : null}
          {label != null && label !== '' ? (
            <span
              className={`font-mono text-xs tracking-widest ${index ? 'ml-2' : ''}`}
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.12em' }}
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
