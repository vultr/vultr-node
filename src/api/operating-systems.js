/**
 * Methods for interacting with the operating system endpoints<br>
 * {@link https://www.vultr.com/api/#tag/os}
 * @namespace operatingSystems
 */

/**
 * Get a list of all OS images available to install from Vultr.<br>
 * {@link https://www.vultr.com/api/#operation/list-os}
 * @function listImages
 * @memberof operatingSystems
 * @instance
 */
exports.listImages = {
  url: '/os',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}
