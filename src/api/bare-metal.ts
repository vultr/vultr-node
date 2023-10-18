/**
 * Methods for interacting with the bare metal endpoints<br>
 * {@link https://www.vultr.com/api/#tag/baremetal}
 * @namespace bareMetal
 */

import { ApiEndpoint } from '../types'

/**
 * List all bare metal instances on the current account.<br>
 * {@link https://www.vultr.com/api/#operation/list-baremetals}
 * @function listInstances
 * @memberof bareMetal
 * @instance
 */
export const listInstances: ApiEndpoint = {
  url: '/bare-metals',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new bare metal instance in the specified region with the desired plan.<br>
 * {@link https://www.vultr.com/api/#operation/create-baremetal}
 * @function createInstance
 * @memberof bareMetal
 * @instance
 */
export const createInstance: ApiEndpoint = {
  url: '/bare-metals',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    region: {
      type: 'string',
      required: true
    },
    plan: {
      type: 'string',
      required: true
    },
    script_id: { type: 'number' },
    enable_ipv6: { type: 'boolean' },
    sshkey_id: { type: 'string' },
    user_data: { type: 'string' },
    label: { type: 'string' },
    tag: { type: 'string' },
    activation_email: { type: 'boolean' },
    hostname: { type: 'string' },
    reserved_ipv4: { type: 'string' },
    os_id: { type: 'number' },
    snapshot_id: { type: 'string' },
    app_id: { type: 'number' },
    image_id: { type: 'string' },
    persistent_pxe: { type: 'boolean' },
    attach_vpc2: { type: 'array' },
    detach_vpc2: { type: 'array' },
    enable_vpc2: { type: 'boolean' },
    tags: { type: 'array' }
  }
}

/**
 * Get information for a given bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-baremetal}
 * @function getInstance
 * @memberof bareMetal
 * @instance
 */
export const getInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update a bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/update-baremetal}
 * @function updateInstance
 * @memberof bareMetal
 * @instance
 */
export const updateInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    },
    user_data: { type: 'string' },
    label: { type: 'string' },
    tag: { type: 'string' },
    tags: { type: 'array' },
    os_id: { type: 'string' },
    app_id: { type: 'string' },
    image_id: { type: 'string' },
    enable_ipv6: { type: 'boolean' },
    attach_vpc2: { type: 'array' },
    detach_vpc2: { type: 'array' },
    enable_vpc2: { type: 'boolean' }
  }
}

/**
 * Delete a bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/delete-baremetal}
 * @function deleteInstance
 * @memberof bareMetal
 * @instance
 */
export const deleteInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Get the IPv4 information for the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-ipv4-baremetal}
 * @function getInstanceIpv4Addresses
 * @memberof bareMetal
 * @instance
 */
export const getInstanceIpv4Addresses: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/ipv4',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Get the IPv6 information for the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-ipv6-baremetal}
 * @function getInstanceIpv6Addresses
 * @memberof bareMetal
 * @instance
 */
export const getInstanceIpv6Addresses: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/ipv6',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Start the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/start-baremetal}
 * @function startInstance
 * @memberof bareMetal
 * @instance
 */
export const startInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/start',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Reboot the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/reboot-baremetal}
 * @function rebootInstance
 * @memberof bareMetal
 * @instance
 */
export const rebootInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/reboot',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Reinstall the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/reinstall-baremetal}
 * @function reinstallInstance
 * @memberof bareMetal
 * @instance
 */
export const reinstallInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/reinstall',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    },
    hostname: { type: 'string' }
  }
}

/**
 * Halt the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/halt-baremetal}
 * @function haltInstance
 * @memberof bareMetal
 * @instance
 */
export const haltInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/halt',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Get bandwidth information for the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-bandwidth-baremetal}
 * @function getInstanceBandwidth
 * @memberof bareMetal
 * @instance
 */
export const getInstanceBandwidth: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/bandwidth',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Halt the specified bare metal instances.<br>
 * {@link https://www.vultr.com/api/#operation/halt-baremetals}
 * @function haltInstances
 * @memberof bareMetal
 * @instance
 */
export const haltInstances: ApiEndpoint = {
  url: '/bare-metals/halt',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    baremetal_ids: { type: 'array' }
  }
}

/**
 * Reboot the specified bare metal instances.<br>
 * {@link https://www.vultr.com/api/#operation/reboot-bare-metals}
 * @function rebootInstances
 * @memberof bareMetal
 * @instance
 */
export const rebootInstances: ApiEndpoint = {
  url: '/bare-metals/reboot',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    baremetal_ids: { type: 'array' }
  }
}

/**
 * Start the specfied bare metal instances.<br>
 * {@link https://www.vultr.com/api/#operation/start-bare-metals}
 * @function startInstances
 * @memberof bareMetal
 * @instance
 */
export const startInstances: ApiEndpoint = {
  url: '/bare-metals/start',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    baremetal_ids: { type: 'array' }
  }
}

/**
 * Get the user-supplied, base64 encoded user data for the specified bare
 * metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-bare-metal-userdata}
 * @function getInstanceUserData
 * @memberof bareMetal
 * @instance
 */
export const getInstanceUserData: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/user-data',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Get a list of available upgrades for the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-bare-metals-upgrades}
 * @function getInstanceAvailableUpgrades
 * @memberof bareMetal
 * @instance
 */
export const getInstanceAvailableUpgrades: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/upgrades',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    },
    type: { type: 'string' }
  }
}

/**
 * Get the VNC URL for the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-bare-metal-vnc}
 * @function getInstanceVncUrl
 * @memberof bareMetal
 * @instance
 */
export const getInstanceVncUrl: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/vnc',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Attach a vpc 2.0 to the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/attach-baremetals-vpc2}
 * @function attachVpc2ToInstance
 * @memberof bareMetal
 * @instance
 */
export const attachVpc2ToInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/vpc2/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    },
    vpc_id: { type: 'string' },
    ip_address: { type: 'string' }
  }
}

/**
 * Detach a vpc 2.0 on the specified bare metal instance.<br>
 * {@link https://www.vultr.com/api/#operation/detach-baremetals-vpc2}
 * @function detachVpc2FromInstance
 * @memberof bareMetal
 * @instance
 */
export const detachVpc2FromInstance: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/vpc2/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    },
    vpc_id: { type: 'string' }
  }
}

/**
 * List Bare Metal Instance VPC 2.0 Networks<br>
 * {@link https://www.vultr.com/api/#operation/list-baremetal-vpc2}
 * @function listInstanceVpc2
 * @memberof bareMetal
 * @instance
 */
export const listInstanceVpc2: ApiEndpoint = {
  url: '/bare-metals/{baremetal-id}/vpc2',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'baremetal-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}
