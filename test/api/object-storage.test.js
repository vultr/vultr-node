const util = require('../util')

const mockParameters = {
  createObjectStorage: {
    cluster_id: '2'
  },
  getObjectStorage: {
    'object-storage-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteObjectStorage: {
    'object-storage-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateObjectStorage: {
    'object-storage-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    label: 'my label'
  },
  regenerateObjectStorageKeys: {
    'object-storage-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  }
}

const mockResponses = {
  listObjectStorages: {
    object_storages: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        date_created: '2020-10-10T01:56:20+00:00',
        cluster_id: 2,
        region: 'ewr',
        label: 'my label',
        status: 'active',
        s3_hostname: 'ewr1.vultrobjects.com',
        s3_access_key: '81TPPS2573W0Y2A6',
        s3_secret_key: 'Bsb7oLAuN3ZgN9a4RiJsY34zEnTX2dt'
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
  createObjectStorage: {
    object_storage: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      cluster_id: 2,
      region: 'ewr',
      location: 'New Jersey',
      label: 'api-obj-storage',
      status: 'pending',
      s3_hostname: '',
      s3_access_key: '',
      s3_secret_key: ''
    }
  },
  getObjectStorage: {
    object_storage: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      cluster_id: 2,
      region: 'ewr',
      label: 'api-obj-storage',
      status: 'active',
      s3_hostname: 'ewr1.vultrobjects.com',
      s3_access_key: '9I3YD23WDT6D78LE',
      s3_secret_key: 'Qv7P4Yy9Oh0YeAOHVM5DI1G2GsPJUJY5x'
    }
  },
  regenerateObjectStorageKeys: {
    s3_credentials: {
      s3_hostname: 'ewr1.vultrobjects.com',
      s3_access_key: 'PR3VWWVBFW0IW',
      s3_secret_key: 'ZOJ7NIw0QACPlL62UefJnyMzAZ4SrBU'
    }
  },
  getAllClusters: {
    clusters: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        region: 'ewr',
        hostname: 'ewr1.vultrobjects.com',
        deploy: 'yes'
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

util.createTestSuite('object-storage', mockParameters, mockResponses)
