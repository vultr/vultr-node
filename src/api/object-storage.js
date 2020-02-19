/**
 * Methods for interacting with the Object Storage endpoints<br>
 * {@link https://www.vultr.com/api/#objectstorage}
 * @namespace objectStorage
 */

/**
 * List all object storage subscriptions on the current account. This includes both pending and active subscriptions.<br>
 * {@link https://www.vultr.com/api/#objectstorage__list}
 * @function list
 * @memberof objectStorage
 * @instance
 * @param {object} parameters
 * @param {string} [parameters.include_s3='yes'] - 'yes' or 'no'. If 'yes', include S3 keys with each subscription entry.
 * @param {number} [parameters.SUBID] - Unique identifier of a subscription. Only the subscription object will be returned.
 * @param {string} [parameters.label] - A text label string. Only subscription objects with this text label will be returned.
 */
exports.list = {
  url: '/objectstorage/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    include_s3: {
      type: 'string',
      required: false
    },
    SUBID: {
      type: 'number',
      required: false
    },
    label: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Create an object storage subscription.<br>
 * {@link https://www.vultr.com/api/#objectstorage_create}
 * @function create
 * @memberof objectStorage
 * @instance
 * @param {object} parameters
 * @param {number} parameters.OBJSTORECLUSTERID - Cluster to use for object storage.
 * @param {string} [parameters.label] - Text label that will be associated with the subscription.
 */
exports.create = {
  url: '/objectstorage/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    OBJSTORECLUSTERID: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Destroy an object storage subscription. All objects will be permanently deleted. There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#objectstorage_destroy}
 * @function delete
 * @memberof objectStorage
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier for this subscription.
 */
exports.delete = {
  url: '/objectstorage/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Set the label of an object storage subscription.<br>
 * {@link https://www.vultr.com/api/#objectstorage_label_set}
 * @function setLabel
 * @memberof objectStorage
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier for this subscription.
 * @param {string} parameters.label - Text label that will be shown in the control panel.
 */
exports.setLabel = {
  url: '/objectstorage/label_set',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Clusters may be removed over time. The "deploy" field can be used to determine whether or not new deployments are allowed in the cluster.<br>
 * {@link https://www.vultr.com/api/#objectstorage_list_cluster}
 * @function listCluster
 * @memberof objectStorage
 * @instance
 */
exports.listCluster = {
  url: '/objectstorage/list_cluster',
  requestType: 'GET',
  apiKeyRequired: false
}

/**
 * Regenerate the S3 API keys of an object storage subscription.<br>
 * {@link https://www.vultr.com/api/#objectstorage_s3key_regenerate}
 * @function regenerateKeys
 * @memberof objectStorage
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier for this subscription.
 * @param {string} parameters.s3_access_key - Access key from keypair to be regenerated.
 */
exports.regenerateKeys = {
  url: '/objectstorage/s3key_regenerate',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    s3_access_key: {
      type: 'string',
      required: true
    }
  }
}
