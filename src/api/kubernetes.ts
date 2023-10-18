/**
 * Methods for interacting with the Kubernetes endpoints<br>
 * {@link https://www.vultr.com/api/#tag/kubernetes}
 * @namespace kubernetes
 */

import { ApiEndpoint } from '../types'

/**
 * Creates a Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/create-kubernetes-cluster}
 * @function createKubernetesCluster
 * @memberof kubernetes
 * @instance
 */
export const createKubernetesCluster: ApiEndpoint = {
  url: '/kubernetes/clusters',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    label: { type: 'string' },
    region: {
      type: 'string',
      required: true
    },
    version: {
      type: 'string',
      required: true
    },
    node_pools: { type: 'array' }
  }
}

/**
 * Lists all currently deployed Kubernetes clusters.<br>
 * {@link https://www.vultr.com/api/#operation/list-kubernetes-clusters}
 * @function listKubernetesClusters
 * @memberof kubernetes
 * @instance
 */
export const listKubernetesClusters: ApiEndpoint = {
  url: '/kubernetes/clusters',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * Gets information about a specified Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/get-kubernetes-clusters}
 * @function getKubernetesCluster
 * @memberof kubernetes
 * @instance
 */
export const getKubernetesCluster: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Updates information in an existing Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/update-kubernetes-cluster}
 * @function updateKubernetesCluster
 * @memberof kubernetes
 * @instance
 */
export const updateKubernetesCluster: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    },
    label: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Deletes a specified Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/delete-kubernetes-cluster}
 * @function deleteKubernetesCluster
 * @memberof kubernetes
 * @instance
 */
export const deleteKubernetesCluster: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Deletes a specified Kubernetes cluster and all its resources.<br>
 * {@link https://www.vultr.com/api/#operation/delete-kubernetes-cluster-vke-id-delete-with-linked-resources}
 * @function deleteKubernetesClusterAndResources
 * @memberof kubernetes
 * @instance
 */
export const deleteKubernetesClusterAndResources: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/delete-with-linked-resources',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Gets info about the block storage and load balancers deployed by the specified Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/get-kubernetes-resources}
 * @function getKubernetesResources
 * @memberof kubernetes
 * @instance
 */
export const getKubernetesResources: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/resources',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Create a NodePool for an existing Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/create-nodepools}
 * @function createNodePool
 * @memberof kubernetes
 * @instance
 */
export const createNodePool: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/node-pools',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    },
    node_quantity: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: true
    },
    plan: {
      type: 'string',
      required: true
    },
    tag: {
      type: 'string',
      required: false
    },
    auto_scaler: {
      type: 'boolean',
      required: false
    },
    min_nodes: {
      type: 'number',
      required: false
    },
    max_nodes: {
      type: 'number',
      required: false
    }
  }
}

/**
 * List all available NodePools on a specified Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/get-nodepools}
 * @function listNodePools
 * @memberof kubernetes
 * @instance
 */
export const listNodePools: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/node-pools',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Get information about the NodePool on a Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/get-nodepool}
 * @function getNodePool
 * @memberof kubernetes
 * @instance
 */
export const getNodePool: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/node-pools/{nodepool-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    },
    'nodepool-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Updates a NodePool on an existing Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/update-nodepool}
 * @function updateNodePool
 * @memberof kubernetes
 * @instance
 */
export const updateNodePool: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/node-pools/{nodepool-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    },
    'nodepool-id': {
      type: 'string',
      required: true,
      path: true
    },
    node_quantity: {
      type: 'number',
      required: true
    },
    tag: {
      type: 'string',
      required: false
    },
    auto_scaler: {
      type: 'boolean',
      required: false
    },
    min_nodes: {
      type: 'number',
      required: false
    },
    max_nodes: {
      type: 'number',
      required: false
    }
  }
}

/**
 * Deletes a specified NodePool from a Kubernetes cluster.<br>
 * {@link https://www.vultr.com/api/#operation/delete-nodepool}
 * @function deleteNodePool
 * @memberof kubernetes
 * @instance
 */
export const deleteNodePool: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/node-pools/{nodepool-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    },
    'nodepool-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Deletes a single NodePool instance from a specified NodePool.<br>
 * {@link https://www.vultr.com/api/#operation/delete-nodepool-instance}
 * @function deleteNodePoolInstance
 * @memberof kubernetes
 * @instance
 */
export const deleteNodePoolInstance: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/node-pools/{nodepool-id}/nodes/{node-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    },
    'nodepool-id': {
      type: 'string',
      required: true,
      path: true
    },
    'node-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Recycles a specified NodePool instance.<br>
 * {@link https://www.vultr.com/api/#operation/recycle-nodepool-instance}
 * @function recycleNodePoolInstance
 * @memberof kubernetes
 * @instance
 */
export const recycleNodePoolInstance: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/node-pools/{nodepool-id}/nodes/{node-id}/recycle',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    },
    'nodepool-id': {
      type: 'string',
      required: true,
      path: true
    },
    'node-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Gets a specified Kubernetes cluster's Kubeconfig.<br>
 * {@link https://www.vultr.com/api/#operation/get-kubernetes-clusters-config}
 * @function getKubernetesClusterKubeconfig
 * @memberof kubernetes
 * @instance
 */
export const getKubernetesClusterKubeconfig: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/config',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}

/**
 * Get a list of all supported Kubernetes versions.<br>
 * {@link https://www.vultr.com/api/#operation/get-kubernetes-versions}
 * @function getKubernetesVersions
 * @memberof kubernetes
 * @instance
 */
export const getKubernetesVersions: ApiEndpoint = {
  url: '/kubernetes/versions',
  requestType: 'GET',
  apiKeyRequired: false
}

/**
 * Start a Kubernetes cluster upgrade.
 * {@link https://www.vultr.com/api/#operation/start-kubernetes-cluster-upgrade}
 * @function upgrades
 * @memberof kubernetes
 * @instance
 */
export const upgrades: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/upgrades',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    },
    upgrade_version: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Get the available upgrades for the specified Kubernetes cluster.
 * {@link https://www.vultr.com/api/#operation/get-kubernetes-available-upgrades}
 * @function getKubernetesAvailableUpgrades
 * @memberof kubernetes
 * @instance
 */
export const getKubernetesAvailableUpgrades: ApiEndpoint = {
  url: '/kubernetes/clusters/{vke-id}/available-upgrades',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'vke-id': {
      type: 'string',
      required: true,
      path: true
    }
  }
}
