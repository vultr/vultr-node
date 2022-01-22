/**
 * Methods for interacting with the snapshot endpoints<br>
 * {@link https://www.vultr.com/api/#tag/snapshot}
 * @namespace snapshots
 */

/**
 * Delete the specified snapshot.<br>
 * {@link https://www.vultr.com/api/#operation/delete-snapshot}
 * @function deleteSnapshot
 * @memberof snapshots
 * @instance
 */
exports.deleteSnapshot = {
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
exports.getSnapshot = {
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
exports.updateSnapshot = {
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
exports.listSnapshots = {
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
exports.createSnapshot = {
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
exports.createSnapshotFromUrl = {
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
