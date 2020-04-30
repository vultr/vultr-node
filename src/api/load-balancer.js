/**
 * Methods for interacting with the Load Balancer endpoints<br>
 * {@link https://www.vultr.com/api/#loadbalancer}
 * @namespace loadBalancer
 */

/**
 * Retrieve the entire configuration of a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_getFullLBConf}
 * @function getConfInfo
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier for this subscription.
 */
exports.getFullConfig = {
  url: '/loadbalancer/conf_info',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Create a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_create}
 * @function create
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - Location in which to create the load balancer.
 * @param {string} [parameters.label] - Text label to be associated with the subscription.
 * @param {boolean} [parameters.config_ssl_redirect] - Forces redirect from HTTP to HTTPS.
 * @param {string} [parameters.sticky_sessions] - Enables sticky sessions for your load balancer; use `on` or `off`.
 * @param {string} [parameters.cookie_name] - Name for your sticky session cookie.
 * @param {string} [parameters.balancing_algorithm] - Balancing algorithm for your load balancer; use `roundrobin` or `leastconn`.
 * @param {string} [parameters.proxy_protocol] - Enables proxy protocol; use `on` or `off`.
 * @param {object} [parameters.health_check] - Define health checks for your attached back end nodes.
 * @param {array} [parameters.forwarding_rules] - Define forwarding rules the load balancer will follow.
 * @param {string} [parameters.ssl_private_key] - The SSL certificate's private key.
 * @param {string} [parameters.ssl_certificate] - The SSL certificate.
 * @param {string} [parameters.ssl_chain] - The SSL certificate chain.
 * @param {string} [parameters.attached_nodes] - List which instances to attach to the load balancer.
 */
exports.create = {
  url: '/loadbalancer/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: false
    },
    config_ssl_redirect: {
      type: 'boolean',
      required: false
    },
    sticky_sessions: {
      type: 'string',
      required: false
    },
    cookie_name: {
      type: 'string',
      required: false
    },
    balancing_algorithm: {
      type: 'string',
      required: false
    },
    proxy_protocol: {
      type: 'string',
      required: false
    },
    health_check: {
      type: 'object',
      required: false
    },
    forwarding_rules: {
      type: 'array',
      required: false
    },
    ssl_private_key: {
      type: 'string',
      required: false
    },
    ssl_certificate: {
      type: 'string',
      required: false
    },
    ssl_chain: {
      type: 'string',
      required: false
    },
    attached_nodes: {
      type: 'array',
      required: false
    }
  }
}

/**
 * Destroy a load balancer subscription. All data will be permanently lost.
 * Web traffic passing through the load balancer will be abruptly terminated.
 * There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_destroy}
 * @function delete
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier for this subscription.
 */
exports.delete = {
  url: '/loadbalancer/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Create a new forwarding rule.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_createForwardRule}
 * @function createForwardingRule
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 * @param {string} parameters.frontend_protocol - Endpoint protocol on load balancer side; use `http`, `https`, or `tcp`.
 * @param {number} parameters.frontend_port - Endpoint port on load balancer side.
 * @param {string} parameters.backend_protocol - Endpoint protocol on instance side; use `http`, `https`, or `tcp`.
 * @param {number} parameters.backend_port - Enpoint port on instance side.
 */
exports.createForwardingRule = {
  url: '/loadbalancer/forward_rule_create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    frontend_protocol: {
      type: 'string',
      required: true
    },
    frontend_port: {
      type: 'number',
      required: true
    },
    backend_protocol: {
      type: 'string',
      required: true
    },
    backend_port: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Delete a forwarding rule.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_deleteForwardRule}
 * @function deleteForwardingRule
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 * @param {string} parameters.RULEID - Unique identifier or a forwarding rule.
 */
exports.deleteForwardingRule = {
  url: '/loadbalancer/forward_rule_delete',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    RULEID: {
      type: 'string',
      required: true
    }
  }
}

/**
 * List the forwarding rules of a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_ListForwardRules}
 * @function listForwardingRules
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 */
exports.listForwardingRules = {
  url: '/loadbalancer/forward_rule_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Retrieve the generic configuration of a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_getBasicLBInfo}
 * @function getGenericInfo
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 */
exports.getGenericInfo = {
  url: '/loadbalancer/generic_info',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Update the generic configuration of a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_updateBasicInfo}
 * @function updateGenericInfo
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 * @param {string} [parameters.label] - Label to give your load balancer
 * @param {string} [parameters.balancing_algorithm] - Balancing algorithm for your load balancer; use `roundrobin` or `leastconn`.
 * @param {string} [parameters.sticky_sessions] - Enables sticky sessions for your load balancer; use `on` or `off`.
 * @param {string} [parameters.cookie_name] - Name for your sticky session.
 * @param {boolean} [parameters.ssl_redirect] - Force HTTP to HTTPS.
 * @param {string} [parameters.proxy_protocol] - Enables proxy protocol; use `on` or `off`.
 */
exports.updateGenericInfo = {
  url: '/loadbalancer/generic_update',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: false
    },
    balancing_algorithm: {
      type: 'string',
      required: false
    },
    sticky_sessions: {
      type: 'string',
      required: false
    },
    cookie_name: {
      type: 'string',
      required: false
    },
    ssl_redirect: {
      type: 'boolean',
      required: false
    },
    proxy_protocol: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Retrieve the health checking configuration of a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_getHealthCheck}
 * @function getHealthCheckInfo
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 */
exports.getHealthCheckInfo = {
  url: '/loadbalancer/health_check_info',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Update the health checking configuration of a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_updateHealthCheck}
 * @function setHealthCheck
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 * @param {string} [parameters.protocol] - Connection protocol; use `http`, `http`, or `tcp`.
 * @param {number} [parameters.check_interval] - Time in seconds to perform a health check.
 * @param {number} [parameters.response_timeout] - Time in seconds to wait for a health check response.
 * @param {number} [parameters.unhealthy_threshold] - Number of failed attempts allowed before failover.
 * @param {number} [parameters.healthy_threshold] - Number of successful attempts allowed before success.
 * @param {string} [parameters.path] - Path used for the health check; must return an HTTP 200 success code.
 */
exports.setHealthCheck = {
  url: '/loadbalancer/health_check_update',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    protocol: {
      type: 'string',
      required: false
    },
    check_interval: {
      type: 'number',
      required: false
    },
    response_timeout: {
      type: 'number',
      required: false
    },
    unhealthy_threshold: {
      type: 'number',
      required: false
    },
    healthy_threshold: {
      type: 'number',
      required: false
    },
    path: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Attach an instance to a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_attachInstance}
 * @function attachInstance
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 * @param {number} parameters.backendNode - Unique identifier or a VPS or bare metal subscription.
 */
exports.attachInstance = {
  url: '/loadbalancer/instance_attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    backendNode: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Detach an instance from a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_detachInstance}
 * @function detachInstance
 * @memberof loadBalancer
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 * @param {number} parameters.backendNode - Unique identifier or a VPS or bare metal subscription.
 */
exports.detachInstance = {
  url: '/loadbalancer/instance_detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    backendNode: {
      type: 'number',
      required: true
    }
  }
}

/**
 * List the instances attached to a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_listInstance}
 * @function attachedInstances
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 */
exports.attachedInstances = {
  url: '/loadbalancer/instance_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Set the label of a load balancer subscription.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_setLabel}
 * @function setLabel
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 * @param {string} parameters.label - Text label of the load balancer that will be shown in the control panel.
 */
exports.setLabel = {
  url: '/loadbalancer/label_set',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: true
    }
  }
}

/**
 * List all load balancer subscriptions on the current account. This list will
 * include both pending and active subscriptions.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_lbList}
 * @function list
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} [parameters.SUBID] - Unique identifier of a load balancer subscription.
 */
exports.list = {
  url: '/loadbalancer/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: false
    }
  }
}

/**
 * Add an SSL certificate to a load balancer.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_addSSL}
 * @function addSSL
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 * @param {string} parameters.ssl_private_key - The SSL certficate's private key.
 * @param {string} parameters.ssl_certificate - The SSL certificate to add.
 * @param {string} [parameters.ssl_chain] - The SSL certificate chain.
 */
exports.addSSL = {
  url: '/loadbalancer/ssl_add',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    ssl_private_key: {
      type: 'string',
      required: true
    },
    ssl_certificate: {
      type: 'string',
      required: true
    },
    ssl_chain: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Retrive whether or not the load balancer subscription has an SSL certificate attached.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_getSSL}
 * @function hasSSL
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 */
exports.hasSSL = {
  url: '/loadBalancer/ssl_info',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Remove an SSL certificate from a load balancer.<br>
 * {@link https://www.vultr.com/api/#loadbalancer_removeSSL}
 * @function removeSSL
 * @memberof loadBalancer
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a load balancer subscription.
 */
exports.removeSSL = {
  url: '/loadbalancer/ssl_remove',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}
