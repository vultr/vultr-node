const util = require('../util')

const mockParameters = {
  createDomain: {
    domain: 'vultr.com'
  },
  getDomain: {
    'dns-domain': 'vultr.com'
  },
  deleteDomain: {
    'dns-domain': 'vultr.com'
  },
  updateDomain: {
    'dns-domain': 'vultr.com',
    dns_sec: 'enabled'
  },
  getSoaInfo: {
    'dns-domain': 'vultr.com'
  },
  updateSoaInfo: {
    'dns-domain': 'vultr.com'
  },
  getDnsSecInfo: {
    'dns-domain': 'vultr.com'
  },
  createRecord: {
    'dns-domain': 'vultr.com',
    name: 'www',
    type: 'A',
    data: '127.0.0.1'
  },
  listRecords: {
    'dns-domain': 'vultr.com'
  },
  getRecord: {
    'dns-domain': 'vultr.com',
    'record-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateRecord: {
    'dns-domain': 'vultr.com',
    'record-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteRecord: {
    'dns-domain': 'vultr.com',
    'record-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  }
}

const mockResponses = {
  listDomains: {
    domains: [
      {
        domain: 'vultr.com',
        date_created: '2020-10-10T01:56:20+00:00'
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
  createDomain: {
    domain: {
      domain: 'vultr.com',
      date_created: '2020-10-10T01:56:20+00:00'
    }
  },
  getDomain: {
    domain: {
      domain: 'vultr.com',
      date_created: '2020-10-10T01:56:20+00:00',
      dns_sec: 'enabled'
    }
  },
  updateDomain: {
    dns_sec: 'enabled'
  },
  getSoaInfo: {
    dns_soa: {
      nsprimary: 'ns1.vultr.com',
      email: 'dnsadm@vultr.com'
    }
  },
  getDnsSecInfo: {
    dns_sec: [
      'example.com IN DNSKEY 257 3 13 kRrxANp7YTGqVbaWtMy8hhsK0jcG4ajjICZKMb4fKv79Vx/RSn76vNjzIT7/Uo0BXil01Fk8RRQc4nWZctGJBA==',
      'example.com IN DS 27933 13 1 2d9ac457e5c11a104e25d971d0a6254562bddde7',
      'example.com IN DS 27933 13 2 8858e7b0dfb881280ce2ca1e0eafcd93d5b53687c21da284d4f8799ba82208a9'
    ]
  },
  createRecord: {
    record: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      type: 'A',
      name: 'www',
      data: '127.0.0.1',
      priority: 0,
      ttl: 300
    }
  },
  listRecords: {
    records: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        type: 'A',
        name: '',
        data: '127.0.0.1',
        priority: 0,
        ttl: 300
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
  getRecord: {
    record: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      type: 'A',
      name: 'www',
      data: '127.0.0.1',
      priority: 0,
      ttl: 300
    }
  }
}

util.createTestSuite('dns', mockParameters, mockResponses)
