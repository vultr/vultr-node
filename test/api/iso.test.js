const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
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

describe('iso', () => {
  describe('listPublic()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .get('/v1/iso/list_public')
        .reply(200, mock.listPublic)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.iso.listPublic()
      }).to.throw(Error)
    })

    it('gets the list of public ISOs', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.iso.listPublic().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.listPublic)
      })
    })
  })
})
