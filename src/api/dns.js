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

exports.deleteDomain = {
  url: '/dns/delete_domain',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    }
  }
}

exports.list = {
  url: '/dns/list',
  requestType: 'GET',
  apiKeyRequired: true
}
