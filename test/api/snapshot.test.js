const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  create: {
    SNAPSHOTID: '544e52f31c706'
  }
}

describe('snapshot', () => {
  describe('create({ SUBID })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/snapshot/create', {
          SUBID: 1
        })
        .reply(200, mock.create)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.snapshot.create()
      }).to.throw(Error)
    })

    it('requires the SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.snapshot.create()
      }).to.throw(Error)
    })

    it('creates a snapshot', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      return vultrInstance.snapshot.create({ SUBID: 1 }).then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.create)
      })
    })
  })
})
