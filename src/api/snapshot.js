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

exports.list = {
  url: '/snapshot/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SNAPSHOTID: {
      type: 'string',
      optional: true
    }
  }
}
