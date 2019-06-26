const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  list: {
    '543d34149403a': {
      BACKUPID: '543d34149403a',
      date_created: '2014-10-14 12:40:40',
      description: 'Automatic server backup',
      size: '42949672960',
      status: 'complete'
    },
    '543d340f6dbce': {
      BACKUPID: '543d340f6dbce',
      date_created: '2014-10-13 16:11:46',
      description: '',
      size: '10000000',
      status: 'complete'
    }
  }
}

describe('backup', () => {
  describe('list()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .get('/v1/backup/list')
        .reply(200, mock.list)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.backup.list()
      }).to.throw(Error)
    })

    it('gets the list of backups', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.backup.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })

  describe('list({ BACKUPID })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com')
        .get('/v1/backup/list')
        .query({
          BACKUPID: '543d340f6dbce'
        })
        .reply(200, mock.list['543d340f6dbce'])
    })

    it('gets the list of filtered backups', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.backup
        .list({
          BACKUPID: '543d340f6dbce'
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.list['543d340f6dbce'])
        })
    })
  })
})
