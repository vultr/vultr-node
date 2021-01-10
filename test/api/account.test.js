const util = require('../util')

const mockResponses = {
  getAccountInfo: {
    account: {
      name: 'vultr-api',
      email: 'api@vultr.com',
      acls: [
        'manage_users',
        'subscriptions_view',
        'subscriptions',
        'billing',
        'support',
        'provisioning',
        'dns',
        'abuse',
        'upgrade',
        'firewall',
        'alerts',
        'objstore',
        'loadbalancer'
      ],
      balance: -100,
      pending_charges: 60,
      last_payment_date: '2020-10-10T01:56:20+00:00',
      last_payment_amount: -1
    }
  }
}

util.createTestSuite('account', null, mockResponses)
