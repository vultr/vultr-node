const expect = require('chai').expect
const vultr = require('../src/index')
const nock = require('nock')
const account = require('./api/account.test')

describe('Vultr Instance', () => {
  describe('account', () => {
    describe('info()', () => {
      beforeEach(() => {
        nock('https://api.vultr.com')
          .get('/v1/account/info')
          .reply(200, account.info)
      })

      it('gets the account information', () => {
        const vultrInstance = vultr.initialize({ apiKey: '123456' })
        return vultrInstance.account.info().then(response => {
          expect(typeof response).to.equal('object')
          expect(response.balance).to.equal('-460.37')
          expect(response.last_payment_amount).to.equal('-500.00')
        })
      })
    })
  })
})
