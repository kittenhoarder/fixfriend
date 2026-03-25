import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AcqApp from './acq/AcqApp.jsx'
import AppGate from './components/AppGate.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppGate
      raidicalApp={({ onSwitchPortal }) => <App onSwitchPortal={onSwitchPortal} />}
      acquirerApp={({ onSwitchPortal }) => <AcqApp onSwitchPortal={onSwitchPortal} />}
    />
  </React.StrictMode>,
)
