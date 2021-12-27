exports.initialize = (config) => {
  const util = require('./util')
  const account = require('./api/account')
  const applications = require('./api/applications')
  const backups = require('./api/backups')
  const bareMetal = require('./api/bare-metal')
  const billing = require('./api/billing')
  const blockStorage = require('./api/block-storage')
  const dns = require('./api/dns')
  const firewall = require('./api/firewall')
  const instances = require('./api/instances')
  const iso = require('./api/iso')
  const kubernetes = require('./api/kubernetes')
  const loadBalancers = require('./api/load-balancers')
  const objectStorage = require('./api/object-storage')
  const operatingSystems = require('./api/operating-systems')
  const plans = require('./api/plans')
  const privateNetworks = require('./api/private-networks')
  const regions = require('./api/regions')
  const reservedIps = require('./api/reserved-ips')
  const snapshots = require('./api/snapshots')
  const sshKeys = require('./api/ssh-keys')
  const startupScripts = require('./api/startup-scripts')
  const users = require('./api/users')
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
              } else if (userParameter || userParameter === '') {
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
      getAccountInfo: createRequestFunction(account.getAccountInfo)
    },
    applications: {
      listApplications: createRequestFunction(applications.listApplications)
    },
    backups: {
      listBackups: createRequestFunction(backups.listBackups),
      getBackup: createRequestFunction(backups.getBackup)
    },
    bareMetal: {
      listInstances: createRequestFunction(bareMetal.listInstances),
      createInstance: createRequestFunction(bareMetal.createInstance),
      getInstance: createRequestFunction(bareMetal.getInstance),
      updateInstance: createRequestFunction(bareMetal.updateInstance),
      deleteInstance: createRequestFunction(bareMetal.deleteInstance),
      getInstanceIpv4Addresses: createRequestFunction(
        bareMetal.getInstanceIpv4Addresses
      ),
      getInstanceIpv6Addresses: createRequestFunction(
        bareMetal.getInstanceIpv6Addresses
      ),
      startInstance: createRequestFunction(bareMetal.startInstance),
      rebootInstance: createRequestFunction(bareMetal.rebootInstance),
      reinstallInstance: createRequestFunction(bareMetal.reinstallInstance),
      haltInstance: createRequestFunction(bareMetal.haltInstance),
      getInstanceBandwidth: createRequestFunction(
        bareMetal.getInstanceBandwidth
      ),
      haltInstances: createRequestFunction(bareMetal.haltInstances),
      rebootInstances: createRequestFunction(bareMetal.rebootInstances),
      startInstances: createRequestFunction(bareMetal.startInstances),
      getInstanceUserData: createRequestFunction(bareMetal.getInstanceUserData),
      getInstanceAvailableUpgrades: createRequestFunction(
        bareMetal.getInstanceAvailableUpgrades
      ),
      getInstanceVncUrl: createRequestFunction(bareMetal.getInstanceVncUrl)
    },
    billing: {
      listHistory: createRequestFunction(billing.listHistory),
      listInvoices: createRequestFunction(billing.listInvoices),
      getInvoice: createRequestFunction(billing.getInvoice),
      listInvoiceItems: createRequestFunction(billing.listInvoiceItems)
    },
    blockStorage: {
      listStorages: createRequestFunction(blockStorage.listStorages),
      createStorage: createRequestFunction(blockStorage.createStorage),
      getStorage: createRequestFunction(blockStorage.getStorage),
      deleteStorage: createRequestFunction(blockStorage.deleteStorage),
      updateStorage: createRequestFunction(blockStorage.updateStorage),
      attachStorage: createRequestFunction(blockStorage.attachStorage),
      detachStorage: createRequestFunction(blockStorage.detachStorage)
    },
    dns: {
      listDomains: createRequestFunction(dns.listDomains),
      createDomain: createRequestFunction(dns.createDomain),
      getDomain: createRequestFunction(dns.getDomain),
      deleteDomain: createRequestFunction(dns.deleteDomain),
      updateDomain: createRequestFunction(dns.updateDomain),
      getSoaInfo: createRequestFunction(dns.getSoaInfo),
      updateSoaInfo: createRequestFunction(dns.updateSoaInfo),
      getDnsSecInfo: createRequestFunction(dns.getDnsSecInfo),
      createRecord: createRequestFunction(dns.createRecord),
      listRecords: createRequestFunction(dns.listRecords),
      getRecord: createRequestFunction(dns.getRecord),
      updateRecord: createRequestFunction(dns.updateRecord),
      deleteRecord: createRequestFunction(dns.deleteRecord)
    },
    firewall: {
      listGroups: createRequestFunction(firewall.listGroups),
      createGroup: createRequestFunction(firewall.createGroup),
      getGroup: createRequestFunction(firewall.getGroup),
      updateGroup: createRequestFunction(firewall.updateGroup),
      deleteGroup: createRequestFunction(firewall.deleteGroup),
      listRules: createRequestFunction(firewall.listRules),
      createRules: createRequestFunction(firewall.createRules),
      deleteRule: createRequestFunction(firewall.deleteRule),
      getRule: createRequestFunction(firewall.getRule)
    },
    instances: {
      listInstances: createRequestFunction(instances.listInstances),
      createInstance: createRequestFunction(instances.createInstance),
      getInstance: createRequestFunction(instances.getInstance),
      updateInstance: createRequestFunction(instances.updateInstance),
      deleteInstance: createRequestFunction(instances.deleteInstance),
      haltInstances: createRequestFunction(instances.haltInstances),
      rebootInstances: createRequestFunction(instances.rebootInstances),
      startInstances: createRequestFunction(instances.startInstances),
      startInstance: createRequestFunction(instances.startInstance),
      rebootInstance: createRequestFunction(instances.rebootInstance),
      reinstallInstance: createRequestFunction(instances.reinstallInstance),
      getInstanceBandwidth: createRequestFunction(
        instances.getInstanceBandwidth
      ),
      getInstanceNeighbors: createRequestFunction(
        instances.getInstanceNeighbors
      ),
      listInstancePrivateNetworks: createRequestFunction(
        instances.listInstancePrivateNetworks
      ),
      getInstanceIsoStatus: createRequestFunction(
        instances.getInstanceIsoStatus
      ),
      attachIsoToInstance: createRequestFunction(instances.attachIsoToInstance),
      detachIsoFromInstance: createRequestFunction(
        instances.detachIsoFromInstance
      ),
      attachPrivateNetworkToInstance: createRequestFunction(
        instances.attachPrivateNetworkToInstance
      ),
      detachPrivateNetworkFromInstance: createRequestFunction(
        instances.detachPrivateNetworkFromInstance
      ),
      setInstanceBackupSchedule: createRequestFunction(
        instances.setInstanceBackupSchedule
      ),
      getInstanceBackupSchedule: createRequestFunction(
        instances.getInstanceBackupSchedule
      ),
      restoreInstance: createRequestFunction(instances.restoreInstance),
      listInstanceIpv4Information: createRequestFunction(
        instances.listInstanceIpv4Information
      ),
      createInstanceIpv4: createRequestFunction(instances.createInstanceIpv4),
      getInstanceIpv6Information: createRequestFunction(
        instances.getInstanceIpv6Information
      ),
      createInstanceReverseIpv6: createRequestFunction(
        instances.createInstanceReverseIpv6
      ),
      listInstanceIpv6ReverseInformation: createRequestFunction(
        instances.listInstanceIpv6ReverseInformation
      ),
      createInstanceReverseIpv4: createRequestFunction(
        instances.createInstanceReverseIpv4
      ),
      getInstanceUserData: createRequestFunction(instances.getInstanceUserData),
      haltInstance: createRequestFunction(instances.haltInstance),
      setDefaultReverseDnsEntry: createRequestFunction(
        instances.setDefaultReverseDnsEntry
      ),
      deleteIpv4Address: createRequestFunction(instances.deleteIpv4Address),
      deleteInstanceReverseIpv6: createRequestFunction(
        instances.deleteInstanceReverseIpv6
      ),
      getAvailableInstanceUpgrades: createRequestFunction(
        instances.getAvailableInstanceUpgrades
      )
    },
    iso: {
      listIsos: createRequestFunction(iso.listIsos),
      createIso: createRequestFunction(iso.createIso),
      getIso: createRequestFunction(iso.getIso),
      deleteIso: createRequestFunction(iso.deleteIso),
      listPublicIsos: createRequestFunction(iso.listPublicIsos)
    },
    loadBalancers: {
      listLoadBalancers: createRequestFunction(loadBalancers.listLoadBalancers),
      createLoadBalancer: createRequestFunction(
        loadBalancers.createLoadBalancer
      ),
      getLoadBalancer: createRequestFunction(loadBalancers.getLoadBalancer),
      updateLoadBalancer: createRequestFunction(
        loadBalancers.updateLoadBalancer
      ),
      deleteLoadBalancer: createRequestFunction(
        loadBalancers.deleteLoadBalancer
      ),
      listForwardingRules: createRequestFunction(
        loadBalancers.listForwardingRules
      ),
      createForwardingRule: createRequestFunction(
        loadBalancers.createForwardingRule
      ),
      getForwardingRule: createRequestFunction(loadBalancers.getForwardingRule),
      deleteForwardingRule: createRequestFunction(
        loadBalancers.deleteForwardingRule
      ),
      listFirewallRules: createRequestFunction(loadBalancers.listFirewallRules),
      getFirewallRule: createRequestFunction(loadBalancers.getFirewallRule)
    },
    kubernetes: {
      createKubernetesCluster: createRequestFunction(
        kubernetes.createKubernetesCluster
      ),
      listKubernetesClusters: createRequestFunction(
        kubernetes.listKubernetesClusters
      ),
      getKubernetesCluster: createRequestFunction(
        kubernetes.getKubernetesCluster
      ),
      updateKubernetesCluster: createRequestFunction(
        kubernetes.updateKubernetesCluster
      ),
      deleteKubernetesCluster: createRequestFunction(
        kubernetes.deleteKubernetesCluster
      ),
      deleteKubernetesClusterAndResources: createRequestFunction(
        kubernetes.deleteKubernetesClusterAndResources
      ),
      getKubernetesResources: createRequestFunction(
        kubernetes.getKubernetesResources
      ),
      createNodePool: createRequestFunction(kubernetes.createNodePool),
      listNodePools: createRequestFunction(kubernetes.listNodePools),
      getNodePool: createRequestFunction(kubernetes.getNodePool),
      updateNodePool: createRequestFunction(kubernetes.updateNodePool),
      deleteNodePool: createRequestFunction(kubernetes.deleteNodePool),
      deleteNodePoolInstance: createRequestFunction(
        kubernetes.deleteNodePoolInstance
      ),
      recycleNodePoolInstance: createRequestFunction(
        kubernetes.recycleNodePoolInstance
      ),
      getKubernetesClusterKubeconfig: createRequestFunction(
        kubernetes.getKubernetesClusterKubeconfig
      ),
      getKubernetesVersions: createRequestFunction(
        kubernetes.getKubernetesVersions
      )
    },
    objectStorage: {
      listObjectStorages: createRequestFunction(
        objectStorage.listObjectStorages
      ),
      createObjectStorage: createRequestFunction(
        objectStorage.createObjectStorage
      ),
      getObjectStorage: createRequestFunction(objectStorage.getObjectStorage),
      deleteObjectStorage: createRequestFunction(
        objectStorage.deleteObjectStorage
      ),
      updateObjectStorage: createRequestFunction(
        objectStorage.updateObjectStorage
      ),
      regenerateObjectStorageKeys: createRequestFunction(
        objectStorage.regenerateObjectStorageKeys
      ),
      getAllClusters: createRequestFunction(objectStorage.getAllClusters)
    },
    operatingSystems: {
      listImages: createRequestFunction(operatingSystems.listImages)
    },
    plans: {
      listPlans: createRequestFunction(plans.listPlans),
      listBareMetalPlans: createRequestFunction(plans.listBareMetalPlans)
    },
    privateNetworks: {
      getPrivateNetwork: createRequestFunction(
        privateNetworks.getPrivateNetwork
      ),
      deletePrivateNetwork: createRequestFunction(
        privateNetworks.deletePrivateNetwork
      ),
      updatePrivateNetwork: createRequestFunction(
        privateNetworks.updatePrivateNetwork
      ),
      listPrivateNetworks: createRequestFunction(
        privateNetworks.listPrivateNetworks
      ),
      createPrivateNetwork: createRequestFunction(
        privateNetworks.createPrivateNetwork
      )
    },
    regions: {
      listRegions: createRequestFunction(regions.listRegions),
      listAvailableComputeInRegion: createRequestFunction(
        regions.listAvailableComputeInRegion
      )
    },
    reservedIps: {
      getReservedIp: createRequestFunction(reservedIps.getReservedIp),
      deleteReservedIp: createRequestFunction(reservedIps.deleteReservedIp),
      listReservedIps: createRequestFunction(reservedIps.listReservedIps),
      createReservedIp: createRequestFunction(reservedIps.createReservedIp),
      attachReservedIp: createRequestFunction(reservedIps.attachReservedIp),
      detachReservedIp: createRequestFunction(reservedIps.detachReservedIp),
      convertInstanceIpToReservedIp: createRequestFunction(
        reservedIps.convertInstanceIpToReservedIp
      )
    },
    snapshots: {
      deleteSnapshot: createRequestFunction(snapshots.deleteSnapshot),
      getSnapshot: createRequestFunction(snapshots.getSnapshot),
      updateSnapshot: createRequestFunction(snapshots.updateSnapshot),
      listSnapshots: createRequestFunction(snapshots.listSnapshots),
      createSnapshot: createRequestFunction(snapshots.createSnapshot),
      createSnapshotFromUrl: createRequestFunction(
        snapshots.createSnapshotFromUrl
      )
    },
    sshKeys: {
      getSshKey: createRequestFunction(sshKeys.getSshKey),
      updateSshKey: createRequestFunction(sshKeys.updateSshKey),
      deleteSshKey: createRequestFunction(sshKeys.deleteSshKey),
      listSshKeys: createRequestFunction(sshKeys.listSshKeys),
      createSshKey: createRequestFunction(sshKeys.createSshKey)
    },
    startupScripts: {
      getStartupScript: createRequestFunction(startupScripts.getStartupScript),
      deleteStartupScript: createRequestFunction(
        startupScripts.deleteStartupScript
      ),
      updateStartupScript: createRequestFunction(
        startupScripts.updateStartupScript
      ),
      listStartupScripts: createRequestFunction(
        startupScripts.listStartupScripts
      ),
      createStartupScript: createRequestFunction(
        startupScripts.createStartupScript
      )
    },
    users: {
      getUser: createRequestFunction(users.getUser),
      deleteUser: createRequestFunction(users.deleteUser),
      updateUser: createRequestFunction(users.updateUser),
      getUsers: createRequestFunction(users.getUsers),
      createUser: createRequestFunction(users.createUser)
    }
  }
}
