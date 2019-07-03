const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  create: {
    SUBID: '1313217'
  },
  list: [
    {
      SUBID: 1313216,
      date_created: '2016-03-29 10:10:04',
      cost_per_month: 10,
      status: 'pending',
      size_gb: 100,
      DCID: 1,
      attached_to_SUBID: null,
      label: 'files1'
    },
    {
      SUBID: 1313217,
      date_created: '2016-31-29 10:10:48',
      cost_per_month: 5,
      status: 'active',
      size_gb: 50,
      DCID: 1,
      attached_to_SUBID: 1313207,
      label: 'files2'
    }
  ]
}

describe('block', () => {
  describe('attach({ SUBID, attach_to_SUBID })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/block/attach', { SUBID: 1, attach_to_SUBID: 2 })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.attach()
      }).to.throw(Error)
    })

    it('requires the SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.attach({ attach_to_SUBID: 2 })
      }).to.throw(Error)
    })

    it('requires the attach_to_SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.attach({ SUBID: 1 })
      }).to.throw(Error)
    })

    it('attaches the block storage subscription to a VPS subscription', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block
        .attach({
          SUBID: 1,
          attach_to_SUBID: 2
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })

  describe('create({ DCID, size_gb })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/block/create', { DCID: 1, size_gb: 2 })
        .reply(200, mock.create)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.create()
      }).to.throw(Error)
    })

    it('requires the DCID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.create({ size_gb: 2 })
      }).to.throw(Error)
    })

    it('requires the size_gb parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.create({ DCID: 1 })
      }).to.throw(Error)
    })

    it('creates a block storage subscription', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block
        .create({
          DCID: 1,
          size_gb: 2
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.create)
        })
    })
  })

  describe('delete({ SUBID })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/block/delete', { SUBID: 1 })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.delete()
      }).to.throw(Error)
    })

    it('requires the SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.delete()
      }).to.throw(Error)
    })

    it('deletes the block storage subscription at the specified SUBID', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block
        .delete({
          SUBID: 1
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })

  describe('detach({ SUBID })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/block/detach', { SUBID: 1 })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.detach()
      }).to.throw(Error)
    })

    it('requires the SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.detach()
      }).to.throw(Error)
    })

    it('detaches the block storage subscription at the specified SUBID', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block
        .detach({
          SUBID: 1
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })

  describe('setLabel({ SUBID, label })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/block/label_set', { SUBID: 1, label: 'example' })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.setLabel()
      }).to.throw(Error)
    })

    it('requires the SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.setLabel({ label: 'example' })
      }).to.throw(Error)
    })

    it('requires the label parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.setLabel({ SUBID: 1 })
      }).to.throw(Error)
    })

    it('sets the label of a block storage subscription', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block
        .setLabel({
          SUBID: 1,
          label: 'example'
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
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
        .get('/v1/block/list')
        .reply(200, mock.list)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.setLabel()
      }).to.throw(Error)
    })

    it('gets the list of active block storage subscriptions', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block.list().then(response => {
        expect(Array.isArray(response))
        expect(response).to.deep.equal(mock.list)
      })
    })
  })

  describe('resize({ SUBID, size_gb })', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .post('/v1/block/resize', { SUBID: 1, size_gb: 2 })
        .reply(200)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.resize()
      }).to.throw(Error)
    })

    it('requires the SUBID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.resize({ size_gb: 2 })
      }).to.throw(Error)
    })

    it('requires the size_gb parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.block.resize({ SUBID: 1 })
      }).to.throw(Error)
    })

    it('resizes the specified block storage volume', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.block
        .resize({
          SUBID: 1,
          size_gb: 2
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })
})
