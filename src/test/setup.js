import { webcrypto } from 'node:crypto'
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

function createStorageMock() {
  const store = new Map()

  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null
    },
    setItem(key, value) {
      store.set(key, String(value))
    },
    removeItem(key) {
      store.delete(key)
    },
    clear() {
      store.clear()
    },
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto
}

Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: createStorageMock(),
})

Object.defineProperty(window, 'sessionStorage', {
  configurable: true,
  value: createStorageMock(),
})

if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}

if (!window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false
    },
  })
}

const originalConsoleError = console.error

vi.spyOn(console, 'error').mockImplementation((message, ...args) => {
  if (String(message).includes('A suspended resource finished loading inside a test')) {
    return
  }

  originalConsoleError(message, ...args)
})

afterEach(() => {
  cleanup()
  window.localStorage.clear()
  window.sessionStorage.clear()
  document.documentElement.removeAttribute('data-theme')
})
