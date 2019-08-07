exports.list = {
  url: '/regions/list',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    availability: {
      type: 'string',
      required: false
    }
  }
}

exports.availability = {
  url: '/regions/availability',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    type: {
      type: 'string',
      required: false
    }
  }
}

exports.availabilityBareMetal = {
  url: '/regions/availability_baremetal',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    }
  }
}

exports.availabilityVc2 = {
  url: '/regions/availability_vc2',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    }
  }
}
