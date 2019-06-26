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
