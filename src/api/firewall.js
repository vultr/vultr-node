exports.listRules = {
  url: '/firewall/rule_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    },
    direction: {
      type: 'string',
      required: true
    },
    ip_type: {
      type: 'string',
      required: true
    }
  }
}

exports.deleteGroup = {
  url: '/firewall/group_delete',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    }
  }
}

exports.createGroup = {
  url: '/firewall/group_create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    }
  }
}

exports.createRule = {
  url: '/firewall/rule_create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    },
    direction: {
      type: 'string',
      required: true
    },
    ip_type: {
      type: 'string',
      required: true
    },
    protocol: {
      type: 'string',
      required: true
    },
    subnet: {
      type: 'string',
      required: true
    },
    subnet_size: {
      type: 'number',
      required: true
    },
    port: {
      type: 'string',
      required: false
    },
    notes: {
      type: 'string',
      required: false
    }
  }
}
