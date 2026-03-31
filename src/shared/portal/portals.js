import { acquirerPortalConfig } from '../../features/acquirer/registry'
import { raidicalPortalConfig } from '../../features/raidical/registry'

export const portalConfigs = [raidicalPortalConfig, acquirerPortalConfig]

export function getPortalConfig(portalId) {
  return portalConfigs.find((portal) => portal.id === portalId)
}
