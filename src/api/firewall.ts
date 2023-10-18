/**
 * Methods for interacting with the firewall endpoints<br>
 * {@link https://www.vultr.com/api/#tag/firewall}
 * @namespace firewall
 */

import { ApiEndpoint } from '../types'

/**
 * Get a list of all firewall groups.<br>
 * {@link https://www.vultr.com/api/#operation/list-firewall-groups}
 * @function listGroups
 * @memberof firewall
 * @instance
 */
export const listGroups: ApiEndpoint = {
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
export const createGroup: ApiEndpoint = {
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
export const getGroup: ApiEndpoint = {
  url: '/firewalls/{firewall-group-id}',
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
 * Update the specified firewall group with a new description.<br>
 * {@link https://www.vultr.com/api/#operation/update-firewall-group}
 * @function updateGroup
 * @memberof firewall
 * @instance
 */
export const updateGroup: ApiEndpoint = {
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
export const deleteGroup: ApiEndpoint = {
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
export const listRules: ApiEndpoint = {
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
export const createRules: ApiEndpoint = {
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
export const deleteRule: ApiEndpoint = {
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
export const getRule: ApiEndpoint = {
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
