/**
 * Methods for interacting with the firewall endpoints<br>
 * {@link https://www.vultr.com/api/#tag/firewall}
 * @namespace firewall
 */

/**
 * Get a list of all firewall groups.<br>
 * {@link https://www.vultr.com/api/#operation/list-firewall-groups}
 * @function listGroups
 * @memberof firewall
 * @instance
 */
exports.listGroups = {
  url: '/firewalls',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a firewall group.<br>
 * {@link https://www.vultr.com/api/#operation/create-firewall-group}
 * @function createGroup
 * @memberof firewall
 * @instance
 */
exports.createGroup = {
  url: '/firewalls',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    description: { type: 'string' }
  }
}

/**
 * Get info about the specified firewall group.<br>
 * {@link https://www.vultr.com/api/#operation/get-firewall-group}
 * @function getGroup
 * @memberof firewall
 * @instance
 */
exports.getGroup = {
  url: '/firewalls/{firewall-group-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  'firewall-group-id': {
    type: 'string',
    path: true,
    required: true
  }
}

/**
 * Update the specified firewall group with a new description.<br>
 * {@link https://www.vultr.com/api/#operation/update-firewall-group}
 * @function updateGroup
 * @memberof firewall
 * @instance
 */
exports.updateGroup = {
  url: '/firewalls/{firewall-group-id}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'firewall-group-id': {
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
 * Delete the specified firewall group.<br>
 * {@link https://www.vultr.com/api/#operation/delete-firewall-group}
 * @function deleteGroup
 * @memberof firewall
 * @instance
 */
exports.deleteGroup = {
  url: '/firewalls/{firewall-group-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'firewall-group-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all rules for the specified firewall group.<br>
 * {@link https://www.vultr.com/api/#operation/list-firewall-group-rules}
 * @function listRules
 * @memberof firewall
 * @instance
 */
exports.listRules = {
  url: '/firewalls/{firewall-group-id}/rules',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'firewall-group-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create new rules in the specified firewall group.<br>
 * {@link https://www.vultr.com/api/#operation/post-firewalls-firewall-group-id-rules}
 * @function createRules
 * @memberof firewall
 * @instance
 */
exports.createRules = {
  url: '/firewalls/{firewall-group-id}/rules',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'firewall-group-id': {
      type: 'string',
      path: true,
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
      type: 'string',
      required: true
    },
    port: { type: 'string' },
    source: { type: 'string' },
    notes: { type: 'string' }
  }
}

/**
 * Delete the specified rule in the specified firewall group.<br>
 * {@link https://www.vultr.com/api/#operation/delete-firewall-group-rule}
 * @function deleteRule
 * @memberof firewall
 * @instance
 */
exports.deleteRule = {
  url: '/firewalls/{firewall-group-id}/rules/{firewall-rule-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'firewall-group-id': {
      type: 'string',
      path: true,
      required: true
    },
    'firewall-rule-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Get the specified rule from the specified firewall group.<br>
 * {@link https://www.vultr.com/api/#operation/get-firewall-group-rule}
 * @function getRule
 * @memberof firewall
 * @instance
 */
exports.getRule = {
  url: '/firewalls/{firewall-group-id}/rules/{firewall-rule-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'firewall-group-id': {
      type: 'string',
      path: true,
      required: true
    },
    'firewall-rule-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}
