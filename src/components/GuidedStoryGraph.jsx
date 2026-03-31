import { useEffect, useId, useRef, useState } from 'react'
import mermaid from 'mermaid'
import {
  STORY_GRAPH_CLUSTER_MEMBERS,
  STORY_GRAPH_EDGE_ALIASES,
  STORY_GRAPH_EDGE_NODES,
  STORY_GRAPH_NODE_KEYS,
} from '../data/fullGraphMermaid'
import DiagramCanvas from './ui/DiagramCanvas'

const CAMERA_DURATION = 460
const CAMERA_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function escapeSelector(value) {
  if (typeof window !== 'undefined' && window.CSS && typeof window.CSS.escape === 'function') {
    return window.CSS.escape(value)
  }

  return value.replace(/[^a-zA-Z0-9_-]/g, '\\$&')
}

function createMermaidTheme(theme) {
  const isLight = theme === 'light'

  return {
    startOnLoad: false,
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      nodeSpacing: 36,
      rankSpacing: 58,
      curve: 'basis',
    },
    theme: 'base',
    themeVariables: {
      primaryColor: isLight ? '#ffffff' : '#0f172a',
      primaryTextColor: isLight ? '#111827' : '#e2e8f0',
      primaryBorderColor: isLight ? '#94a3b8' : '#334155',
      lineColor: isLight ? '#64748b' : '#64748b',
      secondaryColor: isLight ? '#f1f5f9' : '#111827',
      tertiaryColor: isLight ? '#e2e8f0' : '#1e293b',
      fontFamily: '"Manrope", system-ui, sans-serif',
      fontSize: '14px',
      edgeLabelBackground: isLight ? '#ffffff' : '#0f172a',
      clusterBkg: isLight ? '#f8fafc' : '#0b0b0c',
      clusterBorder: isLight ? '#cbd5e1' : '#2f3238',
    },
  }
}

function clearElementClasses(elements) {
  elements.forEach((element) => {
    element.classList.remove('story-graph-focus', 'story-graph-related', 'story-graph-dim')
  })
}

function applyClass(elements, className) {
  elements.forEach((element) => {
    element.classList.add(className)
  })
}

function collectBounds(elements) {
  const measurable = elements.filter((element) => typeof element?.getBBox === 'function')

  if (!measurable.length) return null

  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  measurable.forEach((element) => {
    const box = element.getBBox()

    if (!box.width && !box.height) return

    minX = Math.min(minX, box.x)
    minY = Math.min(minY, box.y)
    maxX = Math.max(maxX, box.x + box.width)
    maxY = Math.max(maxY, box.y + box.height)
  })

  if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) {
    return null
  }

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  }
}

function buildNodeClusterMap() {
  const nodeToCluster = new Map()

  Object.entries(STORY_GRAPH_CLUSTER_MEMBERS).forEach(([clusterKey, nodeKeys]) => {
    nodeKeys.forEach((nodeKey) => {
      nodeToCluster.set(nodeKey, clusterKey)
    })
  })

  return nodeToCluster
}

const NODE_TO_CLUSTER = buildNodeClusterMap()

function buildRegistry(root) {
  const nodes = new Map()
  const clusters = new Map()
  const edges = new Map()
  const allElements = new Set()

  STORY_GRAPH_NODE_KEYS.forEach((nodeKey) => {
    const elements = [...root.querySelectorAll(`g[id^="flowchart-${escapeSelector(nodeKey)}-"]`)]
    nodes.set(nodeKey, elements)
    elements.forEach((element) => allElements.add(element))
  })

  Object.keys(STORY_GRAPH_CLUSTER_MEMBERS).forEach((clusterKey) => {
    const elements = [...root.querySelectorAll(`g.cluster[id="${escapeSelector(clusterKey)}"]`)]
    clusters.set(clusterKey, elements)
    elements.forEach((element) => allElements.add(element))
  })

  Object.entries(STORY_GRAPH_EDGE_ALIASES).forEach(([edgeKey, edgePrefix]) => {
    const elements = [...root.querySelectorAll(`path[id^="${escapeSelector(edgePrefix)}"]`)]
    edges.set(edgeKey, elements)
    elements.forEach((element) => allElements.add(element))
  })

  return {
    nodes,
    clusters,
    edges,
    allElements: [...allElements],
  }
}

function resolveFocusState(focus) {
  const focusNodes = new Set(focus?.nodes || [])
  const focusClusters = new Set(focus?.clusters || [])
  const focusEdges = new Set(focus?.edges || [])

  const relatedNodes = new Set()
  const relatedClusters = new Set()
  const relatedEdges = new Set()

  focusClusters.forEach((clusterKey) => {
    relatedClusters.add(clusterKey)
    ;(STORY_GRAPH_CLUSTER_MEMBERS[clusterKey] || []).forEach((nodeKey) => relatedNodes.add(nodeKey))
  })

  focusEdges.forEach((edgeKey) => {
    const endpoints = STORY_GRAPH_EDGE_NODES[edgeKey] || []
    endpoints.forEach((nodeKey) => relatedNodes.add(nodeKey))
  })

  focusNodes.forEach((nodeKey) => {
    const clusterKey = NODE_TO_CLUSTER.get(nodeKey)
    if (clusterKey) {
      relatedClusters.add(clusterKey)
      ;(STORY_GRAPH_CLUSTER_MEMBERS[clusterKey] || []).forEach((clusterNodeKey) => relatedNodes.add(clusterNodeKey))
    }
  })

  Object.entries(STORY_GRAPH_EDGE_NODES).forEach(([edgeKey, [sourceKey, targetKey]]) => {
    const sourceCluster = NODE_TO_CLUSTER.get(sourceKey)
    const targetCluster = NODE_TO_CLUSTER.get(targetKey)
    const touchesFocusNode = focusNodes.has(sourceKey) || focusNodes.has(targetKey)
    const touchesFocusCluster = focusClusters.has(sourceCluster) || focusClusters.has(targetCluster)
    const touchesRelatedNode = relatedNodes.has(sourceKey) || relatedNodes.has(targetKey)

    if (touchesFocusNode || touchesFocusCluster || touchesRelatedNode) {
      relatedEdges.add(edgeKey)
      relatedNodes.add(sourceKey)
      relatedNodes.add(targetKey)

      if (sourceCluster) relatedClusters.add(sourceCluster)
      if (targetCluster) relatedClusters.add(targetCluster)
    }
  })

  focusNodes.forEach((nodeKey) => relatedNodes.delete(nodeKey))
  focusClusters.forEach((clusterKey) => relatedClusters.delete(clusterKey))
  focusEdges.forEach((edgeKey) => relatedEdges.delete(edgeKey))

  return {
    focusNodes,
    focusClusters,
    focusEdges,
    relatedNodes,
    relatedClusters,
    relatedEdges,
  }
}

function getViewportTargets(registry, focusState) {
  const targets = []

  focusState.focusClusters.forEach((clusterKey) => {
    targets.push(...(registry.clusters.get(clusterKey) || []))
  })

  focusState.focusNodes.forEach((nodeKey) => {
    targets.push(...(registry.nodes.get(nodeKey) || []))
  })

  focusState.focusEdges.forEach((edgeKey) => {
    targets.push(...(registry.edges.get(edgeKey) || []))
  })

  if (!targets.length) {
    focusState.relatedClusters.forEach((clusterKey) => {
      targets.push(...(registry.clusters.get(clusterKey) || []))
    })
    focusState.relatedNodes.forEach((nodeKey) => {
      targets.push(...(registry.nodes.get(nodeKey) || []))
    })
  }

  return targets
}

function applyViewportOverride(canvas, focus, duration) {
  if (!canvas || !focus?.viewport) return false

  canvas.setViewport(
    focus.viewport.zoom,
    { x: focus.viewport.x, y: focus.viewport.y },
    {
      duration,
      easing: CAMERA_EASING,
      userAdjusted: false,
    }
  )

  return true
}

export default function GuidedStoryGraph({
  diagram,
  theme = 'dark',
  focus = null,
  mode = 'guided',
  showToolbar = false,
  showCallouts = true,
  minHeight = 420,
}) {
  const uniqueId = useId()
  const canvasRef = useRef(null)
  const graphRef = useRef(null)
  const registryRef = useRef({
    nodes: new Map(),
    clusters: new Map(),
    edges: new Map(),
    allElements: [],
  })

  const [svg, setSvg] = useState(null)
  const [error, setError] = useState(null)
  const [contentVersion, setContentVersion] = useState(0)
  const [viewport, setViewport] = useState({ zoom: 1, pan: { x: 0, y: 0 } })
  const [copyState, setCopyState] = useState('idle')

  const viewportLabel = `z ${viewport.zoom.toFixed(3)} | x ${viewport.pan.x.toFixed(2)} | y ${viewport.pan.y.toFixed(2)}`

  const handleCopyViewport = async () => {
    const payload = JSON.stringify(
      {
        zoom: Number(viewport.zoom.toFixed(4)),
        x: Number(viewport.pan.x.toFixed(2)),
        y: Number(viewport.pan.y.toFixed(2)),
      },
      null,
      2
    )

    try {
      if (typeof window !== 'undefined' && window.navigator?.clipboard?.writeText) {
        await window.navigator.clipboard.writeText(payload)
        setCopyState('copied')
      } else {
        setCopyState('unsupported')
      }
    } catch {
      setCopyState('error')
    }

    window.setTimeout(() => setCopyState('idle'), 1400)
  }

  useEffect(() => {
    let cancelled = false
    setSvg(null)
    setError(null)

    mermaid.initialize(createMermaidTheme(theme))

    const renderId = `guided-graph-${uniqueId.replace(/:/g, '-')}-${Date.now()}`

    mermaid
      .render(renderId, diagram.trim())
      .then(({ svg: rendered }) => {
        if (!cancelled) {
          setSvg(rendered)
          setContentVersion((current) => current + 1)
        }
      })
      .catch((renderError) => {
        if (!cancelled) {
          setError(renderError?.message || 'Failed to render diagram')
        }
      })

    return () => {
      cancelled = true
    }
  }, [diagram, theme, uniqueId])

  useEffect(() => {
    if (!svg || !graphRef.current) return

    const rafId = window.requestAnimationFrame(() => {
      registryRef.current = buildRegistry(graphRef.current)
    })

    return () => window.cancelAnimationFrame(rafId)
  }, [svg])

  useEffect(() => {
    if (!svg || !graphRef.current || !canvasRef.current) return

    const rafId = window.requestAnimationFrame(() => {
      const registry = registryRef.current
      clearElementClasses(registry.allElements)

      if (mode === 'explore' || !focus || focus.mode === 'full') {
        const didApplyViewport = mode === 'guided'
          ? applyViewportOverride(canvasRef.current, focus, prefersReducedMotion() ? 0 : CAMERA_DURATION)
          : false

        if (!didApplyViewport) {
          canvasRef.current.fitToContent({
            duration: mode === 'guided' ? (prefersReducedMotion() ? 0 : CAMERA_DURATION) : 0,
            easing: CAMERA_EASING,
            padding: focus?.padding || { x: 48, y: 48 },
          })
        }
        return
      }

      const focusState = resolveFocusState(focus)

      registry.allElements.forEach((element) => {
        element.classList.add('story-graph-dim')
      })

      focusState.relatedClusters.forEach((clusterKey) => {
        applyClass(registry.clusters.get(clusterKey) || [], 'story-graph-related')
      })
      focusState.relatedNodes.forEach((nodeKey) => {
        applyClass(registry.nodes.get(nodeKey) || [], 'story-graph-related')
      })
      focusState.relatedEdges.forEach((edgeKey) => {
        applyClass(registry.edges.get(edgeKey) || [], 'story-graph-related')
      })

      focusState.focusClusters.forEach((clusterKey) => {
        applyClass(registry.clusters.get(clusterKey) || [], 'story-graph-focus')
      })
      focusState.focusNodes.forEach((nodeKey) => {
        applyClass(registry.nodes.get(nodeKey) || [], 'story-graph-focus')
      })
      focusState.focusEdges.forEach((edgeKey) => {
        applyClass(registry.edges.get(edgeKey) || [], 'story-graph-focus')
      })

      const didApplyViewport = applyViewportOverride(
        canvasRef.current,
        focus,
        prefersReducedMotion() ? 0 : CAMERA_DURATION
      )

      if (!didApplyViewport) {
        const bounds = collectBounds(getViewportTargets(registry, focusState))
        if (bounds) {
          canvasRef.current.fitToBounds(bounds, {
            padding: focus.padding || { x: 72, y: 72 },
            duration: prefersReducedMotion() ? 0 : CAMERA_DURATION,
            easing: CAMERA_EASING,
          })
        } else {
          canvasRef.current.fitToContent({
            duration: prefersReducedMotion() ? 0 : CAMERA_DURATION,
            easing: CAMERA_EASING,
            padding: focus.padding || { x: 48, y: 48 },
          })
        }
      }
    })

    return () => window.cancelAnimationFrame(rafId)
  }, [focus, mode, svg])

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
    <div className="flex min-h-0 flex-col gap-3">
      <div className="relative">
        <DiagramCanvas
          ref={canvasRef}
          minHeight={minHeight}
          className="h-full"
          showToolbar={showToolbar}
          initialView="fit"
          contentVersion={contentVersion}
          onViewportChange={setViewport}
        >
          <div
            ref={graphRef}
            className={`guided-story-graph ${mode === 'guided' ? 'guided-story-graph--guided' : 'guided-story-graph--explore'}`}
            dangerouslySetInnerHTML={{ __html: svg }}
            style={{ lineHeight: 0, minWidth: 'max-content' }}
          />
        </DiagramCanvas>

        {mode === 'guided' ? (
          <div
            className="absolute left-2 top-2 z-10 flex items-center gap-2 border px-2.5 py-1.5"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'rgba(11, 11, 12, 0.86)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="font-mono text-[10px] tracking-[0.12em]" style={{ color: 'var(--text-secondary)' }}>
              {viewportLabel}
            </span>
            <button
              type="button"
              onClick={handleCopyViewport}
              className="border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em]"
              style={{
                borderColor: 'var(--border-subtle)',
                color: copyState === 'copied' ? 'var(--status-success)' : 'var(--text-secondary)',
                backgroundColor: 'var(--surface3)',
              }}
            >
              {copyState === 'copied' ? 'Copied' : copyState === 'unsupported' ? 'No clip' : copyState === 'error' ? 'Retry' : 'Copy'}
            </button>
          </div>
        ) : null}
      </div>

      {showCallouts && mode === 'guided' && focus?.callouts?.length ? (
        <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-wrap">
          {focus.callouts.map((callout) => (
            <div
              key={callout}
              className="border px-3 py-2 text-[10px] leading-relaxed md:text-xs"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--surface3)',
                color: 'var(--text-secondary)',
              }}
            >
              {callout}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
