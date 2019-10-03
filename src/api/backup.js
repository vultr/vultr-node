/**
 * Methods for interacting with the Backup endpoints<br>
 * {@link https://www.vultr.com/api/#backup}
 * @namespace backup
 */

/**
 * List all backups on the current account.<br>
 * {@link https://www.vultr.com/api/#backup_backup_list}
 * @function list
 * @memberof backup
 * @instance
 * @param {object} parameters
 * @param {number} [parameters.SUBID] - Filter result set to only contain backups of this subscription object.
 * @param {string} [parameters.BACKUPID] - Filter result set to only contain this backup.
 */
exports.list = {
  url: '/backup/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: false
    },
    BACKUPID: {
      type: 'string',
      required: false
    }
  }
}
