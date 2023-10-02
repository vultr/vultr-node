const util = require('../util')

const mockParameters = {
  createRegistry: {
    name: 'charizard',
    public: false,
    region: 'sjc',
    plan: 'business'
  },
  readRegistry: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateRegistry: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteRegistry: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  listRepositories: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  readRepository: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    'repository-image': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateRepository: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    'repository-image': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteRepository: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    'repository-image': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createRegistryDockerCredentials: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createRegistryDockerCredentialsKubernetes: {
    'registry-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  }
}

const mockResponses = {
  listRegistries: {
    registries: [
      {
        id: 'string',
        name: 'string',
        urn: 'string',
        storage: {
          used: {
            bytes: null,
            mb: null,
            gb: null,
            tb: null,
            updated_at: 'string'
          },
          allowed: {
            bytes: null,
            mb: null,
            gb: null,
            tb: null,
            updated_at: 'string'
          }
        },
        date_created: 'string',
        public: true,
        root_user: {
          id: 0,
          username: 'string',
          password: 'string',
          root: true,
          added_at: 'string',
          updated_at: 'string'
        },
        metadata: {
          region: {
            id: 0,
            name: 'string',
            urn: 'string',
            base_url: 'string',
            public: true,
            added_at: 'string',
            updated_at: 'string',
            data_center: {}
          },
          subscription: {
            billing: {
              monthly_price: null,
              pending_charges: null
            }
          }
        }
      }
    ],
    meta: {
      total: 0,
      links: {
        next: 'string',
        prev: 'string'
      }
    }
  },
  createRegistry: {
    id: 'string',
    name: 'string',
    urn: 'string',
    storage: {
      used: {
        bytes: null,
        mb: null,
        gb: null,
        tb: null,
        updated_at: 'string'
      },
      allowed: {
        bytes: null,
        mb: null,
        gb: null,
        tb: null,
        updated_at: 'string'
      }
    },
    date_created: 'string',
    public: true,
    root_user: {
      id: 0,
      username: 'string',
      password: 'string',
      root: true,
      added_at: 'string',
      updated_at: 'string'
    },
    metadata: {
      region: {
        id: 0,
        name: 'string',
        urn: 'string',
        base_url: 'string',
        public: true,
        added_at: 'string',
        updated_at: 'string',
        data_center: {}
      },
      subscription: {
        billing: {
          monthly_price: null,
          pending_charges: null
        }
      }
    }
  },
  readRegistry: {
    id: 'string',
    name: 'string',
    urn: 'string',
    storage: {
      used: {
        bytes: null,
        mb: null,
        gb: null,
        tb: null,
        updated_at: 'string'
      },
      allowed: {
        bytes: null,
        mb: null,
        gb: null,
        tb: null,
        updated_at: 'string'
      }
    },
    date_created: 'string',
    public: true,
    root_user: {
      id: 0,
      username: 'string',
      password: 'string',
      root: true,
      added_at: 'string',
      updated_at: 'string'
    },
    metadata: {
      region: {
        id: 0,
        name: 'string',
        urn: 'string',
        base_url: 'string',
        public: true,
        added_at: 'string',
        updated_at: 'string',
        data_center: {}
      },
      subscription: {
        billing: {
          monthly_price: null,
          pending_charges: null
        }
      }
    }
  },
  updateRegistry: {
    id: 'string',
    name: 'string',
    urn: 'string',
    storage: {
      used: {
        bytes: null,
        mb: null,
        gb: null,
        tb: null,
        updated_at: 'string'
      },
      allowed: {
        bytes: null,
        mb: null,
        gb: null,
        tb: null,
        updated_at: 'string'
      }
    },
    date_created: 'string',
    public: true,
    root_user: {
      id: 0,
      username: 'string',
      password: 'string',
      root: true,
      added_at: 'string',
      updated_at: 'string'
    },
    metadata: {
      region: {
        id: 0,
        name: 'string',
        urn: 'string',
        base_url: 'string',
        public: true,
        added_at: 'string',
        updated_at: 'string',
        data_center: {}
      },
      subscription: {
        billing: {
          monthly_price: null,
          pending_charges: null
        }
      }
    }
  },
  listRepositories: {
    repositories: [
      {
        name: 'string',
        image: 'string',
        description: 'string',
        added_at: 'string',
        updated_at: 'string',
        pull_count: 0,
        artifact_count: 0
      }
    ],
    meta: {
      total: 0,
      links: {
        next: 'string',
        prev: 'string'
      }
    }
  },
  readRepository: {
    name: 'string',
    image: 'string',
    description: 'string',
    added_at: 'string',
    updated_at: 'string',
    pull_count: 0,
    artifact_count: 0
  },
  updateRepository: {
    name: 'string',
    image: 'string',
    description: 'string',
    added_at: 'string',
    updated_at: 'string',
    pull_count: 0,
    artifact_count: 0
  },
  createRegistryDockerCredentials: {
    auths: {
      '{registry-region-name}.vultrcr.com': {
        auth: 'string'
      }
    }
  },
  listRegistryRegions: {
    regions: [
      {
        id: 0,
        name: 'string',
        urn: 'string',
        base_url: 'string',
        public: true,
        added_at: 'string',
        updated_at: 'string',
        data_center: {}
      }
    ],
    meta: {
      total: 0,
      links: {
        next: 'string',
        prev: 'string'
      }
    }
  },
  listRegistryPlans: {
    plans: {
      start_up: {
        vanity_name: 'string',
        max_storage_mb: 0,
        monthly_price: 0
      },
      business: {
        vanity_name: 'string',
        max_storage_mb: 0,
        monthly_price: 0
      },
      premium: {
        vanity_name: 'string',
        max_storage_mb: 0,
        monthly_price: 0
      },
      enterprise: {
        vanity_name: 'string',
        max_storage_mb: 0,
        monthly_price: 0
      }
    }
  }
}

util.createTestSuite('registries', mockParameters, mockResponses)
