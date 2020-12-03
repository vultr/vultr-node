const expect = require('chai').expect
const vultr = require('../src/index')
const config = require('./config')

describe('Vultr Instance', () => {
  it('initializes as an object', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(typeof vultrInstance).to.equal('object')
  })

  it('requires an API key for endpoints that require an API key', () => {
    const vultrInstance = vultr.initialize()
    expect(() => {
      vultrInstance.account.getInfo()
    }).to.throw(Error)
  })

  it('requires parameters to be sent as an object', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.backup.list(1)
    }).to.throw(Error)
  })

  it('ignores parameters sent to endpoints that do not accept parameters', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(
      typeof vultrInstance.account.getInfo({ param1: 'foo', param2: 'bar' })
    ).to.equal('object')
  })

  it('ignores extra parameters sent to endpoints that require parameters', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(
      typeof vultrInstance.iso.create({
        url: 'https://templeos.org/Downloads/TempleOSLite.ISO',
        param1: 'foo',
        param2: 'bar'
      })
    ).to.equal('object')
  })

  it('requires all parameters', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.iso.create({})
    }).to.throw(Error)
  })

  it('allows number parameters to be passed in as a number or string', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(
      typeof vultrInstance.server.create({
        DCID: '1',
        VPSPLANID: '202',
        OSID: '127'
      })
    ).to.equal('object')
  })

  it('requires number parameters to be contain only number characters', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.server.create({
        DCID: '%',
        VPSPLANID: '!@#$',
        OSID: '^&*('
      })
    }).to.throw(Error)
  })

  it('requires required non-array and non-number parameters to match the specified parameter type', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.iso.create({ url: 1 })
    }).to.throw(Error)
  })

  it('requires required array parameters to be passed as an array', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.user.create({
        email: 'test@test.com',
        name: 'test testerson',
        password: 'password',
        acls: 'manage_users'
      })
    }).to.throw(Error)
  })
})
