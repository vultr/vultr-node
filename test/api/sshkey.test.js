const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  create: {
    SSHKEYID: '5d13cdbd9cbae'
  },
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
  describe('create()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/sshkey/create', {
          name: 'vultr-node-sshkey',
          ssh_key: 'ssh-rsa AA... test@example.com'
        })
        .reply(200, mock.create)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.sshkey.create()
      }).to.throw(Error)
    })

    it('requires the ssh_key parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.sshkey.create({ name: 'vultr-node-sshkey' })
      }).to.throw(Error)
    })

    it('creates an ssh key', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.sshkey
        .create({
          name: 'vultr-node-sshkey',
          ssh_key: 'ssh-rsa AA... test@example.com'
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.create)
        })
    })
  })

  describe('delete()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/sshkey/destroy', {
          SSHKEYID: '5d14f139037a1'
        })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.sshkey.delete()
      }).to.throw(Error)
    })

    it('requires the SSHKEYID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.sshkey.delete({})
      }).to.throw(Error)
    })

    it('deletes an ssh key', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.sshkey
        .delete({
          SSHKEYID: '5d14f139037a1'
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })

  describe('list()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
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

  describe('update()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/sshkey/update', {
          SSHKEYID: '5d14f139037a1',
          name: 'vultr-node-sshkey-update',
          ssh_key: 'ssh-rsa AA... test@example.com'
        })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.sshkey.update()
      }).to.throw(Error)
    })

    it('requires the SSHKEYID parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.sshkey.update({ name: 'vultr-node-sshkey-update' })
      }).to.throw(Error)
    })

    it('updates an ssh key', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.sshkey
        .update({
          SSHKEYID: '5d14f139037a1',
          name: 'vultr-node-sshkey-update',
          ssh_key: 'ssh-rsa AA... test@example.com'
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })
})
