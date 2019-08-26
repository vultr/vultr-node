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

exports.appInfo = {
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

exports.enablePrivateNetwork = {
  url: '/server/private_network_enable',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    NETWORKID: {
      type: 'string',
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

exports.enableBackup = {
  url: '/server/backup_enable',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
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

exports.disableBackup = {
  url: '/server/backup_disable',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.addIPv4 = {
  url: '/server/create_ipv4',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    reboot: {
      type: 'string',
      required: false
    }
  }
}

exports.listReverseIPv6 = {
  url: '/server/reverse_list_ipv6',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.ipv6Info = {
  url: '/server/list_ipv6',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.setBackupSchedule = {
  url: '/server/backup_set_schedule',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    cron_type: {
      type: 'string',
      required: true
    },
    hour: {
      type: 'number',
      required: false
    },
    dow: {
      type: 'number',
      required: false
    },
    dom: {
      type: 'number',
      required: false
    }
  }
}

exports.getBackupSchedule = {
  url: '/server/backup_get_schedule',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.listApps = {
  url: '/server/app_change_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.ipv4Info = {
  url: '/server/list_ipv4',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    public_network: {
      type: 'string',
      required: false
    }
  }
}

exports.setFirewallGroup = {
  url: '/server/firewall_group_set',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    FIREWALLGROUPID: {
      type: 'string',
      required: true
    }
  }
}

exports.destroyIPv4 = {
  url: '/server/destroy_ipv4',
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
    }
  }
}

exports.restoreBackup = {
  url: '/server/restore_backup',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    BACKUPID: {
      type: 'string',
      required: true
    }
  }
}

exports.isoAttach = {
  url: '/server/iso_attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    ISOID: {
      type: 'number',
      required: true
    }
  }
}

exports.restoreSnapshot = {
  url: '/server/restore_snapshot',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    SNAPSHOTID: {
      type: 'string',
      required: true
    }
  }
}

exports.listChangeOS = {
  url: '/server/os_change_list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.isoStatus = {
  url: '/server/iso_status',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.privateNetworks = {
  url: '/server/private_networks',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.isoDetach = {
  url: '/server/iso_detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

exports.disablePrivateNetwork = {
  url: '/server/private_network_disable',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    NETWORKID: {
      type: 'string',
      required: true
    }
  }
}

exports.setDefaultReverseIPv4 = {
  url: '/server/reverse_default_ipv4',
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
    }
  }
}

exports.deleteReverseIPv6 = {
  url: '/server/reverse_delete_ipv6',
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
    }
  }
}
