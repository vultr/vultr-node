const util = require('../util')

const mock = {
  list: {
    '1313044': {
      SUBID: 1313044,
      DCID: 1,
      ip_type: 'v4',
      subnet: '10.234.22.53',
      subnet_size: 32,
      label: 'my first reserved ip',
      attached_SUBID: 123456
    },
    '1313045': {
      SUBID: 1313045,
      DCID: 1,
      ip_type: 'v6',
      subnet: '2001:db8:9999::',
      subnet_size: 64,
      label: '',
      attached_SUBID: false
    }
  },
  convert: {
    SUBID: 365352
  },
  create: {
    SUBID: 1312965
  }
}

const mockParameters = {
  delete: {
    ip_address: '2001:db8:8000::/64'
  },
  detach: {
    ip_address: '123.123.123.124/32',
    detach_SUBID: 5342543
  },
  convert: {
    SUBID: 5344234,
    ip_address: '2001:db8:8000:/64'
  },
  create: {
    DCID: 1,
    ip_type: 'v4'
  },
  attach: {
    ip_address: '123.123.123.124/32',
    attach_SUBID: 5342543
  }
}

util.createTestSuite('reserved-ip', mock, mockParameters)
