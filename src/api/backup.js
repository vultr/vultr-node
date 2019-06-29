exports.list = {
  url: '/backup/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      optional: true
    },
    BACKUPID: {
      type: 'string',
      optional: true
    }
  }
}
