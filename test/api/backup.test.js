const util = require('../util')

const mock = {
  list: {
    '543d34149403a': {
      BACKUPID: '543d34149403a',
      date_created: '2014-10-14 12:40:40',
      description: 'Automatic server backup',
      size: '42949672960',
      status: 'complete'
    },
    '543d340f6dbce': {
      BACKUPID: '543d340f6dbce',
      date_created: '2014-10-13 16:11:46',
      description: '',
      size: '10000000',
      status: 'complete'
    }
  }
}

const mockParameters = {
  list: {
    BACKUPID: '543d340f6dbce'
  }
}

util.createTestSuite('backup', mock, mockParameters)
