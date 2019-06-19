exports.list = {
  url: '/plans/list',
  requestType: 'GET',
  parameters: {
    type: {
      type: String,
      optional: true
    }
  }
}
