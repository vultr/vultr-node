const util = require('../util')

const mockParameters = {
  createLoadBalancer: {
    region: 'ewr'
  },
  getLoadBalancer: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  updateLoadBalancer: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  deleteLoadBalancer: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  listForwardingRules: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  createForwardingRule: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    frontend_protocol: 'http',
    frontend_port: '8080',
    backend_protocol: 'http',
    backend_port: '80'
  },
  getForwardingRule: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    'forwarding-rule-id': 'd42585eb85b1f69d'
  },
  deleteForwardingRule: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    'forwarding-rule-id': 'd42585eb85b1f69d'
  },
  listFirewallRules: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60'
  },
  getFirewallRule: {
    'load-balancer-id': 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
    'firewall-rule-id': 'asb123f2e6c0b60'
  }
}

const mockResponses = {
  listLoadBalancers: {
    load_balancers: [
      {
        id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
        date_created: '2020-10-10T01:56:20+00:00',
        region: 'ewr',
        label: 'my-lb',
        status: 'active',
        ipv4: '149.28.32.7',
        ipv6: '2001:19f0:5:4973:ffff:ffff:ffff:ffff',
        generic_info: {
          balancing_algorithm: 'roundrobin',
          ssl_redirect: false,
          sticky_sessions: {
            cookie_name: ''
          },
          proxy_protocol: false
        },
        health_check: {
          protocol: 'http',
          port: 80,
          path: '/health',
          check_interval: 10,
          response_timeout: 5,
          unhealthy_threshold: 3,
          healthy_threshold: 3
        },
        has_ssl: false,
        forwarding_rules: [
          {
            id: '73d85156c2c3129d',
            frontend_protocol: 'http',
            frontend_port: 80,
            backend_protocol: 'http',
            backend_port: 80
          }
        ],
        instances: []
      }
    ],
    meta: {
      total: 1,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  createLoadBalancer: {
    load_balancer: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      region: 'ewr',
      label: 'my-lb',
      status: 'pending',
      ipv4: '',
      ipv6: '',
      generic_info: {
        balancing_algorithm: 'roundrobin',
        ssl_redirect: false,
        sticky_sessions: {
          cookie_name: ''
        },
        proxy_protocol: false
      },
      health_check: {
        protocol: 'http',
        port: 80,
        path: '/health',
        check_interval: 10,
        response_timeout: 5,
        unhealthy_threshold: 3,
        healthy_threshold: 3
      },
      has_ssl: false,
      forwarding_rules: [
        {
          id: '73d85156c2c3129d',
          frontend_protocol: 'http',
          frontend_port: 80,
          backend_protocol: 'http',
          backend_port: 80
        }
      ],
      instances: []
    }
  },
  getLoadBalancer: {
    load_balancer: {
      id: 'cb676a46-66fd-4dfb-b839-443f2e6c0b60',
      date_created: '2020-10-10T01:56:20+00:00',
      region: 'ewr',
      label: 'my-lb',
      status: 'active',
      ipv4: '149.28.32.7',
      ipv6: '2001:19f0:5:4973:ffff:ffff:ffff:ffff',
      generic_info: {
        balancing_algorithm: 'roundrobin',
        ssl_redirect: false,
        sticky_sessions: {
          cookie_name: ''
        },
        proxy_protocol: false
      },
      health_check: {
        protocol: 'http',
        port: 80,
        path: '/health',
        check_interval: 10,
        response_timeout: 5,
        unhealthy_threshold: 3,
        healthy_threshold: 3
      },
      has_ssl: false,
      forwarding_rules: [
        {
          id: '73d85156c2c3129d',
          frontend_protocol: 'http',
          frontend_port: 80,
          backend_protocol: 'http',
          backend_port: 80
        }
      ],
      instances: []
    }
  },
  listForwardingRules: {
    forwarding_rules: [
      {
        id: '73d85156c2c3129d',
        frontend_protocol: 'http',
        frontend_port: 80,
        backend_protocol: 'http',
        backend_port: 80
      }
    ],
    meta: {
      total: 1,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  getForwardingRule: {
    forwarding_rule: {
      id: 'd42585eb85b1f69d',
      frontend_protocol: 'http',
      frontend_port: 8080,
      backend_protocol: 'http',
      backend_port: 80
    }
  },
  listFirewallRules: {
    firewall_rules: [
      {
        id: 'asb123f2e6c0b60',
        port: 80,
        source: '24.187.16.196/16',
        ip_type: 'v4'
      }
    ],
    meta: {
      total: 1,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  getFirewallRule: {
    firewall_rule: {
      id: 'asb123f2e6c0b60',
      port: 80,
      source: '24.187.16.196/16',
      ip_type: 'v4'
    }
  }
}

util.createTestSuite('load-balancers', mockParameters, mockResponses)
