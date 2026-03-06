import { useState } from 'react'
import MarketMap from '../market/MarketMap'
import MarketDetailPanel from '../market/MarketDetailPanel'
import FullGraphView from '../market/FullGraphView'
import SectionHeader from '../ui/SectionHeader'

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
      {/* View toggle only (no 02/MARKET label). Compact bar to save mobile viewport. */}
      <SectionHeader
        right={(
          <div className="flex items-center gap-2 justify-start sm:justify-end">
            <span className="font-mono text-xs hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>View:</span>
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className="font-mono text-xs px-3 py-2 border transition-colors"
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
              className="font-mono text-xs px-3 py-2 border transition-colors"
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
        )}
        compact
        hideOnMobile={false}
      />

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
