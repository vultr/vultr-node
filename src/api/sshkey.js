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
      required: false
    },
    ssh_key: {
      type: 'string',
      required: true
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
      required: true
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
      required: true
    },
    name: {
      type: 'string',
      required: false
    },
    ssh_key: {
      type: 'string',
      required: false
    }
  }
}
