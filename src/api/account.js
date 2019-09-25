/**
 * Methods for interacting with the Account endpoints<br>
 * {@link https://www.vultr.com/api/#account}
 * @namespace account
 */

/**
 * Retrieve information about the current account.<br>
 * {@link https://www.vultr.com/api/#account_info}
 * @function getInfo
 * @memberof account
 * @instance
 */
exports.getInfo = {
  url: '/account/info',
  requestType: 'GET',
  apiKeyRequired: true
}
