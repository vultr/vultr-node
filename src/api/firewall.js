exports.ruleList = {
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
