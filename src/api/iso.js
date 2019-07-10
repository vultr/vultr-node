exports.create = {
  url: '/iso/create_from_url',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    url: {
      type: 'string',
      required: true
    }
  }
}

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
