/**
 * Methods for interacting with the ISO endpoints<br>
 * {@link https://www.vultr.com/api/#tag/iso}
 * @namespace iso
 */

/**
 * List all ISOs in the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-isos}
 * @function listIsos
 * @memberof iso
 * @instance
 */
exports.listIsos = {
  url: '/iso',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new ISO in the account from a URL.<br>
 * {@link https://www.vultr.com/api/#operation/create-iso}
 * @function createIso
 * @memberof iso
 * @instance
 */
exports.createIso = {
  url: '/iso',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    url: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Get information about the specified ISO.<br>
 * {@link https://www.vultr.com/api/#operation/iso-get}
 * @function getIso
 * @memberof iso
 * @instance
 */
exports.getIso = {
  url: '/iso/{iso-id}',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'iso-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete the specified ISO from the account.<br>
 * {@link https://www.vultr.com/api/#operation/delete-iso}
 * @function deleteIso
 * @memberof iso
 * @instance
 */
exports.deleteIso = {
  url: '/iso/{iso-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'iso-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all Vultr public ISOs.<br>
 * {@link https://www.vultr.com/api/#operation/list-public-isos}
 * @function listPublicIsos
 * @memberof iso
 * @instance
 */
exports.listPublicIsos = {
  url: '/iso-public',
  requestType: 'GET'
}
