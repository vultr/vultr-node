const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  info: {
    balance: '-460.37',
    pending_charges: '9.87',
    last_payment_date: '2019-04-16 20:10:18',
    last_payment_amount: '-500.00'
  }
}

describe('account', () => {
  describe('info()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .get('/v1/account/info')
        .reply(200, mock.info)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.account.info()
      }).to.throw(Error)
    })

    it('gets the account information', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.account.info().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.info)
      })
    })
  })
})
