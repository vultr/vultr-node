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

exports.update = {
  url: '/sshkey/update',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SSHKEYID: {
      type: String,
      optional: false
    },
    name: {
      type: String,
      optional: true
    },
    ssh_key: {
      type: String,
      optional: true
    }
  }
}
