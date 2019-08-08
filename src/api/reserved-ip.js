exports.list = {
  url: '/reservedip/list',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.delete = {
  url: '/reservedip/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ip_address: {
      type: 'string',
      required: true
    }
  }
}
