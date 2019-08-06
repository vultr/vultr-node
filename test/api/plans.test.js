const util = require('../util')

const mock = {
  list: {
    '1': {
      VPSPLANID: '1',
      name: 'Starter',
      vcpu_count: '1',
      ram: '512',
      disk: '20',
      bandwidth: '1',
      price_per_month: '5.00',
      windows: false,
      plan_type: 'SSD',
      available_locations: [1, 2, 3]
    },
    '2': {
      VPSPLANID: '2',
      name: 'Basic',
      vcpu_count: '1',
      ram: '1024',
      disk: '30',
      bandwidth: '2',
      price_per_month: '8.00',
      windows: false,
      plan_type: 'SATA',
      available_locations: [],
      deprecated: true
    }
  },
  listBareMetal: {
    '100': {
      METALPLANID: '100',
      name: '65536 MB RAM,2x 240 GB SSD,5.00 TB BW',
      cpu_count: 1,
      cpu_model: 'E3-1270v6',
      ram: 65536,
      disk: '2x 240 GB SSD',
      bandwidth_tb: 5,
      price_per_month: 100,
      plan_type: 'SSD',
      deprecated: false,
      available_locations: [1, 2, 3]
    }
  },
  listVc2: {
    '1': {
      VPSPLANID: '1',
      name: 'Starter',
      vcpu_count: '1',
      ram: '512',
      disk: '20',
      bandwidth: '1',
      price_per_month: '5.00',
      plan_type: 'SSD'
    }
  },
  listVdc2: {
    '115': {
      VPSPLANID: '115',
      name: '8192 MB RAM,110 GB SSD,10.00 TB BW',
      vcpu_count: '2',
      ram: '8192',
      disk: '110',
      bandwidth: '10.00',
      price_per_month: '60.00',
      plan_type: 'DEDICATED'
    }
  },
  listVc2z: {
    '401': {
      VPSPLANID: '401',
      name: '2048 MB RAM,64 GB SSD,2.00 TB BW',
      vcpu_count: '1',
      ram: '2048',
      disk: '64',
      bandwidth: '2.00',
      price_per_month: '12.00',
      plan_type: 'HIGHFREQUENCY'
    }
  }
}

util.createTestSuite('plans', mock)
