import React from 'react'
import ReactDOM from 'react-dom/client'
import AppGate from './components/AppGate.jsx'
import AcquirerApp from './features/acquirer/AcquirerApp.jsx'
import RaidicalApp from './features/raidical/RaidicalApp.jsx'
import { portalConfigs } from './shared/portal/portals'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppGate
      portals={portalConfigs}
      renderPortal={(portalId, props) => (
        portalId === 'acquirer'
          ? <AcquirerApp {...props} />
          : <RaidicalApp {...props} />
      )}
    />
  </React.StrictMode>,
)
