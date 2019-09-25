/**
 * Methods for interacting with the Network endpoints<br>
 * {@link https://www.vultr.com/api/#network}
 * @namespace network
 */

/**
 * List all private networks on the current account.<br>
 * {@link https://www.vultr.com/api/#network_network_list}
 * @function list
 * @memberof network
 * @instance
 */
exports.list = {
  url: '/network/list',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * Create a new private network. A private network can only be used at the location for which it was created.<br>
 * {@link https://www.vultr.com/api/#network_create}
 * @function create
 * @memberof network
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - Location for the network.
 * @param {string} [parameters.description] -  Description of network.
 * @param {string} [parameters.v4_subnet] - IPv4 network to be used when attaching servers to this network.
 * @param {number} [parameters.v4_subnet_mask] - Network mask corresponding with the v4_subnet.
 */
exports.create = {
  url: '/network/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    description: {
      type: 'string',
      required: false
    },
    v4_subnet: {
      type: 'string',
      required: false
    },
    v4_subnet_mask: {
      type: 'number',
      required: false
    }
  }
}

/**
 * Delete a private network. Before destroying, a network must be disabled from all instances.<br>
 * {@link https://www.vultr.com/api/#network_destroy}
 * @function delete
 * @memberof network
 * @instance
 * @param {object} parameters
 * @param {string} parameters.NETWORKID - Unique identifier for this network.
 */
exports.delete = {
  url: '/network/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    NETWORKID: {
      type: 'string',
      required: true
    }
  }
}
