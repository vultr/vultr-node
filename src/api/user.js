exports.create = {
  url: '/user/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    email: {
      type: 'string',
      optional: false
    },
    name: {
      type: 'string',
      optional: false
    },
    password: {
      type: 'string',
      optional: false
    },
    api_enabled: {
      type: 'string',
      optional: true
    },
    acls: {
      type: 'array',
      optional: false
    }
  }
}

exports.delete = {
  url: '/user/delete',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    USERID: {
      type: 'string',
      optional: false
    }
  }
}
