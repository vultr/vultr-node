/**
 * Methods for interacting with the snapshot endpoints<br>
 * {@link https://www.vultr.com/api/#tag/ssh}
 * @namespace sshKeys
 */

import { ApiEndpoint } from '../types'

/**
 * Get information about a specified SSH key.<br>
 * {@link https://www.vultr.com/api/#operation/get-ssh-key}
 * @function getSshKey
 * @memberof sshKeys
 * @instance
 */
export const getSshKey: ApiEndpoint = {
  url: '/ssh-keys/{ssh-key-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'ssh-key-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for the specified SSH key.<br>
 * {@link https://www.vultr.com/api/#operation/update-ssh-key}
 * @function updateSshKey
 * @memberof sshKeys
 * @instance
 */
export const updateSshKey: ApiEndpoint = {
  url: '/ssh-keys/{ssh-key-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'ssh-key-id': {
      type: 'string',
      path: true,
      required: true
    },
    name: { type: 'string' },
    ssh_key: { type: 'string' }
  }
}

/**
 * Delete the specified SSH key.<br>
 * {@link https://www.vultr.com/api/#operation/delete-ssh-key}
 * @function deleteSshKey
 * @memberof sshKeys
 * @instance
 */
export const deleteSshKey: ApiEndpoint = {
  url: '/ssh-keys/{ssh-key-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'ssh-key-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all SSH keys on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-ssh-keys}
 * @function listSshKeys
 * @memberof sshKeys
 * @instance
 */
export const listSshKeys: ApiEndpoint = {
  url: '/ssh-keys',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new SSH key.<br>
 * {@link https://www.vultr.com/api/#operation/create-ssh-key}
 * @function createSshKey
 * @memberof sshKeys
 * @instance
 */
export const createSshKey: ApiEndpoint = {
  url: '/ssh-keys',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    name: { type: 'string' },
    ssh_key: { type: 'string' }
  }
}
