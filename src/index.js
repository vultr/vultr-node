exports.initialize = config => {
  const util = require('./util')
  const account = require('./api/account')
  const app = require('./api/app')
  const auth = require('./api/auth')
  const plans = require('./api/plans')
  const userConfiguration = config

  /**
   * Creates a function that allows a user to pass parameters to the functions
   * defined in the returned object of the initialize function. The function returned
   * allows a user to pass parameters to the functions called by passing an Object. This
   * function will then check the endpoint configuration to ensure all parameters passed
   * are valid and complete before sending out an API request.
   *
   * @param {*} endpoint the API endpoint configuration as defined in /api
   */
  const createRequestFunction = endpoint => {
    return parameters => {
      if (endpoint.apiKeyRequired) {
        if (!userConfiguration.apiKey) {
          return new Error('API key required for ', endpoint.url)
        }
      }
      if (endpoint.parameters) {
        if (typeof parameters !== 'object') {
          return new Error('Parameters must be passed in as an object.')
        } else {
          let requestParameters = {}

          for (let parameter in endpoint.parameters) {
            if (
              !endpoint.parameters[parameter].optional &&
              !parameters[parameter]
            ) {
              return new Error(
                'Missing parameter',
                endpoint.parameters[parameter]
              )
            } else if (parameters[parameter]) {
              requestParameters[parameter] = parameters[parameter]
            }
          }

          return util.makeApiRequest(
            userConfiguration,
            endpoint,
            requestParameters
          )
        }
      }

      return util.makeApiRequest(userConfiguration, endpoint)
    }
  }

  return {
    account: {
      info: createRequestFunction(account.info)
    },
    app: {
      list: createRequestFunction(app.list)
    },
    auth: {
      info: createRequestFunction(auth.info)
    },
    plans: {
      list: createRequestFunction(plans.list)
    }
  }
}
