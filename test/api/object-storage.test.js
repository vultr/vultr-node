const util = require('../util')

const mock = {
  create: {
    SUBID: 1314217
  },
  list: {
    '1314217': {
      SUBID: 1314217,
      date_created: '2019-04-17 17:33:00',
      OBJSTORECLUSTERID: 1,
      DCID: 1,
      location: 'New Jersey',
      label: 'object1',
      status: 'active',
      s3_hostname: 'nj1.vultrobjects.com',
      s3_access_key: 'abc1234',
      s3_secret_key: 'def5678'
    }
  },
  listCluster: {
    '1': {
      OBJSTORECLUSTERID: 1,
      DCID: 1,
      location: 'New Jersey',
      hostname: 'nj1.vultrobjects.com',
      deploy: 'yes'
    }
  },
  regenerateKeys: {
    s3_hostname: 'nj1.vultrobjects.com',
    s3_access_key: 'abc1236',
    s3_secret_key: 'def5679'
  }
}

const mockParameters = {
  create: {
    OBJSTORECLUSTERID: 1,
    label: 'object1'
  },
  delete: {
    SUBID: 1314217
  },
  list: {
    include_s3: 'no',
    SUBID: 123,
    label: 'my label'
  },
  setLabel: {
    SUBID: 123,
    label: 'my label'
  },
  regenerateKeys: {
    SUBID: 123,
    s3_access_key: 'abc1234'
  }
}

util.createTestSuite('object-storage', mock, mockParameters)
