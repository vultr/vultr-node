const util = require('../util')

const mock = {
  list: {
    '576965': {
      SUBID: '576965',
      os: 'CentOS 6 x64',
      ram: '4096 MB',
      disk: 'Virtual 60 GB',
      main_ip: '123.123.123.123',
      vcpu_count: '2',
      location: 'New Jersey',
      DCID: '1',
      default_password: 'nreqnusibni',
      date_created: '2013-12-19 14:45:41',
      pending_charges: '46.67',
      status: 'active',
      cost_per_month: '10.05',
      current_bandwidth_gb: 131.512,
      allowed_bandwidth_gb: '1000',
      netmask_v4: '255.255.255.248',
      gateway_v4: '123.123.123.1',
      power_status: 'running',
      server_state: 'ok',
      VPSPLANID: '28',
      v6_main_ip: '2001:DB8:1000::100',
      v6_network_size: '64',
      v6_network: '2001:DB8:1000::',
      v6_networks: [
        {
          v6_network: '2001:DB8:1000::',
          v6_main_ip: '2001:DB8:1000::100',
          v6_network_size: '64'
        }
      ],
      label: 'my new server',
      internal_ip: '10.99.0.10',
      kvm_url: 'https://my.vultr.com/subs/novnc/api.php?data=eawxFVZw2mXnhGUV',
      auto_backups: 'yes',
      tag: 'mytag',
      OSID: '127',
      APPID: '0',
      FIREWALLGROUPID: '0'
    }
  },
  create: {
    SUBID: '1312965'
  },
  listUpgradePlan: [29, 41, 61],
  neighbors: [23456],
  getAppInfo: { app_info: '' },
  bandwidth: {
    incoming_bytes: [
      ['2014-06-10', '81072581'],
      ['2014-06-11', '222387466'],
      ['2014-06-12', '216885232'],
      ['2014-06-13', '117262318']
    ],
    outgoing_bytes: [
      ['2014-06-10', '4059610'],
      ['2014-06-11', '13432380'],
      ['2014-06-12', '2455005'],
      ['2014-06-13', '1106963']
    ]
  },
  getUserData: {
    userdata: 'ZWNobyBIZWxsbyBXb3JsZA=='
  },
  listReverseIPv6: {
    '576965': [
      {
        ip: '2001:DB8:1000::101',
        reverse: 'host1.example.com'
      },
      {
        ip: '2001:DB8:1000::102',
        reverse: 'host2.example.com'
      }
    ]
  },
  listIPv6: {
    '576965': [
      {
        ip: '2001:DB8:1000::100',
        network: '2001:DB8:1000::',
        network_size: '64',
        type: 'main_ip'
      }
    ]
  },
  getBackupSchedule: {
    enabled: true,
    cron_type: 'weekly',
    next_scheduled_time_utc: '2016-05-07 08:00:00',
    hour: 8,
    dow: 6,
    dom: 0
  },
  listIPv4: {
    '576965': [
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
    ]
  },
  listChangeApp: {
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
  listChangeOS: {
    '127': {
      OSID: '127',
      name: 'CentOS 6 x64',
      arch: 'x64',
      family: 'centos',
      windows: false,
      surcharge: '0.00'
    },
    '148': {
      OSID: '148',
      name: 'Ubuntu 12.04 i386',
      arch: 'i386',
      family: 'ubuntu',
      windows: false,
      surcharge: '0.00'
    }
  },
  isoStatus: {
    state: 'ready',
    ISOID: '0'
  }
}

const mockParameters = {
  create: {
    DCID: 1,
    VPSPLANID: 202,
    OSID: 127
  },
  setLabel: {
    SUBID: 1312965,
    label: 'my label'
  },
  listUpgradePlan: {
    SUBID: 1337123
  },
  upgradePlan: {
    SUBID: 1337123,
    VPSPLANID: 401
  },
  setTag: {
    SUBID: 1312965,
    tag: 'mytag'
  },
  delete: {
    SUBID: 1312965
  },
  halt: {
    SUBID: 1312965
  },
  start: {
    SUBID: 1312965
  },
  reboot: {
    SUBID: 1312965
  },
  neighbors: {
    SUBID: 1312965
  },
  getAppInfo: {
    SUBID: 1312965
  },
  changeOS: {
    SUBID: 1312965,
    OSID: 127
  },
  reinstall: {
    SUBID: 1312965
  },
  setUserData: {
    SUBID: 1312965,
    userdata: 'aHR0cHM6Ly93d3cudnVsdHIuY29tL2FwaS8jc2VydmVyX3NldF91c2VyX2RhdGE='
  },
  setReverseIPv4: {
    SUBID: 1312965,
    ip: '192.0.2.1',
    entry: 'example.vultr.com'
  },
  bandwidth: {
    SUBID: 576965
  },
  enablePrivateNetwork: {
    SUBID: 576965,
    NETWORKID: 'net539626f0798d7'
  },
  changeApp: {
    SUBID: 1312965,
    APPID: 2
  },
  getUserData: {
    SUBID: 1312965
  },
  setReverseIPv6: {
    SUBID: 1312965,
    ip: '2001:db8:1234::',
    entry: 'example.vultr.com'
  },
  enableBackup: {
    SUBID: 1312965
  },
  enableIPv6: {
    SUBID: 1312965
  },
  disableBackup: {
    SUBID: 1312965
  },
  createIPv4: {
    SUBID: 1312965
  },
  listReverseIPv6: {
    SUBID: 1312965
  },
  listIPv6: {
    SUBID: 1312965
  },
  setBackupSchedule: {
    SUBID: 1312965,
    cron_type: 'daily'
  },
  getBackupSchedule: {
    SUBID: 1312965
  },
  listIPv4: {
    SUBID: 1312965
  },
  listChangeApp: {
    SUBID: 1312965
  },
  setFirewallGroup: {
    SUBID: 1312965,
    FIREWALLGROUPID: '1234abcd'
  },
  deleteIPv4: {
    SUBID: 1312965,
    ip: '192.0.2.1'
  },
  restoreBackup: {
    SUBID: 1312965,
    BACKUPID: '543d34149403a'
  },
  attachISO: {
    SUBID: 1312965,
    ISOID: 24
  },
  restoreSnapshot: {
    SUBID: 1312965,
    SNAPSHOTID: '5359435d28b9a'
  },
  listChangeOS: {
    SUBID: 1312965
  },
  isoStatus: {
    SUBID: 1312965
  }
}

util.createTestSuite('server', mock, mockParameters)
