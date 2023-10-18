/**
 * Methods for interacting with the region endpoints<br>
 * {@link https://www.vultr.com/api/#tag/region}
 * @namespace regions
 */

import { ApiEndpoint } from '../types'

/**
 * List all regions available at Vultr.<br>
 * {@link https://www.vultr.com/api/#operation/list-regions}
 * @function listRegions
 * @memberof regions
 * @instance
 */
export const listRegions: ApiEndpoint = {
  url: '/regions',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * List all available plans in the specified region.<br>
 * {@link https://www.vultr.com/api/#operation/list-available-compute-region}
 * @function listAvailableComputeInRegion
 * @memberof regions
 * @instance
 */
export const listAvailableComputeInRegion: ApiEndpoint = {
  url: '/regions/{region-id}/availability',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    'region-id': {
      type: 'string',
      path: true,
      required: true
    },
    type: { type: 'string' }
  }
}
