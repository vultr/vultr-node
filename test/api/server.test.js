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
  getAppInfo: { app_info: '' }
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
  }
}

util.createTestSuite('server', mock, mockParameters)
