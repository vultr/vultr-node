/**
 * Methods for interacting with the private network endpoints<br>
 * {@link https://www.vultr.com/api/#tag/private-Networks}
 * @namespace privateNetworks
 */

/**
 * Get information about the specified private network.<br>
 * {@link https://www.vultr.com/api/#operation/get-network}
 * @function getPrivateNetwork
 * @memberof privateNetworks
 * @instance
 */
exports.getPrivateNetwork = {
  url: '/private-networks/{network-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'network-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete a specified private network.<br>
 * {@link https://www.vultr.com/api/#operation/delete-network}
 * @function deletePrivateNetwork
 * @memberof privateNetworks
 * @instance
 */
exports.deletePrivateNetwork = {
  url: '/private-networks/{network-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'network-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information on the specified private network.<br>
 * {@link https://www.vultr.com/api/#operation/update-network}
 * @function updatePrivateNetwork
 * @memberof privateNetworks
 * @instance
 */
exports.updatePrivateNetwork = {
  url: '/private-networks/{network-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'network-id': {
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
 * List all private works on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-networks}
 * @function listPrivateNetworks
 * @memberof privateNetworks
 * @instance
 */
exports.listPrivateNetworks = {
  url: '/private-networks',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new private network in a specified region.<br>
 * {@link https://www.vultr.com/api/#operation/create-network}
 * @function createPrivateNetwork
 * @memberof privateNetworks
 * @instance
 */
exports.createPrivateNetwork = {
  url: '/private-networks',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    region: {
      type: 'string',
      required: true
    },
    description: { type: 'string' },
    v4_subnet: { type: 'string' },
    v4_subnet_mask: { type: 'string' }
  }
}
