const util = require('../util')

const mockParameters = {
  getGroup: {
    'firewall-group-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateGroup: {
    'firewall-group-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    description: 'my description'
  },
  deleteGroup: {
    'firewall-group-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  listRules: {
    'firewall-group-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createRules: {
    'firewall-group-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    ip_type: 'v4',
    protocol: 'TCP',
    subnet: '127.0.0.1',
    subnet_size: '32'
  },
  deleteRule: {
    'firewall-group-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    'firewall-rule-id': '1'
  },
  getRule: {
    'firewall-group-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    'firewall-rule-id': '1'
  }
}

const mockResponses = {
  listGroups: {
    firewall_groups: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        description: 'my firewall group',
        date_created: '2020-10-10T01:56:20+00:00',
        date_modified: '2020-10-10T01:59:20+00:00',
        instance_count: 0,
        rule_count: 0,
        max_rule_count: 50
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
  createGroup: {
    firewall_group: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      description: 'my firewall group',
      date_created: '2020-10-10T01:56:20+00:00',
      date_modified: '2020-10-10T01:56:20+00:00',
      instance_count: 0,
      rule_count: 0,
      max_rule_count: 50
    }
  },
  getGroup: {
    firewall_group: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      description: 'my firewall group',
      date_created: '2020-10-10T01:56:20+00:00',
      date_modified: '2020-10-10T01:56:20+00:00',
      instance_count: 0,
      rule_count: 0,
      max_rule_count: 50
    }
  },
  listRules: {
    firewall_rules: [
      {
        id: 1,
        ip_type: 'v4',
        action: 'accept',
        protocol: 'tcp',
        port: '80',
        subnet: '10.234.22.0',
        subnet_size: 24,
        source: '',
        notes: 'example'
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
  createRules: {
    firewall_rule: {
      id: 1,
      ip_type: 'v4',
      action: 'accept',
      protocol: 'tcp',
      port: '80',
      subnet: '10.234.22.0',
      subnet_size: 24,
      source: '',
      notes: 'example'
    }
  },
  getRule: {
    firewall_rule: {
      id: 1,
      ip_type: 'v4',
      action: 'accept',
      protocol: 'tcp',
      port: '80',
      subnet: '10.234.22.0',
      subnet_size: 24,
      source: '',
      notes: 'example'
    }
  }
}

util.createTestSuite('firewall', mockParameters, mockResponses)
