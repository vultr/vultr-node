const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  list: {
    '1': {
      VPSPLANID: '1',
      name: 'Starter',
      vcpu_count: '1',
      ram: '512',
      disk: '20',
      bandwidth: '1',
      price_per_month: '5.00',
      windows: false,
      plan_type: 'SSD',
      available_locations: [1, 2, 3]
    },
    '2': {
      VPSPLANID: '2',
      name: 'Basic',
      vcpu_count: '1',
      ram: '1024',
      disk: '30',
      bandwidth: '2',
      price_per_month: '8.00',
      windows: false,
      plan_type: 'SATA',
      available_locations: [],
      deprecated: true
    }
  },
  listBareMetal: {
    '100': {
      METALPLANID: '100',
      name: '65536 MB RAM,2x 240 GB SSD,5.00 TB BW',
      cpu_count: 1,
      cpu_model: 'E3-1270v6',
      ram: 65536,
      disk: '2x 240 GB SSD',
      bandwidth_tb: 5,
      price_per_month: 100,
      plan_type: 'SSD',
      deprecated: false,
      available_locations: [1, 2, 3]
    }
  },
  listVc2: {
    '1': {
      VPSPLANID: '1',
      name: 'Starter',
      vcpu_count: '1',
      ram: '512',
      disk: '20',
      bandwidth: '1',
      price_per_month: '5.00',
      plan_type: 'SSD'
    }
  }
}

describe('plans', () => {
  describe('list()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .get('/v1/plans/list')
        .reply(200, mock.list)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.block.attach()
      }).to.throw(Error)
    })

    it('gets the list of plans', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      return vultrInstance.plans.list().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.list)
      })
    })
  })

  describe('listBareMetal()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com', {
        reqheaders: {
          'API-Key': /[A-Z0-9]{36}/i
        }
      })
        .get('/v1/plans/list_baremetal')
        .reply(200, mock.listBareMetal)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()
      expect(() => {
        vultrInstance.plans.listBareMetal()
      }).to.throw(Error)
    })

    it('gets the list of bare metal plans', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      return vultrInstance.plans.listBareMetal().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.listBareMetal)
      })
    })
  })

  describe('listVc2()', () => {
    beforeEach(() => {
      nock('https://api.vultr.com')
        .get('/v1/plans/list_vc2')
        .reply(200, mock.listVc2)
    })

    it('does not require an API key', () => {
      const vultrInstance = vultr.initialize()

      return vultrInstance.plans.listVc2().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.listVc2)
      })
    })

    it('gets a list of all active vc2 plans', () => {
      const vultrInstance = vultr.initialize()

      return vultrInstance.plans.listVc2().then(response => {
        expect(typeof response).to.equal('object')
        expect(response).to.deep.equal(mock.listVc2)
      })
    })
  })
})
