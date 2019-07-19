exports.list = {
  url: '/plans/list',
  requestType: 'GET',
  apiKeyRequired: false,
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
  apiKeyRequired: false
}

exports.listVc2 = {
  url: '/plans/list_vc2',
  requestType: 'GET',
  apiKeyRequired: false
}
