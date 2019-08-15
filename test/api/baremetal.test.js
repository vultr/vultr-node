const util = require('../util')

const mock = {
  list: {
    '900000': {
      SUBID: '900000',
      os: 'CentOS 6 x64',
      ram: '65536 MB',
      disk: '2x 240 GB SSD',
      main_ip: '203.0.113.10',
      cpu_count: 1,
      location: 'New Jersey',
      DCID: '1',
      default_password: 'ab81u!ryranq',
      date_created: '2017-04-12 18:45:41',
      status: 'active',
      netmask_v4: '255.255.255.0',
      gateway_v4: '203.0.113.1',
      METALPLANID: 28,
      v6_networks: [
        {
          v6_network: '2001:DB8:9000::',
          v6_main_ip: '2001:DB8:9000::100',
          v6_network_size: 64
        }
      ],
      label: 'my label',
      tag: 'my tag',
      OSID: '127',
      APPID: '0'
    }
  }
}

const mockParameters = {
  delete: {
    SUBID: 90000
  },
  changeApp: {
    SUBID: 90000,
    APPID: 150
  },
  setTag: {
    SUBID: 90000,
    tag: 'my tag'
  },
  reinstall: {
    SUBID: 90000
  }
}

util.createTestSuite('baremetal', mock, mockParameters)
