const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  ruleList: {
    '1': {
      rulenumber: 1,
      action: 'accept',
      protocol: 'icmp',
      port: '',
      subnet: '',
      subnet_size: 0,
      notes: ''
    },
    '2': {
      rulenumber: 2,
      action: 'accept',
      protocol: 'tcp',
      port: '80',
      subnet: '10.234.22.0',
      subnet_size: 24,
      notes: 'example'
    }
  }
}

describe('firewall', () => {
  describe('ruleList({ FIREWALLGROUPID, direction, ip_type })', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .get('/v1/firewall/rule_list')
        .query({
          FIREWALLGROUPID: '1234abcd',
          direction: 'in',
          ip_type: 'v4'
        })
        .reply(200, mock.ruleList)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.firewall.ruleList()
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.firewall.ruleList()
      }).to.throw(Error)

      expect(() => {
        vultrInstance.firewall.ruleList({ FIREWALLGROUPID: 1 })
      }).to.throw(Error)

      expect(() => {
        vultrInstance.firewall.ruleList({ FIREWALLGROUPID: 1, direction: 'in' })
      }).to.throw(Error)

      expect(() => {
        vultrInstance.firewall.ruleList({ FIREWALLGROUPID: 1, ip_type: 'v4' })
      }).to.throw(Error)

      expect(() => {
        vultrInstance.firewall.ruleList({ direction: 'in', ip_type: 'v4' })
      }).to.throw(Error)
    })

    it('lists all rules in a firewall group', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      return vultrInstance.firewall
        .ruleList({
          FIREWALLGROUPID: '1234abcd',
          direction: 'in',
          ip_type: 'v4'
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.ruleList)
        })
    })
  })

  describe('deleteGroup({ FIREWALLGROUPID })', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/firewall/group_delete', { FIREWALLGROUPID: '1234abcd' })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.firewall.deleteGroup({ FIREWALLGROUPID: '1234abcd' })
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.firewall.deleteGroup()
      }).to.throw(Error)
    })

    it('deletes the specified firewall group', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      vultrInstance.firewall
        .deleteGroup({ FIREWALLGROUPID: '1234abcd' })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })
})
