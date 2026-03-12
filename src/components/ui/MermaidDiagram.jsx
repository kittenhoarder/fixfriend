import { useEffect, useId, useState } from 'react'
import mermaid from 'mermaid'
import DiagramCanvas from './DiagramCanvas'

export default function MermaidDiagram({ diagram, theme = 'dark', minHeight = 260 }) {
  const uniqueId = useId()
  const [svg, setSvg] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setSvg(null)
    setError(null)

    const isLight = theme === 'light'

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
      sequence: {
        useMaxWidth: true,
      },
      theme: 'base',
      themeVariables: {
        primaryColor: isLight ? '#ffffff' : '#0f172a',
        primaryTextColor: isLight ? '#111827' : '#e2e8f0',
        primaryBorderColor: isLight ? '#94a3b8' : '#334155',
        lineColor: isLight ? '#64748b' : '#64748b',
        secondaryColor: isLight ? '#f8fafc' : '#111827',
        tertiaryColor: isLight ? '#e2e8f0' : '#1e293b',
        fontFamily: '"DM Sans", system-ui, sans-serif',
        fontSize: '14px',
        edgeLabelBackground: isLight ? '#ffffff' : '#0f172a',
      },
    })

    const id = `mermaid-${uniqueId.replace(/:/g, '-')}`
    mermaid
      .render(id, diagram.trim())
      .then(({ svg: rendered }) => {
        if (!cancelled) setSvg(rendered)
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || 'Failed to render diagram')
      })

    return () => {
      cancelled = true
    }
  }, [diagram, theme])

  if (error) {
    return (
      <div
        className="rounded-lg border p-4"
        style={{
          minHeight,
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--surface)',
        }}
      >
        <div className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          Diagram failed to load: {error}
        </div>
      </div>
    )
  }

  if (!svg) {
    return (
      <div
        className="rounded-lg border p-4"
        style={{
          minHeight,
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--surface)',
        }}
      >
        <div className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          Loading diagram...
        </div>
      </div>
    )
  }

  return (
    <DiagramCanvas minHeight={minHeight}>
      <div
        className="mermaid-diagram"
        dangerouslySetInnerHTML={{ __html: svg }}
        style={{ lineHeight: 0, minWidth: 'max-content' }}
      />
    </DiagramCanvas>
  )
}
