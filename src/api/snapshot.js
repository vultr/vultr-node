/**
 * Methods for interacting with the Snapshot endpoints<br>
 * {@link https://www.vultr.com/api/#snapshot}
 * @namespace snapshot
 */

/**
 * Create a snapshot from an existing virtual machine. The virtual machine does not need to be stopped.<br>
 * {@link https://www.vultr.com/api/#snapshot_create}
 * @function create
 * @memberof snapshot
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} [parameters.description] - Description of snapshot contents.
 */
exports.create = {
  url: '/snapshot/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    description: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Create a new snapshot on the current account. The snapshot will be downloaded from a given URL.<br>
 * {@link https://www.vultr.com/api/#snapshot_create_from_url}
 * @function createFromUrl
 * @memberof snapshot
 * @instance
 * @param {object} parameters
 * @param {string} parameters.url - Remote URL from where the snapshot will be downloaded.
 */
exports.createFromUrl = {
  url: '/snapshot/create_from_url',
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
 * List all snapshots on the current account.<br>
 * {@link https://www.vultr.com/api/#snapshot_snapshot_list}
 * @function list
 * @memberof snapshot
 * @instance
 * @param {object} parameters
 * @param {string} [parameters.SNAPSHOTID] - Filter result set to only contain this snapshot.
 */
exports.list = {
  url: '/snapshot/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SNAPSHOTID: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Destroy (delete) a snapshot. There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#snapshot_destroy}
 * @function delete
 * @memberof snapshot
 * @instance
 * @param {object} parameters
 * @param {string} parameters.SNAPSHOTID - Unique identifier for this snapshot.
 */
exports.delete = {
  url: '/snapshot/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SNAPSHOTID: {
      type: 'string',
      required: true
    }
  }
}
