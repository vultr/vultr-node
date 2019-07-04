exports.create = {
  url: '/snapshot/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      optional: false
    },
    description: {
      type: 'string',
      optional: true
    }
  }
}
