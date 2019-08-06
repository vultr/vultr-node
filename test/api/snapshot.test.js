const util = require('../util')

const mock = {
  create: {
    SNAPSHOTID: '544e52f31c706'
  },
  createFromUrl: {
    SNAPSHOTID: '544e52f31c706'
  },
  list: {
    '5359435d28b9a': {
      SNAPSHOTID: '5359435d28b9a',
      date_created: '2014-04-18 12:40:40',
      description: 'Test snapshot',
      size: '42949672960',
      status: 'complete',
      OSID: '127',
      APPID: '0'
    },
    '5359435dc1df3': {
      SNAPSHOTID: '5359435dc1df3',
      date_created: '2014-04-22 16:11:46',
      description: '',
      size: '10000000',
      status: 'complete',
      OSID: '127',
      APPID: '0'
    }
  }
}

const mockParameters = {
  create: {
    SUBID: 1
  },
  createFromUrl: {
    url: 'http://example.com/path/to/disk_image.raw'
  },
  delete: {
    SNAPSHOTID: '5359435d28b9a'
  }
}

util.createTestSuite('snapshot', mock, mockParameters)
