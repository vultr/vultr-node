const expect = require('chai').expect
const vultr = require('../../src/index')
const nock = require('nock')

const mock = {
  list: {
    '167': {
      OSID: 167,
      name: 'CentOS 7 x64',
      arch: 'x64',
      family: 'centos',
      windows: false
    },
    '179': {
      OSID: 179,
      name: 'CoreOS Stable',
      arch: 'x64',
      family: 'coreos',
      windows: false
    },
    '194': {
      OSID: 194,
      name: 'Debian 8 i386 (jessie)',
      arch: 'i386',
      family: 'debian',
      windows: false
    }
  }
}

describe('os', () => {
  describe('list()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {})
        .get('/v1/os/list')
        .reply(200, mock.list)
    })

    it('gets the os list', () => {
      const vultrInstance = vultr.initialize()
      return vultrInstance.os.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })
})
