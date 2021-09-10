const util = require('../util')

const mockParameters = {
  listInstances: {},
  createInstance: {
    region: 'ams',
    plan: 'vbm-4c-32gb',
    label: 'api bm',
    app_id: 3,
    enable_ipv6: true
  },
  getInstance: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateInstance: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    label: 'bare metal new label',
    tag: 'my tag',
    user_data: 'aGk='
  },
  deleteInstance: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceIpv4Addresses: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceIpv6Addresses: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  startInstance: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  rebootInstance: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  reinstallInstance: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  haltInstance: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceBandwidth: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceUserData: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceAvailableUpgrades: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceVncUrl: {
    'baremetal-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  }
}

const mockResponses = {
  listInstances: {
    bare_metals: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        os: 'Application',
        ram: '32768 MB',
        disk: '2x 240GB SSD',
        main_ip: '199.247.26.42',
        cpu_count: 4,
        region: 'ams',
        default_password: 'h7,KB2VyYVFP@z)Z',
        date_created: '2020-10-10T01:56:20+00:00',
        status: 'active',
        netmask_v4: '255.255.254.0',
        gateway_v4: '199.247.26.1',
        plan: 'vbm-4c-32gb',
        v6_network: '2001:19f0:5001:3990::',
        v6_main_ip: '2001:19f0:5001:3990:0ec4:7aff:fe8e:f97a',
        v6_network_size: 64,
        label: 'api bm',
        tag: '',
        mac_address: 2199756823533,
        os_id: 186,
        app_id: 3,
        features: ['ipv6']
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
  createInstance: {
    baremetal: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      os: 'Application',
      ram: '32768 MB',
      disk: '2x 240GB SSD',
      main_ip: '',
      cpu_count: 4,
      region: 'ams',
      date_created: '2020-10-10T01:56:20+00:00',
      status: 'pending',
      netmask_v4: '',
      gateway_v4: '',
      plan: 'vbm-4c-32gb',
      v6_network: '',
      v6_main_ip: '',
      v6_network_size: 0,
      label: 'api bm',
      mac_address: 2199756823533,
      tag: '',
      os_id: 186,
      app_id: 3,
      features: ['ipv6']
    }
  },
  getInstance: {
    bare_metal: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      os: 'Application',
      ram: '32768 MB',
      disk: '2x 240GB SSD',
      main_ip: '199.247.26.42',
      cpu_count: 4,
      region: 'ams',
      date_created: '2020-10-10T01:56:20+00:00',
      status: 'pending',
      netmask_v4: '255.255.254.0',
      gateway_v4: '199.247.26.1',
      plan: 'vbm-4c-32gb',
      v6_network: '2001:19f0:5001:3990::',
      v6_main_ip: '2001:19f0:5001:3990:0ec4:7aff:fe8e:f97a',
      v6_network_size: 64,
      mac_address: 2199756823533,
      label: 'api bm',
      tag: '',
      os_id: 186,
      app_id: 3,
      features: ['ipv6']
    }
  },
  updateInstance: {
    bare_metal: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      os: 'Application',
      ram: '32768 MB',
      disk: '2x 240GB SSD',
      main_ip: '199.247.26.42',
      cpu_count: 4,
      region: 'ams',
      date_created: '2020-10-10T01:56:20+00:00',
      status: 'pending',
      netmask_v4: '255.255.254.0',
      gateway_v4: '199.247.26.1',
      plan: 'vbm-4c-32gb',
      v6_network: '2001:19f0:5001:3990::',
      v6_main_ip: '2001:19f0:5001:3990:0ec4:7aff:fe8e:f97a',
      v6_network_size: 64,
      mac_address: 2199756823533,
      label: 'api bm',
      tag: '',
      os_id: 186,
      app_id: 3,
      features: ['ipv6']
    }
  },
  getInstanceIpv4Addresses: {
    ipv4s: [
      {
        ip: '199.247.26.42',
        netmask: '255.255.254.0',
        gateway: '199.247.26.1',
        type: 'main_ip',
        reverse: '199.247.26.42.vultr.com'
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
  getInstanceIpv6Addresses: {
    ipv6s: [
      {
        ip: '2001:19f0:5001:3990:0ec4:7aff:fe8e:f97a',
        network: '2001:19f0:5001:3990::',
        network_size: 64,
        type: 'main_ip'
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
  reinstallInstance: {
    bare_metal: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      os: 'Application',
      ram: '32768 MB',
      disk: '2x 240GB SSD',
      main_ip: '199.247.26.42',
      cpu_count: 4,
      region: 'ams',
      date_created: '2020-10-10T01:56:20+00:00',
      status: 'pending',
      netmask_v4: '255.255.254.0',
      gateway_v4: '199.247.26.1',
      plan: 'vbm-4c-32gb',
      v6_network: '2001:19f0:5001:3990::',
      v6_main_ip: '2001:19f0:5001:3990:0ec4:7aff:fe8e:f97a',
      v6_network_size: 64,
      label: 'api bm',
      mac_address: 2199756823533,
      tag: '',
      os_id: 186,
      app_id: 3
    }
  },
  getInstanceBandwidth: {
    bandwidth: {
      '2020-07-25': {
        incoming_bytes: 15989787,
        outgoing_bytes: 25327729
      },
      '2020-07-26': {
        incoming_bytes: 13964112,
        outgoing_bytes: 22257069
      }
    }
  },
  getInstanceUserData: {
    user_data: {
      data: 'dGVzdA=='
    }
  },
  getInstanceAvailableUpgrades: {
    upgrades: {
      os: [
        {
          id: 900,
          name: 'Example CentOS 6 x64',
          arch: 'x64',
          family: 'centos'
        },
        {
          id: 901,
          name: 'Example CentOS 6 i386',
          arch: 'i386',
          family: 'centos'
        }
      ],
      applications: [
        {
          id: 1,
          name: 'LEMP',
          short_name: 'lemp',
          deploy_name: 'LEMP on CentOS 6 x64',
          type: 'one-click',
          vendor: 'vultr',
          image_id: ''
        },
        {
          id: 39,
          name: 'LEMP',
          short_name: 'lemp',
          deploy_name: 'LEMP on CentOS 7 x64',
          type: 'one-click',
          vendor: 'vultr',
          image_id: ''
        },
        {
          id: 1028,
          name: 'OpenLiteSpeed WordPress',
          short_name: 'openlitespeedwordpress',
          deploy_name: 'OpenLiteSpeed WordPress on Ubuntu 20.04 x64',
          type: 'marketplace',
          vendor: 'LiteSpeed_Technologies',
          image_id: 'openlitespeed-wordpress'
        }
      ],
      plans: [
        'vc2-2c-4gb',
        'vc2-4c-8gb',
        'vc2-6c-16gb',
        'vc2-8c-64gb',
        'vc2-16c-64gb',
        'vc2-24c-97gb'
      ]
    }
  },
  getInstanceVncUrl: {
    vnc: {
      url: 'https://my.vultr.com/subs/baremetal/novnc/api.php?data=djsozdXNFVGd6eVgzbXRQbXJ0eW00OTVXamJ8'
    }
  }
}

util.createTestSuite('bare-metal', mockParameters, mockResponses)
