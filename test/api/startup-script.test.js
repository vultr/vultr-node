const util = require('../util')

const mock = {
  list: {
    '3': {
      SCRIPTID: '3',
      date_created: '2014-05-21 15:27:18',
      date_modified: '2014-05-21 15:27:18',
      name: 'test ',
      type: 'boot',
      script: '#!/bin/bash echo Hello World > /root/hello'
    },
    '5': {
      SCRIPTID: '5',
      date_created: '2014-08-22 15:27:18',
      date_modified: '2014-09-22 15:27:18',
      name: 'test ',
      type: 'pxe',
      script: '#!ipxe\necho Hello World\nshell'
    }
  },
  create: {
    SCRIPTID: 5
  }
}

const mockParameters = {
  delete: {
    SCRIPTID: '5'
  },
  create: {
    name: 'Hello World',
    script: '#!/bin/bash\necho hello world > /root/hello'
  },
  update: {
    SCRIPTID: '5',
    name: 'Hello World',
    script: '#!/bin/bash\necho hello world > /root/hello'
  }
}

util.createTestSuite('startup-script', mock, mockParameters)
