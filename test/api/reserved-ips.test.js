const util = require('../util')

const mockParameters = {
  getReservedIp: {
    'reserved-ip': 'cb676a46-66fd-4dfb-b839-443f2e6c0b604'
  },
  deleteReservedIp: {
    'reserved-ip': 'cb676a46-66fd-4dfb-b839-443f2e6c0b604'
  },
  createReservedIp: {
    region: 'ewr',
    ip_type: 'v4'
  },
  attachReservedIp: {
    'reserved-ip': 'cb676a46-66fd-4dfb-b839-443f2e6c0b604',
    instance_id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  detachReservedIp: {
    'reserved-ip': 'cb676a46-66fd-4dfb-b839-443f2e6c0b604'
  },
  convertInstanceIpToReservedIp: {
    ip_address: '127.0.0.1'
  }
}

const mockResponses = {
  getReservedIp: {
    reserved_ip: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b604',
      region: 'ewr',
      ip_type: 'v4',
      subnet: '140.82.12.241',
      subnet_size: 32,
      label: 'my label',
      instance_id: ''
    }
  },
  listReservedIps: {
    reserved_ips: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        region: 'ewr',
        ip_type: 'v4',
        subnet: '96.30.199.231',
        subnet_size: 32,
        label: 'my label',
        instance_id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
      },
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        region: 'ewr',
        ip_type: 'v6',
        subnet: '2001:19f0:5:5157::',
        subnet_size: 64,
        label: 'my label2',
        instance_id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
      }
    ],
    meta: {
      total: 2,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  createReservedIp: {
    reserved_ip: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      region: 'ewr',
      ip_type: 'v4',
      subnet: '140.82.12.241',
      subnet_size: 32,
      label: 'my label',
      instance_id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
    }
  },
  convertInstanceIpToReservedIp: {
    reserved_ip: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      region: 'ewr',
      ip_type: 'v4',
      subnet: '127.0.0.1',
      subnet_size: 64,
      label: 'my label',
      instance_id: '3f26dfe9-6a18-4f3d-a543-0cbca7a3e496'
    }
  }
}

util.createTestSuite('reserved-ips', mockParameters, mockResponses)
