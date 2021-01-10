const util = require('../util')

const mockParameters = {
  createIso: {
    url: 'https://someurl.com/my-iso.iso'
  },
  getIso: {
    'iso-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteIso: {
    'iso-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  }
}

const mockResponses = {
  listIsos: {
    isos: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        date_created: '2020-10-10T01:56:20+00:00',
        filename: 'my-iso.iso',
        size: 120586240,
        md5sum: '77ba289bdc966ec996278a5a740d96d8',
        sha512sum:
          '2b31b6fcab34d6ea9a6b293601c39b90cb044e5679fcc5f71838d389459527079ce2b2cd9595e8cc727c7818f9166e8caa326ddaf832dcf8444162291da6214e',
        status: 'complete'
      }
    ],
    meta: {
      total: 1,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  createIso: {
    iso: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      filename: 'my-iso.iso',
      status: 'pending'
    }
  },
  getIso: {
    iso: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      filename: 'alpine-standard-3.12.0-x86.iso',
      size: 120586240,
      md5sum: '77ba289bdc966ec996278a5a740d96d8',
      sha512sum:
        '2b31b6fcab34d6ea9a6b293601c39b90cb044e5679fcc5f71838d389459527079ce2b2cd9595e8cc727c7818f9166e8caa326ddaf832dcf8444162291da6214e',
      status: 'complete'
    }
  }
}

util.createTestSuite('iso', mockParameters, mockResponses)
