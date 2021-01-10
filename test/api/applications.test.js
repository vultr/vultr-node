const util = require('../util')

const mockParameters = {
  listApplications: {
    per_page: 100,
    cursor: ''
  }
}

const mockResponses = {
  listApplications: {
    applications: [
      {
        id: 1,
        name: 'LEMP',
        short_name: 'lemp',
        deploy_name: 'LEMP on CentOS 6 x64'
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

util.createTestSuite('applications', mockParameters, mockResponses)
