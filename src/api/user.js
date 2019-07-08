exports.create = {
  url: '/user/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    email: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    api_enabled: {
      type: 'string',
      required: false
    },
    acls: {
      type: 'array',
      required: true
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
      required: true
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
      required: true
    },
    email: {
      type: 'string',
      required: false
    },
    name: {
      type: 'string',
      required: false
    },
    password: {
      type: 'string',
      required: false
    },
    api_enabled: {
      type: 'string',
      required: false
    },
    acls: {
      type: 'array',
      required: false
    }
  }
}
