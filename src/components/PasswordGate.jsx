import { useState, useEffect, useCallback } from 'react'

const GATE_SALT = 'fixfriend-gate-v1'
const STORAGE_KEY_TOKEN = 'fixfriend-gate-token'
const STORAGE_KEY_FAIL_COUNT = 'fixfriend-gate-fail-count'
const STORAGE_KEY_LAST_ATTEMPT = 'fixfriend-gate-last-attempt'

const COOLDOWN_MS = {
  LOW: 5_000,    // 1–4 fails
  MID: 15_000,   // 5–9 fails
  HIGH: 30_000,  // 10+ fails
}

function getCooldownMs(failCount) {
  if (failCount >= 10) return COOLDOWN_MS.HIGH
  if (failCount >= 5) return COOLDOWN_MS.MID
  return COOLDOWN_MS.LOW
}

async function hashGateToken(password) {
  const data = new TextEncoder().encode(password + GATE_SALT)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function getStoredFailCount() {
  try {
    const n = parseInt(sessionStorage.getItem(STORAGE_KEY_FAIL_COUNT) ?? '0', 10)
    return Number.isFinite(n) ? Math.max(0, n) : 0
  } catch {
    return 0
  }
}

function getStoredLastAttempt() {
  try {
    const t = parseInt(sessionStorage.getItem(STORAGE_KEY_LAST_ATTEMPT) ?? '0', 10)
    return Number.isFinite(t) ? t : 0
  } catch {
    return 0
  }
}

export default function PasswordGate({ children }) {
  const requiredPassword = import.meta.env.VITE_GATE_PASSWORD
  const passwordSet = typeof requiredPassword === 'string' && requiredPassword.trim().length > 0

  const [status, setStatus] = useState(() => (passwordSet ? 'checking' : 'unlocked'))
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [failCount, setFailCount] = useState(getStoredFailCount)
  const [lastAttemptAt, setLastAttemptAt] = useState(getStoredLastAttempt)
  const [cooldownRemaining, setCooldownRemaining] = useState(() => {
    if (!passwordSet) return 0
    const count = getStoredFailCount()
    const last = getStoredLastAttempt()
    const cooldownMs = getCooldownMs(count)
    const elapsed = Date.now() - last
    return elapsed < cooldownMs ? Math.ceil((cooldownMs - elapsed) / 1000) : 0
  })

  const verifyStoredToken = useCallback(async () => {
    if (!passwordSet || !requiredPassword) return
    const stored = sessionStorage.getItem(STORAGE_KEY_TOKEN)
    if (!stored) {
      setStatus('locked')
      return
    }
    const expected = await hashGateToken(requiredPassword.trim())
    setStatus(stored === expected ? 'unlocked' : 'locked')
  }, [passwordSet, requiredPassword])

  useEffect(() => {
    if (!passwordSet) {
      setStatus('unlocked')
      return
    }
    verifyStoredToken()
  }, [passwordSet, verifyStoredToken])

  useEffect(() => {
    const saved = typeof window !== 'undefined' && window.localStorage.getItem('fixfriend-theme')
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  useEffect(() => {
    if (status !== 'locked') return
    const count = getStoredFailCount()
    const last = getStoredLastAttempt()
    const cooldownMs = getCooldownMs(count)
    const elapsed = Date.now() - last
    const remaining = elapsed < cooldownMs ? Math.ceil((cooldownMs - elapsed) / 1000) : 0
    setCooldownRemaining(remaining)
  }, [status])

  useEffect(() => {
    if (status !== 'locked' || cooldownRemaining <= 0) return
    const interval = setInterval(() => {
      const last = getStoredLastAttempt()
      const count = getStoredFailCount()
      const cooldownMs = getCooldownMs(count)
      const elapsed = Date.now() - last
      const remaining = Math.max(0, Math.ceil((cooldownMs - elapsed) / 1000))
      setCooldownRemaining(remaining)
      setLastAttemptAt(last)
      setFailCount(count)
      if (remaining <= 0) clearInterval(interval)
    }, 1000)
    return () => clearInterval(interval)
  }, [status, cooldownRemaining])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!passwordSet || !requiredPassword) return

    const count = getStoredFailCount()
    const last = getStoredLastAttempt()
    const cooldownMs = getCooldownMs(count)
    if (Date.now() - last < cooldownMs) {
      const remaining = Math.ceil((cooldownMs - (Date.now() - last)) / 1000)
      setCooldownRemaining(remaining)
      setLastAttemptAt(last)
      setFailCount(count)
      return
    }

    const trimmed = password.trim()
    const expected = await hashGateToken(requiredPassword.trim())
    const actual = await hashGateToken(trimmed)

    if (actual === expected) {
      sessionStorage.setItem(STORAGE_KEY_TOKEN, expected)
      sessionStorage.removeItem(STORAGE_KEY_FAIL_COUNT)
      sessionStorage.removeItem(STORAGE_KEY_LAST_ATTEMPT)
      setFailCount(0)
      setLastAttemptAt(0)
      setCooldownRemaining(0)
      setPassword('')
      setStatus('unlocked')
      return
    }

    const newCount = count + 1
    const now = Date.now()
    sessionStorage.setItem(STORAGE_KEY_FAIL_COUNT, String(newCount))
    sessionStorage.setItem(STORAGE_KEY_LAST_ATTEMPT, String(now))
    setFailCount(newCount)
    setLastAttemptAt(now)
    setCooldownRemaining(Math.ceil(cooldownMs / 1000))
    setError('Incorrect password.')
  }

  if (status === 'unlocked') {
    return (
      <div className="animate-fade-in-app min-h-screen w-full">
        {children}
      </div>
    )
  }

  if (status === 'checking') {
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

  const count = getStoredFailCount()
  const last = getStoredLastAttempt()
  const cooldownMs = getCooldownMs(count)
  const elapsed = Date.now() - last
  const inCooldown = elapsed < cooldownMs

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
        <div className="mb-8 text-center">
          <h1 className="font-serif text-[1.9rem] leading-none" style={{ color: 'var(--text-primary)' }}>
            FIXFriend
          </h1>
          <p
            className="font-mono mt-2 text-[11px]"
            style={{ color: 'var(--muted)', letterSpacing: '0.16em' }}
          >
            LEAN EXIT SYSTEM
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="gate-password"
              className="font-mono mb-2 block text-[11px] uppercase tracking-widest"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
            >
              Enter password
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
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
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
      </div>
    </div>
  )
}
