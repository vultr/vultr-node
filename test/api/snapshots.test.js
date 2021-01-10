const util = require('../util')

const mockParameters = {
  deleteSnapshot: {
    'snapshot-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getSnapshot: {
    'snapshot-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateSnapshot: {
    'snapshot-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    description: 'my snapshot'
  },
  createSnapshot: {
    instance_id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createSnapshotFromUrl: {
    url: 'http://example.com/path/to/disk_image.raw'
  }
}

const mockResponses = {
  getSnapshot: {
    snapshot: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      description: 'Test snapshot',
      size: 42949672960,
      status: 'complete',
      os_id: 127,
      app_id: 0
    }
  },
  listSnapshots: {
    snapshots: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        date_created: '2020-10-10T01:56:20+00:00',
        description: 'Test snapshot',
        size: 42949672960,
        status: 'complete',
        os_id: 127,
        app_id: 0
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
  createSnapshot: {
    snapshot: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      description: 'my description',
      size: 42949672960,
      status: 'complete',
      os_id: 127,
      app_id: 0
    }
  },
  createSnapshotFromUrl: {
    snapshot: {
      id: 'abcd12345',
      date_created: '2020-10-10T01:56:20+00:00',
      description: 'disk_image.raw',
      size: 0,
      status: 'pending',
      os_id: 159,
      app_id: 0
    }
  }
}

util.createTestSuite('snapshots', mockParameters, mockResponses)
