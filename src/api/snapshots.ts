/**
 * Methods for interacting with the snapshot endpoints<br>
 * {@link https://www.vultr.com/api/#tag/snapshot}
 * @namespace snapshots
 */

import { ApiEndpoint } from '../types'

/**
 * Delete the specified snapshot.<br>
 * {@link https://www.vultr.com/api/#operation/delete-snapshot}
 * @function deleteSnapshot
 * @memberof snapshots
 * @instance
 */
export const deleteSnapshot: ApiEndpoint = {
  url: '/snapshots/{snapshot-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'snapshot-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Get information about the specified snapshot.<br>
 * {@link https://www.vultr.com/api/#operation/get-snapshot}
 * @function getSnapshot
 * @memberof snapshots
 * @instance
 */
export const getSnapshot: ApiEndpoint = {
  url: '/snapshots/{snapshot-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'snapshot-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for the specified snapshot.<br>
 * {@link https://www.vultr.com/api/#operation/put-snapshots-snapshot-id}
 * @function updateSnapshot
 * @memberof snapshots
 * @instance
 */
export const updateSnapshot: ApiEndpoint = {
  url: '/snapshots/{snapshot-id}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'snapshot-id': {
      type: 'string',
      path: true,
      required: true
    },
    description: {
      type: 'string',
      required: true
    }
  }
}

/**
 * List all snapshots on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-snapshots}
 * @function listSnapshots
 * @memberof snapshots
 * @instance
 */
export const listSnapshots: ApiEndpoint = {
  url: '/snapshots',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' },
    description: { type: 'string' }
  }
}

/**
 * Create a new snapshot.<br>
 * {@link https://www.vultr.com/api/#operation/create-snapshot}
 * @function createSnapshot
 * @memberof snapshots
 * @instance
 */
export const createSnapshot: ApiEndpoint = {
  url: '/snapshots',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    instance_id: {
      type: 'string',
      required: true
    },
    description: { type: 'string' }
  }
}

/**
 * Create a new snapshot from a specified URL.<br>
 * {@link https://www.vultr.com/api/#operation/create-snapshot-create-from-url}
 * @function createSnapshotFromUrl
 * @memberof snapshots
 * @instance
 */
export const createSnapshotFromUrl: ApiEndpoint = {
  url: '/snapshots/create-from-url',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    url: {
      type: 'string',
      required: true
    },
    description: { type: 'string' }
  }
}
