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
        deploy_name: 'LEMP on CentOS 6 x64',
        type: 'one-click',
        vendor: 'vultr',
        image_id: ''
      },
      {
        id: 1028,
        name: 'OpenLiteSpeed WordPress',
        short_name: 'openlitespeedwordpress',
        deploy_name: 'OpenLiteSpeed WordPress on Ubuntu 20.04 x64',
        type: 'marketplace',
        vendor: 'LiteSpeed_Technologies',
        image_id: 'openlitespeed-wordpress'
      }
    ],
    meta: {
      total: 2,
      links: {
        next: '',
        prev: ''
      }
    }
  }
}

util.createTestSuite('applications', mockParameters, mockResponses)
