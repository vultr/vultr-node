const util = require('../util')

const mock = {
  create: {
    SUBID: '1313217'
  },
  list: [
    {
      SUBID: 1313216,
      date_created: '2016-03-29 10:10:04',
      cost_per_month: 10,
      status: 'pending',
      size_gb: 100,
      DCID: 1,
      attached_to_SUBID: null,
      label: 'files1'
    },
    {
      SUBID: 1313217,
      date_created: '2016-31-29 10:10:48',
      cost_per_month: 5,
      status: 'active',
      size_gb: 50,
      DCID: 1,
      attached_to_SUBID: 1313207,
      label: 'files2'
    }
  ]
}

const mockParameters = {
  attach: {
    SUBID: 1,
    attach_to_SUBID: 2
  },
  create: {
    DCID: 1,
    size_gb: 2
  },
  delete: {
    SUBID: 1
  },
  detach: {
    SUBID: 1
  },
  setLabel: {
    SUBID: 1,
    label: 'example'
  },
  resize: {
    SUBID: 1,
    size_gb: 2
  }
}

util.createTestSuite('block', mock, mockParameters)
