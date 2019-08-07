const util = require('../util')

const mock = {
  list: {
    '1': {
      DCID: '1',
      name: 'New Jersey',
      country: 'US',
      continent: 'North America',
      state: 'NJ',
      ddos_protection: true,
      block_storage: true,
      regioncode: 'EWR'
    },
    '2': {
      DCID: '2',
      name: 'Chicago',
      country: 'US',
      continent: 'North America',
      state: 'IL',
      ddos_protection: false,
      block_storage: false,
      regioncode: 'ORD'
    }
  },
  availability: [40, 11, 45, 29, 41, 61],
  availabilityBareMetal: [40, 11, 45, 29, 41, 61],
  availabilityVc2: [40, 11, 45, 29, 41, 61],
  availabilityVdc2: [40, 11, 45, 29, 41, 61]
}

const mockParameters = {
  availability: {
    DCID: 1
  },
  availabilityBareMetal: {
    DCID: 1
  },
  availabilityVc2: {
    DCID: 1
  },
  availabilityVdc2: {
    DCID: 1
  }
}

util.createTestSuite('regions', mock, mockParameters)
