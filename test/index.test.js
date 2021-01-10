const vultr = require('../src/index')
const config = require('./config')

describe('Vultr Instance', () => {
  it('initializes as an object', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(typeof vultrInstance).toEqual('object')
  })

  it('requires an API key for endpoints that require an API key', () => {
    const vultrInstance = vultr.initialize()
    expect(() => {
      vultrInstance.account.getAccountInfo()
    }).toThrow(Error)
  })

  it('requires parameters to be sent as an object', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.backups.listBackups(1)
    }).toThrow(Error)
  })

  it('ignores parameters sent to endpoints that do not accept parameters', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(
      typeof vultrInstance.account.getAccountInfo({
        param1: 'foo',
        param2: 'bar'
      })
    ).toEqual('object')
  })

  it('ignores extra parameters sent to endpoints that require parameters', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(
      typeof vultrInstance.bareMetal.createInstance({
        region: 'ams',
        plan: 'vbm-4c-32gb',
        param1: 'foo',
        param2: 'bar'
      })
    ).toEqual('object')
  })

  it('requires all parameters', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.bareMetal.createInstance({})
    }).toThrow(Error)
  })

  it('allows number parameters to be passed in as a number or string', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(
      typeof vultrInstance.blockStorage.createStorage({
        region: 'EWR',
        size_gb: '50'
      })
    ).toEqual('object')
  })

  it('requires number parameters to be contain only number characters', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.blockStorage.createStorage({
        region: 'EWR',
        size_gb: '!@#$'
      })
    }).toThrow(Error)
  })

  it('requires required non-array and non-number parameters to match the specified parameter type', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.dns.createDomain({ domain: 1 })
    }).toThrow(Error)
  })

  it('requires required array parameters to be passed as an array', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(() => {
      vultrInstance.users.createUser({
        email: 'test@test.com',
        name: 'test testerson',
        password: 'password',
        api_enabled: true,
        acls: 'manage_users'
      })
    }).toThrow(Error)
  })
})
