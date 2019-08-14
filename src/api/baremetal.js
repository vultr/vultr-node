exports.list = {
  url: '/baremetal/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: false
    },
    tag: {
      type: 'string',
      required: false
    },
    label: {
      type: 'string',
      required: false
    },
    main_ip: {
      type: 'string',
      required: false
    }
  }
}

exports.delete = {
  url: '/baremetal/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.changeApp = {
  url: '/baremetal/app_change',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    APPID: {
      type: 'number',
      required: true
    }
  }
}

exports.setTag = {
  url: '/baremetal/tag_set',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    tag: {
      type: 'string',
      required: true
    }
  }
}
