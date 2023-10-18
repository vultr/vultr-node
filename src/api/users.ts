/**
 * Methods for interacting with the users endpoints<br>
 * {@link https://www.vultr.com/api/#tag/users}
 * @namespace users
 */

import { ApiEndpoint } from '../types'

/**
 * Get information about the specified user.<br>
 * {@link https://www.vultr.com/api/#operation/get-user}
 * @function getUser
 * @memberof users
 * @instance
 */
export const getUser: ApiEndpoint = {
  url: '/users/{user-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'user-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete the specified user.<br>
 * {@link https://www.vultr.com/api/#operation/delete-user}
 * @function deleteUser
 * @memberof users
 * @instance
 */
export const deleteUser: ApiEndpoint = {
  url: '/users/{user-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'user-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for the specified user.<br>
 * {@link https://www.vultr.com/api/#operation/update-user}
 * @function updateUser
 * @memberof users
 * @instance
 */
export const updateUser: ApiEndpoint = {
  url: '/users/{user-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'user-id': {
      type: 'string',
      path: true,
      required: true
    },
    email: { type: 'string' },
    name: { type: 'string' },
    password: { type: 'string' },
    api_enabled: { type: 'boolean' },
    acls: { type: 'array' }
  }
}

/**
 * Get a list of all users on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-users}
 * @function getUsers
 * @memberof users
 * @instance
 */
export const getUsers: ApiEndpoint = {
  url: '/users',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new user on the account.<br>
 * {@link https://www.vultr.com/api/#operation/create-user}
 * @function createUser
 * @memberof users
 * @instance
 */
export const createUser: ApiEndpoint = {
  url: '/users',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    email: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    api_enabled: { type: 'boolean' },
    acls: { type: 'array' }
  }
}
