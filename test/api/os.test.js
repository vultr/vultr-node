const util = require('../util')

const mock = {
  list: {
    '167': {
      OSID: 167,
      name: 'CentOS 7 x64',
      arch: 'x64',
      family: 'centos',
      windows: false
    },
    '179': {
      OSID: 179,
      name: 'CoreOS Stable',
      arch: 'x64',
      family: 'coreos',
      windows: false
    },
    '194': {
      OSID: 194,
      name: 'Debian 8 i386 (jessie)',
      arch: 'i386',
      family: 'debian',
      windows: false
    }
  }
}

util.createTestSuite('os', mock)
