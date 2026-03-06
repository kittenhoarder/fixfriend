import { getLogoMeta } from '../../data/logos'

export default function BrandLogo({ logoKey, label, size = 28 }) {
  const meta = getLogoMeta(logoKey, label)

  if (meta.officialSrc) {
    return (
      <img
        src={meta.officialSrc}
        alt={`${label} logo`}
        width={size}
        height={size}
        className="rounded"
        style={{ objectFit: 'contain', backgroundColor: 'transparent' }}
      />
    )
  }

  if (meta.simpleIcon?.path) {
    return (
      <span
        className="inline-flex items-center justify-center rounded border"
        style={{
          width: size,
          height: size,
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--surface2)',
          color: 'var(--text-secondary)',
        }}
        aria-label={`${label} logo`}
      >
        <svg viewBox="0 0 24 24" width={Math.round(size * 0.62)} height={Math.round(size * 0.62)} aria-hidden="true">
          <path d={meta.simpleIcon.path} fill="currentColor" />
        </svg>
      </span>
    )
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded border font-mono"
      style={{
        width: size,
        height: size,
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--surface2)',
        color: 'var(--text-secondary)',
        fontSize: `${Math.max(9, Math.round(size * 0.32))}px`,
        letterSpacing: '0.04em',
        fontWeight: 700,
      }}
      aria-label={`${label} logo placeholder`}
    >
      {meta.fallbackText}
    </span>
  )
}
