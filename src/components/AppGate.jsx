import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  getCooldownMs,
  getFailCount,
  getInitialGatePortalId,
  getInitialPortalId,
  getLastAttempt,
  getPortalPassword,
  getRemainingCooldown,
  hasUnlockedPortal,
  hashGateToken,
  isPortalGated,
  PORTAL_STORAGE_KEY,
  removeSessionValue,
  writeSessionValue,
} from '../shared/gate/portalGate'
import { syncStoredTheme } from '../shared/theme/useTheme'

function getPortalLabel(portal) {
  return portal.id === 'acquirer' ? 'Acquirer access code' : 'Enter password'
}

function getPortalModeLabel(portal) {
  return portal.id === 'acquirer' ? 'ACQUIRER PORTAL' : 'LEAN EXIT SYSTEM'
}

export default function AppGate({ portals, renderPortal }) {
  const portalsById = useMemo(
    () => Object.fromEntries(portals.map((portal) => [portal.id, portal])),
    [portals],
  )

  const defaultPortalStatuses = useMemo(
    () => Object.fromEntries(portals.map((portal) => [portal.id, isPortalGated(portal) ? 'checking' : 'unlocked'])),
    [portals],
  )

  const [activePortalId, setActivePortalId] = useState(() => getInitialPortalId(portals))
  const [gatePortalId, setGatePortalId] = useState(() => getInitialGatePortalId(portals, getInitialPortalId(portals)))
  const [portalStatuses, setPortalStatuses] = useState(defaultPortalStatuses)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cooldownRemaining, setCooldownRemaining] = useState(0)

  const gatePortal = portalsById[gatePortalId]
  const activeStatus = portalStatuses[activePortalId]

  useEffect(() => {
    syncStoredTheme()
  }, [])

  useEffect(() => {
    setPortalStatuses(defaultPortalStatuses)
  }, [defaultPortalStatuses])

  const verifyTokens = useCallback(async () => {
    const statuses = {}

    for (const portal of portals) {
      if (!isPortalGated(portal)) {
        statuses[portal.id] = 'unlocked'
        continue
      }

      statuses[portal.id] = await hasUnlockedPortal(portal) ? 'unlocked' : 'locked'
    }

    setPortalStatuses(statuses)
  }, [portals])

  useEffect(() => {
    verifyTokens()
  }, [verifyTokens])

  useEffect(() => {
    if (!gatePortal) return

    setCooldownRemaining(getRemainingCooldown(gatePortal))
    setPassword('')
    setError('')
  }, [gatePortal])

  useEffect(() => {
    if (!gatePortal || cooldownRemaining <= 0) return

    const interval = window.setInterval(() => {
      const remaining = getRemainingCooldown(gatePortal)
      setCooldownRemaining(remaining)

      if (remaining <= 0) {
        window.clearInterval(interval)
      }
    }, 1000)

    return () => window.clearInterval(interval)
  }, [cooldownRemaining, gatePortal])

  const switchPortal = (portalId) => {
    writeSessionValue(PORTAL_STORAGE_KEY, portalId)
    setActivePortalId(portalId)
    setGatePortalId(portalId)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!gatePortal) return

    const failCount = getFailCount(gatePortal)
    const lastAttempt = getLastAttempt(gatePortal)
    const cooldownMs = getCooldownMs(failCount)
    const elapsed = Date.now() - lastAttempt

    if (elapsed < cooldownMs) {
      setCooldownRemaining(Math.ceil((cooldownMs - elapsed) / 1000))
      return
    }

    const expectedPassword = getPortalPassword(gatePortal)
    const expectedToken = await hashGateToken(expectedPassword)
    const actualToken = await hashGateToken(password.trim())

    if (expectedToken === actualToken) {
      writeSessionValue(gatePortal.gate.storage.token, expectedToken)
      removeSessionValue(gatePortal.gate.storage.failCount)
      removeSessionValue(gatePortal.gate.storage.lastAttempt)
      setPortalStatuses((currentStatuses) => ({
        ...currentStatuses,
        [gatePortal.id]: 'unlocked',
      }))
      setCooldownRemaining(0)
      setPassword('')
      setError('')
      switchPortal(gatePortal.id)
      return
    }

    const nextFailCount = failCount + 1
    const timestamp = Date.now()
    writeSessionValue(gatePortal.gate.storage.failCount, String(nextFailCount))
    writeSessionValue(gatePortal.gate.storage.lastAttempt, String(timestamp))
    setCooldownRemaining(Math.ceil(getCooldownMs(nextFailCount) / 1000))
    setError('Incorrect password.')
  }

  if (Object.values(portalStatuses).includes('checking')) {
    return <LoadingScreen />
  }

  if (activeStatus === 'unlocked') {
    return renderPortal(activePortalId, { onSwitchPortal: switchPortal })
  }

  const otherPortal = portals.find((portal) => portal.id !== gatePortalId) ?? null
  const canSkipToOther = otherPortal
    ? !isPortalGated(otherPortal) || portalStatuses[otherPortal.id] === 'unlocked'
    : false
  const inCooldown = gatePortal ? Date.now() - getLastAttempt(gatePortal) < getCooldownMs(getFailCount(gatePortal)) : false
  const showPortalTabs = portals.filter((portal) => isPortalGated(portal)).length > 1

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
          <div
            className="font-mono mb-2 text-[9px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            PRDCTV.WORK
          </div>
          <h1 className="font-serif text-[1.9rem] leading-none" style={{ color: 'var(--text-primary)' }}>
            FIXFriend
          </h1>
          <p
            className="font-mono mt-2 text-[11px]"
            style={{ color: 'var(--muted)', letterSpacing: '0.16em' }}
          >
            {gatePortal ? getPortalModeLabel(gatePortal) : 'ACCESS PORTAL'}
          </p>
        </div>

        {showPortalTabs ? (
          <div className="mb-6 flex border" style={{ borderColor: 'var(--border-subtle)' }}>
            {portals.map((portal, index) => (
              <button
                key={portal.id}
                type="button"
                onClick={() => setGatePortalId(portal.id)}
                className="flex-1 py-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors"
                style={{
                  background: gatePortalId === portal.id ? 'var(--accent-softer)' : 'transparent',
                  color: gatePortalId === portal.id ? 'var(--accent)' : 'var(--text-tertiary)',
                  borderRight: index === 0 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                {portal.label}
              </button>
            ))}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="gate-password"
              className="font-mono mb-2 block text-[11px] uppercase tracking-widest"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
            >
              {gatePortal ? getPortalLabel(gatePortal) : 'Enter password'}
            </label>
            <input
              id="gate-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={inCooldown}
              autoComplete="current-password"
              autoFocus
              className="font-mono w-full rounded border bg-transparent px-3 py-2.5 text-sm outline-none transition-colors placeholder:opacity-50 focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-base)]"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
              placeholder="Password"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'gate-error' : undefined}
            />
            {error ? (
              <p id="gate-error" className="mt-2 font-mono text-xs" style={{ color: 'var(--status-danger)' }}>
                {error}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={inCooldown}
            className="button-accent w-full rounded px-4 py-2.5 text-sm font-medium transition-opacity disabled:pointer-events-none disabled:opacity-60"
          >
            {inCooldown ? `Try again in ${cooldownRemaining}s` : 'Continue'}
          </button>
        </form>

        {canSkipToOther && otherPortal ? (
          <div className="mt-6 text-center">
            <div
              className="mb-4 border-t"
              style={{ borderColor: 'var(--border-subtle)' }}
            />
            <button
              type="button"
              onClick={() => switchPortal(otherPortal.id)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {otherPortal.id === 'acquirer' ? '→ Enter Acquirer Site' : '← Enter Raidical Site'}
            </button>
          </div>
        ) : null}
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
