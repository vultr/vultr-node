exports.list = {
  url: '/sshkey/list',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.create = {
  url: '/sshkey/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    name: {
      type: String,
      optional: true
    },
    ssh_key: {
      type: String,
      optional: false
    }
  }
}
