/**
 * Methods for interacting with the User Management endpoints<br>
 * {@link https://www.vultr.com/api/#user}
 * @namespace user
 */

/**
 * Create a new user.<br>
 * {@link https://www.vultr.com/api/#user_create}
 * @function create
 * @memberof user
 * @instance
 * @param {object} parameters
 * @param {string} parameters.email - Email address for this user.
 * @param {string} parameters.name - Name for this user.
 * @param {string} parameters.password - Password for this user.
 * @param {string} [parameters.api_enabled='yes'] - 'yes' or 'no'. If yes, this user's API key will work on api.vultr.com.
 * @param {array} parameters.acls - List of ACLs that this user should have.
 */
exports.create = {
  url: '/user/create',
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
    api_enabled: {
      type: 'string',
      required: false
    },
    acls: {
      type: 'array',
      required: true
    }
  }
}

/**
 * Delete a user.<br>
 * {@link https://www.vultr.com/api/#user_delete}
 * @function delete
 * @memberof user
 * @instance
 * @param {object} parameters
 * @param {string} parameters.USERID - ID of the user to delete.
 */
exports.delete = {
  url: '/user/delete',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    USERID: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Retrieve a list of any users associated with this account.<br>
 * {@link https://www.vultr.com/api/#user_user_list}
 * @function list
 * @memberof user
 * @instance
 */
exports.list = {
  url: '/user/list',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * Update the details for a user.<br>
 * {@link https://www.vultr.com/api/#user_update}
 * @function update
 * @memberof user
 * @instance
 * @param {object} parameters
 * @param {string} parameters.USERID - ID of the user to update.
 * @param {string} [parameters.email] - Email address for this user.
 * @param {string} [parameters.name] - Name for this user.
 * @param {string} [parameters.password] - Password for this user.
 * @param {string} [parameters.api_enabled] - 'yes' or 'no'. If yes, this user's API key will work on api.vultr.com.
 * @param {array} [parameters.acls] - List of ACLs that this user should have.
 */
exports.update = {
  url: '/user/update',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    USERID: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: false
    },
    name: {
      type: 'string',
      required: false
    },
    password: {
      type: 'string',
      required: false
    },
    api_enabled: {
      type: 'string',
      required: false
    },
    acls: {
      type: 'array',
      required: false
    }
  }
}
