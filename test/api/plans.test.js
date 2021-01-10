const util = require('../util')

const mockResponses = {
  listPlans: {
    plans: [
      {
        id: 'vhf-8c-32gb',
        vcpu_count: 8,
        ram: 32768,
        disk: 512,
        bandwidth: 6144,
        monthly_cost: 192,
        type: 'vhf',
        locations: ['sea']
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
  listBareMetalPlans: {
    plans_metal: [
      {
        id: 'vbm-4c-32gb',
        cpu_count: 4,
        cpu_threads: 8,
        cpu_model: 'E3-1270v6',
        ram: 32768,
        disk: 240,
        bandwidth: 5120,
        monthly_cost: 300,
        type: 'SSD',
        locations: ['ewr']
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

util.createTestSuite('plans', null, mockResponses)
