/**
 * Methods for interacting with the ISO endpoints<br>
 * {@link https://www.vultr.com/api/#tag/iso}
 * @namespace iso
 */

import { ApiEndpoint } from '../types'

/**
 * List all ISOs in the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-isos}
 * @function listIsos
 * @memberof iso
 * @instance
 */
export const listIsos: ApiEndpoint = {
  url: '/iso',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new ISO in the account from a URL.<br>
 * {@link https://www.vultr.com/api/#operation/create-iso}
 * @function createIso
 * @memberof iso
 * @instance
 */
export const createIso: ApiEndpoint = {
  url: '/iso',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    url: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Get information about the specified ISO.<br>
 * {@link https://www.vultr.com/api/#operation/iso-get}
 * @function getIso
 * @memberof iso
 * @instance
 */
export const getIso: ApiEndpoint = {
  url: '/iso/{iso-id}',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'iso-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete the specified ISO from the account.<br>
 * {@link https://www.vultr.com/api/#operation/delete-iso}
 * @function deleteIso
 * @memberof iso
 * @instance
 */
export const deleteIso: ApiEndpoint = {
  url: '/iso/{iso-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'iso-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all Vultr public ISOs.<br>
 * {@link https://www.vultr.com/api/#operation/list-public-isos}
 * @function listPublicIsos
 * @memberof iso
 * @instance
 */
export const listPublicIsos: ApiEndpoint = {
  url: '/iso-public',
  requestType: 'GET',
  apiKeyRequired: false
}
