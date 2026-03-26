import { useState } from 'react'
import MarketMap from '../market/MarketMap'
import MarketDetailPanel from '../market/MarketDetailPanel'
import FullGraphView from '../market/FullGraphView'
import { CONTINUOUS_CHANGE_SIGNALS } from '../../data/content'

export default function MarketSection({ theme }) {
  const [activeNodeId, setActiveNodeId] = useState(null)
  const [viewMode, setViewMode] = useState('interactive') // 'interactive' | 'fullgraph'

  function handleNodeClick(id) {
    setActiveNodeId((prev) => (prev === id ? null : id))
  }

  return (
    <div
      className="flex flex-col h-full pt-14 lg:pt-0"
      style={{ minHeight: '100vh' }}
    >
      <div
        className="px-4 sm:px-6 py-2 border-b flex flex-wrap items-center gap-2 flex-shrink-0 backdrop-blur-sm"
        style={{
          borderColor: 'var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent), rgba(5,5,5,0.18)',
        }}
      >
        <span className="font-mono text-[11px] tracking-widest" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.14em' }}>MARKET</span>
        <span className="font-mono text-[10px] hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>View:</span>
        <button
          type="button"
          onClick={() => setViewMode('interactive')}
          className="font-mono text-[11px] px-2.5 py-1.5 border transition-colors"
          style={{
            borderColor: viewMode === 'interactive' ? 'var(--accent-border-soft)' : 'var(--border-subtle)',
            color: viewMode === 'interactive' ? 'var(--accent)' : 'var(--text-secondary)',
            background: viewMode === 'interactive'
              ? 'linear-gradient(90deg, rgba(59,130,246,0.12), rgba(249,115,22,0.08) 80%, transparent)'
              : 'transparent',
          }}
        >
          Interactive map
        </button>
        <button
          type="button"
          onClick={() => setViewMode('fullgraph')}
          className="font-mono text-[11px] px-2.5 py-1.5 border transition-colors"
          style={{
            borderColor: viewMode === 'fullgraph' ? 'var(--accent-border-soft)' : 'var(--border-subtle)',
            color: viewMode === 'fullgraph' ? 'var(--accent)' : 'var(--text-secondary)',
            background: viewMode === 'fullgraph'
              ? 'linear-gradient(90deg, rgba(59,130,246,0.12), rgba(249,115,22,0.08) 80%, transparent)'
              : 'transparent',
          }}
        >
          Full graph
        </button>
      </div>

      <div
        className="md:hidden px-4 py-1.5 border-b flex-shrink-0"
        style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
          {CONTINUOUS_CHANGE_SIGNALS.title}
        </div>
        <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--text-secondary)' }}>
          Extended hours, longer clearing windows, and workflow automation increase the need for constant-change readiness.
        </p>
      </div>

      <div
        className="hidden md:block px-4 sm:px-6 py-2 border-b flex-shrink-0"
        style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface3)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
            {CONTINUOUS_CHANGE_SIGNALS.title}
          </div>
          <p className="text-xs leading-relaxed mt-1.5" style={{ color: 'var(--text-secondary)' }}>
            {CONTINUOUS_CHANGE_SIGNALS.intro}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {CONTINUOUS_CHANGE_SIGNALS.items.map((item) => (
              <a
                key={item.title}
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] px-2.5 py-1.5 border"
                style={{
                  color: 'var(--text-secondary)',
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--surface)',
                  letterSpacing: '0.08em',
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {viewMode === 'interactive' && (
        <div
          className="px-6 py-1.5 lg:py-2 text-xs border-b lg:border-0"
          style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-subtle)' }}
        >
          Click any node to explore detail
        </div>
      )}

      {viewMode === 'fullgraph' ? (
        <div className="flex-1 p-4 lg:p-6 overflow-hidden min-h-0">
          <FullGraphView theme={theme} />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          <div
            className="lg:w-3/5 p-4 lg:p-6 overflow-y-auto border-b lg:border-b-0 lg:border-r"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <MarketMap
              activeNodeId={activeNodeId}
              onNodeClick={handleNodeClick}
            />
          </div>
          <div
            className="lg:w-2/5 p-5 lg:p-6 overflow-y-auto"
            style={{ backgroundColor: 'var(--surface3)' }}
          >
            <MarketDetailPanel activeNodeId={activeNodeId} />
          </div>
        </div>
      )}
    </div>
  )
}
