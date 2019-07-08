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
