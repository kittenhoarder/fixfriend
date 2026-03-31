import { NAV_TABS } from '../../content/raidical/navigation'

const sectionLoaders = {
  overview: () => import('../../components/sections/OverviewSection.jsx'),
  product: () => import('../../components/sections/ProductSection.jsx'),
  sales: () => import('../../components/sections/FunnelSection.jsx'),
  financials: () => import('../../components/sections/FinancialSection.jsx'),
  operations: () => import('../../components/sections/OperationsSection.jsx'),
  market: () => import('../../components/sections/MarketSection.jsx'),
  leanExit: () => import('../../components/sections/LeanExitSection.jsx'),
  definition: () => import('../../components/sections/DefinitionSection.jsx'),
  acquirers: () => import('../../components/sections/AcquirersSection.jsx'),
}

export const raidicalPortalConfig = {
  id: 'raidical',
  label: 'Raidical',
  initialTab: 'overview',
  tabs: NAV_TABS,
  gate: {
    envKey: 'VITE_GATE_PASSWORD',
    storage: {
      token: 'fixfriend-gate-token',
      failCount: 'fixfriend-gate-fail-count',
      lastAttempt: 'fixfriend-gate-last-attempt',
    },
  },
  sections: NAV_TABS.map((tab) => ({
    ...tab,
    load: sectionLoaders[tab.id],
  })),
}
