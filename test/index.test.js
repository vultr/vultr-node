const expect = require('chai').expect
const vultr = require('../src/index')
const config = require('./config')

describe('Vultr Instance', () => {
  it('initializes as an object', () => {
    const vultrInstance = vultr.initialize({ apiKey: config.apiKey })
    expect(typeof vultrInstance).to.equal('object')
  })
})
