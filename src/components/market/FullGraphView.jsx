import { useRef, useState, useCallback, useEffect } from 'react'
import mermaid from 'mermaid'
import { FULL_GRAPH_MERMAID } from '../../data/fullGraphMermaid'

const ZOOM_MIN = 0.12
const ZOOM_MAX = 2.5

function clampZoom(value) {
  return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, value))
}

function getDistance(p1, p2) {
  const dx = p1.x - p2.x
  const dy = p1.y - p2.y
  return Math.hypot(dx, dy)
}

function getMidpoint(p1, p2) {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  }
}

export default function FullGraphView({ theme = 'dark' }) {
  const containerRef = useRef(null)
  const innerRef = useRef(null)

  const [svg, setSvg] = useState(null)
  const [error, setError] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  const zoomRef = useRef(1)
  const panRef = useRef({ x: 0, y: 0 })
  const pointersRef = useRef(new Map())
  const dragRef = useRef(null)
  const pinchRef = useRef(null)
  const svgSizeRef = useRef({ w: 0, h: 0 })
  const hasFitRef = useRef(false)
  const userAdjustedViewRef = useRef(false)

  useEffect(() => {
    zoomRef.current = zoom
  }, [zoom])

  useEffect(() => {
    panRef.current = pan
  }, [pan])

  const setViewport = useCallback((nextZoom, nextPan) => {
    const safeZoom = clampZoom(nextZoom)
    zoomRef.current = safeZoom
    panRef.current = nextPan
    setZoom(safeZoom)
    setPan(nextPan)
  }, [])

  const getSvgDimensions = useCallback(() => {
    const svgEl = innerRef.current?.querySelector('.mermaid-full-graph svg')
    if (!svgEl) return null

    const vb = svgEl.viewBox?.baseVal
    const w = vb?.width || svgEl.getBBox?.().width || svgEl.clientWidth
    const h = vb?.height || svgEl.getBBox?.().height || svgEl.clientHeight
    if (!w || !h) return null

    svgSizeRef.current = { w, h }
    return svgSizeRef.current
  }, [])

  const fitToViewport = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const dims = getSvgDimensions()
    if (!dims) return

    const padding = container.clientWidth < 768 ? 14 : 28
    const availableW = Math.max(1, container.clientWidth - padding * 2)
    const availableH = Math.max(1, container.clientHeight - padding * 2)

    const fitScale = clampZoom(Math.min(availableW / dims.w, availableH / dims.h))
    const nextPan = {
      x: Math.max(0, (container.clientWidth - dims.w * fitScale) / 2),
      y: Math.max(0, (container.clientHeight - dims.h * fitScale) / 2),
    }

    setViewport(fitScale, nextPan)
    hasFitRef.current = true
  }, [getSvgDimensions, setViewport])

  const resetToOrigin = useCallback(() => {
    setViewport(1, { x: 0, y: 0 })
    userAdjustedViewRef.current = false
  }, [setViewport])

  const zoomAroundPoint = useCallback(
    (nextZoom, point) => {
      const z0 = zoomRef.current
      const p0 = panRef.current
      const z1 = clampZoom(nextZoom)
      const ratio = z1 / z0

      const nextPan = {
        x: point.x - (point.x - p0.x) * ratio,
        y: point.y - (point.y - p0.y) * ratio,
      }

      setViewport(z1, nextPan)
    },
    [setViewport]
  )

  const getLocalPoint = useCallback((event) => {
    const container = containerRef.current
    if (!container) return { x: 0, y: 0 }
    const rect = container.getBoundingClientRect()
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    setError(null)
    setSvg(null)
    hasFitRef.current = false
    userAdjustedViewRef.current = false

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
    mermaid
      .render(id, FULL_GRAPH_MERMAID.trim())
      .then(({ svg: rendered }) => {
        if (!cancelled) {
          setSvg(rendered)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err?.message || 'Failed to render diagram')
        }
      })

    return () => {
      cancelled = true
    }
  }, [theme])

  useEffect(() => {
    if (!svg) return
    const timerId = window.setTimeout(() => {
      fitToViewport()
    }, 60)
    return () => window.clearTimeout(timerId)
  }, [svg, fitToViewport])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(() => {
      if (!hasFitRef.current || !userAdjustedViewRef.current) {
        fitToViewport()
      }
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [fitToViewport])

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault()
      const localPoint = getLocalPoint(event)
      const delta = event.deltaY > 0 ? -0.12 : 0.12
      userAdjustedViewRef.current = true
      zoomAroundPoint(zoomRef.current + delta, localPoint)
    },
    [getLocalPoint, zoomAroundPoint]
  )

  const handlePointerDown = useCallback(
    (event) => {
      if (event.pointerType !== 'touch' && event.button !== 0) return

      containerRef.current?.setPointerCapture(event.pointerId)
      const point = getLocalPoint(event)
      pointersRef.current.set(event.pointerId, point)

      if (pointersRef.current.size === 1) {
        dragRef.current = {
          startPoint: point,
          startPan: { ...panRef.current },
        }
        pinchRef.current = null
        setDragging(true)
      }

      if (pointersRef.current.size >= 2) {
        const [p1, p2] = [...pointersRef.current.values()]
        pinchRef.current = {
          startDistance: getDistance(p1, p2),
          startZoom: zoomRef.current,
          startPan: { ...panRef.current },
          startMid: getMidpoint(p1, p2),
        }
        dragRef.current = null
        setDragging(false)
      }
    },
    [getLocalPoint]
  )

  const handlePointerMove = useCallback(
    (event) => {
      if (!pointersRef.current.has(event.pointerId)) return

      const point = getLocalPoint(event)
      pointersRef.current.set(event.pointerId, point)

      if (pointersRef.current.size >= 2) {
        const [p1, p2] = [...pointersRef.current.values()]
        if (!pinchRef.current) {
          pinchRef.current = {
            startDistance: getDistance(p1, p2),
            startZoom: zoomRef.current,
            startPan: { ...panRef.current },
            startMid: getMidpoint(p1, p2),
          }
        }

        const pinch = pinchRef.current
        const currentDistance = Math.max(1, getDistance(p1, p2))
        const rawZoom = pinch.startZoom * (currentDistance / Math.max(1, pinch.startDistance))
        const safeZoom = clampZoom(rawZoom)
        const ratio = safeZoom / pinch.startZoom

        const nextPan = {
          x: pinch.startMid.x - (pinch.startMid.x - pinch.startPan.x) * ratio,
          y: pinch.startMid.y - (pinch.startMid.y - pinch.startPan.y) * ratio,
        }

        setViewport(safeZoom, nextPan)
        userAdjustedViewRef.current = true
        return
      }

      if (pointersRef.current.size === 1 && dragRef.current) {
        const drag = dragRef.current
        const nextPan = {
          x: drag.startPan.x + (point.x - drag.startPoint.x),
          y: drag.startPan.y + (point.y - drag.startPoint.y),
        }

        setViewport(zoomRef.current, nextPan)
        userAdjustedViewRef.current = true
      }
    },
    [getLocalPoint, setViewport]
  )

  const handlePointerUp = useCallback((event) => {
    pointersRef.current.delete(event.pointerId)

    if (pointersRef.current.size < 2) {
      pinchRef.current = null
    }

    if (pointersRef.current.size === 1) {
      const [remainingPoint] = [...pointersRef.current.values()]
      dragRef.current = {
        startPoint: remainingPoint,
        startPan: { ...panRef.current },
      }
      setDragging(true)
      return
    }

    dragRef.current = null
    setDragging(false)
  }, [])

  const zoomWithStep = useCallback(
    (direction) => {
      if (!containerRef.current) return
      const center = {
        x: containerRef.current.clientWidth / 2,
        y: containerRef.current.clientHeight / 2,
      }
      const delta = direction === 'in' ? 0.15 : -0.15
      userAdjustedViewRef.current = true
      zoomAroundPoint(zoomRef.current + delta, center)
    },
    [zoomAroundPoint]
  )

  return (
    <div
      className="relative w-full h-full min-h-[460px] rounded-lg border overflow-hidden"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
    >
      <div
        ref={containerRef}
        className={`w-full h-full overflow-hidden ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ touchAction: 'none' }}
      >
        <div
          ref={innerRef}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: '0 0',
            display: 'inline-block',
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          {error && (
            <div className="p-4 font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
              Diagram failed to load: {error}
            </div>
          )}
          {!error && !svg && (
            <div className="p-4 font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
              Loading diagram...
            </div>
          )}
          {svg && (
            <div
              className="mermaid-full-graph"
              dangerouslySetInnerHTML={{ __html: svg }}
              style={{ lineHeight: 0 }}
            />
          )}
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={fitToViewport}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-colors"
            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)', backgroundColor: 'var(--surface)' }}
          >
            Fit
          </button>
          <button
            type="button"
            onClick={() => zoomWithStep('in')}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-colors"
            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)', backgroundColor: 'var(--surface)' }}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => zoomWithStep('out')}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-colors"
            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)', backgroundColor: 'var(--surface)' }}
          >
            -
          </button>
          <button
            type="button"
            onClick={resetToOrigin}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-colors"
            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)', backgroundColor: 'var(--surface)' }}
          >
            Reset
          </button>
        </div>

        <span
          className="font-mono text-[10px] sm:text-xs ml-auto"
          style={{ color: 'var(--text-tertiary)' }}
        >
          <span className="hidden sm:inline">Drag to pan · Scroll to zoom</span>
          <span className="sm:hidden">Pinch to zoom · Drag to pan</span>
        </span>
      </div>
    </div>
  )
}
