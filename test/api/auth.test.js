const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  info: {
    acls: ['subscriptions', 'billing', 'support', 'provisioning'],
    email: 'example@vultr.com',
    name: 'Example Account'
  }
}

describe('auth', () => {
  describe('info()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com')
        .get('/v1/auth/info')
        .reply(200, mock.info)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.account.info()
      }).to.throw(Error)
    })

    it('gets the list of available applications', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.auth.info().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.info)
      })
    })
  })
})
