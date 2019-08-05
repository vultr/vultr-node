const util = require('../util')

const mock = {
  create: {
    SSHKEYID: '5d13cdbd9cbae'
  },
  list: {
    '541b4960f23bd': {
      SSHKEYID: '541b4960f23bd',
      date_created: null,
      name: 'test',
      ssh_key: 'ssh-rsa AA... test@example.com'
    },
    '5b80207b1821f': {
      SSHKEYID: '5b80207b1821f',
      date_created: '2018-08-24 15:12:59',
      name: 'test@vultr-iMac.local',
      ssh_key: 'ssh-rsa AA... test@vultr-iMac.local'
    }
  }
}

const mockParameters = {
  create: {
    name: 'vultr-node-sshkey',
    ssh_key: 'ssh-rsa AA... test@example.com'
  },
  delete: {
    SSHKEYID: '5d14f139037a1'
  },
  update: {
    SSHKEYID: '5d14f139037a1',
    name: 'vultr-node-sshkey-update',
    ssh_key: 'ssh-rsa AA... test@example.com'
  }
}

util.createTestSuite('sshkey', mock, mockParameters)
