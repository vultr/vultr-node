const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

describe('dns', () => {
  describe('createDomain({ domain, serverip })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/dns/create_domain', {
          domain: 'example.com',
          serverip: '10.0.0.0'
        })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.dns.createDomain({
          domain: 'example.com',
          serverip: '10.0.0.0'
        })
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.dns.createDomain()
      }).to.throw(Error)
    })

    it('creates a DNS domain', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.dns
        .createDomain({ domain: 'example.com', serverip: '10.0.0.0' })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })
})
