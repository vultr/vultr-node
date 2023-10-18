/**
 * Methods for interacting with the account endpoints<br>
 * {@link https://www.vultr.com/api/#tag/account}
 * @namespace account
 */

import { ApiEndpoint } from '../types'

/**
 * Get your Vultr account, permissions, and billing information.<br>
 * {@link https://www.vultr.com/api/#operation/get-account}
 * @function getAccountInfo
 * @memberof account
 * @instance
 */
export const getAccountInfo: ApiEndpoint = {
  url: '/account',
  requestType: 'GET',
  apiKeyRequired: true
}
