const expect = require('chai').expect
const vultr = require('../../src/index')
const config = require('../config')
const nock = require('nock')

const mock = {
  list: {
    '3': {
      SCRIPTID: '3',
      date_created: '2014-05-21 15:27:18',
      date_modified: '2014-05-21 15:27:18',
      name: 'test ',
      type: 'boot',
      script: '#!/bin/bash echo Hello World > /root/hello'
    },
    '5': {
      SCRIPTID: '5',
      date_created: '2014-08-22 15:27:18',
      date_modified: '2014-09-22 15:27:18',
      name: 'test ',
      type: 'pxe',
      script: '#!ipxe\necho Hello World\nshell'
    }
  }
}

describe('startup-script', () => {
  describe('list()', () => {
    beforeEach(() => {
      beforeEach(() => {
        nock('https://api.vultr.com', {
          reqheaders: {
            'API-Key': /[A-Z0-9]{36}/i
          }
        })
          .get('/v1/startupscript/list')
          .reply(200, mock.list)
      })

      it('requires an API key', () => {
        const vultrInstance = vultr.initialize()

        expect(() => {
          vultrInstance.startupScript.list()
        }).to.throw(Error)
      })

      it('lists the startup on the account', () => {
        const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

        vultrInstance.startupScript.list().then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.list)
        })
      })
    })
  })
})
