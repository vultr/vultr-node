/**
 * Methods for interacting with the vpc endpoints<br>
 * {@link https://www.vultr.com/api/#tag/VPCs}
 * @namespace vpcs
 */

import { ApiEndpoint } from '../types'

/**
 * Get information about the specified vpc.<br>
 * {@link https://www.vultr.com/api/#operation/get-vpc}
 * @function getVpc
 * @memberof vpcs
 * @instance
 */
export const getVpc: ApiEndpoint = {
  url: '/vpcs/{vpc-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete a specified vpc.<br>
 * {@link https://www.vultr.com/api/#operation/delete-vpc}
 * @function deleteVpc
 * @memberof vpcs
 * @instance
 */
export const deleteVpc: ApiEndpoint = {
  url: '/vpcs/{vpc-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information on the specified vpc.<br>
 * {@link https://www.vultr.com/api/#operation/update-vpc}
 * @function updateVpc
 * @memberof vpcs
 * @instance
 */
export const updateVpc: ApiEndpoint = {
  url: '/vpcs/{vpc-id}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'vpc-id': {
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
 * List all vpcs on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-vpcs}
 * @function listVpcs
 * @memberof vpcs
 * @instance
 */
export const listVpcs: ApiEndpoint = {
  url: '/vpcs',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new vpc in a specified region.<br>
 * {@link https://www.vultr.com/api/#operation/create-vpc}
 * @function createVpc
 * @memberof vpcs
 * @instance
 */
export const createVpc: ApiEndpoint = {
  url: '/vpcs',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    region: {
      type: 'string',
      required: true
    },
    description: { type: 'string' },
    v4_subnet: { type: 'string' },
    v4_subnet_mask: { type: 'number' }
  }
}
