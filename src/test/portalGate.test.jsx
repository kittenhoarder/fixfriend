import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import AppGate from '../components/AppGate'
import { PORTAL_STORAGE_KEY } from '../shared/gate/portalGate'

function createPortals(overrides = {}) {
  return [
    {
      id: 'raidical',
      label: 'Raidical',
      gate: {
        envKey: 'VITE_TEST_RAIDICAL_PASSWORD',
        password: overrides.raidicalPassword ?? '',
        storage: {
          token: 'test-raidical-token',
          failCount: 'test-raidical-fail-count',
          lastAttempt: 'test-raidical-last-attempt',
        },
      },
    },
    {
      id: 'acquirer',
      label: 'Acquirer',
      gate: {
        envKey: 'VITE_TEST_ACQUIRER_PASSWORD',
        password: overrides.acquirerPassword ?? '',
        storage: {
          token: 'test-acquirer-token',
          failCount: 'test-acquirer-fail-count',
          lastAttempt: 'test-acquirer-last-attempt',
        },
      },
    },
  ]
}

function renderPortal(id, { onSwitchPortal }) {
  return (
    <div data-testid={`portal-${id}`}>
      <span>{id} portal</span>
      <button type="button" onClick={() => onSwitchPortal(id === 'raidical' ? 'acquirer' : 'raidical')}>
        switch
      </button>
    </div>
  )
}

describe('AppGate', () => {
  it('renders the locked form and unlocks a gated portal with the correct password', async () => {
    render(<AppGate portals={createPortals({ raidicalPassword: 'secret' })} renderPortal={renderPortal} />)

    const passwordInput = await screen.findByLabelText(/enter password/i)
    fireEvent.change(passwordInput, { target: { value: 'secret' } })
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }))

    await waitFor(() => {
      expect(screen.getByTestId('portal-raidical')).toBeInTheDocument()
    })
  })

  it('allows bypassing to the other portal when only one portal is gated', async () => {
    render(<AppGate portals={createPortals({ raidicalPassword: 'secret' })} renderPortal={renderPortal} />)

    const bypassButton = await screen.findByRole('button', { name: /enter acquirer site/i })
    fireEvent.click(bypassButton)

    await waitFor(() => {
      expect(screen.getByTestId('portal-acquirer')).toBeInTheDocument()
    })
  })

  it('switches between unlocked portals and respects the stored active portal', async () => {
    window.sessionStorage.setItem(PORTAL_STORAGE_KEY, 'acquirer')

    render(<AppGate portals={createPortals()} renderPortal={renderPortal} />)

    await waitFor(() => {
      expect(screen.getByTestId('portal-acquirer')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: 'switch' }))

    await waitFor(() => {
      expect(screen.getByTestId('portal-raidical')).toBeInTheDocument()
    })
  })
})
