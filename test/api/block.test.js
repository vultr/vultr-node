const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  create: {
    SUBID: '1313217'
  }
}

describe('block', () => {
  describe('attach({ SUBID, attach_to_SUBID })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/block/attach', { SUBID: 1, attach_to_SUBID: 2 })
        .reply(200)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.attach()
      }).to.throw(Error)
    })

    it('requires the SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.attach({ attach_to_SUBID: 2 })
      }).to.throw(Error)
    })

    it('requires the attach_to_SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.attach({ SUBID: 1 })
      }).to.throw(Error)
    })

    it('attaches the block storage subscription to a VPS subscription', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block
        .attach({
          SUBID: 1,
          attach_to_SUBID: 2
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })

  describe('create({ DCID, size_gb })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/block/create', { DCID: 1, size_gb: 2 })
        .reply(200, mock.create)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.create()
      }).to.throw(Error)
    })

    it('requires the DCID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.create({ size_gb: 2 })
      }).to.throw(Error)
    })

    it('requires the size_gb parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.create({ DCID: 1 })
      }).to.throw(Error)
    })

    it('creates a block storage subscription', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block
        .create({
          DCID: 1,
          size_gb: 2
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.create)
        })
    })
  })
})
