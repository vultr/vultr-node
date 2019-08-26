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
  },
  listApps: {
    '1': {
      APPID: '1',
      name: 'LEMP',
      short_name: 'lemp',
      deploy_name: 'LEMP on CentOS 6 x64',
      surcharge: 0
    },
    '2': {
      APPID: '2',
      name: 'WordPress',
      short_name: 'wordpress',
      deploy_name: 'WordPress on CentOS 6 x64',
      surcharge: 0
    }
  },
  appInfo: {
    app_info: ''
  },
  bandwidth: {
    incoming_bytes: [
      ['2017-04-01', 91571055],
      ['2017-04-02', 78355758],
      ['2017-04-03', 85827590]
    ],
    outgoing_bytes: [
      ['2017-04-01', 3084731],
      ['2017-04-02', 1810478],
      ['2017-04-03', 2729604]
    ]
  },
  getUserData: {
    userdata: 'ZWNobyBIZWxsbyBXb3JsZA=='
  },
  ipv6Info: {
    '900000': [
      {
        ip: '2001:DB8:9000::100',
        network: '2001:DB8:9000::',
        network_size: 64,
        type: 'main_ip'
      }
    ]
  },
  ipv4Info: {
    '900000': [
      {
        ip: '203.0.113.10',
        netmask: '255.255.255.0',
        gateway: '203.0.113.1',
        type: 'main_ip'
      }
    ]
  },
  listOS: {
    '127': {
      OSID: '127',
      name: 'CentOS 6 x64',
      arch: 'x64',
      family: 'centos',
      windows: false,
      surcharge: 0
    },
    '148': {
      OSID: '148',
      name: 'Ubuntu 12.04 i386',
      arch: 'i386',
      family: 'ubuntu',
      windows: false,
      surcharge: 0
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
  },
  reboot: {
    SUBID: 90000
  },
  create: {
    DCID: 1,
    METALPLANID: 1,
    OSID: 127
  },
  listApps: {
    SUBID: 90000
  },
  halt: {
    SUBID: 90000
  },
  appInfo: {
    SUBID: 90000
  },
  bandwidth: {
    SUBID: 90000
  },
  getUserData: {
    SUBID: 90000
  },
  enableIPv6: {
    SUBID: 90000
  },
  setLabel: {
    SUBID: 90000,
    label: 'my label'
  },
  ipv6Info: {
    SUBID: 90000
  },
  ipv4Info: {
    SUBID: 90000
  },
  changeOS: {
    SUBID: 90000,
    OSID: 127
  },
  listOS: {
    SUBID: 90000
  },
  setUserData: {
    SUBID: 1312965,
    userdata:
      'aHR0cHM6Ly93d3cudnVsdHIuY29tL2FwaS8jYmFyZW1ldGFsX3NldF91c2VyX2RhdGE='
  }
}

util.createTestSuite('baremetal', mock, mockParameters)
