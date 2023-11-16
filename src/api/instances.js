/**
 * Methods for interacting with the instances endpoints<br>
 * {@link https://www.vultr.com/api/#tag/instances}
 * @namespace instances
 */

/**
 * List all VPS instances in the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-instances}
 * @function listInstances
 * @memberof instances
 * @instance
 */
exports.listInstances = {
  url: '/instances',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' },
    tag: { type: 'string' },
    label: { type: 'string' },
    main_ip: { type: 'string' },
    region: { type: 'string' },
    firewall_group_id: { type: 'string' }
  }
}

/**
 * Create a VPS instance.<br>
 * {@link https://www.vultr.com/api/#operation/create-instance}
 * @function createInstance
 * @memberof instances
 * @instance
 */
exports.createInstance = {
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
    enable_vpc2: { type: 'boolean' },
    user_scheme: { type: 'string' }
  }
}

/**
 * Get information about the specified VPS instance.<br>
 * {@link https://www.vultr.com/api/#operation/get-instance}
 * @function getInstance
 * @memberof instances
 * @instance
 */
exports.getInstance = {
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
exports.updateInstance = {
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
    enable_vpc2: { type: 'boolean' },
    user_scheme: { type: 'string' }
  }
}

/**
 * Delete the specified VPS instance.<br>
 * {@link https://www.vultr.com/api/#operation/delete-instance}
 * @function deleteInstance
 * @memberof instances
 * @instance
 */
exports.deleteInstance = {
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
exports.haltInstances = {
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
exports.rebootInstances = {
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
exports.startInstances = {
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
exports.startInstance = {
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
exports.rebootInstance = {
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
exports.reinstallInstance = {
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
exports.getInstanceBandwidth = {
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
exports.getInstanceNeighbors = {
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
exports.listInstanceVpc2 = {
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
exports.listInstanceVpcs = {
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
exports.getInstanceIsoStatus = {
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
exports.attachIsoToInstance = {
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
exports.detachIsoFromInstance = {
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
exports.attachVpcToInstance = {
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
exports.detachVpcFromInstance = {
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
exports.attachVpc2ToInstance = {
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
exports.detachVpc2FromInstance = {
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
exports.setInstanceBackupSchedule = {
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
exports.getInstanceBackupSchedule = {
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
exports.restoreInstance = {
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
exports.listInstanceIpv4Information = {
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
exports.createInstanceIpv4 = {
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
exports.getInstanceIpv6Information = {
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
exports.createInstanceReverseIpv6 = {
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
exports.listInstanceIpv6ReverseInformation = {
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
exports.createInstanceReverseIpv4 = {
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
exports.getInstanceUserData = {
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
exports.haltInstance = {
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
exports.setDefaultReverseDnsEntry = {
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
exports.deleteIpv4Address = {
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
exports.deleteInstanceReverseIpv6 = {
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
exports.getAvailableInstanceUpgrades = {
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
