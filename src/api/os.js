/**
 * Methods for interacting with the Operating System endpoints<br>
 * {@link https://www.vultr.com/api/#os}
 * @namespace os
 */

/**
 * Retrieve a list of available operating systems. If the "windows" flag is true, a Windows license will be included with the instance, which will increase the cost.<br>
 * {@link https://www.vultr.com/api/#os_os_list}
 * @function list
 * @memberof os
 * @instance
 */
exports.list = {
  url: '/os/list',
  requestType: 'GET',
  apiKeyRequired: false
}
