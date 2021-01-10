const util = require('../util')

const mockResponses = {
  listImages: {
    os: [
      {
        id: 127,
        name: 'CentOS 6 x64',
        arch: 'x64',
        family: 'centos'
      }
    ],
    meta: {
      total: 1,
      links: {
        next: '',
        prev: ''
      }
    }
  }
}

util.createTestSuite('operating-systems', null, mockResponses)
