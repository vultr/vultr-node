exports.ruleList = {
  url: '/firewall/rule_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    FIREWALLGROUPID: {
      type: 'string',
      optional: false
    },
    direction: {
      type: 'string',
      optional: false
    },
    ip_type: {
      type: 'string',
      optional: false
    }
  }
}
