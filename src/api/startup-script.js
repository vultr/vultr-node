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
