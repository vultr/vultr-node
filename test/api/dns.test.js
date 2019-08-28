const util = require('../util')

const mock = {
  list: {
    domain: 'example.com',
    date_created: '2014-12-11 16:20:59'
  },
  records: [
    {
      type: 'A',
      name: '',
      data: '127.0.0.1',
      priority: 0,
      RECORDID: 1265276,
      ttl: 300
    },
    {
      type: 'CNAME',
      name: '*',
      data: 'example.com',
      priority: 0,
      RECORDID: 1265277,
      ttl: 300
    }
  ],
  dnsSecInfo: [
    'example.com IN DNSKEY 257 3 13 kRrxANp7YTGqVbaWtMy8hhsK0jcG4ajjICZKMb4fKv79Vx/RSn76vNjzIT7/Uo0BXil01Fk8RRQc4nWZctGJBA==',
    'example.com IN DS 27933 13 1 2d9ac457e5c11a104e25d971d0a6254562bddde7',
    'example.com IN DS 27933 13 2 8858e7b0dfb881280ce2ca1e0eafcd93d5b53687c21da284d4f8799ba82208a9'
  ],
  getSOA: {
    nsprimary: 'ns1.vultr.com',
    email: 'dnsadm@vultr.com'
  }
}

const mockParameters = {
  createDomain: {
    domain: 'example.com',
    serverip: '10.0.0.0'
  },
  deleteDomain: {
    domain: 'example.com'
  },
  records: {
    domain: 'example.com'
  },
  deleteRecord: {
    domain: 'example.com',
    RECORDID: 1265277
  },
  createRecord: {
    domain: 'example.com',
    name: 'vultr',
    type: 'A',
    data: '192.0.2.1'
  },
  updateRecord: {
    domain: 'example.com',
    RECORDID: 126577
  },
  enableDNSSec: {
    domain: 'example.com',
    enable: 'yes'
  },
  dnsSecInfo: {
    domain: 'example.com'
  },
  getSOA: {
    domain: 'example.com'
  },
  updateSOA: {
    domain: 'example.com'
  }
}

util.createTestSuite('dns', mock, mockParameters)
