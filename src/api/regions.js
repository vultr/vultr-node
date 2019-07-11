exports.list = {
  url: '/regions/list',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    availability: {
      type: 'string',
      required: false
    }
  }
}
