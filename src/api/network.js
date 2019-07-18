exports.list = {
  url: '/network/list',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.create = {
  url: '/network/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    description: {
      type: 'string',
      required: false
    },
    v4_subnet: {
      type: 'string',
      required: false
    },
    v4_subnet_mask: {
      type: 'number',
      required: false
    }
  }
}
