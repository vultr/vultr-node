const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  create: {
    NETWORKID: 'net59a0526477dd3'
  },
  list: {
    net539626f0798d7: {
      DCID: '1',
      NETWORKID: 'net539626f0798d7',
      date_created: '2017-08-25 12:23:45',
      description: 'test1',
      v4_subnet: '10.99.0.0',
      v4_subnet_mask: 24
    },
    net53962b0f2341f: {
      DCID: '1',
      NETWORKID: 'net53962b0f2341f',
      date_created: '2014-06-09 17:45:51',
      description: 'vultr',
      v4_subnet: '0.0.0.0',
      v4_subnet_mask: 0
    }
  }
}

describe('network', () => {
  describe('create({ DCID, description, v4_subnet, v4_subnet_mask})', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/network/create', {
          DCID: 1,
          description: 'my network',
          v4_subnet: '10.0.0.0',
          v4_subnet_mask: 24
        })
        .reply(200, mock.create)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.network.create({
          DCID: 1,
          description: 'my network',
          v4_subnet: '10.0.0.0',
          v4_subnet_mask: 24
        })
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.network.create()
      }).to.throw(Error)
    })

    it('creates a private network', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.network
        .create({
          DCID: 1,
          description: 'my network',
          v4_subnet: '10.0.0.0',
          v4_subnet_mask: 24
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.create)
        })
    })
  })

  describe('list()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .get('/v1/network/list')
        .reply(200, mock.list)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.network.list()
      }).to.throw(Error)
    })

    it('lists all private networks', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      vultrInstance.network.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })
})
