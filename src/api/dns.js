exports.createDomain = {
  url: '/dns/create_domain',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    },
    serverip: {
      type: 'string',
      required: true
    }
  }
}

exports.deleteDomain = {
  url: '/dns/delete_domain',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    }
  }
}

exports.list = {
  url: '/dns/list',
  requestType: 'GET',
  apiKeyRequired: true
}

exports.records = {
  url: '/dns/records',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    }
  }
}

exports.deleteRecord = {
  url: '/dns/delete_record',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    },
    RECORDID: {
      type: 'number',
      required: true
    }
  }
}

exports.enableDNSSec = {
  url: '/dns/dnssec_enable',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    },
    enable: {
      type: 'string',
      required: true
    }
  }
}
