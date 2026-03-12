import { useRef, useState, useCallback, useEffect } from 'react'

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

const buttonStyle = {
  borderColor: 'var(--border-subtle)',
  color: 'var(--text-secondary)',
  backgroundColor: 'var(--surface)',
}

/**
 * Wraps diagram content (e.g. Mermaid SVG) with zoom, pan, and toolbar controls.
 * Default initial view matches the Reset state.
 */
export default function DiagramCanvas({ children, minHeight = 460, className = '' }) {
  const containerRef = useRef(null)
  const innerRef = useRef(null)

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
    const svgEl = innerRef.current?.querySelector('svg')
    if (!svgEl) return null

    const vb = svgEl.viewBox?.baseVal
    const w = vb?.width || svgEl.getBBox?.().width || svgEl.clientWidth
    const h = vb?.height || svgEl.getBBox?.().height || svgEl.clientHeight
    if (!w || !h) return null

    svgSizeRef.current = { w, h }
    return svgSizeRef.current
  }, [])

  const resetToOrigin = useCallback(() => {
    setViewport(1, { x: 0, y: 0 })
    hasFitRef.current = true
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
    if (!children) return
    const timerId = window.setTimeout(() => {
      getSvgDimensions()
      resetToOrigin()
    }, 60)
    return () => window.clearTimeout(timerId)
  }, [children, getSvgDimensions, resetToOrigin])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(() => {
      if (!hasFitRef.current || !userAdjustedViewRef.current) {
        getSvgDimensions()
        resetToOrigin()
      }
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [getSvgDimensions, resetToOrigin])

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
      className={`relative w-full overflow-hidden rounded-lg border ${className}`.trim()}
      style={{
        minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-base)',
      }}
    >
      <div
        ref={containerRef}
        className={`h-full min-h-[280px] w-full overflow-hidden ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
          {children}
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => zoomWithStep('in')}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-colors"
            style={buttonStyle}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => zoomWithStep('out')}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-colors"
            style={buttonStyle}
          >
            -
          </button>
          <button
            type="button"
            onClick={resetToOrigin}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-colors"
            style={buttonStyle}
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
