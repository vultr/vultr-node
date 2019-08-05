const util = require('../util')

const mock = {
  create: { ISOID: 24 },
  list: {
    '24': {
      ISOID: 24,
      date_created: '2014-04-01 14:10:09',
      filename: 'CentOS-6.5-x86_64-minimal.iso',
      size: 9342976,
      md5sum: 'ec0669895a250f803e1709d0402fc411',
      sha512sum:
        '1741f890bce04613f60b4f2b16fb8070c31640c53d4dbb4271b22610150928743eda1207f031b0b5bdd240ef1a6ed21fd5e6a2d192b9c87eff60b6d9698b8260',
      status: 'complete'
    }
  },
  listPublic: {
    '494966': {
      ISOID: 494966,
      name: 'Arch Linux',
      description: '2018.10.01 x86_64'
    },
    '507903': {
      ISOID: 507903,
      name: 'OpenBSD 6.4',
      description: 'amd64'
    },
    '522881': {
      ISOID: 522881,
      name: 'Ubuntu 18.10',
      description: '18.10 x86_64'
    }
  }
}

const mockParameters = {
  create: {
    url: 'https://templeos.org/Downloads/TempleOSLite.ISO'
  },
  delete: {
    ISOID: 24
  }
}

util.createTestSuite('iso', mock, mockParameters)
