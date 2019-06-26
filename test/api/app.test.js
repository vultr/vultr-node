const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  list: {
    '1': {
      APPID: '1',
      name: 'LEMP',
      short_name: 'lemp',
      deploy_name: 'LEMP on CentOS 6 x64',
      surcharge: 0
    },
    '2': {
      APPID: '2',
      name: 'WordPress',
      short_name: 'wordpress',
      deploy_name: 'WordPress on CentOS 6 x64',
      surcharge: 0
    }
  }
}

describe('account', () => {
  describe('info()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com')
        .get('/v1/app/list')
        .reply(200, mock.list)
    })

    it('does not require an API key', () => {
      const vultrInstance = vultr.initialize()
      return vultrInstance.app.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })

    it('gets the list of available applications', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.app.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })
})
