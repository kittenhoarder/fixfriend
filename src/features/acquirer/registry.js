import { ACQ_NAV_TABS } from '../../content/acquirer/navigation'

const sectionLoaders = {
  hero: () => import('../../acq/sections/AcqHeroSection.jsx'),
  suite: () => import('../../acq/sections/AcqSuiteSection.jsx'),
  thesis: () => import('../../acq/sections/AcqThesisSection.jsx'),
  products: () => import('../../acq/sections/AcqProductsSection.jsx'),
  financials: () => import('../../acq/sections/AcqFinancialsSection.jsx'),
  landscape: () => import('../../acq/sections/AcqLandscapeSection.jsx'),
}

export const acquirerPortalConfig = {
  id: 'acquirer',
  label: 'Acquirer',
  initialTab: 'hero',
  tabs: ACQ_NAV_TABS,
  gate: {
    envKey: 'VITE_GATE_PASSWORD_ACQUIRER',
    storage: {
      token: 'acquirer-gate-token',
      failCount: 'acquirer-gate-fail-count',
      lastAttempt: 'acquirer-gate-last-attempt',
    },
  },
  sections: ACQ_NAV_TABS.map((tab) => ({
    ...tab,
    load: sectionLoaders[tab.id],
  })),
}
