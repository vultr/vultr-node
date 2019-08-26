exports.initialize = config => {
  const util = require('./util')
  const account = require('./api/account')
  const app = require('./api/app')
  const auth = require('./api/auth')
  const backup = require('./api/backup')
  const baremetal = require('./api/baremetal')
  const block = require('./api/block')
  const dns = require('./api/dns')
  const firewall = require('./api/firewall')
  const iso = require('./api/iso')
  const network = require('./api/network')
  const os = require('./api/os')
  const plans = require('./api/plans')
  const regions = require('./api/regions')
  const reservedIp = require('./api/reserved-ip')
  const server = require('./api/server')
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
    baremetal: {
      list: createRequestFunction(baremetal.list),
      delete: createRequestFunction(baremetal.delete),
      changeApp: createRequestFunction(baremetal.changeApp),
      setTag: createRequestFunction(baremetal.setTag),
      reinstall: createRequestFunction(baremetal.reinstall),
      reboot: createRequestFunction(baremetal.reboot),
      create: createRequestFunction(baremetal.create),
      listApps: createRequestFunction(baremetal.listApps),
      halt: createRequestFunction(baremetal.halt),
      getAppInfo: createRequestFunction(baremetal.getAppInfo),
      bandwidth: createRequestFunction(baremetal.bandwidth),
      getUserData: createRequestFunction(baremetal.getUserData),
      enableIPv6: createRequestFunction(baremetal.enableIPv6),
      setLabel: createRequestFunction(baremetal.setLabel),
      listIPv6: createRequestFunction(baremetal.listIPv6),
      listIPv4: createRequestFunction(baremetal.listIPv4),
      changeOS: createRequestFunction(baremetal.changeOS),
      listChangeOS: createRequestFunction(baremetal.listChangeOS),
      setUserData: createRequestFunction(baremetal.setUserData)
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
      list: createRequestFunction(dns.list),
      records: createRequestFunction(dns.records),
      deleteRecord: createRequestFunction(dns.deleteRecord),
      createRecord: createRequestFunction(dns.createRecord),
      enableDNSSec: createRequestFunction(dns.enableDNSSec),
      getDNSSecInfo: createRequestFunction(dns.getDNSSecInfo),
      updateRecord: createRequestFunction(dns.updateRecord),
      getSOAInfo: createRequestFunction(dns.getSOAInfo),
      updateSOA: createRequestFunction(dns.updateSOA)
    },
    firewall: {
      listRules: createRequestFunction(firewall.listRules),
      deleteGroup: createRequestFunction(firewall.deleteGroup),
      createGroup: createRequestFunction(firewall.createGroup),
      createRule: createRequestFunction(firewall.createRule),
      deleteRule: createRequestFunction(firewall.deleteRule),
      setGroupDescription: createRequestFunction(firewall.setGroupDescription),
      listGroup: createRequestFunction(firewall.listGroup)
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
      ),
      availabilityVc2: createRequestFunction(regions.availabilityVc2),
      availabilityVdc2: createRequestFunction(regions.availabilityVdc2)
    },
    reservedIp: {
      list: createRequestFunction(reservedIp.list),
      delete: createRequestFunction(reservedIp.delete),
      detach: createRequestFunction(reservedIp.detach),
      convert: createRequestFunction(reservedIp.convert),
      create: createRequestFunction(reservedIp.create),
      attach: createRequestFunction(reservedIp.attach)
    },
    server: {
      list: createRequestFunction(server.list),
      create: createRequestFunction(server.create),
      setLabel: createRequestFunction(server.setLabel),
      listUpgradePlan: createRequestFunction(server.listUpgradePlan),
      upgradePlan: createRequestFunction(server.upgradePlan),
      setTag: createRequestFunction(server.setTag),
      delete: createRequestFunction(server.delete),
      halt: createRequestFunction(server.halt),
      start: createRequestFunction(server.start),
      reboot: createRequestFunction(server.reboot),
      neighbors: createRequestFunction(server.neighbors),
      getAppInfo: createRequestFunction(server.getAppInfo),
      changeOS: createRequestFunction(server.changeOS),
      reinstall: createRequestFunction(server.reinstall),
      setUserData: createRequestFunction(server.setUserData),
      setReverseIPv4: createRequestFunction(server.setReverseIPv4),
      bandwidth: createRequestFunction(server.bandwidth),
      enablePrivateNetwork: createRequestFunction(server.enablePrivateNetwork),
      changeApp: createRequestFunction(server.changeApp),
      getUserData: createRequestFunction(server.getUserData),
      setReverseIPv6: createRequestFunction(server.setReverseIPv6),
      enableBackup: createRequestFunction(server.enableBackup),
      enableIPv6: createRequestFunction(server.enableIPv6),
      disableBackup: createRequestFunction(server.disableBackup),
      createIPv4: createRequestFunction(server.createIPv4),
      listReverseIPv6: createRequestFunction(server.listReverseIPv6),
      listIPv6: createRequestFunction(server.listIPv6),
      setBackupSchedule: createRequestFunction(server.setBackupSchedule),
      getBackupSchedule: createRequestFunction(server.getBackupSchedule),
      listIPv4: createRequestFunction(server.listIPv4),
      listChangeApp: createRequestFunction(server.listChangeApp),
      setFirewallGroup: createRequestFunction(server.setFirewallGroup),
      deleteIPv4: createRequestFunction(server.deleteIPv4)
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
