exports.list = {
  url: '/backup/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    subId: {
      type: Number,
      optional: true
    },
    backupId: {
      type: String,
      optional: true
    }
  }
}
