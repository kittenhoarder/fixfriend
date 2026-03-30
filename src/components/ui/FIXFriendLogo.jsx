import { useId } from 'react'

const PARTICLES = [
  // Left column
  { x: 28, y: 82, s: 32 },
  { x: 55, y: 52, s: 20 },
  { x: 38, y: 158, s: 24 },
  { x: 65, y: 228, s: 36 },
  { x: 30, y: 298, s: 22 },
  { x: 62, y: 368, s: 28 },
  { x: 42, y: 432, s: 20 },
  // Mid-left column
  { x: 98, y: 42, s: 28 },
  { x: 122, y: 118, s: 20 },
  { x: 105, y: 192, s: 36 },
  { x: 135, y: 265, s: 24 },
  { x: 112, y: 340, s: 28 },
  { x: 148, y: 415, s: 18 },
  // Mid column
  { x: 168, y: 65, s: 24 },
  { x: 188, y: 138, s: 32 },
  { x: 172, y: 210, s: 20 },
  { x: 198, y: 282, s: 28 },
  { x: 175, y: 352, s: 22 },
  { x: 205, y: 430, s: 16 },
  // Transition zone
  { x: 238, y: 88, s: 22 },
  { x: 258, y: 162, s: 16 },
  { x: 245, y: 235, s: 26 },
  { x: 270, y: 308, s: 18 },
  { x: 252, y: 378, s: 20 },
  { x: 285, y: 452, s: 14 },
]

export default function FIXFriendLogo({ size, className = '', style: styleProp = {}, ...rest }) {
  const uid = useId().replace(/:/g, '')
  const clawGrad = `sa-cg-${uid}`
  const particleGrad = `sa-pg-${uid}`
  const clawMask = `sa-cm-${uid}`
  const particleMask = `sa-pm-${uid}`

  const sizeAttrs = size ? { width: size, height: size } : {}
  const sizeStyle = size ? { minWidth: size, minHeight: size } : {}

  return (
    <svg
      {...sizeAttrs}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FIXFriend logo"
      className={className}
      style={{ ...sizeStyle, ...styleProp }}
      {...rest}
    >
      <defs>
        <linearGradient id={clawGrad} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="20%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.65" />
          <stop offset="68%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id={clawMask}>
          <rect width="512" height="512" fill={`url(#${clawGrad})`} />
        </mask>

        <linearGradient id={particleGrad} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="40%" stopColor="white" stopOpacity="0.85" />
          <stop offset="62%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={particleMask}>
          <rect width="512" height="512" fill={`url(#${particleGrad})`} />
        </mask>
      </defs>

      {/* Data particles — dissolve into the claw */}
      <g mask={`url(#${particleMask})`} fill="currentColor">
        {PARTICLES.map((p, i) => (
          <rect key={i} x={p.x} y={p.y} width={p.s} height={p.s} />
        ))}
      </g>

      {/* Claw — materialises from the data */}
      <g mask={`url(#${clawMask})`}>
        <path
          fill="currentColor"
          d="M175.656 22.375l-48.47 82.094c-23.017 4.384-43.547 11.782-60.124 22.374-24.436 15.613-40.572 37.414-45.5 67.875-4.79 29.62 1.568 68.087 24.125 116.093 93.162 22.88 184.08-10.908 257.25-18.813 37.138-4.012 71.196-.898 96.344 22.97 22.33 21.19 36.21 56.808 41.908 113.436 29.246-35.682 44.538-69.065 49.343-99.594 5.543-35.207-2.526-66.97-20.31-95.593-8.52-13.708-19.368-26.618-32-38.626l14.217-33-41.218 10.625c-8.637-6.278-17.765-12.217-27.314-17.782l-7.03-59.782-38.157 37.406c-12.418-5.186-25.184-9.804-38.158-13.812l-8.375-71.28-57.625 56.5c-9.344-1.316-18.625-2.333-27.812-2.97l-31.094-78.125zM222 325.345c-39.146 7.525-82.183 14.312-127.156 11.686 47.403 113.454 207.056 224.082 260.125 87-101.18 33.84-95.303-49.595-132.97-98.686z"
        />
      </g>
    </svg>
  )
}
