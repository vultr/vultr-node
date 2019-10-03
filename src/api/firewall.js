/**
 * Methods for interacting with the Firewall endpoints<br>
 * {@link https://www.vultr.com/api/#firewall}
 * @namespace firewall
 */

/**
 * List the rules in a firewall group.<br>
 * {@link https://www.vultr.com/api/#firewall_rule_list}
 * @function listRules
 * @memberof firewall
 * @instance
 * @param {object} parameters
 * @param {string} parameters.FIREWALLGROUPID - Target firewall group.
 * @param {string} parameters.direction - Server IP to use when creating default records (A and MX).
 * @param {string} parameters.ip_type - IP address type. Possible values: "v4", "v6".
 */
exports.listRules = {
  url: '/firewall/rule_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    },
    direction: {
      type: 'string',
      required: true
    },
    ip_type: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Delete a firewall group. Use this function with caution because the firewall group being deleted will be detached from all servers. This can result in open ports accessible to the internet.<br>
 * {@link https://www.vultr.com/api/#firewall_group_delete}
 * @function deleteGroup
 * @memberof firewall
 * @instance
 * @param {object} parameters
 * @param {string} parameters.FIREWALLGROUPID - Firewall group to delete.
 */
exports.deleteGroup = {
  url: '/firewall/group_delete',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Create a new firewall group on the current account.<br>
 * {@link https://www.vultr.com/api/#firewall_group_create}
 * @function createGroup
 * @memberof firewall
 * @instance
 * @param {object} parameters
 * @param {string} [parameters.description] - Description of firewall group.
 */
exports.createGroup = {
  url: '/firewall/group_create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    description: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Create a rule in a firewall group.<br>
 * {@link https://www.vultr.com/api/#firewall_group_create}
 * @function createRule
 * @memberof firewall
 * @instance
 * @param {object} parameters
 * @param {string} parameters.FIREWALLGROUPID - Target firewall group.
 * @param {string} parameters.direction - Direction of rule. Possible values: "in".
 * @param {string} parameters.ip_type - IP address type. Possible values: "v4", "v6".
 * @param {string} parameters.protocol - Protocol type. Possible values: "icmp", "tcp", "udp", "gre".
 * @param {string} parameters.subnet - IP address representing a subnet. The IP address format must match with the "ip_type" parameter value.
 * @param {string} parameters.subnet_size - IP prefix size in bits.
 * @param {string} [parameters.port] - TCP/UDP only. This field can be an integer value specifying a port or a colon separated port range.
 * @param {string} [parameters.notes] - This field supports notes up to 255 characters.
 */
exports.createRule = {
  url: '/firewall/rule_create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    },
    direction: {
      type: 'string',
      required: true
    },
    ip_type: {
      type: 'string',
      required: true
    },
    protocol: {
      type: 'string',
      required: true
    },
    subnet: {
      type: 'string',
      required: true
    },
    subnet_size: {
      type: 'number',
      required: true
    },
    port: {
      type: 'string',
      required: false
    },
    notes: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Delete a rule in a firewall group.<br>
 * {@link https://www.vultr.com/api/#firewall_rule_delete}
 * @function deleteRule
 * @memberof firewall
 * @instance
 * @param {object} parameters
 * @param {string} parameters.FIREWALLGROUPID - Target firewall group.
 * @param {number} parameters.rulenumber - Rule number to delete.
 */
exports.deleteRule = {
  url: '/firewall/rule_delete',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    },
    rulenumber: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Change the description on a firewall group.<br>
 * {@link https://www.vultr.com/api/#firewall_group_set_description}
 * @function setGroupDescription
 * @memberof firewall
 * @instance
 * @param {object} parameters
 * @param {string} parameters.FIREWALLGROUPID - Target firewall group.
 * @param {string} parameters.description - Rule number to delete.
 */
exports.setGroupDescription = {
  url: '/firewall/group_set_description',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    }
  }
}

/**
 * List all firewall groups on the current account.<br>
 * {@link https://www.vultr.com/api/#firewall_group_list}
 * @function listGroup
 * @memberof firewall
 * @instance
 * @param {object} parameters
 * @param {string} [parameters.FIREWALLGROUPID] - Filter result set to only contain this firewall group.
 */
exports.listGroup = {
  url: '/firewall/group_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: false
    }
  }
}
