/**
 * Methods for interacting with the SSH key endpoints<br>
 * {@link https://www.vultr.com/api/#sshkey}
 * @namespace sshkey
 */

/**
 * List all the SSH keys on the current account.<br>
 * {@link https://www.vultr.com/api/#sshkey_sshkey_list}
 * @function list
 * @memberof sshkey
 * @instance
 */
exports.list = {
  url: '/sshkey/list',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * Create a new SSH Key.<br>
 * {@link https://www.vultr.com/api/#sshkey_create}
 * @function create
 * @memberof sshkey
 * @instance
 * @param {object} parameters
 * @param {string} [parameters.name] - Name of the SSH key.
 * @param {string} parameters.ssh_key - SSH public key (in authorized_keys format).
 */
exports.create = {
  url: '/sshkey/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    name: {
      type: 'string',
      required: false
    },
    ssh_key: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Remove a SSH key. Note that this will not remove the key from any machines that already have it.<br>
 * {@link https://www.vultr.com/api/#sshkey_destroy}
 * @function delete
 * @memberof sshkey
 * @instance
 * @param {object} parameters
 * @param {string} parameters.SSHKEYID - Unique identifier for this SSH key.
 */
exports.delete = {
  url: '/sshkey/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SSHKEYID: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Update an existing SSH Key. Note that this will only update newly installed machines. The key will not be updated on any existing machines.<br>
 * {@link https://www.vultr.com/api/#sshkey_update}
 * @function update
 * @memberof sshkey
 * @instance
 * @param {object} parameters
 * @param {string} parameters.SSHKEYID - Unique identifier for this SSH key.
 * @param {string} [parameters.name] - New name for the SSH key.
 * @param {string} [parameters.ssh_key] - New SSH key contents.
 */
exports.update = {
  url: '/sshkey/update',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SSHKEYID: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: false
    },
    ssh_key: {
      type: 'string',
      required: false
    }
  }
}
