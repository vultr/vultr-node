/**
 * Methods for interacting with the API key endpoints<br>
 * {@link https://www.vultr.com/api/#auth}
 * @namespace api
 */

/**
 * Retrieve information about the current API key.<br>
 * {@link https://www.vultr.com/api/#auth_info}
 * @function getInfo
 * @memberof api
 * @instance
 */
exports.getInfo = {
  url: '/auth/info',
  requestType: 'GET',
  apiKeyRequired: true
}
