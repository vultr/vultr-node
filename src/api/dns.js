/**
 * Methods for interacting with the DNS endpoints<br>
 * {@link https://www.vultr.com/api/#dns}
 * @namespace dns
 */

/**
 * Create a domain name in DNS.<br>
 * {@link https://www.vultr.com/api/#dns_create_domain}
 * @function createDomain
 * @memberof dns
 * @instance
 * @param {object} parameters
 * @param {string} parameters.domain - Domain name to create.
 * @param {string} parameters.serverip - Server IP to use when creating default records (A and MX).
 */
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

/**
 * Delete a domain name and all associated records.<br>
 * {@link https://www.vultr.com/api/#dns_delete_domain}
 * @function deleteDomain
 * @memberof dns
 * @instance
 * @param {object} parameters
 * @param {string} parameters.domain - Domain name to delete.
 */
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

/**
 * List all domains associated with the current account.<br>
 * {@link https://www.vultr.com/api/#dns_dns_list}
 * @function list
 * @memberof dns
 * @instance
 */
exports.list = {
  url: '/dns/list',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * List all the records associated with a particular domain..<br>
 * {@link https://www.vultr.com/api/#dns_records}
 * @function records
 * @memberof dns
 * @instance
 */
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

/**
 * Delete an individual DNS record.<br>
 * {@link https://www.vultr.com/api/#dns_delete_record}
 * @function deleteRecord
 * @memberof dns
 * @instance
 */
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

/**
 * Add a DNS record.<br>
 * {@link https://www.vultr.com/api/#dns_create_record}
 * @function createRecord
 * @memberof dns
 * @instance
 * @param {object} parameters
 * @param {string} parameters.domain - Domain name to add record to.
 * @param {string} parameters.name - Name (subdomain) of record.
 * @param {string} parameters.type - Type (A, AAAA, MX, etc) of record.
 * @param {string} parameters.data - Data for this record.
 * @param {number} [parameters.ttl] - TTL of this record.
 * @param {number} [parameters.priority] - (only required for MX and SRV) Priority of this record (omit the priority from the data).
 */
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

/**
 * Update a DNS record.<br>
 * {@link https://www.vultr.com/api/#dns_update_record}
 * @function updateRecord
 * @memberof dns
 * @instance
 * @param {object} parameters
 * @param {string} parameters.domain - Domain name to update record.
 * @param {number} parameters.RECORDID - ID of record to update.
 * @param {string} [parameters.name] - Name (subdomain) of record.
 * @param {string} [parameters.data] - Data for this record.
 * @param {number} [parameters.ttl] - TTL of this record.
 * @param {number} [parameters.priority] - (only required for MX and SRV) Priority of this record (omit the priority from the data).
 */
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

/**
 * Enable or disable DNSSEC for a domain.<br>
 * {@link https://www.vultr.com/api/#dns_dnssec_enable}
 * @function enableDNSSec
 * @memberof dns
 * @instance
 * @param {object} parameters
 * @param {string} parameters.domain - Domain name to update record.
 * @param {string} parameters.enable - 'yes' or 'no'. If yes, DNSSEC will be enabled for the given domain.
 */
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

/**
 * Get the DNSSEC keys (if enabled) for a domain.<br>
 * {@link https://www.vultr.com/api/#dns_dnssec_info}
 * @function dnsSecInfo
 * @memberof dns
 * @instance
 * @param {object} parameters
 * @param {string} parameters.domain - Domain from which to gather DNSSEC keys.
 */
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

/**
 * Get the SOA record information for a domain.<br>
 * {@link https://www.vultr.com/api/#dns_soa_info}
 * @function getSOA
 * @memberof dns
 * @instance
 * @param {object} parameters
 * @param {string} parameters.domain - Domain from which to gather DNSSEC keys.
 */
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

/**
 * Update the SOA record information for a domain.<br>
 * {@link https://www.vultr.com/api/#dns_soa_update}
 * @function updateSOA
 * @memberof dns
 * @instance
 * @param {object} parameters
 * @param {string} parameters.domain - Domain from which to gather DNSSEC keys.
 * @param {string} [parameters.nsprimary] - Primary nameserver to store in the SOA record.
 * @param {string} [parameters.email] - Administrative email to store in the SOA record.
 */
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
