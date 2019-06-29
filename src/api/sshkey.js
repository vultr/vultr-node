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
      type: 'string',
      optional: true
    },
    ssh_key: {
      type: 'string',
      optional: false
    }
  }
}

exports.delete = {
  url: '/sshkey/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SSHKEYID: {
      type: 'string',
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
      type: 'string',
      optional: false
    },
    name: {
      type: 'string',
      optional: true
    },
    ssh_key: {
      type: 'string',
      optional: true
    }
  }
}
