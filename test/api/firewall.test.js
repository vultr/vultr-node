const util = require('../util')

const mock = {
  listRules: {
    '1': {
      rulenumber: 1,
      action: 'accept',
      protocol: 'icmp',
      port: '',
      subnet: '',
      subnet_size: 0,
      notes: ''
    },
    '2': {
      rulenumber: 2,
      action: 'accept',
      protocol: 'tcp',
      port: '80',
      subnet: '10.234.22.0',
      subnet_size: 24,
      notes: 'example'
    }
  },
  createRule: {
    rulenumber: 2
  }
}

const mockParameters = {
  listRules: {
    FIREWALLGROUPID: '1234abcd',
    direction: 'in',
    ip_type: 'v4'
  },
  deleteGroup: {
    FIREWALLGROUPID: '1234abcd'
  },
  createGroup: {
    FIREWALLGROUPID: '1234abcd'
  },
  createRule: {
    FIREWALLGROUPID: '1234abcd',
    direction: 'in',
    ip_type: 'v4',
    protocol: 'tcp',
    subnet: '10.234.22.0',
    subnet_size: 24
  }
}

util.createTestSuite('firewall', mock, mockParameters)
