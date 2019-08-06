const util = require('../util')

const mock = {
  list: {
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
  }
}

util.createTestSuite('app', mock)
