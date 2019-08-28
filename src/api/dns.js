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

exports.createRecord = {
  url: '/dns/create_record',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true
    },
    data: {
      type: 'string',
      required: true
    },
    ttl: {
      type: 'number',
      required: false
    },
    priority: {
      type: 'number',
      required: false
    }
  }
}

exports.updateRecord = {
  url: '/dns/update_record',
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
    },
    name: {
      type: 'string',
      required: false
    },
    data: {
      type: 'string',
      required: false
    },
    ttl: {
      type: 'number',
      required: false
    },
    priority: {
      type: 'number',
      required: false
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

exports.dnsSecInfo = {
  url: '/dns/dnssec_info',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    }
  }
}

exports.getSOA = {
  url: '/dns/soa_info',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    }
  }
}

exports.updateSOA = {
  url: '/dns/soa_update',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    },
    nsprimary: {
      type: 'string',
      required: false
    },
    email: {
      type: 'string',
      required: false
    }
  }
}
