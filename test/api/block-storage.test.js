const util = require('../util')

const mockParameters = {
  createStorage: {
    region: 'ewr',
    size_gb: 50
  },
  getStorage: {
    'block-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteStorage: {
    'block-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateStorage: {
    'block-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  attachStorage: {
    'block-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    instance_id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  detachStorage: {
    'block-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  }
}

const mockResponses = {
  listStorages: {
    blocks: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        date_created: '2020-10-10T01:56:20+00:00',
        cost: 5,
        status: 'pending',
        size_gb: 50,
        region: 'ewr',
        attached_to_instance: 0,
        label: 'my label'
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
  createStorage: {
    block: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      cost: 5,
      status: 'active',
      size_gb: 50,
      region: 'ewr',
      attached_to_instance: 0,
      label: 'my label'
    }
  },
  getStorage: {
    block: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      cost: 5,
      status: 'active',
      size_gb: 50,
      region: 'ewr',
      attached_to_instance: 0,
      label: 'my label'
    }
  }
}

util.createTestSuite('block-storage', mockParameters, mockResponses)
