exports.delete = {
  url: '/iso/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ISOID: {
      type: 'number',
      required: true
    }
  }
}

exports.list = {
  url: '/iso/list',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.listPublic = {
  url: '/iso/list_public',
  requestType: 'GET',
  apiKeyRequired: true
}
