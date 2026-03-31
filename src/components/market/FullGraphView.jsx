import { useEffect, useState } from 'react'
import { FULL_GRAPH_MERMAID } from '../../data/fullGraphMermaid'
import DiagramCanvas from '../ui/DiagramCanvas'

export default function FullGraphView({ theme = 'dark' }) {
  const [svg, setSvg] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setError(null)
    setSvg(null)

    async function renderGraph() {
      try {
        const { default: mermaid } = await import('mermaid')
        const isLight = theme === 'light'

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
          },
          theme: 'base',
          themeVariables: {
            primaryColor: isLight ? '#ffffff' : '#0f172a',
            primaryTextColor: isLight ? '#111827' : '#e2e8f0',
            primaryBorderColor: isLight ? '#94a3b8' : '#334155',
            lineColor: isLight ? '#64748b' : '#64748b',
            secondaryColor: isLight ? '#f1f5f9' : '#111827',
            tertiaryColor: isLight ? '#e2e8f0' : '#1e293b',
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '14px',
            edgeLabelBackground: isLight ? '#ffffff' : '#0f172a',
          },
        })

        const id = `mermaid-full-graph-${Date.now()}`
        const { svg: rendered } = await mermaid.render(id, FULL_GRAPH_MERMAID.trim())

        if (!cancelled) {
          setSvg(rendered)
        }
      } catch (error) {
        if (!cancelled) {
          setError(error?.message || 'Failed to render diagram')
        }
      }
    }

    void renderGraph()

    return () => {
      cancelled = true
    }
  }, [theme])

  if (error) {
    return (
      <div
        className="relative w-full h-full min-h-[460px] rounded-lg border overflow-hidden flex items-center justify-center p-4"
        style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
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
        className="relative w-full h-full min-h-[460px] rounded-lg border overflow-hidden flex items-center justify-center p-4"
        style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
      >
        <div className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          Loading diagram...
        </div>
      </div>
    )
  }

  return (
    <DiagramCanvas minHeight={460} className="h-full">
      <div
        className="mermaid-full-graph"
        dangerouslySetInnerHTML={{ __html: svg }}
        style={{ lineHeight: 0 }}
      />
    </DiagramCanvas>
  )
}
