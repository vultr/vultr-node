exports.create = {
  url: '/snapshot/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    description: {
      type: 'string',
      required: false
    }
  }
}

exports.createFromUrl = {
  url: '/snapshot/create_from_url',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    url: {
      type: 'string',
      required: true
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
      required: false
    }
  }
}

exports.delete = {
  url: '/snapshot/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SNAPSHOTID: {
      type: 'string',
      required: true
    }
  }
}
