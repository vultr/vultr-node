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
  },
  create: {
    SCRIPTID: 5
  }
}

describe('startup-script', () => {
  describe('list()', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
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

  describe('delete({ SCRIPTID })', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/startupscript/destroy', {
          SCRIPTID: 5
        })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.startupScript.delete()
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.startupScript.delete()
      }).to.throw(Error)
    })

    it('deletes the specified start up script', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.startupScript.delete({ SCRIPTID: 5 }).then(response => {
          expect(response).to.equal('undefined')
        })
      })
    })
  })

  describe('create({ name, script })', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/startupscript/create', {
          name: 'Hello World',
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
        .reply(200, mock.create)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.startupScript.create({
          name: 'Hello World',
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.startupScript.create({
          name: 'Hello World'
        })
      }).to.throw(Error)

      expect(() => {
        vultrInstance.startupScript.create({
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
      }).to.throw(Error)

      vultrInstance.startupScript
        .create({
          name: 'Hello World',
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.create)
        })
    })

    it('creates a start up script', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      vultrInstance.startupScript
        .create({
          name: 'Hello World',
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
        .then(response => {
          expect(typeof response).to.equal('object')
          expect(response).to.deep.equal(mock.create)
        })
    })
  })

  describe('update({ SCRIPTID, name, script })', () => {
    beforeEach(() => {
      nock(config.baseUrl, config.headers)
        .post('/v1/startupscript/update', {
          SCRIPTID: '5',
          name: 'Hello World',
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
        .reply(200, undefined)
    })

    it('requires an API key', () => {
      const vultrInstance = vultr.initialize()

      expect(() => {
        vultrInstance.startupScript.update({
          SCRIPTID: '5',
          name: 'Hello World',
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
      }).to.throw(Error)
    })

    it('requires all non-optional parameters', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      expect(() => {
        vultrInstance.startupScript.update({
          name: 'Hello World'
        })
      }).to.throw(Error)

      expect(() => {
        vultrInstance.startupScript.update({
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
      }).to.throw(Error)

      vultrInstance.startupScript
        .update({
          SCRIPTID: '5',
          name: 'Hello World',
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })

    it('updates a start up script', () => {
      const vultrInstance = vultr.initialize({ apiKey: config.apiKey })

      vultrInstance.startupScript
        .update({
          SCRIPTID: '5',
          name: 'Hello World',
          script: '#!/bin/bash\necho hello world > /root/hello'
        })
        .then(response => {
          expect(typeof response).to.equal('undefined')
        })
    })
  })
})
