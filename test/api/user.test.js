const util = require('../util')

const mock = {
  create: {
    USERID: '564a1a88947b4',
    api_key: 'AAAAAAAA'
  },
  list: [
    {
      USERID: '564a1a7794d83',
      name: 'example user 1',
      email: 'example@vultr.com',
      api_enabled: 'yes',
      acls: ['manage_users', 'subscriptions', 'billing', 'provisioning']
    },
    {
      USERID: '564a1a88947b4',
      name: 'example user 2',
      email: 'example@vultr.com',
      api_enabled: 'no',
      acls: ['support', 'dns']
    }
  ]
}

const mockParameters = {
  create: {
    email: 'test@test.com',
    name: 'test testerson',
    password: 'password',
    acls: ['manage_users', 'subscription', 'provisioning']
  },
  delete: {
    USERID: '564a1a88947b4'
  },
  update: {
    USERID: '564a1a88947b4'
  }
}

util.createTestSuite('user', mock, mockParameters)
