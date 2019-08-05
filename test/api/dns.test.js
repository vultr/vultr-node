const util = require('../util')

const mock = {
  list: {
    domain: 'example.com',
    date_created: '2014-12-11 16:20:59'
  }
}

const mockParameters = {
  createDomain: {
    domain: 'example.com',
    serverip: '10.0.0.0'
  },
  deleteDomain: {
    domain: 'example.com'
  }
}

util.createTestSuite('dns', mock, mockParameters)
