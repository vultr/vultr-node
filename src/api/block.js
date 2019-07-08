exports.attach = {
  url: '/block/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    attach_to_SUBID: {
      type: 'number',
      required: true
    },
    live: {
      type: 'string',
      required: false
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
      required: true
    },
    size_gb: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: false
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
      required: true
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
      required: true
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
      required: true
    },
    label: {
      type: 'string',
      required: true
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
      required: false
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
      required: true
    },
    size_gb: {
      type: 'number',
      required: true
    }
  }
}
