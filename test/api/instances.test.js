const util = require('../util')

const mockParameters = {
  createInstance: {
    region: 'ewr',
    plan: 'vc2-6c-16gb'
  },
  getInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  startInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  rebootInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  reinstallInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceBandwidth: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceNeighbors: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  listInstancePrivateNetworks: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceIsoStatus: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  attachIsoToInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  detachIsoFromInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  attachPrivateNetworkToInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  detachPrivateNetworkFromInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  setInstanceBackupSchedule: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    type: 'weekly'
  },
  getInstanceBackupSchedule: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  restoreInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  listInstanceIpv4Information: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createInstanceIpv4: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getInstanceIpv6Information: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createInstanceReverseIpv6: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    ip: '2001:19f0:0005:6bb0:5400:2ff0:fee5:0002',
    reverse: 'vultr.com'
  },
  listInstanceIpv6ReverseInformation: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createInstanceReverseIpv4: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    ip: '2001:19f0:0005:6bb0:5400:2ff0:fee5:0002',
    reverse: 'vultr.com'
  },
  getInstanceUserData: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  haltInstance: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  setDefaultReverseDnsEntry: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteIpv4Address: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    ipv4: '127.0.0.1'
  },
  deleteInstanceReverseIpv6: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    ipv6: '2001:19f0:0005:6bb0:5400:2ff0:fee5:0002'
  },
  getAvailableInstanceUpgrades: {
    'instance-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  }
}

const mockResponses = {
  listInstances: {
    instances: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        os: 'CentOS SELinux 8 x64',
        ram: 2048,
        disk: '',
        main_ip: '172.17.23.40',
        vcpu_count: 1,
        region: 'atl',
        plan: 'vc2-6c-16gb',
        date_created: '2020-10-10T01:56:20+00:00',
        status: 'active',
        allowed_bandwidth: 2000,
        netmask_v4: '255.255.252.0',
        gateway_v4: '172.17.20.1',
        power_status: 'running',
        server_status: 'ok',
        v6_network: 'fd11:1111:1112:18fb::',
        v6_main_ip: 'fd11:1111:1112:18fb:0200:00ff:fe00:0000',
        v6_network_size: 64,
        label: 'newman-api-tests',
        internal_ip: '',
        kvm: 'https://my.vultr.com/subs/vps/novnc/api.php?data=djJ8aFZJZVF2',
        tag: '',
        os_id: 362,
        app_id: 0,
        firewall_group_id: '',
        features: ['ddos_protection', 'ipv6', 'auto_backups']
      }
    ],
    meta: {
      total: 3,
      links: {
        next: 'bmV4dF9fS05LVUVTS0VGVVlUR01KWkc0NERD',
        prev: ''
      }
    }
  },
  createInstance: {
    instance: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        os: 'CentOS 8 x64',
        ram: 2048,
        disk: 55,
        main_ip: '123.123.123.123',
        vcpu_count: 1,
        region: 'ewr',
        plan: 'vc2-6c-16gb',
        default_password: '-B8apMpaH=6Ec3N)E',
        date_created: '2020-10-10T01:56:20+00:00',
        status: 'active',
        allowed_bandwidth: '2000',
        netmask_v4: '255.255.255..248',
        gateway_v4: '123.123.123.1',
        power_status: 'running',
        server_status: 'ok',
        v6_network: 'fd11:1111:1112:18fb::',
        v6_main_ip: 'fd11:1111:1112:18fb:0200:00ff:fe00:0000',
        v6_network_size: 64,
        label: 'my label',
        internal_ip: '',
        kvm: 'https://my.vultr.com/subs/vps/novnc/api.php?data=djJ8WVVkMWRTWk5LMlo0YmVXSzliQ0ZyTm1sWWp',
        tag: 'Database',
        os_id: 362,
        app_id: 0,
        firewall_group_id: '',
        features: ['ddos_protection', 'ipv6', 'auto_backups']
      }
    ]
  },
  getInstance: {
    instance: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      os: 'Ubuntu 20.04 x64',
      ram: 16384,
      disk: 384,
      main_ip: '45.77.106.150',
      vcpu_count: 4,
      region: 'ewr',
      plan: 'vc2-6c-16gb',
      date_created: '2020-10-10T01:56:20+00:00',
      status: 'active',
      allowed_bandwidth: 5000,
      netmask_v4: '255.255.254.0',
      gateway_v4: '45.77.106.1',
      power_status: 'running',
      server_status: 'ok',
      v6_network: '',
      v6_main_ip: '',
      v6_network_size: 0,
      label: '',
      internal_ip: '',
      kvm: 'https://my.vultr.com/subs/vps/novnc/api.php?data=djJ8N0lrOW9vdVBPUmhtNFdUT0hHcW04RHNNX2NGbEFhaTF8e2uBWmVDeqLr',
      tag: '',
      os_id: 387,
      app_id: 0,
      firewall_group_id: '',
      features: ['ddos_protection', 'ipv6', 'auto_backups']
    }
  },
  updateInstance: {
    instance: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      os: 'Ubuntu 20.04 x64',
      ram: 16384,
      disk: 384,
      main_ip: '45.77.106.150',
      vcpu_count: 4,
      region: 'ewr',
      plan: 'vc2-6c-16gb',
      date_created: '2020-10-10T01:56:20+00:00',
      status: 'active',
      allowed_bandwidth: 5000,
      netmask_v4: '255.255.254.0',
      gateway_v4: '45.77.106.1',
      power_status: 'running',
      server_status: 'ok',
      v6_network: '',
      v6_main_ip: '',
      v6_network_size: 0,
      label: '',
      internal_ip: '',
      kvm: 'https://my.vultr.com/subs/vps/novnc/api.php?data=djJ8N0lrOW9vdVBPUmhtNFdUT0hHcW04RHNNX2NGbEFhaTF8e2uBWmVDeqLr',
      tag: '',
      os_id: 387,
      app_id: 0,
      firewall_group_id: '',
      features: ['ddos_protection', 'ipv6', 'auto_backups']
    }
  },
  reinstallInstance: {
    instance: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      os: 'Ubuntu 20.04 x64',
      ram: 16384,
      disk: 384,
      main_ip: '45.77.106.150',
      vcpu_count: 4,
      region: 'ewr',
      plan: 'vc2-6c-16gb',
      date_created: '2020-10-10T01:56:20+00:00',
      status: 'active',
      allowed_bandwidth: 5000,
      netmask_v4: '255.255.254.0',
      gateway_v4: '45.77.106.1',
      power_status: 'running',
      server_status: 'ok',
      v6_network: '',
      v6_main_ip: '',
      v6_network_size: 0,
      label: '',
      internal_ip: '',
      kvm: 'https://my.vultr.com/subs/vps/novnc/api.php?data=djJ8N0lrOW9vdVBPUmhtNFdUT0hHcW04RHNNX2NGbEFhaTF8e2uBWmVDeqLr',
      tag: '',
      os_id: 387,
      app_id: 0,
      firewall_group_id: '',
      features: ['ddos_protection', 'ipv6', 'auto_backups']
    }
  },
  getInstanceBandwidth: {
    bandwidth: {
      '2020-07-26': {
        incoming_bytes: 23193611,
        outgoing_bytes: 36353642
      },
      '2020-07-27': {
        incoming_bytes: 18594080,
        outgoing_bytes: 30364881
      }
    }
  },
  getInstanceNeighbors: {
    neighbors: [
      '478dbfe7-43f8-4dc8-940c-8bb61f547400',
      'a8047e6b-16bd-42be-8351-58df7e5ab89c'
    ]
  },
  listInstancePrivateNetworks: {
    private_networks: [
      {
        network_id: 'd325e78b-bcec-4d4e-b9b8-9c294f37b04d',
        mac_address: '5a:00:02:e5:3f:e3',
        ip_address: '10.1.96.4'
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
  getInstanceIsoStatus: {
    iso_status: {
      state: 'ready',
      iso_id: '0532a75b-14e8-48b8-b27e-1ebcf382a804'
    }
  },
  attachIsoToInstance: {
    iso_status: {
      status: 'ismounting',
      iso_id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
    }
  },
  detachIsoFromInstance: {
    iso_status: {
      status: 'isunmounting'
    }
  },
  setInstanceBackupSchedule: {
    backup_schedule: {
      enabled: true,
      type: 'string',
      next_scheduled_time_utc: 'string',
      hour: 0,
      dow: 0,
      dom: 0
    }
  },
  getInstanceBackupSchedule: {
    backup_schedule: {
      enabled: true,
      type: 'daily',
      next_scheduled_time_utc: '2020-07-28 00:00:00',
      hour: 0,
      dow: 0,
      dom: 0
    }
  },
  restoreInstance: {
    status: {
      restore_type: 'backup_id',
      restore_id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      status: 'inprogress'
    }
  },
  listInstanceIpv4Information: {
    ipv4s: [
      {
        ip: '123.123.123.123',
        netmask: '255.255.255.248',
        gateway: '123.123.123.1',
        type: 'main_ip',
        reverse: 'host1.example.com'
      },
      {
        ip: '123.123.123.124',
        netmask: '255.255.255.255',
        gateway: '',
        type: 'secondary_ip',
        reverse: 'host2.example.com'
      },
      {
        ip: '10.99.0.10',
        netmask: '255.255.0.0',
        gateway: '',
        type: 'private',
        reverse: ''
      }
    ],
    meta: {
      total: 3,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  createInstanceIpv4: {
    ipv4: {
      ip: '123.123.123.124',
      netmask: '255.255.255.248',
      gateway: '123.123.124.1',
      type: 'secondary_ip',
      reverse: '123.123.123.124.vultr.com'
    }
  },
  getInstanceIpv6Information: {
    ipv6s: [
      {
        ip: '2001:19f0:5:6bb:5400:02ff:fee5:3fe3',
        network: '2001:19f0:5:6bb::',
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
  listInstanceIpv6ReverseInformation: {
    reverse_ipv6s: [
      {
        ip: '2001:19f0:5:6bb:5400:2ff:fee5:1',
        reverse: 'vultr.com'
      }
    ]
  },
  getInstanceUserData: {
    user_data: {
      data: 'dGVzdA=='
    }
  },
  getAvailableInstanceUpgrades: {
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
  }
}

util.createTestSuite('instances', mockParameters, mockResponses)
