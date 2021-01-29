/**
 * Methods for interacting with the application endpoints<br>
 * {@link https://www.vultr.com/api/#tag/application}
 * @namespace applications
 */

/**
 * Get a list of all One-Click applications.<br>
 * {@link https://www.vultr.com/api/#operation/list-applications}
 * @function list
 * @memberof applications
 * @instance
 */
exports.listApplications = {
  url: '/applications',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}
