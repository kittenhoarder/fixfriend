import { forwardRef, useRef, useState, useCallback, useEffect, useImperativeHandle } from 'react'

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

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const buttonStyle = {
  borderColor: 'var(--border-subtle)',
  color: 'var(--text-secondary)',
  backgroundColor: 'var(--surface)',
}

const DEFAULT_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'

/**
 * Wraps diagram content (e.g. Mermaid SVG) with zoom, pan, and optional toolbar controls.
 * Supports manual interactions plus imperative fit/viewport transitions.
 */
const DiagramCanvas = forwardRef(function DiagramCanvas(
  {
    children,
    minHeight = 460,
    className = '',
    showToolbar = true,
    initialView = 'origin',
    contentVersion = 0,
    onViewportChange,
  },
  ref
) {
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const transitionTimeoutRef = useRef(null)

  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [transformTransition, setTransformTransition] = useState('none')

  const zoomRef = useRef(1)
  const panRef = useRef({ x: 0, y: 0 })
  const pointersRef = useRef(new Map())
  const dragRef = useRef(null)
  const pinchRef = useRef(null)
  const hasFitRef = useRef(false)
  const userAdjustedViewRef = useRef(false)

  useEffect(() => {
    zoomRef.current = zoom
  }, [zoom])

  useEffect(() => {
    panRef.current = pan
  }, [pan])

  useEffect(() => {
    onViewportChange?.({ zoom, pan })
  }, [onViewportChange, pan, zoom])

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [])

  const applyTransition = useCallback((duration = 0, easing = DEFAULT_EASING) => {
    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = null
    }

    if (!duration || prefersReducedMotion()) {
      setTransformTransition('none')
      return
    }

    setTransformTransition(`transform ${duration}ms ${easing}`)
    transitionTimeoutRef.current = window.setTimeout(() => {
      setTransformTransition('none')
      transitionTimeoutRef.current = null
    }, duration)
  }, [])

  const setViewport = useCallback(
    (nextZoom, nextPan, options = {}) => {
      const {
        duration = 0,
        easing = DEFAULT_EASING,
        userAdjusted = false,
      } = options

      applyTransition(duration, easing)

      const safeZoom = clampZoom(nextZoom)
      zoomRef.current = safeZoom
      panRef.current = nextPan
      setZoom(safeZoom)
      setPan(nextPan)
      userAdjustedViewRef.current = userAdjusted
      hasFitRef.current = true
    },
    [applyTransition]
  )

  const getSvgElement = useCallback(() => innerRef.current?.querySelector('svg') || null, [])

  const getContentBounds = useCallback(() => {
    const svgEl = getSvgElement()
    if (!svgEl?.getBBox) return null

    const bounds = svgEl.getBBox()
    if (!bounds.width || !bounds.height) return null

    return {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
    }
  }, [getSvgElement])

  const fitToBounds = useCallback(
    (bounds, options = {}) => {
      const container = containerRef.current
      if (!container || !bounds?.width || !bounds?.height) return

      const { padding = 32, duration = 0, easing = DEFAULT_EASING } = options
      const normalizedPadding = typeof padding === 'number'
        ? { x: padding, y: padding }
        : { x: padding?.x ?? 32, y: padding?.y ?? 32 }

      const availableWidth = Math.max(1, container.clientWidth - normalizedPadding.x * 2)
      const availableHeight = Math.max(1, container.clientHeight - normalizedPadding.y * 2)
      const targetZoom = clampZoom(
        Math.min(availableWidth / bounds.width, availableHeight / bounds.height)
      )

      const nextPan = {
        x: normalizedPadding.x + (availableWidth - bounds.width * targetZoom) / 2 - bounds.x * targetZoom,
        y: normalizedPadding.y + (availableHeight - bounds.height * targetZoom) / 2 - bounds.y * targetZoom,
      }

      setViewport(targetZoom, nextPan, { duration, easing, userAdjusted: false })
    },
    [setViewport]
  )

  const resetToOrigin = useCallback(
    (options = {}) => {
      setViewport(1, { x: 0, y: 0 }, { ...options, userAdjusted: false })
      hasFitRef.current = true
    },
    [setViewport]
  )

  const fitToContent = useCallback(
    (options = {}) => {
      const bounds = getContentBounds()
      if (!bounds) {
        resetToOrigin(options)
        return
      }

      fitToBounds(bounds, options)
    },
    [fitToBounds, getContentBounds, resetToOrigin]
  )

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

      setViewport(z1, nextPan, { userAdjusted: true })
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
    if (!contentVersion) return

    hasFitRef.current = false
    userAdjustedViewRef.current = false

    const timerId = window.setTimeout(() => {
      if (initialView === 'fit') {
        fitToContent()
      } else {
        resetToOrigin()
      }
    }, 60)

    return () => window.clearTimeout(timerId)
  }, [contentVersion, fitToContent, initialView, resetToOrigin])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(() => {
      if (!hasFitRef.current || !userAdjustedViewRef.current) {
        if (initialView === 'fit') {
          fitToContent()
        } else {
          resetToOrigin()
        }
      }
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [fitToContent, initialView, resetToOrigin])

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

        setViewport(safeZoom, nextPan, { userAdjusted: true })
        userAdjustedViewRef.current = true
        return
      }

      if (pointersRef.current.size === 1 && dragRef.current) {
        const drag = dragRef.current
        const nextPan = {
          x: drag.startPan.x + (point.x - drag.startPoint.x),
          y: drag.startPan.y + (point.y - drag.startPoint.y),
        }

        setViewport(zoomRef.current, nextPan, { userAdjusted: true })
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

  useImperativeHandle(
    ref,
    () => ({
      fitToBounds,
      fitToContent,
      resetToOrigin,
      setViewport,
      getViewport: () => ({ zoom: zoomRef.current, pan: { ...panRef.current } }),
      getContainerElement: () => containerRef.current,
      getInnerElement: () => innerRef.current,
      getSvgElement,
      getContentBounds,
    }),
    [fitToBounds, fitToContent, getContentBounds, getSvgElement, resetToOrigin, setViewport]
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
            transition: transformTransition,
            display: 'inline-block',
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          {children}
        </div>
      </div>

      {showToolbar ? (
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
              onClick={() => {
                if (initialView === 'fit') {
                  fitToContent()
                } else {
                  resetToOrigin()
                }
              }}
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
      ) : null}
    </div>
  )
})

export default DiagramCanvas
