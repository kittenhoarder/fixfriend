import { act, render } from '@testing-library/react'
import { acquirerPortalConfig } from '../features/acquirer/registry'
import { raidicalPortalConfig } from '../features/raidical/registry'

async function renderPortalSections(portalConfig, props) {
  for (const section of portalConfig.sections) {
    const { default: SectionComponent } = await section.load()
    let renderResult

    await act(async () => {
      renderResult = render(<SectionComponent {...props} />)
      await Promise.resolve()
    })

    const { container, unmount } = renderResult
    expect(container.firstChild).not.toBeNull()
    unmount()
  }
}

describe('portal registries', () => {
  it('smoke renders every Raidical section loader', async () => {
    await renderPortalSections(raidicalPortalConfig, {
      onNavigate() {},
      onOpenInvestorStory() {},
      theme: 'dark',
    })
  })

  it('smoke renders every Acquirer section loader', async () => {
    await renderPortalSections(acquirerPortalConfig, {
      onNavigate() {},
      theme: 'dark',
    })
  })
})
