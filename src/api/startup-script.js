/**
 * Methods for interacting with the Startup Script endpoints<br>
 * {@link https://www.vultr.com/api/#startupscript}
 * @namespace startupScript
 */

/**
 * List all startup scripts on the current account. Scripts of type "boot" are executed by the server's operating system on the first boot. Scripts of type "pxe" are executed by iPXE when the server itself starts up.<br>
 * {@link https://www.vultr.com/api/#startupscript_startupscript_list}
 * @function list
 * @memberof startupScript
 * @instance
 */
exports.list = {
  url: '/startupscript/list',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * Remove a startup script.<br>
 * {@link https://www.vultr.com/api/#startupscript_destroy}
 * @function delete
 * @memberof startupScript
 * @instance
 * @param {object} parameters
 * @param {string} parameters.SCRIPTID - Unique identifier for this startup script.
 */
exports.delete = {
  url: '/startupscript/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SCRIPTID: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Create a startup script.<br>
 * {@link https://www.vultr.com/api/#startupscript_create}
 * @function create
 * @memberof startupScript
 * @instance
 * @param {object} parameters
 * @param {string} parameters.name - Name of the newly created startup script.
 * @param {string} parameters.script - Startup script contents.
 * @param {string} [parameters.type='boot'] - 'boot' or 'pxe'. Type of startup script.
 */
exports.create = {
  url: '/startupscript/create',
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
    type: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Update a startup script.<br>
 * {@link https://www.vultr.com/api/#startupscript_update}
 * @function update
 * @memberof startupScript
 * @instance
 * @param {object} parameters
 * @param {string} parameters.SCRIPTID - ID of script to update.
 * @param {string} [parameters.name] - New name for the startup script.
 * @param {string} [parameters.script] - New startup script contents.
 */
exports.update = {
  url: '/startupscript/update',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SCRIPTID: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: false
    },
    script: {
      type: 'string',
      required: false
    }
  }
}
