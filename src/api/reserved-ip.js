exports.list = {
  url: '/reservedip/list',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.delete = {
  url: '/reservedip/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ip_address: {
      type: 'string',
      required: true
    }
  }
}

exports.detach = {
  url: '/reservedip/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    ip_address: {
      type: 'string',
      required: true
    },
    detach_SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.convert = {
  url: '/reservedip/convert',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    ip_address: {
      type: 'string',
      required: true
    },
    label: {
      type: 'string',
      required: false
    }
  }
}

exports.create = {
  url: '/reservedip/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    ip_type: {
      type: 'string',
      required: true
    },
    label: {
      type: 'string',
      required: false
    }
  }
}
