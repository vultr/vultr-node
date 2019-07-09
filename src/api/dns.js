exports.createDomain = {
  url: '/dns/create_domain',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    },
    serverip: {
      type: 'string',
      required: true
    }
  }
}
