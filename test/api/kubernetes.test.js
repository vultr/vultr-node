const util = require('../util')

const mockParameters = {
  createKubernetesCluster: {
    label: 'vke',
    region: 'lax',
    version: 'v1.20.0+1',
    node_pools: [
      {
        node_quantity: 2,
        label: 'my-label',
        plan: 'vc2-1c-2gb',
        tag: 'my-tag'
      }
    ]
  },
  getKubernetesCluster: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e'
  },
  updateKubernetesCluster: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e',
    label: 'my new label'
  },
  deleteKubernetesCluster: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e'
  },
  deleteKubernetesClusterAndResources: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e'
  },
  getKubernetesResources: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e'
  },
  createNodePool: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e',
    node_quantity: 2,
    label: 'nodepool',
    plan: 'vc2-1c-2gb',
    tag: 'my-tag'
  },
  listNodePools: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e'
  },
  getNodePool: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e',
    'nodepool-id': 'e97bdee9-2781-4f31-be03-60fc75f399ae'
  },
  updateNodePool: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e',
    'nodepool-id': 'e97bdee9-2781-4f31-be03-60fc75f399ae',
    node_quantity: 2
  },
  deleteNodePool: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e',
    'nodepool-id': 'e97bdee9-2781-4f31-be03-60fc75f399ae'
  },
  deleteNodePoolInstance: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e',
    'nodepool-id': 'e97bdee9-2781-4f31-be03-60fc75f399ae',
    'node-id': 'e97bdee9-2781-4f31-be03-60fc75f399ae'
  },
  recycleNodePoolInstance: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e',
    'nodepool-id': 'e97bdee9-2781-4f31-be03-60fc75f399ae',
    'node-id': 'e97bdee9-2781-4f31-be03-60fc75f399ae'
  },
  getKubernetesClusterKubeconfig: {
    'vke-id': '455dcd32-e621-48ee-a10e-0cb5f754e13e'
  }
}

const mockResponses = {
  createKubernetesCluster: {
    vke_cluster: {
      id: '455dcd32-e621-48ee-a10e-0cb5f754e13e',
      label: 'vke',
      date_created: '2021-07-07T22:57:01+00:00',
      cluster_subnet: '10.244.0.0/16',
      service_subnet: '10.96.0.0/12',
      ip: '0.0.0.0',
      endpoint: '455dcd32-e621-48ee-a10e-0cb5f754e13e.vultr-k8s.com',
      version: 'v1.20.0+1',
      region: 'lax',
      status: 'pending',
      node_pools: [
        {
          id: '11e4443a-f92a-46d6-94c8-61c1a1a7514e',
          date_created: '2021-07-07T22:57:01+00:00',
          date_updated: '2021-07-07T22:58:44+00:00',
          label: 'my-label-48770259',
          tag: 'my-tag',
          plan: 'vc2-1c-2gb',
          status: 'pending',
          node_quantity: 2,
          nodes: [
            {
              id: '43eda5c8-67f7-4c63-88bc-2f568b48b2b0',
              label: 'my-label-48770259-6ac60e6313dd1',
              date_created: '2021-07-07T22:57:01+00:00',
              status: 'pending'
            },
            {
              id: '15a7893d-d584-45d5-a74c-d9f46866aa3c',
              label: 'my-label-48770259-6ac60e6313ddc',
              date_created: '2021-07-07T22:57:01+00:00',
              status: 'pending'
            }
          ]
        }
      ]
    }
  },
  listKubernetesClusters: {
    vke_clusters: [
      {
        id: 'c907e832-3080-48a6-a54d-7379e645c0b7',
        label: 'my-vke',
        date_created: '2021-07-02T12:12:43+00:00',
        cluster_subnet: '10.244.0.0/16',
        service_subnet: '10.96.0.0/12',
        ip: '8.9.30.155',
        endpoint: 'c907e832-3080-48a6-a54d-7379e645c0b7.vultr-k8s.com',
        version: 'v1.20.0+1',
        region: 'ewr',
        status: 'active',
        node_pools: [
          {
            id: '74de1914-63ea-4a78-9da5-b7220063c701',
            date_created: '2021-07-02T12:12:44+00:00',
            date_updated: '2021-07-03T12:12:44+00:00',
            label: 'nodepool-48597451',
            tag: 'my-tag',
            plan: 'vc2-1c-2gb',
            status: 'active',
            node_quantity: 2,
            nodes: [
              {
                id: 'cafd4673-2a62-49c4-a045-44d05ecc0a7b',
                label: 'nodepool-48597451-6a960df02bc1b',
                date_created: '2021-07-02T12:12:44+00:00',
                status: 'active'
              },
              {
                id: '5fc5ae88-f73e-46b5-9fa1-ac5ed8dcd33c',
                label: 'nodepool-48597451-6a960df02bc25',
                date_created: '2021-07-02T12:12:44+00:00',
                status: 'active'
              }
            ]
          }
        ]
      },
      {
        id: '455dcd32-e621-48ee-a10e-0cb5f754e13e',
        label: 'vke',
        date_created: '2021-07-07T22:57:01+00:00',
        cluster_subnet: '10.244.0.0/16',
        service_subnet: '10.96.0.0/12',
        ip: '207.246.109.187',
        endpoint: '455dcd32-e621-48ee-a10e-0cb5f754e13e.vultr-k8s.com',
        version: 'v1.20.0+1',
        region: 'lax',
        status: 'active',
        node_pools: [
          {
            id: '11e4443a-f92a-46d6-94c8-61c1a1a7514e',
            date_created: '2021-07-07T22:57:01+00:00',
            date_updated: '2021-07-08T12:12:44+00:00',
            label: 'my-label-48770259',
            tag: 'my-tag',
            plan: 'vc2-1c-2gb',
            status: 'active',
            node_quantity: 2,
            nodes: [
              {
                id: '43eda5c8-67f7-4c63-88bc-2f568b48b2b0',
                label: 'my-label-48770259-6ac60e6313dd1',
                date_created: '2021-07-07T22:57:01+00:00',
                status: 'active'
              },
              {
                id: '15a7893d-d584-45d5-a74c-d9f46866aa3c',
                label: 'my-label-48770259-6ac60e6313ddc',
                date_created: '2021-07-07T22:57:01+00:00',
                status: 'active'
              }
            ]
          }
        ]
      }
    ],
    meta: {
      total: 2,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  getKubernetesCluster: {
    vke_cluster: {
      id: '455dcd32-e621-48ee-a10e-0cb5f754e13e',
      label: 'vke',
      date_created: '2021-07-07T22:57:01+00:00',
      cluster_subnet: '10.244.0.0/16',
      service_subnet: '10.96.0.0/12',
      ip: '207.246.109.187',
      endpoint: '455dcd32-e621-48ee-a10e-0cb5f754e13e.vultr-k8s.com',
      version: 'v1.20.0+1',
      region: 'lax',
      status: 'active',
      node_pools: [
        {
          id: '11e4443a-f92a-46d6-94c8-61c1a1a7514e',
          date_created: '2021-07-07T22:57:01+00:00',
          date_updated: '2021-07-08T12:12:44+00:00',
          label: 'my-label-48770259',
          plan: 'vc2-1c-2gb',
          status: 'active',
          node_quantity: 2,
          nodes: [
            {
              id: '43eda5c8-67f7-4c63-88bc-2f568b48b2b0',
              label: 'my-label-48770259-6ac60e6313dd1',
              date_created: '2021-07-07T22:57:01+00:00',
              status: 'active'
            },
            {
              id: '15a7893d-d584-45d5-a74c-d9f46866aa3c',
              label: 'my-label-48770259-6ac60e6313ddc',
              date_created: '2021-07-07T22:57:01+00:00',
              status: 'active'
            }
          ]
        }
      ]
    }
  },
  getKubernetesResources: {
    resources: {
      block_storage: [
        {
          id: '29479a12-6edd-48cf-a883-24eccafab094',
          label: '29479a12-6edd-48cf-a883-24eccafab094',
          date_created: '2021-07-29T16:41:07+00:00',
          status: 'active'
        },
        {
          id: '0fa3097e-aef9-475e-958a-56f697ed3998',
          label: '0fa3097e-aef9-475e-958a-56f697ed3998',
          date_created: '2021-08-04T15:34:50+00:00',
          status: 'pending'
        }
      ],
      load_balancer: [
        {
          id: '369ed902-2ec4-4a22-b959-cb1709394c3a',
          label: '369ed902-2ec4-4a22-b959-cb1709394c3a',
          date_created: '2021-07-29T16:46:12+00:00',
          status: 'active'
        }
      ]
    }
  },
  createNodePool: {
    node_pool: {
      id: '4130764b-5276-4552-546f-32513239732b',
      date_created: '2021-07-07T23:29:18+00:00',
      date_updated: '2021-07-08T23:29:18+00:00',
      label: 'nodepool-48770716',
      tag: 'my-tag',
      plan: 'vc2-1c-2gb',
      status: 'pending',
      node_quantity: 2,
      nodes: [
        {
          id: '2f863151-d784-4184-804e-31e4e60945bd',
          label: 'nodepool-48770716-6c360e638ce61',
          date_created: '2021-07-07T23:29:18+00:00',
          status: 'pending'
        },
        {
          id: '73a459dc-293f-4c2b-92f7-61be459a033b',
          label: 'nodepool-48770716-6c360e638ce6c',
          date_created: '2021-07-07T23:29:18+00:00',
          status: 'pending'
        }
      ]
    }
  },
  listNodePools: {
    node_pools: [
      {
        id: 'e97bdee9-2781-4f31-be03-60fc75f399ae',
        date_created: '2021-07-07T23:27:08+00:00',
        date_updated: '2021-07-08T12:12:44+00:00',
        label: 'my-label-48770703',
        tag: 'my-tag',
        plan: 'vc2-1c-2gb',
        status: 'active',
        node_quantity: 2,
        nodes: [
          {
            id: 'f2e11430-76e5-4dc6-a1c9-ef5682c21ddf',
            label: 'my-label-48770703-44060e6384c45',
            date_created: '2021-07-07T23:27:08+00:00',
            status: 'active'
          },
          {
            id: 'c0a160eb-a7bc-4377-a6fb-52a9531167ca',
            label: 'my-label-48770703-44060e6384c50',
            date_created: '2021-07-07T23:27:08+00:00',
            status: 'active'
          }
        ]
      },
      {
        id: '4130764b-5276-4552-546f-32513239732b',
        date_created: '2021-07-07T23:29:18+00:00',
        label: 'nodepool-48770716',
        tag: 'my-tag',
        plan: 'vc2-1c-2gb',
        status: 'active',
        node_quantity: 2,
        nodes: [
          {
            id: '2f863151-d784-4184-804e-31e4e60945bd',
            label: 'nodepool-48770716-6c360e638ce61',
            date_created: '2021-07-07T23:29:18+00:00',
            status: 'active'
          },
          {
            id: '73a459dc-293f-4c2b-92f7-61be459a033b',
            label: 'nodepool-48770716-6c360e638ce6c',
            date_created: '2021-07-07T23:29:18+00:00',
            status: 'active'
          }
        ]
      }
    ],
    meta: {
      total: 2,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  getNodePool: {
    node_pool: {
      id: 'e97bdee9-2781-4f31-be03-60fc75f399ae',
      date_created: '2021-07-07T23:27:08+00:00',
      date_updated: '2021-07-08T12:12:44+00:00',
      label: 'my-label-48770703',
      tag: 'my-tag',
      plan: 'vc2-1c-2gb',
      status: 'active',
      node_quantity: 2,
      nodes: [
        {
          id: 'f2e11430-76e5-4dc6-a1c9-ef5682c21ddf',
          label: 'my-label-48770703-44060e6384c45',
          date_created: '2021-07-07T23:27:08+00:00',
          status: 'active'
        },
        {
          id: 'c0a160eb-a7bc-4377-a6fb-52a9531167ca',
          label: 'my-label-48770703-44060e6384c50',
          date_created: '2021-07-07T23:27:08+00:00',
          status: 'active'
        }
      ]
    }
  },
  updateNodePool: {
    node_pool: {
      id: 'e97bdee9-2781-4f31-be03-60fc75f399ae',
      date_created: '2021-07-07T23:27:08+00:00',
      date_updated: '2021-07-08T12:12:44+00:00',
      label: 'my-label-48770703',
      tag: 'my-tag',
      plan: 'vc2-1c-2gb',
      status: 'active',
      node_quantity: 1,
      nodes: [
        {
          id: 'f2e11430-76e5-4dc6-a1c9-ef5682c21ddf',
          label: 'my-label-48770703-44060e6384c45',
          date_created: '2021-07-07T23:27:08+00:00',
          status: 'active'
        }
      ]
    }
  },
  getKubernetesClusterKubeconfig: {
    kube_config: 'YXBpdmVyc2lvbjogdjEKY2x'
  },
  getKubernetesVersions: {
    versions: ['v1.20.0+1']
  }
}

util.createTestSuite('kubernetes', mockParameters, mockResponses)
