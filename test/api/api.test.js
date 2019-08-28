const util = require('../util')

const mock = {
  getInfo: {
    acls: ['subscriptions', 'billing', 'support', 'provisioning'],
    email: 'example@vultr.com',
    name: 'Example Account'
  }
}

util.createTestSuite('api', mock)
