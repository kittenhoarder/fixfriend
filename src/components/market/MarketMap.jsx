import { useRef, useEffect } from 'react'

// Node IDs by band
const BANDS = {
  regulatory: ['mifir', 'aiact', 'dora', 'esma'],
  supply: ['venues'],
  trigger: ['trigger'],
  intermediary: ['vendors'],
  demand: ['firms', 'regulators'],
}

const NODE_LABELS = {
  mifir: 'MiFID 2 RTS 6',
  aiact: 'EU AI Act',
  dora: 'DORA',
  esma: 'ESMA 2026\nWork Programme',
  venues: 'EU & UK Exchanges\n& Venues',
  trigger: 'Protocol /\nRule Update',
  vendors: 'Trading Tech\nVendors',
  firms: 'End Clients /\nConnected Firms',
  regulators: 'Regulators',
}


// Fixed coordinate space; extra row spacing so arrows and labels don't overlap boxes
const SVG_W = 600
const SVG_H = 930

// Regulatory → venues: bend horizontal above supply box, converge at center top
const REG_ARROW_BEND_Y = 115
const VENUES_TOP_Y = 200 // venues center y - half height

// Node centres (x, y) — generous vertical gaps between rows for curved arrows and labels
const NODE_POSITIONS = {
  mifir:  { x: 80,  y: 60 },
  aiact:  { x: 220, y: 60 },
  dora:   { x: 360, y: 60 },
  esma:   { x: 500, y: 60 },
  venues: { x: 300, y: 230 },
  trigger: { x: 300, y: 360 },
  vendors: { x: 300, y: 485 },
  firms:  { x: 300, y: 620 },
  regulators: { x: 300, y: 760 },
}

// Node dimensions (w, h) in SVG coords
const NODE_SIZES = {
  mifir:  { w: 120, h: 52 },
  aiact:  { w: 120, h: 52 },
  dora:   { w: 120, h: 52 },
  esma:   { w: 120, h: 52 },
  venues: { w: 180, h: 60 },
  trigger: { w: 150, h: 58 },
  vendors: { w: 170, h: 58 },
  firms:  { w: 160, h: 58 },
  regulators: { w: 160, h: 58 },
}

// Arrow config: fromId, toId, label, dashed. Path and label position computed per arrow to avoid box overlap.
const ARROWS = [
  ['venues', 'trigger', 'Publishes spec update', false],
  ['trigger', 'vendors', 'Forces triage &\nchange pack', false],
  ['vendors', 'firms', 'Drives rollout &\ncertification', false],
  ['firms', 'regulators', 'Evidence &\nassurance', false],
  ['firms', 'vendors', 'Client escalations &\nrollout pressure', true],
  ['regulators', 'firms', 'Audit requests &\nexaminations', true],
]

// Regulatory arrows (downward from each reg node to venues)
const REG_ARROWS = ['mifir', 'aiact', 'dora', 'esma']

function getNodeRect(id) {
  const pos = NODE_POSITIONS[id]
  const size = NODE_SIZES[id]
  return {
    left: pos.x - size.w / 2,
    top: pos.y - size.h / 2,
    right: pos.x + size.w / 2,
    bottom: pos.y + size.h / 2,
    cx: pos.x,
    cy: pos.y,
  }
}

// Get the edge point of a node rectangle closest to a target point
function getEdgePoint(id, targetX, targetY) {
  const r = getNodeRect(id)
  const dx = targetX - r.cx
  const dy = targetY - r.cy
  const sx = dx === 0 ? 0 : Math.sign(dx)
  const sy = dy === 0 ? 0 : Math.sign(dy)
  const halfW = NODE_SIZES[id].w / 2
  const halfH = NODE_SIZES[id].h / 2
  if (Math.abs(dx) * halfH > Math.abs(dy) * halfW) {
    const ex = r.cx + sx * halfW
    const ey = r.cy + (dy / (dx || 1)) * halfW
    return { x: ex, y: Math.max(r.top + 4, Math.min(r.bottom - 4, ey)) }
  } else {
    const ey = r.cy + sy * halfH
    const ex = r.cx + (dx / (dy || 1)) * halfH
    return { x: Math.max(r.left + 4, Math.min(r.right - 4, ex)), y: ey }
  }
}

// Straight segment for vertical flow (no obstacle in between)
function flowPath(from, to) {
  const tol = 2
  if (Math.abs(from.x - to.x) < tol) return `M ${from.x} ${from.y} L ${to.x} ${to.y}`
  if (Math.abs(from.y - to.y) < tol) return `M ${from.x} ${from.y} L ${to.x} ${to.y}`
  const midY = (from.y + to.y) / 2
  return `M ${from.x} ${from.y} L ${from.x} ${midY} L ${to.x} ${midY} L ${to.x} ${to.y}`
}

function ArrowMarker({ id, color }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
    </marker>
  )
}

function ConnectionArrows({ activeNodeId }) {
  const arrows = []

  // Regulatory → venues: angular paths (vertical → horizontal → vertical) converging at center top of supply box
  const venuesCenterX = NODE_POSITIONS.venues.x
  REG_ARROWS.forEach((regId) => {
    const from = getEdgePoint(regId, NODE_POSITIONS[regId].x, REG_ARROW_BEND_Y)
    const isActive = activeNodeId === regId || activeNodeId === 'venues'
    const pathD = `M ${from.x} ${from.y} L ${from.x} ${REG_ARROW_BEND_Y} L ${venuesCenterX} ${REG_ARROW_BEND_Y} L ${venuesCenterX} ${VENUES_TOP_Y}`
    arrows.push(
      <g key={`reg-${regId}`}>
        <path
          d={pathD}
          fill="none"
          stroke={isActive ? 'var(--muted)' : 'var(--border-subtle)'}
          strokeWidth={isActive ? 1.5 : 1}
          strokeDasharray="3 3"
          opacity={isActive ? 0.8 : 0.5}
          markerEnd="url(#arrow-subtle)"
        />
      </g>
    )
  })

  // Main flow arrows: curved paths around boxes where needed; labels in clear gaps
  const r = (id) => getNodeRect(id)
  const edge = (id, tx, ty) => getEdgePoint(id, tx, ty)

  ARROWS.forEach(([fromId, toId, label, dashed], i) => {
    const toPos = NODE_POSITIONS[toId]
    const fromPos = NODE_POSITIONS[fromId]
    let from = edge(fromId, toPos.x, toPos.y)
    let to = edge(toId, fromPos.x, fromPos.y)

    const isActive = activeNodeId === fromId || activeNodeId === toId
    const color = dashed ? 'var(--border-subtle)' : 'var(--border)'
    const activeColor = dashed ? 'var(--muted)' : 'var(--text-tertiary)'
    const labelLines = label.split('\n')

    const pathD = flowPath(from, to)

    // Label positions in clear space between rows (not over boxes)
    let labelX = (from.x + to.x) / 2
    let labelY = (from.y + to.y) / 2
    if (fromId === 'venues' && toId === 'trigger') {
      labelY = (r('venues').bottom + r('trigger').top) / 2
    } else if (fromId === 'trigger' && toId === 'vendors') {
      labelY = (r('trigger').bottom + r('vendors').top) / 2
    } else if (fromId === 'vendors' && toId === 'firms') {
      labelY = (r('vendors').bottom + r('firms').top) / 2
    } else if (fromId === 'firms' && toId === 'regulators') {
      labelX = 420
      labelY = (r('firms').bottom + r('regulators').top) / 2
    } else if (fromId === 'regulators' && toId === 'firms') {
      labelX = 180
      labelY = (r('regulators').top + r('firms').bottom) / 2
    } else if (fromId === 'firms' && toId === 'vendors') {
      labelX = 430
      labelY = (r('firms').top + r('vendors').bottom) / 2
    }

    arrows.push(
      <g key={`arrow-${i}`}>
        <path
          d={pathD}
          fill="none"
          stroke={isActive ? activeColor : color}
          strokeWidth={isActive ? 1.5 : 1}
          strokeDasharray={dashed ? '4 3' : undefined}
          opacity={isActive ? 0.9 : 0.6}
          markerEnd={dashed ? 'url(#arrow-subtle)' : 'url(#arrow-main)'}
        />
        {labelLines.map((line, li) => (
          <text
            key={li}
            x={labelX}
            y={labelY + (li - (labelLines.length - 1) / 2) * 11}
            textAnchor="middle"
            fontSize="10"
            fill={isActive ? 'var(--text-secondary)' : 'var(--text-tertiary)'}
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            {line}
          </text>
        ))}
      </g>
    )
  })

  return (
    <>
      <defs>
        <ArrowMarker id="arrow-main" color="var(--muted)" />
        <ArrowMarker id="arrow-subtle" color="var(--border)" />
      </defs>
      {arrows}
    </>
  )
}

function MapNode({ id, activeNodeId, onClick }) {
  const pos = NODE_POSITIONS[id]
  const size = NODE_SIZES[id]
  const isActive = activeNodeId === id
  const isTrigger = id === 'trigger'
  const label = NODE_LABELS[id]
  const lines = label.split('\n')

  let borderColor = isActive ? 'var(--accent)' : 'var(--border-subtle)'
  let bgColor = 'var(--surface)'
  let textColor = 'var(--text-secondary)'
  let glowFilter = ''

  if (isTrigger) {
    borderColor = isActive ? 'var(--amber)' : 'var(--amber-dim)'
    bgColor = isActive ? 'rgba(245,158,11,0.12)' : 'rgba(245,158,11,0.06)'
    textColor = 'var(--amber)'
    glowFilter = 'url(#trigger-glow)'
  } else if (isActive) {
    bgColor = 'rgba(14,165,233,0.08)'
    textColor = 'var(--text-primary)'
  }

  const rx = pos.x - size.w / 2
  const ry = pos.y - size.h / 2

  return (
    <g
      onClick={() => onClick(id)}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      aria-label={`Open detail for ${label.replace('\n', ' ')}`}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick(id)
        }
      }}
    >
      {isTrigger && (
        <rect
          x={rx - 4}
          y={ry - 4}
          width={size.w + 8}
          height={size.h + 8}
          rx={10}
          fill="none"
          stroke="var(--amber-dim)"
          strokeWidth={1}
          opacity={0.4}
          filter={glowFilter}
        />
      )}
      <rect
        x={rx}
        y={ry}
        width={size.w}
        height={size.h}
        rx={6}
        fill={bgColor}
        stroke={borderColor}
        strokeWidth={isActive ? 1.5 : 1}
        style={{
          transition: 'fill 0.15s, stroke 0.15s',
        }}
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={pos.x}
          y={pos.y + (i - (lines.length - 1) / 2) * 13 + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={isTrigger ? 12 : 11}
          fontWeight={isActive || isTrigger ? '600' : '400'}
          fill={textColor}
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            transition: 'fill 0.15s',
          }}
        >
          {line}
        </text>
      ))}
    </g>
  )
}

function BandLabel({ label, y }) {
  return (
    <text
      x={4}
      y={y}
      fontSize={9}
      fill="var(--text-secondary)"
      style={{ fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.12em' }}
    >
      {label}
    </text>
  )
}

export default function MarketMap({ activeNodeId, onNodeClick }) {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    // ResizeObserver kept for future use (e.g. adaptive font scaling)
    const observer = new ResizeObserver(() => {})
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const allNodeIds = Object.values(BANDS).flat()

  return (
    <div ref={containerRef} className="w-full">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        width="100%"
        style={{ display: 'block', overflow: 'visible' }}
        role="img"
        aria-label="European trading infrastructure market map"
      >
        <defs>
          <filter id="trigger-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Band background stripes — spaced for curved arrows and label clearance */}
        <rect x={0} y={22} width={SVG_W} height={85} fill="var(--surface3)" opacity={0.5} rx={4} />
        <rect x={0} y={198} width={SVG_W} height={75} fill="var(--surface3)" opacity={0.4} rx={4} />
        <rect x={0} y={330} width={SVG_W} height={75} fill="rgba(245,158,11,0.04)" rx={4} />
        <rect x={0} y={452} width={SVG_W} height={75} fill="rgba(59,130,246,0.05)" rx={4} />
        <rect x={0} y={590} width={SVG_W} height={225} fill="var(--surface3)" opacity={0.4} rx={4} />

        {/* Band labels */}
        <BandLabel label="REGULATORY CONVERGENCE" y={18} />
        <BandLabel label="SUPPLY SIDE" y={194} />
        <BandLabel label="— TRIGGER —" y={326} />
        <BandLabel label="VENDOR LAYER" y={448} />
        <BandLabel label="DEMAND SIDE" y={586} />

        {/* Connection lines */}
        <ConnectionArrows activeNodeId={activeNodeId} />

        {/* Nodes */}
        {allNodeIds.map((id) => (
          <MapNode
            key={id}
            id={id}
            activeNodeId={activeNodeId}
            onClick={onNodeClick}
          />
        ))}

        {/* Trigger pulse animation rings (CSS can't animate SVG easily, use rect) */}
        {activeNodeId !== 'trigger' && (
          <rect
            x={NODE_POSITIONS.trigger.x - NODE_SIZES.trigger.w / 2 - 4}
            y={NODE_POSITIONS.trigger.y - NODE_SIZES.trigger.h / 2 - 4}
            width={NODE_SIZES.trigger.w + 8}
            height={NODE_SIZES.trigger.h + 8}
            rx={10}
            fill="none"
            stroke="#f59e0b"
            strokeWidth={1.5}
            opacity={0.3}
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="rx"
              values="10;14;10"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
        )}
      </svg>
    </div>
  )
}
