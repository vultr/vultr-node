/**
 * Methods for interacting with the ISO Image endpoints<br>
 * {@link https://www.vultr.com/api/#iso}
 * @namespace iso
 */

/**
 * Create a new ISO image on the current account. The ISO image will be downloaded from a given URL.<br>
 * {@link https://www.vultr.com/api/#iso_create_from_url}
 * @function create
 * @memberof iso
 * @instance
 * @param {object} parameters
 * @param {string} parameters.url - Remote URL from where the ISO will be downloaded.
 */
exports.create = {
  url: '/iso/create_from_url',
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
 * Delete an ISO image. There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#iso_destroy}
 * @function delete
 * @memberof iso
 * @instance
 * @param {object} parameters
 * @param {number} parameters.ISOID - Unique identifier for this ISO image.
 */
exports.delete = {
  url: '/iso/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ISOID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * List all ISOs currently available on this account.<br>
 * {@link https://www.vultr.com/api/#iso_iso_list}
 * @function list
 * @memberof iso
 * @instance
 */
exports.list = {
  url: '/iso/list',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * List public ISOs offered in the Vultr ISO library.<br>
 * {@link https://www.vultr.com/api/#iso_list_public}
 * @function listPublic
 * @memberof iso
 * @instance
 */
exports.listPublic = {
  url: '/iso/list_public',
  requestType: 'GET',
  apiKeyRequired: true
}
