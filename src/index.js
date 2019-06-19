exports.initialize = config => {
  const util = require('./util')
  const account = require('./api/account')
  const plans = require('./api/plans')
  const userConfiguration = config

  const createRequestFunction = endpoint => {
    return parameters => {
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
              console.error('Missing parameter', endpoint.parameters[parameter])
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
    plans: {
      list: createRequestFunction(plans.list)
    }
  }
}
