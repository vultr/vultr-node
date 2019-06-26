exports.attach = {
  url: '/block/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: Number,
      optional: false
    },
    attach_to_SUBID: {
      type: Number,
      optional: false
    },
    live: {
      type: String,
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
      type: Number,
      optional: false
    },
    size_gb: {
      type: Number,
      optional: false
    },
    label: {
      type: String,
      optional: true
    }
  }
}
