import { siIonos, siTradingview } from 'simple-icons'

// Official logo assets can be added under /public/logos and wired here.
// If an official asset is unavailable, we fall back to Simple Icons,
// then to a branded text monogram in the UI component.
export const LOGO_MANIFEST = {
  ion: {
    fallbackText: 'ION',
    simpleIcon: siIonos,
  },
  broadridge: {
    fallbackText: 'BR',
  },
  murex: {
    fallbackText: 'MX',
  },
  tt: {
    fallbackText: 'TT',
    simpleIcon: siTradingview,
  },
  six: {
    fallbackText: 'SIX',
  },
  'deutsche-boerse': {
    fallbackText: 'DBG',
  },
  euronext: {
    fallbackText: 'ENX',
  },
  kaizen: {
    fallbackText: 'KZN',
  },
  smartstream: {
    fallbackText: 'SS',
  },
  exactpro: {
    fallbackText: 'EX',
  },
  cinven: {
    fallbackText: 'CNV',
  },
  iress: {
    fallbackText: 'IRS',
  },
  arcesium: {
    fallbackText: 'ARC',
  },
  nasdaq: {
    fallbackText: 'NDAQ',
  },
  lseg: {
    fallbackText: 'LSEG',
  },
  cboe: {
    fallbackText: 'CBOE',
  },
  factset: {
    fallbackText: 'FDS',
  },
}

export function getLogoMeta(logoKey, label) {
  const fromManifest = (logoKey && LOGO_MANIFEST[logoKey]) || null
  if (fromManifest) return fromManifest

  const base = (label || '').trim()
  const fallbackText =
    base.length <= 4
      ? base.toUpperCase()
      : base
          .split(/\s+/)
          .slice(0, 3)
          .map((word) => word[0])
          .join('')
          .toUpperCase()

  return {
    fallbackText: fallbackText || 'LOGO',
  }
}
