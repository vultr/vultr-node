exports.createTestSuite = (specificationFile, mockParameters, mockResponse) => {
  const vultr = require('../src/index')
  const config = require('./config')
  const fetch = require('node-fetch')
  const specification = require(`../src/api/${specificationFile}`)
  const Headers = jest.requireActual('node-fetch').Headers
  const Response = jest.requireActual('node-fetch').Response
  const apiModule = specificationFile.replace(/-([a-z])/g, function (str) {
    return str[1].toUpperCase()
  })
  const validRequestTypes = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']

  jest.mock('node-fetch', () => jest.fn())

  describe(`${apiModule}`, () => {
    for (const key in specification) {
      describe(`${key}()`, () => {
        const endpoint = specification[key]
        const requiredParameters = {}

        if (endpoint.parameters !== undefined) {
          for (const parameter in endpoint.parameters) {
            if (endpoint.parameters[parameter].required) {
              requiredParameters[parameter] = endpoint.parameters[parameter]
            }
          }
        }

        it('has a valid request type', () => {
          expect(validRequestTypes.includes(endpoint.requestType)).toEqual(true)
        })

        if (endpoint.apiKeyRequired) {
          it('requires an API key', () => {
            const vultrInstance = vultr.initialize()

            expect(() => {
              vultrInstance[apiModule][key]()
            }).toThrow(Error)
          })
        } else {
          it('does not require an API key', () => {
            const vultrInstance = vultr.initialize()
            const data = mockResponse[key]
            const responseData = {
              ok: true,
              headers: new Headers({
                'Content-Type': data !== undefined ? 'application/json' : ''
              })
            }

            fetch.mockResolvedValue(
              new Response(JSON.stringify(data), responseData)
            )

            vultrInstance[apiModule][key](
              (mockParameters && mockParameters[key]) || {}
            ).then((response) => {
              if (data !== undefined) {
                expect(response).toEqual(data)
              } else {
                expect(response).toEqual(undefined)
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
            }).toThrow(Error)
          })
        }

        it('successfully communicates with the API', () => {
          const vultrInstance = vultr.initialize(
            endpoint.apiKeyRequired ? { apiKey: config.apiKey } : {}
          )
          const data = mockResponse[key]
          const responseData = {
            ok: true,
            headers: new Headers({
              'Content-Type': data !== undefined ? 'application/json' : ''
            })
          }

          fetch.mockResolvedValue(
            new Response(JSON.stringify(data), responseData)
          )

          vultrInstance[apiModule][key](
            (mockParameters && mockParameters[key]) || {}
          ).then((response) => {
            if (data !== undefined) {
              expect(response).toEqual(data)
            } else {
              expect(response).toEqual(undefined)
            }
          })
        })
      })
    }
  })
}
