exports.initialize = config => {
  const util = require('./util')
  const account = require('./api/account')
  const app = require('./api/app')
  const auth = require('./api/auth')
  const backup = require('./api/backup')
  const block = require('./api/block')
  const dns = require('./api/dns')
  const firewall = require('./api/firewall')
  const iso = require('./api/iso')
  const network = require('./api/network')
  const os = require('./api/os')
  const plans = require('./api/plans')
  const regions = require('./api/regions')
  const reservedIp = require('./api/reserved-ip')
  const snapshot = require('./api/snapshot')
  const sshkey = require('./api/sshkey')
  const startupScript = require('./api/startup-script')
  const user = require('./api/user')
  const userConfiguration = config

  /**
   * Creates a function that allows a user to pass parameters to the functions
   * defined in the returned object of the initialize function. The function returned
   * allows a user to pass parameters to the functions called by passing an Object. This
   * function will then check the endpoint configuration to ensure all parameters passed
   * are valid and complete before sending out an API request.
   *
   * @param {String} endpoint the API endpoint configuration as defined in /api
   */
  const createRequestFunction = endpoint => {
    return parameters => {
      // Check if the endpoint requires an API key
      if (endpoint.apiKeyRequired) {
        if (userConfiguration === undefined || !userConfiguration.apiKey) {
          throw new Error(`API key required for ${endpoint.url}`)
        }
      }

      // Check if the endpoint has parameters specified
      if (endpoint.parameters) {
        if (parameters) {
          if (typeof parameters !== 'object') {
            throw new Error('Parameters must be passed in as an object.')
          } else {
            // Validate the parameters the user passed in
            let requestParameters = {}

            for (let parameter in endpoint.parameters) {
              const endpointParameter = endpoint.parameters[parameter]
              const userParameter = parameters[parameter]

              if (endpointParameter.required && !userParameter) {
                throw new Error(`Missing parameter: ${parameter}`)
              } else if (userParameter) {
                if (
                  endpointParameter.type !== 'array' &&
                  typeof userParameter !==
                    // eslint-disable-next-line valid-typeof
                    endpointParameter.type
                ) {
                  throw new Error(`Invalid parameter type: ${parameter}`)
                } else if (
                  endpointParameter.type === 'array' &&
                  !Array.isArray(userParameter)
                ) {
                  throw new Error(`Invalid parameter type: ${parameter}`)
                } else {
                  requestParameters[parameter] = userParameter
                }
              }
            }

            return util.makeApiRequest(
              userConfiguration,
              endpoint,
              requestParameters
            )
          }
        } else {
          // No parameters passed, check that none are required
          for (let parameter in endpoint.parameters) {
            if (endpoint.parameters[parameter].required) {
              throw new Error(`Missing parameter: ${parameter}`)
            }
          }
        }
      }

      // All options are validated, return a function to call the endpoint
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
    backup: {
      list: createRequestFunction(backup.list)
    },
    block: {
      attach: createRequestFunction(block.attach),
      create: createRequestFunction(block.create),
      delete: createRequestFunction(block.delete),
      detach: createRequestFunction(block.detach),
      setLabel: createRequestFunction(block.setLabel),
      list: createRequestFunction(block.list),
      resize: createRequestFunction(block.resize)
    },
    dns: {
      createDomain: createRequestFunction(dns.createDomain),
      deleteDomain: createRequestFunction(dns.deleteDomain),
      list: createRequestFunction(dns.list)
    },
    firewall: {
      ruleList: createRequestFunction(firewall.ruleList),
      deleteGroup: createRequestFunction(firewall.deleteGroup),
      createGroup: createRequestFunction(firewall.createGroup)
    },
    iso: {
      create: createRequestFunction(iso.create),
      delete: createRequestFunction(iso.delete),
      list: createRequestFunction(iso.list),
      listPublic: createRequestFunction(iso.listPublic)
    },
    network: {
      create: createRequestFunction(network.create),
      delete: createRequestFunction(network.delete),
      list: createRequestFunction(network.list)
    },
    os: {
      list: createRequestFunction(os.list)
    },
    plans: {
      list: createRequestFunction(plans.list),
      listBareMetal: createRequestFunction(plans.listBareMetal),
      listVc2: createRequestFunction(plans.listVc2),
      listVdc2: createRequestFunction(plans.listVdc2),
      listVc2z: createRequestFunction(plans.listVc2z)
    },
    regions: {
      list: createRequestFunction(regions.list),
      availability: createRequestFunction(regions.availability),
      availabilityBareMetal: createRequestFunction(
        regions.availabilityBareMetal
      )
    },
    reservedIp: {
      list: createRequestFunction(reservedIp.list)
    },
    snapshot: {
      create: createRequestFunction(snapshot.create),
      createFromUrl: createRequestFunction(snapshot.createFromUrl),
      list: createRequestFunction(snapshot.list),
      delete: createRequestFunction(snapshot.delete)
    },
    sshkey: {
      create: createRequestFunction(sshkey.create),
      list: createRequestFunction(sshkey.list),
      delete: createRequestFunction(sshkey.delete),
      update: createRequestFunction(sshkey.update)
    },
    startupScript: {
      list: createRequestFunction(startupScript.list),
      delete: createRequestFunction(startupScript.delete),
      create: createRequestFunction(startupScript.create),
      update: createRequestFunction(startupScript.update)
    },
    user: {
      create: createRequestFunction(user.create),
      delete: createRequestFunction(user.delete),
      list: createRequestFunction(user.list),
      update: createRequestFunction(user.update)
    }
  }
}
