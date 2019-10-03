/**
 * Methods for interacting with the Reserved IP endpoints<br>
 * {@link https://www.vultr.com/api/#reservedip}
 * @namespace reservedIp
 */

/**
 * List all the active reserved IPs on this account. The "subnet_size" field is the size of the network assigned to this subscription. This will typically be a /64 for IPv6, or a /32 for IPv4.<br>
 * {@link https://www.vultr.com/api/#reservedip_ip_list}
 * @function list
 * @memberof reservedIp
 * @instance
 */
exports.list = {
  url: '/reservedip/list',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * Remove a reserved IP from your account. After making this call, you will not be able to recover the IP address.<br>
 * {@link https://www.vultr.com/api/#reservedip_destroy}
 * @function delete
 * @memberof reservedIp
 * @instance
 * @param {object} parameters
 * @param {string} parameters.ip_address - Reserved IP to remove from your account.
 */
exports.delete = {
  url: '/reservedip/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ip_address: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Detach a reserved IP from an existing subscription.<br>
 * This feature operates normally when networking conditions are stable, but it is not reliable for conditions when high availability is needed.<br>
 * For HA, see our [High Availability on Vultr with Floating IP and BGP guide]{@link https://www.vultr.com/docs/high-availability-on-vultr-with-floating-ip-and-bgp}.<br>
 * {@link https://www.vultr.com/api/#reservedip_detach}
 * @function detach
 * @memberof reservedIp
 * @instance
 * @param {object} parameters
 * @param {string} parameters.ip_address - Reserved IP to be detached. Include the subnet size in this parameter (e.g: /32 or /64).
 * @param {number} parameters.detach_SUBID - Unique identifier of the target server.
 */
exports.detach = {
  url: '/reservedip/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ip_address: {
      type: 'string',
      required: true
    },
    detach_SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Convert an existing IP on a subscription to a reserved IP. Returns the SUBID of the newly created reserved IP.<br>
 * {@link https://www.vultr.com/api/#reservedip_convert}
 * @function convert
 * @memberof reservedIp
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - SUBID of the server that currently has the IP address you want to convert.
 * @param {string} parameters.ip_address - IP address you want to convert (v4 must be a /32, v6 must be a /64).
 * @param {string} [parameters.label] - Label for this reserved IP
 */
exports.convert = {
  url: '/reservedip/convert',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    ip_address: {
      type: 'string',
      required: true
    },
    label: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Create a new reserved IP. Reserved IPs can only be used within the same datacenter for which they were created.<br>
 * {@link https://www.vultr.com/api/#reservedip_create}
 * @function create
 * @memberof reservedIp
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - Location to create this reserved IP in.
 * @param {string} parameters.ip_type - 'v4' or 'v6' Type of reserved IP to create.
 * @param {string} [parameters.label] - Label for this reserved IP.
 */
exports.create = {
  url: '/reservedip/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    ip_type: {
      type: 'string',
      required: true
    },
    label: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Attach a reserved IP from an existing subscription.<br>
 * This feature operates normally when networking conditions are stable, but it is not reliable for conditions when high availability is needed.<br>
 * For HA, see our [High Availability on Vultr with Floating IP and BGP guide]{@link https://www.vultr.com/docs/high-availability-on-vultr-with-floating-ip-and-bgp}.<br>
 * {@link https://www.vultr.com/api/#reservedip_attach}
 * @function attach
 * @memberof reservedIp
 * @instance
 * @param {object} parameters
 * @param {string} parameters.ip_address - Reserved IP to be attached. Include the subnet size in this parameter (e.g: /32 or /64).
 * @param {number} parameters.attach_SUBID - Unique identifier of the target server.
 */
exports.attach = {
  url: '/reservedip/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ip_address: {
      type: 'string',
      required: true
    },
    attach_SUBID: {
      type: 'number',
      required: true
    }
  }
}
