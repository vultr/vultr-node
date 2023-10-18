/**
 * Methods for interacting with the application endpoints<br>
 * {@link https://www.vultr.com/api/#tag/application}
 * @namespace applications
 */

import { ApiEndpoint } from '../types'

/**
 * Get a list of all One-Click applications.<br>
 * {@link https://www.vultr.com/api/#operation/list-applications}
 * @function list
 * @memberof applications
 * @instance
 */
export const listApplications: ApiEndpoint = {
  url: '/applications',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}
