const util = require('../util')

const mockParameters = {
  getUser: {
    'user-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteUser: {
    'user-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateUser: {
    'user-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createUser: {
    email: 'api@vultr.com',
    name: 'Vultr Api',
    password: 'password'
  }
}

const mockResponses = {
  getUser: {
    user: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      email: 'api@vultr.com',
      api_enabled: true,
      acls: [
        'manage_users',
        'subscriptions_view',
        'subscriptions',
        'provisioning',
        'billing',
        'support',
        'abuse',
        'dns',
        'upgrade',
        'objstore',
        'loadbalancer'
      ]
    }
  },
  getUsers: {
    users: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        email: 'api@vultr.com',
        api_enabled: true,
        acls: [
          'manage_users',
          'subscriptions_view',
          'subscriptions',
          'provisioning',
          'billing',
          'support',
          'abuse',
          'dns',
          'upgrade',
          'objstore',
          'loadbalancer'
        ]
      }
    ],
    meta: {
      total: 1,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  createUser: {
    user: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      name: 'vultr api',
      email: 'api123@vultr.com',
      api_key: 'YRMPYNEIG5JO',
      api_enabled: true,
      acls: [
        'manage_users',
        'subscriptions_view',
        'subscriptions',
        'provisioning',
        'billing',
        'support',
        'abuse',
        'dns',
        'upgrade',
        'objstore',
        'loadbalancer'
      ]
    }
  }
}

util.createTestSuite('users', mockParameters, mockResponses)
