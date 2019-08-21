exports.list = {
  url: '/server/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: false
    },
    tag: {
      type: 'string',
      required: false
    },
    label: {
      type: 'string',
      required: false
    },
    main_ip: {
      type: 'string',
      required: false
    }
  }
}

exports.create = {
  url: '/server/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    VPSPLANID: {
      type: 'number',
      required: true
    },
    OSID: {
      type: 'number',
      required: true
    },
    ipxe_chain: {
      type: 'string',
      required: false
    },
    ISOID: {
      type: 'string',
      required: false
    },
    SCRIPTID: {
      type: 'number',
      required: false
    },
    SNAPSHOTID: {
      type: 'string',
      required: false
    },
    enable_ipv6: {
      type: 'string',
      required: false
    },
    enable_private_network: {
      type: 'string',
      required: false
    },
    NETWORKID: {
      type: 'array',
      required: false
    },
    label: {
      type: 'string',
      required: false
    },
    SSHKEYID: {
      type: 'string',
      required: false
    },
    auto_backups: {
      type: 'string',
      required: false
    },
    APPID: {
      type: 'number',
      required: false
    },
    userdata: {
      type: 'string',
      required: false
    },
    notify_activate: {
      type: 'string',
      required: false
    },
    ddos_protection: {
      type: 'string',
      required: false
    },
    reserved_ip_v4: {
      type: 'string',
      required: false
    },
    hostname: {
      type: 'string',
      required: false
    },
    tag: {
      type: 'string',
      required: false
    },
    FIREWALLGROUPID: {
      type: 'string',
      required: false
    }
  }
}

exports.setLabel = {
  url: '/server/label_set',
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

exports.listUpgradePlan = {
  url: '/server/upgrade_plan_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.setTag = {
  url: '/server/tag_set',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    tag: {
      type: 'string',
      required: true
    }
  }
}

exports.upgradePlan = {
  url: '/server/upgrade_plan',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true },
    VPSPLANID: { type: 'number', required: true }
  }
}

exports.delete = {
  url: '/server/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true }
  }
}

exports.halt = {
  url: '/server/halt',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true }
  }
}

exports.start = {
  url: '/server/start',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true }
  }
}

exports.reboot = {
  url: '/server/reboot',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true }
  }
}

exports.neighbors = {
  url: '/server/neighbors',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.getAppInfo = {
  url: '/server/get_app_info',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.changeOS = {
  url: '/server/os_change',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    OSID: {
      type: 'number',
      required: true
    }
  }
}

exports.reinstall = {
  url: '/server/reinstall',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    hostname: {
      type: 'string',
      required: false
    }
  }
}

exports.setUserData = {
  url: '/server/set_user_data',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    userdata: {
      type: 'string',
      required: true
    }
  }
}

exports.setReverseIPv4 = {
  url: '/server/reverse_set_ipv4',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    ip: {
      type: 'string',
      required: true
    },
    entry: {
      type: 'string',
      required: true
    }
  }
}

exports.bandwidth = {
  url: '/server/bandwidth',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.changeApp = {
  url: '/server/app_change',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    APPID: {
      type: 'number',
      required: true
    }
  }
}

exports.getUserData = {
  url: '/server/get_user_data',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.setReverseIPv6 = {
  url: '/server/reverse_set_ipv6',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    ip: {
      type: 'string',
      required: true
    },
    entry: {
      type: 'string',
      required: true
    }
  }
}

exports.enableIPv6 = {
  url: '/server/ipv6_enable',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}
