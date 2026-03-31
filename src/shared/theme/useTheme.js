import { useEffect, useState } from 'react'

export const THEME_STORAGE_KEY = 'fixfriend-theme'

function canUseDOM() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export function applyTheme(theme) {
  if (!canUseDOM()) return
  document.documentElement.setAttribute('data-theme', theme)
}

export function getStoredTheme(defaultTheme = 'dark') {
  if (!canUseDOM()) return defaultTheme

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }
  } catch (error) {
    void error
  }

  return defaultTheme
}

export function syncStoredTheme(defaultTheme = 'dark') {
  const theme = getStoredTheme(defaultTheme)
  applyTheme(theme)
  return theme
}

export function toggleTheme(theme) {
  return theme === 'dark' ? 'light' : 'dark'
}

export function useTheme(defaultTheme = 'dark') {
  const [theme, setTheme] = useState(() => getStoredTheme(defaultTheme))

  useEffect(() => {
    applyTheme(theme)

    if (!canUseDOM()) return

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch (error) {
      void error
    }
  }, [theme])

  return [theme, setTheme]
}
