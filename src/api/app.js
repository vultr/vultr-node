/**
 * Methods for interacting with the Application endpoints<br>
 * {@link https://www.vultr.com/api/#app}
 * @namespace app
 */

/**
 * Retrieve a list of available applications. These refer to applications that can be launched when creating a Vultr VPS.<br>
 * {@link https://www.vultr.com/api/#app_app_list}
 * @function list
 * @memberof app
 * @instance
 */
exports.list = {
  url: '/app/list',
  requestType: 'GET',
  apiKeyRequired: false
}
