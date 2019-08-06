const util = require('../util')

const mock = {
  info: {
    acls: ['subscriptions', 'billing', 'support', 'provisioning'],
    email: 'example@vultr.com',
    name: 'Example Account'
  }
}

util.createTestSuite('auth', mock)
