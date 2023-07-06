/**
 * Methods for interacting with the reserved IP endpoints<br>
 * {@link https://www.vultr.com/api/#tag/reserved-ip}
 * @namespace reservedIps
 */

/**
 * Get information about the specified reserved IP address.<br>
 * {@link https://www.vultr.com/api/#operation/get-reserved-ip}
 * @function getReservedIp
 * @memberof reservedIps
 * @instance
 */
exports.getReservedIp = {
  url: '/reserved-ips/{reserved-ip}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'reserved-ip': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete the specified reserved IP address.<br>
 * {@link https://www.vultr.com/api/#operation/delete-reserved-ip}
 * @function deleteReservedIp
 * @memberof reservedIps
 * @instance
 */
exports.deleteReservedIp = {
  url: '/reserved-ips/{reserved-ip}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'reserved-ip': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information on a Reserved IP.<br>
 * {@link https://www.vultr.com/api/#operation/patch-reserved-ips-reserved-ip}
 * @function updateReservedIp
 * @memberof reservedIps
 * @instance
 */
exports.updateReservedIp = {
  url: '/reserved-ips/{reserved-ip}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'reserved-ip': {
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
 * List all reserved IP addresses.<br>
 * {@link https://www.vultr.com/api/#operation/list-reserved-ips}
 * @function listReservedIps
 * @memberof reservedIps
 * @instance
 */
exports.listReservedIps = {
  url: '/reserved-ips',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a reserved IP address.<br>
 * {@link https://www.vultr.com/api/#operation/create-reserved-ip}
 * @function createReservedIp
 * @memberof reservedIps
 * @instance
 */
exports.createReservedIp = {
  url: '/reserved-ips',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    region: {
      type: 'string',
      required: true
    },
    ip_type: {
      type: 'string',
      required: true
    },
    label: { type: 'string' }
  }
}

/**
 * Attach a reserved IP address to the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/attach-reserved-ip}
 * @function attachReservedIp
 * @memberof reservedIps
 * @instance
 */
exports.attachReservedIp = {
  url: '/reserved-ips/{reserved-ip}/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'reserved-ip': {
      type: 'string',
      path: true,
      required: true
    },
    instance_id: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Detach a reserved IP address.<br>
 * {@link https://www.vultr.com/api/#operation/detach-reserved-ip}
 * @function detachReservedIp
 * @memberof reservedIps
 * @instance
 */
exports.detachReservedIp = {
  url: '/reserved-ips/{reserved-ip}/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'reserved-ip': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Convert the IP address of an existing instance into a reserved IP.<br>
 * {@link https://www.vultr.com/api/#operation/convert-reserved-ip}
 * @function convertInstanceIpToReservedIp
 * @memberof reservedIps
 * @instance
 */
exports.convertInstanceIpToReservedIp = {
  url: '/reserved-ips/convert',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ip_address: {
      type: 'string',
      required: true
    },
    label: { type: 'string' }
  }
}
