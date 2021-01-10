const util = require('../util')

const mockParameters = {
  getStartupScript: {
    'startup-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteStartupScript: {
    'startup-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateStartupScript: {
    'startup-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createStartupScript: {
    name: 'my start up script',
    script: 'aGVsbG8gd29ybGQ='
  }
}

const mockResponses = {
  getStartupScript: {
    startup_script: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      date_modified: '2020-10-10T01:59:20+00:00',
      name: 'worker-node',
      type: 'pxe',
      script: 'aGVsbG8gd29ybGQ='
    }
  },
  listStartupScripts: {
    startup_scripts: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        date_created: '2020-10-10T01:56:20+00:00',
        date_modified: '2020-10-10T01:59:20+00:00',
        name: 'startup script',
        type: 'pxe'
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
  createStartupScript: {
    startup_script: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      date_modified: '2020-10-10T01:56:20+00:00',
      name: 'worker-node',
      type: 'pxe',
      script: 'aGVsbG8gd29ybGQ='
    }
  }
}

util.createTestSuite('startup-scripts', mockParameters, mockResponses)
