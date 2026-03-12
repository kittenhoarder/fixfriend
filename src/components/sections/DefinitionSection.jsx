import { DEFINITION, INTERVIEW_TRACKER } from '../../data/content'

function Block({ title, children, className = '' }) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2
        className="font-mono font-bold text-sm tracking-wider mb-3"
        style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}
      >
        {title}
      </h2>
      <div
        className="text-sm leading-relaxed whitespace-pre-line"
        style={{ color: 'var(--text-secondary)' }}
      >
        {children}
      </div>
    </div>
  )
}

function renderParagraph(text) {
  const parts = []
  let rest = text
  let key = 0
  while (rest.length) {
    const bold = rest.match(/\*\*([^*]+)\*\*/)
    if (bold) {
      const before = rest.slice(0, bold.index)
      if (before) parts.push(<span key={key++}>{before}</span>)
      parts.push(<strong key={key++} style={{ color: 'var(--text-primary)' }}>{bold[1]}</strong>)
      rest = rest.slice(bold.index + bold[0].length)
    } else {
      parts.push(<span key={key++}>{rest}</span>)
      break
    }
  }
  return parts
}

function Paragraphs({ text }) {
  return text.split('\n\n').map((p, i) => (
    <p key={i} className="mt-2 first:mt-0 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
      {p.split('\n').map((line, j) => (
        <span key={j}>
          {renderParagraph(line)}
          {j < p.split('\n').length - 1 && <br />}
        </span>
      ))}
    </p>
  ))
}

export default function DefinitionSection() {
  const d = DEFINITION
  const workflowVoices = INTERVIEW_TRACKER.map((entry) => {
    const firstQuote = entry.keyQuotes[0]
    return {
      id: entry.id,
      quote: firstQuote?.text,
      attribution: `${entry.name}, ${entry.role}, ${entry.company}`,
    }
  }).filter((q) => q.quote)

  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      <div
        className="hidden lg:flex px-6 py-4 border-b flex-shrink-0"
        style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
      >
        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--muted)', letterSpacing: '0.12em' }}>
          MARKET DEFINITION & SIZE
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="content-rail">
        <Block title={d.origin.title}>
          <Paragraphs text={d.origin.body} />
        </Block>

        <div className="border-t my-8" style={{ borderColor: 'var(--border-subtle)' }} />

        <Block title={d.marketDefinition.title}>
          <Paragraphs text={d.marketDefinition.body} />
        </Block>

        <div className="border-t my-8" style={{ borderColor: 'var(--border-subtle)' }} />

        {workflowVoices.length > 0 && (
          <Block title="Voices from the workflow">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Direct interviews with vendors, traders, and workflow owners confirm that venue-driven change response is
              a recurring operational drag rather than a one-off incident. A few examples:
            </p>
            <div className="mt-4 space-y-3">
              {workflowVoices.map((voice) => (
                <div
                  key={voice.id}
                  className="rounded-lg border p-3"
                  style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    “{voice.quote}”
                  </p>
                  <p className="text-xs mt-2 font-mono tracking-[0.12em]" style={{ color: 'var(--text-tertiary)' }}>
                    {voice.attribution}
                  </p>
                </div>
              ))}
            </div>
          </Block>
        )}

        <h2
          className="font-mono font-bold text-sm tracking-wider mb-4"
          style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}
        >
          {d.marketSize.title}
        </h2>

        <div className="mb-6">
          <h3 className="font-mono text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            {d.marketSize.entry.label}
          </h3>
          <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
            <Paragraphs text={d.marketSize.entry.body} />
          </div>
        </div>

        {d.marketSize.attach && (
          <div className="mb-6">
            <h3 className="font-mono text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {d.marketSize.attach.label}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {d.marketSize.attach.body}
            </p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-mono text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            {d.marketSize.expansion.label}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {d.marketSize.expansion.body}
          </p>
        </div>

        <div
          className="panel-shell rounded-lg px-4 py-3 mb-6"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
        >
          <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>SAM: </span>
          <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{d.marketSize.sam}</span>
        </div>

        <div
          className="rounded-lg border px-4 py-3"
          style={{ borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}
        >
          <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>SOM: </span>
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{d.marketSize.som}</span>
        </div>

        {d.marketSize.methodology && (
          <div
            className="panel-shell rounded-lg px-4 py-4 mt-6"
            style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
          >
            <div
              className="font-mono text-xs tracking-widest mb-3"
              style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}
            >
              MARKET MODEL METHOD
            </div>
            <ul className="space-y-2">
              {d.marketSize.methodology.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>•</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
