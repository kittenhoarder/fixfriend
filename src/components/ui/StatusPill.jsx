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
      className="inline-flex items-center gap-1.5 font-mono text-xs px-2 py-1 rounded-sm"
      style={{
        color: toneColor,
        backgroundColor: `${toneColor}14`,
        border: `1px solid ${toneColor}36`,
      }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: toneColor }}
      />
      {children}
    </span>
  )
}
