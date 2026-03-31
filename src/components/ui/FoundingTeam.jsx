import { Linkedin } from 'lucide-react'
import { FOUNDERS } from '../../content/raidical/navigation'

export default function FoundingTeam({
  title = 'FOUNDING TEAM',
  intro = 'FIXFriend is built by a trio combining trading technology, venture strategy, and scalable engineering.',
  compact = false,
  className = '',
}) {
  return (
    <section className={className}>
      {title ? (
        <div
          className="font-mono text-xs font-medium uppercase tracking-[0.16em] block mb-4"
          style={{ color: 'var(--amber)' }}
        >
          {title}
        </div>
      ) : null}

      {intro ? (
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          {intro}
        </p>
      ) : null}

      <div className={`grid gap-4 ${compact ? 'lg:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-3'}`}>
        {FOUNDERS.map((founder) => (
          <article
            key={founder.name}
            className="rounded-lg border p-4 flex h-full flex-col gap-3"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: compact ? 'var(--surface)' : 'var(--surface2)',
            }}
          >
            <div>
              <p
                className={`font-serif leading-none ${compact ? 'text-[1.15rem]' : 'text-[1.35rem]'}`}
                style={{ color: 'var(--text-primary)' }}
              >
                {founder.name}
              </p>
              <p
                className="font-mono text-[11px] uppercase tracking-[0.14em] mt-2"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {founder.title}
              </p>
            </div>

            <p
              className={compact ? 'text-xs leading-relaxed' : 'text-sm leading-relaxed'}
              style={{ color: 'var(--text-secondary)' }}
            >
              {founder.summary}
            </p>

            {founder.linkUrl ? (
              <a
                href={founder.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-outline mt-auto inline-flex items-center gap-1.5 px-3 py-2 text-xs self-start"
                style={{ color: 'var(--accent)', borderColor: 'var(--accent-border-soft)' }}
              >
                <Linkedin size={12} />
                {founder.linkLabel || 'LinkedIn'}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
