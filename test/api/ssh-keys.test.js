const util = require('../util')

const mockParameters = {
  getSshKey: {
    'ssh-key-id': '5f1c8911af06f'
  },
  updateSshKey: {
    'ssh-key-id': '5f1c8911af06f'
  },
  deleteSshKey: {
    'ssh-key-id': '5f1c8911af06f'
  },
  createSshKey: {
    name: 'my SSH key',
    ssh_key: 'ssh-rsa AA... test@example.com'
  }
}

const mockResponses = {
  getSshKey: {
    ssh_key: {
      id: '5f1c8911af06f',
      date_created: '2020-10-10T01:56:20+00:00',
      name: 'my ssh key',
      ssh_key: 'ssh-rsa AA... test@example.com'
    }
  },
  listSshKeys: {
    ssh_key: {
      id: '5f1c8911af06f',
      date_created: '2020-10-10T01:56:20+00:00',
      name: 'my ssh key',
      ssh_key: 'ssh-rsa AA... test@example.com'
    }
  },
  createSshKey: {
    ssh_key: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      name: 'my ssh key',
      ssh_key: 'ssh-rsa AA... test@example.com'
    }
  }
}

util.createTestSuite('ssh-keys', mockParameters, mockResponses)
