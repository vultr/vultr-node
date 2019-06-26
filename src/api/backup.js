exports.list = {
  url: '/backup/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: Number,
      optional: true
    },
    BACKUPID: {
      type: String,
      optional: true
    }
  }
}
