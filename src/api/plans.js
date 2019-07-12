exports.list = {
  url: '/plans/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    type: {
      type: 'string',
      required: false
    }
  }
}

exports.listBareMetal = {
  url: '/plans/list_baremetal',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.listVc2 = {
  url: '/plans/list_vc2',
  requestType: 'GET',
  apiKeyRequired: true
}
