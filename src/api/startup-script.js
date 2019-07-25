exports.list = {
  url: '/startupscript/list',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.delete = {
  url: '/startupscript/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SCRIPTID: {
      type: 'string',
      required: true
    }
  }
}

exports.create = {
  url: '/startupscript/create',
  requestType: 'POST',
  apiKeyRequired: 'true',
  parameters: {
    name: {
      type: 'string',
      required: true
    },
    script: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: false
    }
  }
}

exports.update = {
  url: '/startupscript/update',
  requestType: 'POST',
  apiKeyRequired: 'true',
  parameters: {
    SCRIPTID: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: false
    },
    script: {
      type: 'string',
      required: false
    }
  }
}
