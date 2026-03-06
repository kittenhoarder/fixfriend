const STATUS_COLORS = {
  success: 'var(--status-success)',
  warning: 'var(--status-warning)',
  info: 'var(--status-info)',
  danger: 'var(--status-danger)',
  neutral: 'var(--text-secondary)',
}

export default function StatusPill({ tone = 'neutral', children }) {
  const toneColor = STATUS_COLORS[tone] || STATUS_COLORS.neutral

  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-[11px] px-2.5 py-1.5 rounded-sm"
      style={{
        color: toneColor,
        background: `linear-gradient(90deg, ${toneColor}10, transparent 72%)`,
        border: `1px solid ${toneColor}36`,
        letterSpacing: '0.08em',
      }}
    >
      <span
        className="inline-block w-2 h-2 flex-shrink-0"
        style={{ backgroundColor: toneColor }}
      />
      {children}
    </span>
  )
}
