const util = require('../util')

const mock = {
  create: {
    NETWORKID: 'net59a0526477dd3'
  },
  list: {
    net539626f0798d7: {
      DCID: '1',
      NETWORKID: 'net539626f0798d7',
      date_created: '2017-08-25 12:23:45',
      description: 'test1',
      v4_subnet: '10.99.0.0',
      v4_subnet_mask: 24
    },
    net53962b0f2341f: {
      DCID: '1',
      NETWORKID: 'net53962b0f2341f',
      date_created: '2014-06-09 17:45:51',
      description: 'vultr',
      v4_subnet: '0.0.0.0',
      v4_subnet_mask: 0
    }
  }
}

const mockParameters = {
  create: {
    DCID: 1,
    description: 'my network',
    v4_subnet: '10.0.0.0',
    v4_subnet_mask: 24
  },
  delete: {
    NETWORKID: 'net539626f0798d7'
  }
}

util.createTestSuite('network', mock, mockParameters)
