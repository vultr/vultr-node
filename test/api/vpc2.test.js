const util = require('../util')

const mockParameters = {
  getVpc: {
    'vpc-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteVpc: {
    'vpc-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateVpc: {
    'vpc-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    description: 'new-label'
  },
  createVpc: {
    region: 'ewr'
  },
  listVpcNodes: {
    'vpc-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  attachVpcNodes: {
    'vpc-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    nodes: [
      'a4021db4-c1d0-43ba-8b5c-7a4a35444167',
      '12a43ca5-0025-40ef-9edb-3a475809a8c0'
    ]
  },
  detachVpcNodes: {
    'vpc-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    nodes: [
      'a4021db4-c1d0-43ba-8b5c-7a4a35444167',
      '12a43ca5-0025-40ef-9edb-3a475809a8c0'
    ]
  }
}

const mockResponses = {
  getVpc: {
    vpc: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      region: 'ewr',
      description: 'Example VPC Description',
      ip_block: '10.99.0.0',
      prefix_length: 24
    }
  },
  listVpcs: {
    vpcs: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        region: 'ewr',
        date_created: '2020-10-10T01:56:20+00:00',
        description: 'Example VPC Description',
        ip_block: '10.99.0.0',
        prefix_length: 24
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
  createVpc: {
    region: 'ewr',
    description: 'Example VPC',
    ip_block: '10.99.0.0',
    prefix_length: 24
  },
  listVpcNodes: {
    nodes: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        ip_address: '10.1.96.3',
        mac_address: '98964710968448',
        description: 'Example-Description',
        type: 'vps',
        node_status: 'active'
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

util.createTestSuite('vpc2', mockParameters, mockResponses)
