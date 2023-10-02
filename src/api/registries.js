/**
 * Methods for interacting with the container registry endpoints<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry}
 * @namespace registries
 */

/**
 * List All Container Registry Subscriptions for this account.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/list-registries}
 * @function listRegistries
 * @memberof registries
 * @instance
 */
exports.listRegistries = {
  url: '/registries',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a new Container Registry Subscription.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/create-registry}
 * @function createRegistries
 * @memberof registries
 * @instance
 */
exports.createRegistry = {
  url: '/registry',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    name: { type: 'string', required: true },
    public: { type: 'boolean', required: true },
    region: { type: 'string', required: true },
    plan: { type: 'string', required: true }
  }
}

/**
 * Get a single Container Registry Subscription.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/read-registry}
 * @function readRegistry
 * @memberof registries
 * @instance
 */
exports.readRegistry = {
  url: '/registry/{registry-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true }
  }
}

/**
 * Update Container Registry.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/update-registry}
 * @function updateRegistry
 * @memberof registries
 * @instance
 */
exports.updateRegistry = {
  url: '/registry/{registry-id}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true },
    public: { type: 'boolean' },
    plan: { type: 'string' }
  }
}

/**
 * Deletes a Container Registry Subscription.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/delete-registry}
 * @function deleteRegistry
 * @memberof registries
 * @instance
 */
exports.deleteRegistry = {
  url: '/registry/{registry-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true }
  }
}

/**
 * List All Repositories in a Container Registry Subscription.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/list-registry-repositories}
 * @function listRepositories
 * @memberof registries
 * @instance
 */
exports.listRepositories = {
  url: '/registry/{registry-id}/repositories',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true }
  }
}

/**
 * Get a single Repository in a Container Registry Subscription.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/read-registry-repository}
 * @function readRepository
 * @memberof registries
 * @instance
 */
exports.readRepository = {
  url: '/registry/{registry-id}/repository/{repository-image}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true },
    'repository-image': { type: 'string', required: true, path: true }
  }
}

/**
 * Update a Repository in a Container Registry Subscription.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/update-repository}
 * @function updateRepository
 * @memberof registries
 * @instance
 */
exports.updateRepository = {
  url: '/registry/{registry-id}/repository/{repository-image}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true },
    'repository-image': { type: 'string', required: true, path: true },
    description: { type: 'string' }
  }
}

/**
 * Deletes a Repository from a Container Registry Subscription.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/delete-repository}
 * @function deleteRepository
 * @memberof registries
 * @instance
 */
exports.deleteRepository = {
  url: '/registry/{registry-id}/repository/{repository-image}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true },
    'repository-image': { type: 'string', required: true, path: true }
  }
}

/**
 * Create a fresh set of Docker Credentials for this Container Registry Subscription.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/create-registry-docker-credentials}
 * @function createRegistryDockerCredentials
 * @memberof registries
 * @instance
 */
exports.createRegistryDockerCredentials = {
  url: '/registry/{registry-id}/docker-credentials',
  requestType: 'OPTIONS',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true },
    expiry_seconds: { type: 'number' },
    read_write: { type: 'boolean' }
  }
}

/**
 * Create a fresh set of Docker Credentials for this Container Registry Subscription and return them in a Kubernetes friendly YAML format.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/create-registry-kubernetes-docker-credentials}
 * @function createRegistryDockerCredentialsKubernetes
 * @memberof registries
 * @instance
 */
exports.createRegistryDockerCredentialsKubernetes = {
  url: '/registry/{registry-id}/docker-credentials/kubernetes',
  requestType: 'OPTIONS',
  apiKeyRequired: true,
  parameters: {
    'registry-id': { type: 'string', required: true, path: true },
    expiry_seconds: { type: 'number' },
    read_write: { type: 'boolean' },
    base64_encode: { type: 'boolean' }
  }
}

/**
 * List All Regions where a Container Registry can be deployed.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/list-registry-regions}
 * @function listRegistryRegions
 * @memberof registries
 * @instance
 */
exports.listRegistryRegions = {
  url: '/registry/region/list',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * List All Plans to help choose which one is the best fit for your Container Registry.<br>
 * {@link https://www.vultr.com/api/#tag/Container-Registry/operation/list-registry-plans}
 * @function listRegistryPlans
 * @memberof registries
 * @instance
 */
exports.listRegistryPlans = {
  url: '/registry/plan/list',
  requestType: 'GET',
  apiKeyRequired: true
}
