import { useState, useEffect, useCallback } from 'react'

// ── Shared crypto helpers ──────────────────────────────────────────────────────

const GATE_SALT = 'fixfriend-gate-v1'

const STORAGE_KEY = {
  raidical: {
    token: 'fixfriend-gate-token',
    failCount: 'fixfriend-gate-fail-count',
    lastAttempt: 'fixfriend-gate-last-attempt',
  },
  acquirer: {
    token: 'acquirer-gate-token',
    failCount: 'acquirer-gate-fail-count',
    lastAttempt: 'acquirer-gate-last-attempt',
  },
}

const PORTAL_STORAGE_KEY = 'active-portal'

const COOLDOWN_MS = { LOW: 5_000, MID: 15_000, HIGH: 30_000 }

function getCooldownMs(failCount) {
  if (failCount >= 10) return COOLDOWN_MS.HIGH
  if (failCount >= 5) return COOLDOWN_MS.MID
  return COOLDOWN_MS.LOW
}

async function hashGateToken(password) {
  const data = new globalThis.TextEncoder().encode(password + GATE_SALT)
  const buf = await globalThis.crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function ssGet(key, fallback = '0') {
  try { return window.sessionStorage.getItem(key) ?? fallback } catch { return fallback }
}
function ssSet(key, value) {
  try { window.sessionStorage.setItem(key, value) } catch {}
}
function ssRemove(key) {
  try { window.sessionStorage.removeItem(key) } catch {}
}

function getFailCount(portal) {
  const n = parseInt(ssGet(STORAGE_KEY[portal].failCount), 10)
  return Number.isFinite(n) ? Math.max(0, n) : 0
}
function getLastAttempt(portal) {
  const t = parseInt(ssGet(STORAGE_KEY[portal].lastAttempt), 10)
  return Number.isFinite(t) ? t : 0
}

async function checkToken(portal, password) {
  if (!password) return false
  const stored = ssGet(STORAGE_KEY[portal].token, null)
  if (!stored) return false
  const expected = await hashGateToken(password.trim())
  return stored === expected
}

// ── AppGate ────────────────────────────────────────────────────────────────────

/**
 * AppGate manages two portals — "raidical" and "acquirer" — each with their
 * own optional password gate.
 *
 * Password env vars:
 *   VITE_GATE_PASSWORD          → gates the Raidical (main) portal
 *   VITE_GATE_PASSWORD_ACQUIRER → gates the Acquirer portal
 *
 * Gate behaviour matrix:
 *   Neither set → free switcher, no gate shown
 *   Only main   → gate for main + "Enter Acquirer Site" button (no auth)
 *   Only acq    → gate for acquirer + "Enter Raidical Site" button (no auth)
 *   Both set    → single gate screen, toggle between password forms
 *
 * Children receive: { portal, onSwitchPortal }
 */
export default function AppGate({ raidicalApp, acquirerApp }) {
  const raidicalPassword = import.meta.env.VITE_GATE_PASSWORD
  const acquirerPassword = import.meta.env.VITE_GATE_PASSWORD_ACQUIRER

  const raidicalGated = typeof raidicalPassword === 'string' && raidicalPassword.trim().length > 0
  const acquirerGated = typeof acquirerPassword === 'string' && acquirerPassword.trim().length > 0
  const anyGated = raidicalGated || acquirerGated

  // Which portal is active
  const [activePortal, setActivePortalState] = useState(() => {
    try {
      const stored = window.sessionStorage.getItem(PORTAL_STORAGE_KEY)
      if (stored === 'acquirer') return 'acquirer'
    } catch {}
    return 'raidical'
  })

  function setActivePortal(portal) {
    ssSet(PORTAL_STORAGE_KEY, portal)
    setActivePortalState(portal)
  }

  // Gate status per portal: 'checking' | 'locked' | 'unlocked'
  const [raidicalStatus, setRaidicalStatus] = useState(raidicalGated ? 'checking' : 'unlocked')
  const [acquirerStatus, setAcquirerStatus] = useState(acquirerGated ? 'checking' : 'unlocked')

  // Which portal's password form is shown on the gate screen
  const [gatePortal, setGatePortal] = useState(() => {
    // Show whichever is gated; prefer the active portal if it's gated
    if (raidicalGated && !acquirerGated) return 'raidical'
    if (acquirerGated && !raidicalGated) return 'acquirer'
    return 'raidical'
  })

  // Password form state (shared for both)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cooldownRemaining, setCooldownRemaining] = useState(0)

  // Apply theme from localStorage on first render
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('fixfriend-theme')
      if (saved === 'light' || saved === 'dark') {
        document.documentElement.setAttribute('data-theme', saved)
      }
    } catch {}
  }, [])

  // Verify stored tokens on mount
  const verifyTokens = useCallback(async () => {
    if (raidicalGated) {
      const ok = await checkToken('raidical', raidicalPassword)
      setRaidicalStatus(ok ? 'unlocked' : 'locked')
    }
    if (acquirerGated) {
      const ok = await checkToken('acquirer', acquirerPassword)
      setAcquirerStatus(ok ? 'unlocked' : 'locked')
    }
  }, [raidicalGated, acquirerGated, raidicalPassword, acquirerPassword])

  useEffect(() => { verifyTokens() }, [verifyTokens])

  // Recalculate cooldown when gate portal changes or status changes
  useEffect(() => {
    const count = getFailCount(gatePortal)
    const last = getLastAttempt(gatePortal)
    const cooldownMs = getCooldownMs(count)
    const elapsed = Date.now() - last
    const remaining = elapsed < cooldownMs ? Math.ceil((cooldownMs - elapsed) / 1000) : 0
    setCooldownRemaining(remaining)
    setError('')
    setPassword('')
  }, [gatePortal])

  // Cooldown ticker
  useEffect(() => {
    if (cooldownRemaining <= 0) return
    const interval = window.setInterval(() => {
      const last = getLastAttempt(gatePortal)
      const count = getFailCount(gatePortal)
      const cooldownMs = getCooldownMs(count)
      const elapsed = Date.now() - last
      const remaining = Math.max(0, Math.ceil((cooldownMs - elapsed) / 1000))
      setCooldownRemaining(remaining)
      if (remaining <= 0) window.clearInterval(interval)
    }, 1000)
    return () => window.clearInterval(interval)
  }, [gatePortal, cooldownRemaining])

  // Handle password submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const count = getFailCount(gatePortal)
    const last = getLastAttempt(gatePortal)
    const cooldownMs = getCooldownMs(count)
    if (Date.now() - last < cooldownMs) {
      const remaining = Math.ceil((cooldownMs - (Date.now() - last)) / 1000)
      setCooldownRemaining(remaining)
      return
    }

    const envPassword = gatePortal === 'raidical' ? raidicalPassword : acquirerPassword
    const trimmed = password.trim()
    const expected = await hashGateToken(envPassword.trim())
    const actual = await hashGateToken(trimmed)

    if (actual === expected) {
      ssSet(STORAGE_KEY[gatePortal].token, expected)
      ssRemove(STORAGE_KEY[gatePortal].failCount)
      ssRemove(STORAGE_KEY[gatePortal].lastAttempt)
      setCooldownRemaining(0)
      setPassword('')
      setError('')
      if (gatePortal === 'raidical') setRaidicalStatus('unlocked')
      else setAcquirerStatus('unlocked')
      setActivePortal(gatePortal)
      return
    }

    const newCount = count + 1
    const now = Date.now()
    ssSet(STORAGE_KEY[gatePortal].failCount, String(newCount))
    ssSet(STORAGE_KEY[gatePortal].lastAttempt, String(now))
    setCooldownRemaining(Math.ceil(getCooldownMs(newCount) / 1000))
    setError('Incorrect password.')
  }

  // ── Determine what to render ─────────────────────────────────────────────────

  const switchPortal = (portal) => {
    setActivePortal(portal)
  }

  const activeStatus = activePortal === 'raidical' ? raidicalStatus : acquirerStatus

  // Still checking tokens — show spinner
  if (raidicalStatus === 'checking' || acquirerStatus === 'checking') {
    return <LoadingScreen />
  }

  // Active portal is unlocked — render it
  if (activeStatus === 'unlocked') {
    if (activePortal === 'raidical') {
      return raidicalApp({ onSwitchPortal: switchPortal, acquirerAvailable: true })
    } else {
      return acquirerApp({ onSwitchPortal: switchPortal })
    }
  }

  // Need to show gate
  // Determine the "other" portal for the bypass button
  const otherPortal = gatePortal === 'raidical' ? 'acquirer' : 'raidical'
  const otherGated = otherPortal === 'raidical' ? raidicalGated : acquirerGated
  const otherStatus = otherPortal === 'raidical' ? raidicalStatus : acquirerStatus
  const canSkipToOther = !otherGated || otherStatus === 'unlocked'

  const count = getFailCount(gatePortal)
  const last = getLastAttempt(gatePortal)
  const cooldownMs = getCooldownMs(count)
  const inCooldown = Date.now() - last < cooldownMs

  const isAcqForm = gatePortal === 'acquirer'

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center px-4"
      style={{
        background:
          'radial-gradient(circle at top left, rgba(249, 115, 22, 0.12), transparent 30%), radial-gradient(circle at 85% 10%, rgba(59, 130, 246, 0.12), transparent 28%), linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg-base) 100%)',
        color: 'var(--text-primary)',
      }}
    >
      <div className="w-full max-w-sm">
        {/* Branding */}
        <div className="mb-8 text-center">
          <div
            className="font-mono mb-2 text-[9px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            PRDCTV.WORK
          </div>
          <h1 className="font-serif text-[1.9rem] leading-none" style={{ color: 'var(--text-primary)' }}>
            {isAcqForm ? 'SynthAgents' : 'FIXFriend'}
          </h1>
          <p
            className="font-mono mt-2 text-[11px]"
            style={{ color: 'var(--muted)', letterSpacing: '0.16em' }}
          >
            {isAcqForm ? 'ACQUIRER PORTAL' : 'LEAN EXIT SYSTEM'}
          </p>
        </div>

        {/* Portal toggle tabs — shown when both are gated */}
        {raidicalGated && acquirerGated && (
          <div className="mb-6 flex border" style={{ borderColor: 'var(--border-subtle)' }}>
            {['raidical', 'acquirer'].map((p) => (
              <button
                key={p}
                onClick={() => setGatePortal(p)}
                className="flex-1 py-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors"
                style={{
                  background: gatePortal === p ? 'var(--accent-softer)' : 'transparent',
                  color: gatePortal === p ? 'var(--accent)' : 'var(--text-tertiary)',
                  borderRight: p === 'raidical' ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                {p === 'raidical' ? 'Raidical' : 'Acquirer'}
              </button>
            ))}
          </div>
        )}

        {/* Password form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="gate-password"
              className="font-mono mb-2 block text-[11px] uppercase tracking-widest"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
            >
              {isAcqForm ? 'Acquirer access code' : 'Enter password'}
            </label>
            <input
              id="gate-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={inCooldown}
              autoComplete="current-password"
              autoFocus
              className="font-mono w-full rounded border bg-transparent px-3 py-2.5 text-sm outline-none transition-colors placeholder:opacity-50 focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-base)]"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
              placeholder="Password"
              aria-invalid={!!error}
              aria-describedby={error ? 'gate-error' : undefined}
            />
            {error && (
              <p id="gate-error" className="mt-2 font-mono text-xs" style={{ color: 'var(--status-danger)' }}>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={inCooldown}
            className="button-accent w-full rounded px-4 py-2.5 text-sm font-medium transition-opacity disabled:pointer-events-none disabled:opacity-60"
          >
            {inCooldown ? `Try again in ${cooldownRemaining}s` : 'Continue'}
          </button>
        </form>

        {/* Bypass to ungated portal — shown when only one is gated, or other is already unlocked */}
        {canSkipToOther && (
          <div className="mt-6 text-center">
            <div
              className="mb-4 border-t"
              style={{ borderColor: 'var(--border-subtle)' }}
            />
            <button
              onClick={() => {
                setActivePortal(otherPortal)
              }}
              className="font-mono text-[11px] tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {otherPortal === 'acquirer' ? '→ Enter Acquirer Site' : '← Enter Raidical Site'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function LoadingScreen() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      style={{
        background:
          'radial-gradient(circle at top left, rgba(249, 115, 22, 0.12), transparent 30%), radial-gradient(circle at 85% 10%, rgba(59, 130, 246, 0.12), transparent 28%), linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg-base) 100%)',
        color: 'var(--text-primary)',
      }}
    >
      <span className="font-mono text-xs" style={{ color: 'var(--muted)', letterSpacing: '0.1em' }}>
        Loading…
      </span>
    </div>
  )
}
