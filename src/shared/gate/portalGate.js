export const PORTAL_STORAGE_KEY = 'active-portal'

const GATE_SALT = 'fixfriend-gate-v1'
const COOLDOWN_MS = {
  LOW: 5_000,
  MID: 15_000,
  HIGH: 30_000,
}

function hasSessionStorage() {
  return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined'
}

export function getCooldownMs(failCount) {
  if (failCount >= 10) return COOLDOWN_MS.HIGH
  if (failCount >= 5) return COOLDOWN_MS.MID
  return COOLDOWN_MS.LOW
}

export function getPortalPassword(portal, env = import.meta.env) {
  if (typeof portal.gate.password === 'string') {
    return portal.gate.password.trim()
  }

  const rawValue = env?.[portal.gate.envKey]
  return typeof rawValue === 'string' ? rawValue.trim() : ''
}

export function isPortalGated(portal, env = import.meta.env) {
  return getPortalPassword(portal, env).length > 0
}

export function readSessionValue(key, fallback = null) {
  if (!hasSessionStorage()) return fallback

  try {
    return window.sessionStorage.getItem(key) ?? fallback
  } catch (error) {
    void error
    return fallback
  }
}

export function writeSessionValue(key, value) {
  if (!hasSessionStorage()) return

  try {
    window.sessionStorage.setItem(key, value)
  } catch (error) {
    void error
  }
}

export function removeSessionValue(key) {
  if (!hasSessionStorage()) return

  try {
    window.sessionStorage.removeItem(key)
  } catch (error) {
    void error
  }
}

export function getInitialPortalId(portals, defaultPortalId = 'raidical') {
  const fallbackPortalId = portals.find((portal) => portal.id === defaultPortalId)?.id ?? portals[0]?.id
  const storedPortalId = readSessionValue(PORTAL_STORAGE_KEY, fallbackPortalId)
  return portals.some((portal) => portal.id === storedPortalId) ? storedPortalId : fallbackPortalId
}

export function getInitialGatePortalId(portals, activePortalId, env = import.meta.env) {
  const activePortal = portals.find((portal) => portal.id === activePortalId)
  if (activePortal && isPortalGated(activePortal, env)) {
    return activePortal.id
  }

  return portals.find((portal) => isPortalGated(portal, env))?.id ?? portals[0]?.id
}

export async function hashGateToken(password) {
  const data = new globalThis.TextEncoder().encode(password + GATE_SALT)
  const hashBuffer = await globalThis.crypto.subtle.digest('SHA-256', data)

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export function getFailCount(portal) {
  const count = parseInt(readSessionValue(portal.gate.storage.failCount, '0'), 10)
  return Number.isFinite(count) ? Math.max(0, count) : 0
}

export function getLastAttempt(portal) {
  const timestamp = parseInt(readSessionValue(portal.gate.storage.lastAttempt, '0'), 10)
  return Number.isFinite(timestamp) ? timestamp : 0
}

export async function hasUnlockedPortal(portal, env = import.meta.env) {
  const password = getPortalPassword(portal, env)
  if (!password) return true

  const storedToken = readSessionValue(portal.gate.storage.token, null)
  if (!storedToken) return false

  return storedToken === await hashGateToken(password)
}

export function getRemainingCooldown(portal) {
  const failCount = getFailCount(portal)
  const lastAttempt = getLastAttempt(portal)
  const cooldownMs = getCooldownMs(failCount)
  const elapsed = Date.now() - lastAttempt

  return elapsed < cooldownMs ? Math.ceil((cooldownMs - elapsed) / 1000) : 0
}
