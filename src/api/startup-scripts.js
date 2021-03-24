/**
 * Methods for interacting with the startup scripts endpoints<br>
 * {@link https://www.vultr.com/api/#tag/startup}
 * @namespace startupScripts
 */

/**
 * Get information for the specified startup script.<br>
 * {@link https://www.vultr.com/api/#operation/get-startup-script}
 * @function getStartupScript
 * @memberof startupScripts
 * @instance
 */
exports.getStartupScript = {
  url: '/startup-scripts/{startup-id}',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'startup-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete a specified startup script.<br>
 * {@link https://www.vultr.com/api/#operation/delete-startup-script}
 * @function deleteStartupScript
 * @memberof startupScripts
 * @instance
 */
exports.deleteStartupScript = {
  url: '/startup-scripts/{startup-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'startup-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for the specified startup script.<br>
 * {@link https://www.vultr.com/api/#operation/update-startup-script}
 * @function updateStartupScript
 * @memberof startupScripts
 * @instance
 */
exports.updateStartupScript = {
  url: '/startup-scripts/{startup-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'startup-id': {
      type: 'string',
      path: true,
      required: true
    },
    name: { type: 'string' },
    script: { type: 'string' },
    type: { type: 'string' }
  }
}

/**
 * List all startup scripts on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-startup-scripts}
 * @function listStartupScripts
 * @memberof startupScripts
 * @instance
 */
exports.listStartupScripts = {
  url: '/startup-scripts',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new startup script.<br>
 * {@link https://www.vultr.com/api/#operation/create-startup-script}
 * @function createStartupScript
 * @memberof startupScripts
 * @instance
 */
exports.createStartupScript = {
  url: '/startup-scripts',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    name: {
      type: 'string',
      required: true
    },
    script: {
      type: 'string',
      required: true
    },
    type: { type: 'string' }
  }
}
