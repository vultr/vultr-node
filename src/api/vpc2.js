/**
 * Methods for interacting with the vpc2 endpoints<br>
 * {@link https://www.vultr.com/api/#tag/vpc2}
 * @namespace vpc2
 */

/**
 * Get information about the specified vpc2.<br>
 * {@link https://www.vultr.com/api/#operation/get-vpc2}
 * @function getVpc
 * @memberof vpc2
 * @instance
 */
exports.getVpc = {
  url: '/vpc2/{vpc-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete a specified vpc2.<br>
 * {@link https://www.vultr.com/api/#operation/delete-vpc2}
 * @function deleteVpc
 * @memberof vpc2
 * @instance
 */
exports.deleteVpc = {
  url: '/vpc2/{vpc-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information on the specified vpc2.<br>
 * {@link https://www.vultr.com/api/#operation/update-vpc2}
 * @function updateVpc
 * @memberof vpc2
 * @instance
 */
exports.updateVpc = {
  url: '/vpc2/{vpc-id}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
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
 * List all vpc2 on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-vpc2}
 * @function listvpc2
 * @memberof vpc2
 * @instance
 */
exports.listVpcs = {
  url: '/vpc2',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new vpc2 in a specified region.<br>
 * {@link https://www.vultr.com/api/#operation/create-vpc2}
 * @function createVpc
 * @memberof vpc2
 * @instance
 */
exports.createVpc = {
  url: '/vpc2',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    region: {
      type: 'string',
      required: true
    },
    description: { type: 'string' },
    ip_type: { type: 'string' },
    ip_block: { type: 'string' },
    prefix_length: { type: 'number' }
  }
}

/**
 * Get a list of nodes attached to a VPC 2.0 network.<br>
 * {@link https://www.vultr.com/api/#tag/VPC2/operation/list-vpc2-nodes}
 * @function listVpcNodes
 * @memberof vpc2
 * @instance
 */
exports.listVpcNodes = {
  url: '/vpc2/{vpc-id}/nodes',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
      type: 'string',
      path: true,
      required: true
    },
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}

/**
 * Attach nodes to a VPC 2.0 network<br>
 * {@link https://www.vultr.com/api/#tag/VPC2/operation/attach-vpc2-nodes}
 * @function attachVpcNodes
 * @memberof vpc2
 * @instance
 */
exports.attachVpcNodes = {
  url: '/vpc2/{vpc-id}/nodes/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
      type: 'string',
      path: true,
      required: true
    },
    nodes: {
      type: 'array',
      required: true
    }
  }
}

/**
 * Detach nodes from a VPC 2.0 network<br>
 * {@link https://www.vultr.com/api/#tag/VPC2/operation/detach-vpc2-nodes}
 * @function detachVpcNodes
 * @memberof vpc2
 * @instance
 */
exports.detachVpcNodes = {
  url: '/vpc2/{vpc-id}/nodes/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
      type: 'string',
      path: true,
      required: true
    },
    nodes: {
      type: 'array',
      required: true
    }
  }
}
