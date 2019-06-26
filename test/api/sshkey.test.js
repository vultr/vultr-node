const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  list: {
    '541b4960f23bd': {
      SSHKEYID: '541b4960f23bd',
      date_created: null,
      name: 'test',
      ssh_key: 'ssh-rsa AA... test@example.com'
    },
    '5b80207b1821f': {
      SSHKEYID: '5b80207b1821f',
      date_created: '2018-08-24 15:12:59',
      name: 'test@vultr-iMac.local',
      ssh_key: 'ssh-rsa AA... test@vultr-iMac.local'
    }
  }
}

describe('sshkey', () => {
  describe('list()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .get('/v1/sshkey/list')
        .reply(200, mock.list)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.sshkey.list()
      }).to.throw(Error)
    })

    it('gets the list of sshkeys', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.sshkey.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })
})
