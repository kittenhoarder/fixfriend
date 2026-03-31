import { TONE_STYLES } from '../../data/toneStyles'

function resolveTone(item) {
  if (item.tone) return item.tone
  const normalized = (item.status || item.kind || '').toLowerCase()
  if (normalized.includes('interview') || normalized.includes('validated')) return 'success'
  if (normalized.includes('market') || normalized.includes('source') || normalized.includes('proof')) return 'accent'
  if (normalized.includes('hypothesis')) return 'warning'
  if (normalized.includes('open')) return 'info'
  return 'neutral'
}

function SourceLine({ attribution, sourceLabel, sourceUrl }) {
  if (!attribution && !sourceLabel) return null

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: 'var(--text-tertiary)' }}>
      {attribution ? <span>{attribution}</span> : null}
      {attribution && sourceLabel ? <span aria-hidden>·</span> : null}
      {sourceLabel ? (
        sourceUrl ? (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
            style={{ color: 'var(--accent)' }}
          >
            {sourceLabel}
          </a>
        ) : (
          <span>{sourceLabel}</span>
        )
      ) : null}
    </div>
  )
}

function ProofCard({ item }) {
  const tone = resolveTone(item)
  const style = TONE_STYLES[tone] || TONE_STYLES.neutral

  return (
    <article
      className="rounded-lg border p-5 h-full"
      style={{ borderColor: style.borderColor, backgroundColor: style.backgroundColor }}
    >
      {item.title ? (
        <h3 className="font-serif text-[1.4rem] leading-[1.02]" style={{ color: 'var(--text-primary)' }}>
          {item.title}
        </h3>
      ) : null}

      {item.quote ? (
        <p className="font-serif text-[1.18rem] leading-snug mt-3" style={{ color: 'var(--text-primary)' }}>
          &ldquo;{item.quote}&rdquo;
        </p>
      ) : null}

      {item.detail ? (
        <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
          {item.detail}
        </p>
      ) : null}

      {item.points?.length ? (
        <ul className="space-y-2 mt-3">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0" style={{ backgroundColor: style.color }} />
              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {(item.attribution || item.sourceLabel) ? (
        <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          <SourceLine
            attribution={item.attribution}
            sourceLabel={item.sourceLabel}
            sourceUrl={item.sourceUrl}
          />
        </div>
      ) : null}
    </article>
  )
}

export default function ProofStack({
  title,
  intro,
  items,
  columns = 2,
  className = '',
}) {
  const gridClass = columns === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'

  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {(title || intro) ? (
        <div className="space-y-2">
          {title ? (
            <h3 className="font-serif text-[1.6rem] leading-[1.02]" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h3>
          ) : null}
          {intro ? (
            <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {intro}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className={`grid gap-4 ${gridClass}`}>
        {items.map((item) => (
          <ProofCard
            key={`${item.title || item.quote || item.detail}-${item.sourceLabel || item.attribution || item.kind || item.status}`}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}
