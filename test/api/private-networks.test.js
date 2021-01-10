const util = require('../util')

const mockParameters = {
  getPrivateNetwork: {
    'network-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deletePrivateNetwork: {
    'network-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updatePrivateNetwork: {
    'network-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    description: 'my new label'
  },
  createPrivateNetwork: {
    region: 'ewr'
  }
}

const mockResponses = {
  getPrivateNetwork: {
    network: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      region: 'ewr',
      description: 'sample desc',
      v4_subnet: '10.99.0.0',
      v4_subnet_mask: 24
    }
  },
  listPrivateNetworks: {
    networks: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        region: 'ewr',
        date_created: '2020-10-10T01:56:20+00:00',
        description: 'sample desc',
        v4_subnet: '10.99.0.0',
        v4_subnet_mask: 24
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
  createPrivateNetwork: {
    network: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      region: 'ewr',
      description: 'sample desc',
      v4_subnet: '10.99.0.0',
      v4_subnet_mask: 24
    }
  }
}

util.createTestSuite('private-networks', mockParameters, mockResponses)
