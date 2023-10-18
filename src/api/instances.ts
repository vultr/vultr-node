/**
 * Methods for interacting with the instances endpoints<br>
 * {@link https://www.vultr.com/api/#tag/instances}
 * @namespace instances
 */

import { ApiEndpoint } from '../types'

/**
 * List all VPS instances in the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-instances}
 * @function listInstances
 * @memberof instances
 * @instance
 */
export const listInstances: ApiEndpoint = {
  url: '/instances',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' },
    tag: { type: 'string' },
    label: { type: 'string' },
    main_ip: { type: 'string' },
    region: { type: 'string' }
  }
}

/**
 * Create a VPS instance.<br>
 * {@link https://www.vultr.com/api/#operation/create-instance}
 * @function createInstance
 * @memberof instances
 * @instance
 */
export const createInstance: ApiEndpoint = {
  url: '/instances',
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
    os_id: { type: 'string' },
    ipxe_chain_url: { type: 'string' },
    iso_id: { type: 'string' },
    script_id: { type: 'string' },
    snapshot_id: { type: 'string' },
    enable_ipv6: { type: 'boolean' },
    disable_public_ipv4: { type: 'boolean' },
    attach_vpc: { type: 'array' },
    attach_vpc2: { type: 'array' },
    label: { type: 'string' },
    sshkey_id: { type: 'array' },
    backups: { type: 'string' },
    app_id: { type: 'number' },
    image_id: { type: 'string' },
    user_data: { type: 'string' },
    ddos_protection: { type: 'boolean' },
    activation_email: { type: 'boolean' },
    hostname: { type: 'string' },
    tag: { type: 'string' },
    tags: { type: 'array' },
    firewall_group_id: { type: 'string' },
    reserved_ipv4: { type: 'string' },
    enable_vpc: { type: 'boolean' },
    enable_vpc2: { type: 'boolean' }
  }
}

/**
 * Get information about the specified VPS instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance}
 * @function getInstance
 * @memberof instances
 * @instance
 */
export const getInstance: ApiEndpoint = {
  url: '/instances/{instance-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for the specified VPS instance.<br>
 * {@link https://www.vultr.com/api/#operation/update-instance}
 * @function updateInstance
 * @memberof instances
 * @instance
 */
export const updateInstance: ApiEndpoint = {
  url: '/instances/{instance-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    app_id: { type: 'number' },
    image_id: { type: 'string' },
    backups: { type: 'string' },
    firewall_group_id: { type: 'string' },
    enable_ipv6: { type: 'boolean' },
    os_id: { type: 'string' },
    user_data: { type: 'string' },
    tag: { type: 'string' },
    tags: { type: 'array' },
    label: { type: 'string' },
    plan: { type: 'string' },
    ddos_protection: { type: 'boolean' },
    attach_vpc: { type: 'array' },
    attach_vpc2: { type: 'array' },
    detach_vpc: { type: 'array' },
    detach_vpc2: { type: 'array' },
    enable_vpc: { type: 'boolean' },
    enable_vpc2: { type: 'boolean' }
  }
}

/**
 * Delete the specified VPS instance.<br>
 * {@link https://www.vultr.com/api/#operation/delete-instance}
 * @function deleteInstance
 * @memberof instances
 * @instance
 */
export const deleteInstance: ApiEndpoint = {
  url: '/instances/{instance-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Halt the spcified VPS instances.<br>
 * {@link https://www.vultr.com/api/#operation/halt-instances}
 * @function haltInstances
 * @memberof instances
 * @instance
 */
export const haltInstances: ApiEndpoint = {
  url: '/instances/halt',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    instance_ids: { type: 'array' }
  }
}

/**
 * Reboot the specified instances.<br>
 * {@link https://www.vultr.com/api/#operation/reboot-instances}
 * @function rebootInstances
 * @memberof instances
 * @instance
 */
export const rebootInstances: ApiEndpoint = {
  url: '/instances/reboot',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    instance_ids: { type: 'array' }
  }
}

/**
 * Start the specified instances.<br>
 * {@link https://www.vultr.com/api/#operation/start-instances}
 * @function startInstances
 * @memberof instances
 * @instance
 */
export const startInstances: ApiEndpoint = {
  url: '/instances/start',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    instance_ids: { type: 'array' }
  }
}

/**
 * Start the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/start-instance}
 * @function startInstance
 * @memberof instances
 * @instance
 */
export const startInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/start',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Reboot the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/reboot-instance}
 * @function rebootInstance
 * @memberof instances
 * @instance
 */
export const rebootInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/reboot',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Reinstall the specified VPS instance.<br>
 * {@link https://www.vultr.com/api/#operation/reinstall-instance}
 * @function
 * @memberof instances
 * @instance
 */
export const reinstallInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/reinstall',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    hostname: { type: 'string' }
  }
}

/**
 * Get bandwidth information for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance-bandwidth}
 * @function getInstanceBandwidth
 * @memberof instances
 * @instance
 */
export const getInstanceBandwidth: ApiEndpoint = {
  url: '/instances/{instance-id}/bandwidth',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    date_range: { type: 'number' }
  }
}

/**
 * Get a list of other instances in the same location as the specified
 * instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance-neighbors}
 * @function getInstanceNeighbors
 * @memberof instances
 * @instance
 */
export const getInstanceNeighbors: ApiEndpoint = {
  url: '/instances/{instance-id}/neighbors',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List the 2.0 vpcs for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/list-instance-vpc2}
 * @function listInstanceVpc2
 * @memberof instances
 * @instance
 */
export const listInstanceVpc2: ApiEndpoint = {
  url: '/instances/{instance-id}/vpc2',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * List the vpcs for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/list-instance-vpcs}
 * @function listInstanceVpcs
 * @memberof instances
 * @instance
 */
export const listInstanceVpcs: ApiEndpoint = {
  url: '/instances/{instance-id}/vpcs',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Get the ISO status for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance-iso-status}
 * @function getInstanceIsoStatus
 * @memberof instances
 * @instance
 */
export const getInstanceIsoStatus: ApiEndpoint = {
  url: '/instances/{instance-id}/iso',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Attach an ISO to the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/attach-instance-iso}
 * @function attachIsoToInstance
 * @memberof instances
 * @instance
 */
export const attachIsoToInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/iso/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    iso_id: { type: 'string' }
  }
}

/**
 * Detach the specified instance's ISO.<br>
 * {@link https://www.vultr.com/api/#operation/detach-instance-iso}
 * @function detachIsoFromInstance
 * @memberof instances
 * @instance
 */
export const detachIsoFromInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/iso/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Attach a vpc to the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/attach-instance-vpc}
 * @function attachVpcToInstance
 * @memberof instances
 * @instance
 */
export const attachVpcToInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/vpcs/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    vpc_id: { type: 'string' }
  }
}

/**
 * Detach the specified instance's vpc.<br>
 * {@link https://www.vultr.com/api/#operation/detach-instance-vpc}
 * @function detachVpcFromInstance
 * @memberof instances
 * @instance
 */
export const detachVpcFromInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/vpcs/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    vpc_id: { type: 'string' }
  }
}

/**
 * Attach a vpc 2.0 to the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/attach-instance-vpc2}
 * @function attachVpc2ToInstance
 * @memberof instances
 * @instance
 */
export const attachVpc2ToInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/vpc2/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    vpc_id: { type: 'string' }
  }
}

/**
 * Detach the specified instance's vpc 2.0.<br>
 * {@link https://www.vultr.com/api/#operation/detach-instance-vpc2}
 * @function detachVpc2FromInstance
 * @memberof instances
 * @instance
 */
export const detachVpc2FromInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/vpc2/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    vpc_id: { type: 'string' }
  }
}

/**
 * Set a backup schedule for the specified instnace.<br>
 * {@link https://www.vultr.com/api/#operation/create-instance-backup-schedule}
 * @function setInstanceBackupSchedule
 * @memberof instances
 * @instance
 */
export const setInstanceBackupSchedule: ApiEndpoint = {
  url: '/instances/{instance-id}/backup-schedule',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    type: {
      type: 'string',
      required: true
    },
    hour: { type: 'number' },
    dow: { type: 'number' },
    dom: { type: 'number' }
  }
}

/**
 * Retrieve the specified instance's backup schedule.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance-backup-schedule}
 * @function getInstanceBackupSchedule
 * @memberof instances
 * @instance
 */
export const getInstanceBackupSchedule: ApiEndpoint = {
  url: '/instances/{instance-id}/backup-schedule',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Restore a specified instance from either a backup or snapshot.<br>
 * {@link https://www.vultr.com/api/#operation/restore-instance}
 * @function restoreInstance
 * @memberof instances
 * @instance
 */
export const restoreInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/restore',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    backup_id: { type: 'string' },
    snapshot_id: { type: 'string' }
  }
}

/**
 * List IPv4 information for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance-ipv4}
 * @function listInstanceIpv4Information
 * @memberof instances
 * @instance
 */
export const listInstanceIpv4Information: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv4',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    public_network: { type: 'boolean' },
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create an IPv4 address for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/create-instance-ipv4}
 * @function createInstanceIpv4
 * @memberof instances
 * @instance
 */
export const createInstanceIpv4: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv4',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    reboot: { type: 'boolean' }
  }
}

/**
 * Get IPv6 information for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance-ipv6}
 * @function getInstanceIpv6Information
 * @memberof instances
 * @instance
 */
export const getInstanceIpv6Information: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv6',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create a reverse IPv6 entry for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/create-instance-reverse-ipv6}
 * @function createInstanceReverseIpv6
 * @memberof instances
 * @instance
 */
export const createInstanceReverseIpv6: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv6/reverse',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    ip: {
      type: 'string',
      required: true
    },
    reverse: {
      type: 'string',
      required: true
    }
  }
}

/**
 * List the reverse IPv6 information for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/list-instance-ipv6-reverse}
 * @function listInstanceIpv6ReverseInformation
 * @memberof instances
 * @instance
 */
export const listInstanceIpv6ReverseInformation: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv6/reverse',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create a reverse IPc4 address for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/create-instance-reverse-ipv4}
 * @function createInstanceReverseIpv4
 * @memberof instances
 * @instance
 */
export const createInstanceReverseIpv4: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv4/reverse',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    ip: {
      type: 'string',
      required: true
    },
    reverse: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Get the user-supplied, base64 encoded user data for the specified instance<br>
 * {@link https://www.vultr.com/api/#operation/get-instance-userdata}
 * @function getInstanceUserData
 * @memberof instances
 * @instance
 */
export const getInstanceUserData: ApiEndpoint = {
  url: '/instances/{instance-id}/user-data',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Halt the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/halt-instance}
 * @function haltInstance
 * @memberof instances
 * @instance
 */
export const haltInstance: ApiEndpoint = {
  url: '/instances/{instance-id}/halt',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Set a reverse DNS entry for an IPv4 address on the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/post-instances-instance-id-ipv4-reverse-default}
 * @function setDefaultReverseDnsEntry
 * @memberof instances
 * @instance
 */
export const setDefaultReverseDnsEntry: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv4/reverse/default',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    ip: { type: 'string' }
  }
}

/**
 * Delete the IPv4 address from the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/delete-instance-ipv4}
 * @function deleteIpv4Address
 * @memberof instances
 * @instance
 */
export const deleteIpv4Address: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv4/{ipv4}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    ipv4: {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete the specified instnace's reverse IPv6 information.<br>
 * {@link https://www.vultr.com/api/#operation/delete-instance-reverse-ipv6}
 * @function deleteInstanceReverseIpv6
 * @memberof instances
 * @instance
 */
export const deleteInstanceReverseIpv6: ApiEndpoint = {
  url: '/instances/{instance-id}/ipv6/{ipv6}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    ipv6: {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Get a list of all available upgrades for the specified instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance-upgrades}
 * @function getAvailableInstanceUpgrades
 * @memberof instances
 * @instance
 */
export const getAvailableInstanceUpgrades: ApiEndpoint = {
  url: '/instances/{instance-id}/upgrades',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'instance-id': {
      type: 'string',
      path: true,
      required: true
    },
    type: { type: 'string' }
  }
}
