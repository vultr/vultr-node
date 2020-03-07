exports.createTestSuite = (specificationFile, mockData, mockParameters) => {
  const expect = require('chai').expect
  const vultr = require('../src/index')
  const config = require('./config')
  const nock = require('nock')
  const specification = require(`../src/api/${specificationFile}`)
  const apiModule = specificationFile.replace(/-([a-z])/g, function (str) {
    return str[1].toUpperCase()
  })

  describe(`${apiModule}`, () => {
    for (let key in specification) {
      describe(`${key}()`, () => {
        const endpoint = specification[key]
        let requiredParameters = {}

        if (endpoint.parameters !== undefined) {
          for (let parameter in endpoint.parameters) {
            if (endpoint.parameters[parameter].required) {
              requiredParameters[parameter] = endpoint.parameters[parameter]
            }
          }
        }


        beforeEach(() => {
          if (endpoint.requestType === 'GET') {
            nock(config.baseUrl, endpoint.apiKeyRequired ? config.headers : {})
              .get(`/${config.apiVersion}${endpoint.url}`)
              .query((mockParameters && mockParameters[key]) || {})
              .reply(200, mockData[key] || undefined)
          } else if (endpoint.requestType === 'POST') {
            nock(config.baseUrl, config.headers)
              .post(
                `/${config.apiVersion}${endpoint.url}`,
                (mockParameters && mockParameters[key]) || {}
              )
              .reply(200, mockData[key] || undefined)
          }
        })

        if (endpoint.apiKeyRequired) {
          it('requires an API key', () => {
            const vultrInstance = vultr.initialize()

            expect(() => {
              vultrInstance[apiModule][key]()
            }).to.throw(Error)
          })
        }

        if (!endpoint.apiKeyRequired) {
          it('does not require an API key', () => {
            const vultrInstance = vultr.initialize()

            vultrInstance[apiModule][key](
              (mockParameters && mockParameters[key]) || {}
            ).then(response => {
              if (mockData[key]) {
                expect(response).to.deep.equal(mockData[key])
              } else {
                expect(response).to.equal(undefined)
              }
            })
          })
        }

        if (Object.keys(requiredParameters).length > 0) {
          it('fails when required parameters are not set', () => {
            const vultrInstance = vultr.initialize(
              endpoint.apiKeyRequired ? { apiKey: config.apiKey } : {}
            )

            expect(() => {
              vultrInstance[apiModule][key]()
            }).to.throw(Error)
          })
        }

        it('successfully communicates with the API', () => {
          const vultrInstance = vultr.initialize(
            endpoint.apiKeyRequired ? { apiKey: config.apiKey } : {}
          )

          vultrInstance[apiModule][key](
            (mockParameters && mockParameters[key]) || {}
          ).then(response => {
            if (mockData[key]) {
              expect(response).to.deep.equal(mockData[key])
            } else {
              expect(response).to.equal(undefined)
            }
          })
        })
      })
    }
  })
}
