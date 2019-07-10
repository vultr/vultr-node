const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  create: {
    SNAPSHOTID: '544e52f31c706'
  },
  createFromUrl: {
    SNAPSHOTID: '544e52f31c706'
  },
  list: {
    '5359435d28b9a': {
      SNAPSHOTID: '5359435d28b9a',
      date_created: '2014-04-18 12:40:40',
      description: 'Test snapshot',
      size: '42949672960',
      status: 'complete',
      OSID: '127',
      APPID: '0'
    },
    '5359435dc1df3': {
      SNAPSHOTID: '5359435dc1df3',
      date_created: '2014-04-22 16:11:46',
      description: '',
      size: '10000000',
      status: 'complete',
      OSID: '127',
      APPID: '0'
    }
  }
}

describe('snapshot', () => {
  describe('create({ SUBID })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/snapshot/create', {
          SUBID: 1
        })
        .reply(200, mock.create)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.snapshot.create()
      }).to.throw(Error)
    })

    it('requires the SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.snapshot.create()
      }).to.throw(Error)
    })

    it('creates a snapshot', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      return vultrInstance.snapshot.create({ SUBID: 1 }).then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.create)
      })
    })
  })

  describe('createFromUrl({ url })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/snapshot/create_from_url', {
          url: 'http://example.com/path/to/disk_image.raw'
        })
        .reply(200, mock.createFromUrl)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.snapshot.createFromUrl()
      }).to.throw(Error)
    })

    it('requires the url parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.snapshot.createFromUrl()
      }).to.throw(Error)
    })

    it('creates a snapshot from a provided URL', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      return vultrInstance.snapshot
        .createFromUrl({ url: 'http://example.com/path/to/disk_image.raw' })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.createFromUrl)
        })
    })
  })

  describe('list()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .get('/v1/snapshot/list')
        .reply(200, mock.list)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.snapshot.list()
      }).to.throw(Error)
    })

    it('lists all snapshots', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      return vultrInstance.snapshot.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })
})
