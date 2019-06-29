exports.create = {
  url: '/user/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    email: {
      type: String,
      optional: false
    },
    name: {
      type: String,
      optional: false
    },
    password: {
      type: String,
      optional: false
    },
    api_enabled: {
      type: String,
      optional: true
    },
    acls: {
      type: Array,
      optional: false
    }
  }
}
