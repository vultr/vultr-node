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
  }
}

util.createTestSuite('vpc2', mockParameters, mockResponses)
