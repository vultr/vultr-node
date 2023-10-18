/**
 * Methods for interacting with the plan endpoints<br>
 * {@link https://www.vultr.com/api/#tag/plans}
 * @namespace plans
 */

import { ApiEndpoint } from '../types'

/**
 * Get a list of allavailable Vultr instance plans.<br>
 * {@link https://www.vultr.com/api/#operation/list-plans}
 * @function listPlans
 * @memberof plans
 * @instance
 */
export const listPlans: ApiEndpoint = {
  url: '/plans',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    type: { type: 'string' },
    os: { type: 'string' },
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}
/**
 * Get a list of all available Vultr bare metal plans.<br>
 * {@link https://www.vultr.com/api/#operation/list-metal-plans}
 * @function listBareMetalPlans
 * @memberof plans
 * @instance
 */
export const listBareMetalPlans: ApiEndpoint = {
  url: '/plans-metal',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}
