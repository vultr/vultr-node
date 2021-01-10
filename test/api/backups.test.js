const util = require('../util')

const mockParameters = {
  listBackups: {
    instance_id: '1',
    per_page: 100,
    cursor: ''
  },
  getBackup: {
    'backup-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  }
}

const mockResponses = {
  listBackups: {
    backups: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        date_created: '2020-10-10T01:56:20+00:00',
        description: 'auto-backup',
        size: 10000000,
        status: 'complete'
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
  getBackup: {
    backup: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      description: '',
      size: 10000000,
      status: 'complete'
    }
  }
}

util.createTestSuite('backups', mockParameters, mockResponses)
