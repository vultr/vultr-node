const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
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
  describe('list()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
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
