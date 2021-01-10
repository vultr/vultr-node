const util = require('../util')

const mockParameters = {
  listAvailableComputeInRegion: {
    'region-id': 'ewr'
  }
}

const mockResponses = {
  listRegions: {
    regions: [
      {
        id: 'ams',
        city: 'Amsterdam',
        country: 'NL',
        continent: 'Europe',
        options: ['ddos_protection']
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
  listAvailableComputeInRegion: {
    available_plans: [
      'vc2-1c-1gb',
      'vc2-1c-2gb',
      'vc2-2c-4gb',
      'vc2-4c-8gb',
      'vc2-6c-16gb',
      'vc2-8c-32gb',
      'vc2-16c-64gb',
      'vc2-24c-96gb',
      'vdc-4vcpu-8gb',
      'vdc-4vcpu-16gb',
      'vdc-6vcpu-24gb',
      'vdc-8vcpu-32gb',
      'vhf-1c-1gb',
      'vhf-1c-2gb',
      'vhf-2c-4gb',
      'vhf-3c-8gb',
      'vhf-4c-16gb',
      'vhf-6c-24gb',
      'vhf-8c-32gb',
      'vhf-12c-48gb'
    ]
  }
}

util.createTestSuite('regions', mockParameters, mockResponses)
