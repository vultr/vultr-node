/**
 * Methods for interacting with the operating system endpoints<br>
 * {@link https://www.vultr.com/api/#tag/os}
 * @namespace operatingSystems
 */

import { ApiEndpoint } from '../types'

/**
 * Get a list of all OS images available to install from Vultr.<br>
 * {@link https://www.vultr.com/api/#operation/list-os}
 * @function listImages
 * @memberof operatingSystems
 * @instance
 */
export const listImages: ApiEndpoint = {
  url: '/os',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}
