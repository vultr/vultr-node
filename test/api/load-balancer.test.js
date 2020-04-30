const util = require('../util')

const mock = {
  getFullConfig: {
    generic_info: {
      balancing_algorithm: 'roundrobin',
      ssl_redirect: false,
      sticky_sessions: {
        cookie_name: 'tests'
      },
      proxy_protocol: false
    },
    health_checks_info: {
      protocol: 'http',
      port: 80,
      path: '/',
      check_interval: 15,
      response_timeout: 5,
      unhealthy_threshold: 5,
      healthy_threshold: 5
    },
    has_ssl: true,
    forward_rule_list: [
      {
        RULEID: 'e8d9e2d83d97bc39',
        frontend_protocol: 'https',
        frontend_port: 80,
        backend_protocol: 'http',
        backend_port: 80
      }
    ],
    instance_list: [1317281]
  },
  create: {
    SUBID: 1314840
  },
  createForwardingRule: {
    RULEID: '1'
  },
  listForwardingRules: {
    forward_rule_list: [
      {
        RULEID: '3f099fb3c45d5a51',
        frontend_protocol: 'tcp',
        frontend_port: 8080,
        backend_protocol: 'tcp',
        backend_port: 8080
      }
    ]
  },
  getGenericInfo: {
    balancing_algorithm: 'roundrobin',
    ssl_redirect: false,
    sticky_sessions: {
      cookie_name: ''
    },
    proxy_protocol: false
  },
  getHealthCheckinfo: {
    protocol: 'https',
    port: 80,
    path: '/',
    check_interval: 15,
    response_timeout: 5,
    unhealthy_threshold: 5,
    healthy_threshold: 5
  },
  attachedInstances: {
    instance_list: [1314841, 1314842]
  },
  list: [
    {
      SUBID: 1314217,
      date_created: '2019-09-07 07:07:00',
      DCID: 1,
      location: 'New Jersey',
      label: 'lb1',
      status: 'active',
      ipv4: '203.0.113.20',
      ipv6: 'fd06:30bd:6374:dc29:ffff:ffff:ffff:ffff'
    }
  ],
  hasSSL: {
    has_ssl: true
  }
}

const mockParameters = {
  getFullConfig: {
    SUBID: 1314840
  },
  create: {
    DCID: 1,
    label: 'lb1',
    config_ssl_redirect: true,
    sticky_sessions: 'on',
    cookie_name: 'lbCookie1',
    balancing_algorithm: 'roundrobin',
    proxy_protocol: 'off',
    health_check: {
      protocol: 'https',
      port: 81,
      check_interval: 17,
      response_timeout: 5,
      unhealthy_threshold: 5,
      healthy_threshold: 5,
      path: '/health'
    },
    forwarding_rules: [
      {
        frontend_protocol: 'https',
        frontend_port: 81,
        backend_protocol: 'https',
        backend_port: 81
      }
    ],
    ssl_private_key: '1111',
    ssl_certificate: 'path/to/certificate',
    ssl_chain: '2222',
    attached_nodes: [12345, 54321]
  },
  delete: {
    SUBID: 1314840
  },
  createForwardingRule: {
    SUBID: 1314840,
    frontend_protocol: 'https',
    frontend_port: 8081,
    backend_protocol: 'tcp',
    backend_port: 8443
  },
  deleteForwardingRule: {
    SUBID: 1314840,
    RULEID: '1'
  },
  listForwardingRules: {
    SUBID: 1314840
  },
  getGenericInfo: {
    SUBID: 1314840
  },
  updateGenericInfo: {
    SUBID: 1314840,
    label: 'generic',
    balancing_algorithm: 'leastconn',
    sticky_sessions: 'off',
    cookie_name: 'genericCookie',
    ssl_redirect: true,
    proxy_protocol: 'off'
  },
  getHealthCheckInfo: {
    SUBID: 1314840
  },
  setHealthCheck: {
    SUBID: 1314840,
    protocol: 'https',
    port: 8080,
    check_interval: 5,
    response_timeout: 10,
    unhealthy_threshold: 60,
    healthy_threshold: 15,
    path: '/health'
  },
  attachInstance: {
    SUBID: 1314840,
    backendNode: 1384841
  },
  detachInstance: {
    SUBID: 1314840,
    backendNode: 1384841
  },
  attachedInstances: {
    SUBID: 1314840
  },
  setLabel: {
    SUBID: 1314840,
    label: 'example'
  },
  list: {
    SUBID: 1314840
  },
  addSSL: {
    SUBID: 1314840,
    ssl_private_key: '1111',
    ssl_certificate: 'path/to/certificate',
    ssl_chain: '2222'
  },
  hasSSL: {
    SUBID: 1314840
  },
  removeSSL: {
    SUBID: 1314840
  }
}

util.createTestSuite('load-balancer', mock, mockParameters)
