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

exports.listBareMetal = {
  url: '/plans/list_baremetal',
  requestType: 'GET',
  apiKeyRequired: true
}
