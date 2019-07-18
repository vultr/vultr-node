const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  list: {
    domain: 'example.com',
    date_created: '2014-12-11 16:20:59'
  }
}

describe('dns', () => {
  describe('list()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .get('/v1/dns/list')
        .reply(200, mock.list)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.dns.list()
      }).to.throw(Error)
    })

    it('gets a list of DNS domains', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.dns.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })

  describe('createDomain({ domain, serverip })', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
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

  describe('deleteDomain({ domain})', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/dns/delete_domain', {
          domain: 'example.com'
        })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.dns.deleteDomain({
          domain: 'example.com'
        })
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.dns.deleteDomain()
      }).to.throw(Error)
    })

    it('deletes a DNS domain', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.dns
        .deleteDomain({ domain: 'example.com' })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })
})
