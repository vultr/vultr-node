exports.list = {
  url: '/plans/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    type: {
      type: 'string',
      optional: true
    }
  }
}
