exports.initialize = (config) => {
  const util = require('./util')
  const account = require('./api/account')
  const app = require('./api/app')
  const api = require('./api/api')
  const backup = require('./api/backup')
  const baremetal = require('./api/baremetal')
  const block = require('./api/block')
  const dns = require('./api/dns')
  const firewall = require('./api/firewall')
  const iso = require('./api/iso')
  const loadBalancer = require('./api/load-balancer')
  const network = require('./api/network')
  const objectStorage = require('./api/object-storage')
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
  const createRequestFunction = (endpoint) => {
    return (parameters) => {
      // Check if the endpoint requires an API key
      if (endpoint.apiKeyRequired) {
        if (userConfiguration === undefined || !userConfiguration.apiKey) {
          // API key was not provided
          throw new Error(`API key required for ${endpoint.url}`)
        }
      }

      // Check if the endpoint has parameters specified
      if (endpoint.parameters) {
        if (parameters) {
          if (typeof parameters !== 'object') {
            // Parameters were not passed in as an object
            throw new Error('Parameters must be passed in as an object.')
          } else {
            // Validate the parameters the user passed in
            const requestParameters = {}

            for (const parameter in endpoint.parameters) {
              const endpointParameter = endpoint.parameters[parameter]
              const userParameter = parameters[parameter]

              if (endpointParameter.required && !userParameter) {
                // Parameters for the request are required, but none were passed in
                throw new Error(`Missing parameter: ${parameter}`)
              } else if (userParameter) {
                if (
                  endpointParameter.type === 'array' &&
                  !Array.isArray(userParameter)
                ) {
                  // Request requires array but array was not passed in
                  throw new Error(
                    `Invalid parameter type for ${parameter}, expected ${endpointParameter.type}`
                  )
                } else if (
                  endpointParameter.type === 'number' &&
                  isNaN(Number(userParameter))
                ) {
                  // Request requires a number but special character or alpha character was passed in
                  throw new Error(
                    `Invalid parameter type for ${parameter}, expected ${endpointParameter.type}`
                  )
                } else if (
                  endpointParameter.type !== 'array' &&
                  endpointParameter.type !== 'number' &&
                  typeof userParameter !==
                    // eslint-disable-next-line valid-typeof
                    endpointParameter.type
                ) {
                  // Request parameter type does not match the parameter type that was passed in
                  throw new Error(
                    `Invalid parameter type for ${parameter}, expected ${endpointParameter.type}`
                  )
                } else {
                  // Parameters successfully validated
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
          for (const parameter in endpoint.parameters) {
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
      getInfo: createRequestFunction(account.getInfo)
    },
    api: {
      getInfo: createRequestFunction(api.getInfo)
    },
    app: {
      list: createRequestFunction(app.list)
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
      appInfo: createRequestFunction(baremetal.appInfo),
      bandwidth: createRequestFunction(baremetal.bandwidth),
      getUserData: createRequestFunction(baremetal.getUserData),
      enableIPv6: createRequestFunction(baremetal.enableIPv6),
      setLabel: createRequestFunction(baremetal.setLabel),
      ipv6Info: createRequestFunction(baremetal.ipv6Info),
      ipv4Info: createRequestFunction(baremetal.ipv4Info),
      changeOS: createRequestFunction(baremetal.changeOS),
      listOS: createRequestFunction(baremetal.listOS),
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
      dnsSecInfo: createRequestFunction(dns.dnsSecInfo),
      updateRecord: createRequestFunction(dns.updateRecord),
      getSOA: createRequestFunction(dns.getSOA),
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
    loadBalancer: {
      getFullConfig: createRequestFunction(loadBalancer.getFullConfig),
      create: createRequestFunction(loadBalancer.create),
      delete: createRequestFunction(loadBalancer.delete),
      createForwardingRule: createRequestFunction(
        loadBalancer.createForwardingRule
      ),
      deleteForwardingRule: createRequestFunction(
        loadBalancer.deleteForwardingRule
      ),
      listForwardingRules: createRequestFunction(
        loadBalancer.listForwardingRules
      ),
      getGenericInfo: createRequestFunction(loadBalancer.getGenericInfo),
      updateGenericInfo: createRequestFunction(loadBalancer.updateGenericInfo),
      getHealthCheckInfo: createRequestFunction(
        loadBalancer.getHealthCheckInfo
      ),
      setHealthCheck: createRequestFunction(loadBalancer.setHealthCheck),
      attachInstance: createRequestFunction(loadBalancer.attachInstance),
      detachInstance: createRequestFunction(loadBalancer.detachInstance),
      attachedInstances: createRequestFunction(loadBalancer.attachedInstances),
      setLabel: createRequestFunction(loadBalancer.setLabel),
      list: createRequestFunction(loadBalancer.list),
      addSSL: createRequestFunction(loadBalancer.addSSL),
      hasSSL: createRequestFunction(loadBalancer.hasSSL),
      removeSSL: createRequestFunction(loadBalancer.removeSSL)
    },
    network: {
      create: createRequestFunction(network.create),
      delete: createRequestFunction(network.delete),
      list: createRequestFunction(network.list)
    },
    objectStorage: {
      create: createRequestFunction(objectStorage.create),
      delete: createRequestFunction(objectStorage.delete),
      list: createRequestFunction(objectStorage.list),
      setLabel: createRequestFunction(objectStorage.setLabel),
      listCluster: createRequestFunction(objectStorage.listCluster),
      regenerateKeys: createRequestFunction(objectStorage.regenerateKeys)
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
      appInfo: createRequestFunction(server.appInfo),
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
      addIPv4: createRequestFunction(server.addIPv4),
      listReverseIPv6: createRequestFunction(server.listReverseIPv6),
      ipv6Info: createRequestFunction(server.ipv6Info),
      setBackupSchedule: createRequestFunction(server.setBackupSchedule),
      getBackupSchedule: createRequestFunction(server.getBackupSchedule),
      ipv4Info: createRequestFunction(server.ipv4Info),
      listApps: createRequestFunction(server.listApps),
      setFirewallGroup: createRequestFunction(server.setFirewallGroup),
      destroyIPv4: createRequestFunction(server.destroyIPv4),
      restoreBackup: createRequestFunction(server.restoreBackup),
      isoAttach: createRequestFunction(server.isoAttach),
      restoreSnapshot: createRequestFunction(server.restoreSnapshot),
      listOS: createRequestFunction(server.listOS),
      isoStatus: createRequestFunction(server.isoStatus),
      listPrivateNetworks: createRequestFunction(server.listPrivateNetworks),
      isoDetach: createRequestFunction(server.isoDetach),
      disablePrivateNetwork: createRequestFunction(
        server.disablePrivateNetwork
      ),
      setDefaultReverseIPv4: createRequestFunction(
        server.setDefaultReverseIPv4
      ),
      deleteReverseIPv6: createRequestFunction(server.deleteReverseIPv6),
      enableDDoSProtection: createRequestFunction(server.enableDDoSProtection),
      disableDDoSProtection: createRequestFunction(server.disableDDoSProtection)
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
