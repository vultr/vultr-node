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
  },
  listGroup: {
    '1234abcd': {
      FIREWALLGROUPID: '1234abcd',
      description: 'my http firewall',
      date_created: '2017-02-14 17:48:40',
      date_modified: '2017-02-14 17:48:40',
      instance_count: 2,
      rule_count: 2,
      max_rule_count: 50
    }
  },
  createGroup: {
    FIREWALLGROUPID: '1234abcd'
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
    description: 'group1'
  },
  createRule: {
    FIREWALLGROUPID: '1234abcd',
    direction: 'in',
    ip_type: 'v4',
    protocol: 'tcp',
    subnet: '10.234.22.0',
    subnet_size: 24
  },
  deleteRule: {
    FIREWALLGROUPID: '1234abcd',
    rulenumber: 2
  },
  setGroupDescription: {
    FIREWALLGROUPID: '1234abcd',
    description: 'group2'
  }
}

util.createTestSuite('firewall', mock, mockParameters)
