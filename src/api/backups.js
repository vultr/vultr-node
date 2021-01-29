/**
 * Methods for interacting with the backup endpoints<br>
 * {@link https://www.vultr.com/api/#tag/backup}
 * @namespace backup
 */

/**
 * Get information about backups in your account.<br>
 * {@link https://www.vultr.com/api/#operation/list-backups}
 * @function list
 * @memberof backup
 * @instance
 */
exports.listBackups = {
  url: '/backups',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    instance_id: { type: 'string' },
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}

/**
 * Get information for the specified backup.<br>
 * {@link https://www.vultr.com/api/#operation/get-backup}
 * @function get
 * @memberof backup
 * @instance
 */
exports.getBackup = {
  url: '/backups/{backup-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'backup-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}
