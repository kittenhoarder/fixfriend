export default function NarrativeSection({
  eyebrow,
  title,
  lead,
  children,
  className = '',
  titleClassName = '',
}) {
  return (
    <section className={`space-y-5 ${className}`.trim()}>
      {eyebrow ? (
        <div
          className="font-mono text-xs uppercase tracking-[0.16em]"
          style={{ color: 'var(--amber)' }}
        >
          {eyebrow}
        </div>
      ) : null}

      <div className="space-y-4">
        <h2
          className={`font-serif text-[2rem] sm:text-[2.35rem] leading-[0.96] ${titleClassName}`.trim()}
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h2>

        {lead ? (
          <p
            className="text-base sm:text-[1.05rem] leading-relaxed max-w-4xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {lead}
          </p>
        ) : null}
      </div>

      <div className="space-y-5">{children}</div>
    </section>
  )
}
