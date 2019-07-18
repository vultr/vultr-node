const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  create: {
    USERID: '564a1a88947b4',
    api_key: 'AAAAAAAA'
  },
  list: [
    {
      USERID: '564a1a7794d83',
      name: 'example user 1',
      email: 'example@vultr.com',
      api_enabled: 'yes',
      acls: ['manage_users', 'subscriptions', 'billing', 'provisioning']
    },
    {
      USERID: '564a1a88947b4',
      name: 'example user 2',
      email: 'example@vultr.com',
      api_enabled: 'no',
      acls: ['support', 'dns']
    }
  ]
}

describe('user', () => {
  describe('create({ email, name, password, acls })', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/user/create', {
          email: 'test@test.com',
          name: 'test testerson',
          password: 'password',
          acls: ['manage_users', 'subscription', 'provisioning']
        })
        .reply(200, mock.create)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.user.create()
      }).to.throw(Error)
    })

    it('requires the email parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.user.create({
          name: 'test testerson',
          password: 'password',
          acls: ['manage_users', 'subscription', 'provisioning']
        })
      }).to.throw(Error)
    })

    it('requires the name parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.user.create({
          email: 'test@test.com',
          password: 'password',
          acls: ['manage_users', 'subscription', 'provisioning']
        })
      }).to.throw(Error)
    })

    it('requires the password parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.user.create({
          email: 'test@test.com',
          name: 'test testerson',
          acls: ['manage_users', 'subscription', 'provisioning']
        })
      }).to.throw(Error)
    })

    it('requires the acls parameter', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      expect(() => {
        vultrInstance.user.create({
          email: 'test@test.com',
          name: 'test testerson',
          password: 'password'
        })
      }).to.throw(Error)
    })

    it('creates a user with the specified parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.user
        .create({
          email: 'test@test.com',
          name: 'test testerson',
          password: 'password',
          acls: ['manage_users', 'subscription', 'provisioning']
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.create)
        })
    })
  })

  describe('delete({ USERID })', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/user/delete', {
          USERID: '564a1a88947b4'
        })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.user.delete()
      }).to.throw(Error)
    })

    it('requires the USERID parameter', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.user.delete()
      }).to.throw(Error)
    })

    it('deletes the specified user', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.user
        .delete({
          USERID: '564a1a88947b4'
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })

  describe('list()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .get('/v1/user/list')
        .reply(200, mock.list)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.user.delete()
      }).to.throw(Error)
    })

    it('lists the users on the account', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
      return vultrInstance.user.list().then(response => {
        expect(response).to.be.an('array')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })

  describe('update()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/user/update', {
          USERID: '564a1a88947b4'
        })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.user.update()
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.user.update()
      }).to.throw(Error)
    })

    it('updates a user', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      return vultrInstance.user
        .update({
          USERID: '564a1a88947b4'
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })
})
