/**
 * Methods for interacting with the object storage endpoints<br>
 * {@link https://www.vultr.com/api/#tag/s3}
 * @namespace objectStorage
 */

import { ApiEndpoint } from '../types'

/**
 * List all object storage volumes on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-object-storages}
 * @function listObjectStorages
 * @memberof objectStorage
 * @instance
 */
export const listObjectStorages: ApiEndpoint = {
  url: '/object-storage',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create an object storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/create-object-storage}
 * @function
 * @memberof objectStorage
 * @instance
 */
export const createObjectStorage: ApiEndpoint = {
  url: '/object-storage',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    cluster_id: {
      type: 'string',
      required: true
    },
    label: { type: 'string' }
  }
}

/**
 * Get information about the specified object sotrage volume.<br>
 * {@link https://www.vultr.com/api/#operation/get-object-storage}
 * @function getObjectStorage
 * @memberof objectStorage
 * @instance
 */
export const getObjectStorage: ApiEndpoint = {
  url: '/object-storage/{object-storage-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'object-storage-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete an object storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/delete-object-storage}
 * @function deleteObjectStorage
 * @memberof objectStorage
 * @instance
 */
export const deleteObjectStorage: ApiEndpoint = {
  url: '/object-storage/{object-storage-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'object-storage-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for the specified object storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/update-object-storage}
 * @function updateObjectStorage
 * @memberof objectStorage
 * @instance
 */
export const updateObjectStorage: ApiEndpoint = {
  url: '/object-storage/{object-storage-id}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'object-storage-id': {
      type: 'string',
      path: true,
      required: true
    },
    label: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Regenerate keys for the specified object storage volume.<br>
 * {@link https://www.vultr.com/api/#operation/regenerate-object-storage-keys}
 * @function regenerateObjectStorageKeys
 * @memberof objectStorage
 * @instance
 */
export const regenerateObjectStorageKeys: ApiEndpoint = {
  url: '/object-storage/{object-storage-id}/regenerate-keys',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'object-storage-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Get a list of all object storage clusters.<br>
 * {@link https://www.vultr.com/api/#operation/list-object-storage-clusters}
 * @function getAllClusters
 * @memberof objectStorage
 * @instance
 */
export const getAllClusters: ApiEndpoint = {
  url: '/object-storage/clusters',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}
