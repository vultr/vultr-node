exports.attach = {
  url: '/block/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      optional: false
    },
    attach_to_SUBID: {
      type: 'number',
      optional: false
    },
    live: {
      type: 'string',
      optional: true
    }
  }
}

exports.create = {
  url: '/block/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      optional: false
    },
    size_gb: {
      type: 'number',
      optional: false
    },
    label: {
      type: 'string',
      optional: true
    }
  }
}

exports.delete = {
  url: '/block/delete',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      optional: false
    }
  }
}

exports.detach = {
  url: '/block/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      optional: false
    }
  }
}

exports.setLabel = {
  url: '/block/label_set',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      optional: false
    },
    label: {
      type: 'string',
      optional: false
    }
  }
}

exports.list = {
  url: '/block/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      optional: true
    }
  }
}

exports.resize = {
  url: '/block/resize',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      optional: false
    },
    size_gb: {
      type: 'number',
      optional: false
    }
  }
}
