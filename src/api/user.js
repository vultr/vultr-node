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

exports.list = {
  url: '/user/list',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.update = {
  url: '/user/update',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    USERID: {
      type: 'string',
      optional: false
    },
    email: {
      type: 'string',
      optional: true
    },
    name: {
      type: 'string',
      optional: true
    },
    password: {
      type: 'string',
      optional: true
    },
    api_enabled: {
      type: 'string',
      optional: true
    },
    acls: {
      type: 'array',
      optional: true
    }
  }
}
