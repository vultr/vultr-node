/**
 * Methods for interacting with the Server endpoints<br>
 * {@link https://www.vultr.com/api/#server}
 * @namespace server
 */

/**
 * List all active or pending virtual machines on the current account.<br>
 * {@link https://www.vultr.com/api/#server_server_list}
 * @function list
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} [parameters.SUBID] - Unique identifier of a subscription. Only the subscription object will be returned.
 * @param {string} [parameters.tag] - A tag string. Only subscription objects with this tag will be returned.
 * @param {string} [parameters.label] - A text label string. Only subscription objects with this text label will be returned.
 * @param {string} [parameters.main_ip] - An IPv4 address. Only the subscription matching this IPv4 address will be returned.
 */
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

/**
 * Create a new virtual machine. You will start being billed for this immediately. The response only contains the SUBID for the new machine.<br>
 * {@link https://www.vultr.com/api/#server_create}
 * @function create
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} [parameters.DCID] - Location to create this virtual machine in.
 * @param {number} [parameters.VPSPLANID] - Plan to use when creating this virtual machine.
 * @param {number} [parameters.OSID] - Operating system to use.
 * @param {string} [parameters.ipxe_chain] - If you've selected the 'custom' operating system, this can be set to chainload the specified URL on bootup, via iPXE.
 * @param {string} [parameters.ISOID] - If you've selected the 'custom' operating system, this is the ID of a specific ISO to mount during the deployment.
 * @param {number} [parameters.SCRIPTID] - If you've not selected a 'custom' operating system, this can be the SCRIPTID of a startup script to execute on boot.
 * @param {string} [parameters.SNAPSHOTID] - If you've selected the 'snapshot' operating system, this should be the SNAPSHOTID to restore for the initial installation.
 * @param {string} [parameters.enable_ipv6='no'] - 'yes' or 'no'. If yes, an IPv6 subnet will be assigned to the machine (where available).
 * @param {string} [parameters.enable_private_network='no'] - 'yes' or 'no'. If yes, private networking support will be added to the new server.
 * @param {array}  [parameters.NETWORKID] - List of private networks to attach to this server. Use either this field or enable_private_network, not both.
 * @param {string} [parameters.label] - This is a text label that will be shown in the control panel.
 * @param {string} [parameters.SSHKEYID] - List of SSH keys to apply to this server on install (only valid for Linux/FreeBSD). Separate keys with commas.
 * @param {string} [parameters.auto_backups='no'] - 'yes' or 'no'. If yes, automatic backups will be enabled for this server (these have an extra charge associated with them).
 * @param {number} [parameters.APPID] - If launching an application (OSID 186), this is the APPID to launch.
 * @param {string} [parameters.userdata] - Base64 encoded user-data.
 * @param {string} [parameters.notify_activate='yes'] - 'yes' or 'no'. If yes, an activation email will be sent when the server is ready.
 * @param {string} [parameters.ddos_protection='no'] - 'yes' or 'no'. If yes, DDOS protection will be enabled on the subscription (there is an additional charge for this).
 * @param {string} [parameters.reserved_ip_v4] - IP address of the floating IP to use as the main IP of this server.
 * @param {string} [parameters.hostname] - The hostname to assign to this server.
 * @param {string} [parameters.tag] - The tag to assign to this server.
 * @param {string} [parameters.FIREWALLGROUPID] - The firewall group to assign to this server.
 */
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

/**
 * Set the label of a virtual machine.<br>
 * {@link https://www.vultr.com/api/#server_label_set}
 * @function setLabel
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.label - This is a text label that will be shown in the control panel.
 */
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

/**
 * Retrieve a list of the VPSPLANIDs for which a virtual machine can be upgraded. An empty response array means that there are currently no upgrades available.<br>
 * {@link https://www.vultr.com/api/#server_upgrade_plan_list}
 * @function listUpgradePlan
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Set the tag of a virtual machine.<br>
 * {@link https://www.vultr.com/api/#server_tag_set}
 * @function setTag
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.tag - This is a text tag that will be shown in the control panel.
 */
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

/**
 * Upgrade the plan of a virtual machine. The virtual machine will be rebooted upon a successful upgrade.<br>
 * {@link https://www.vultr.com/api/#server_upgrade_plan}
 * @function upgradePlan
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {number} parameters.VPSPLANID - The new plan ID.
 */
exports.upgradePlan = {
  url: '/server/upgrade_plan',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true },
    VPSPLANID: { type: 'number', required: true }
  }
}

/**
 * Destroy (delete) a virtual machine. All data will be permanently lost, and the IP address will be released. There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#server_destroy}
 * @function delete
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.delete = {
  url: '/server/destroy',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true }
  }
}

/**
 * Halt a virtual machine. This is a hard power off (basically, unplugging the machine). The data on the machine will not be modified, and you will still be billed for the machine.<br>
 * {@link https://www.vultr.com/api/#server_halt}
 * @function halt
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.halt = {
  url: '/server/halt',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true }
  }
}

/**
 * Start a virtual machine. If the machine is already running, it will be restarted.<br>
 * {@link https://www.vultr.com/api/#server_start}
 * @function start
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.start = {
  url: '/server/start',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true }
  }
}

/**
 * Reboot a virtual machine. This is a hard reboot (basically, unplugging the machine).<br>
 * {@link https://www.vultr.com/api/#server_reboot}
 * @function reboot
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.reboot = {
  url: '/server/reboot',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: { type: 'number', required: true }
  }
}

/**
 * Determine what other subscriptions are hosted on the same physical host as a given subscription.<br>
 * {@link https://www.vultr.com/api/#server_neighbors}
 * @function neighbors
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Retrieves the application information for this subscription.<br>
 * {@link https://www.vultr.com/api/#server_get_app_info}
 * @function appInfo
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Changes the virtual machine to a different operating system. All data will be permanently lost.<br>
 * {@link https://www.vultr.com/api/#server_os_change}
 * @function changeOS
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {number} parameters.OSID - Operating system to use.
 */
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

/**
 * Reinstall the operating system on a virtual machine. All data will be permanently lost, but the IP address will remain the same. There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#server_reinstall}
 * @function reinstall
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.hostname - The hostname to assign to this server.
 */
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

/**
 * Sets the user-data for this subscription. User-data is a generic data store, which some provisioning tools and cloud operating systems use as a configuration file. It is generally consumed only once after an instance has been launched, but individual needs may vary.<br>
 * {@link https://www.vultr.com/api/#server_set_user_data}
 * @function setUserData
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.userdata - Base64 encoded user-data.
 */
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

/**
 * Set a reverse DNS entry for an IPv4 address of a virtual machine. Upon success, DNS changes may take 6-12 hours to become active.<br>
 * {@link https://www.vultr.com/api/#server_reverse_set_ipv4}
 * @function setReverseIPv4
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.ip - IPv4 address used in the reverse DNS update.
 * @param {string} parameters.entry - Reverse DNS entry.
 */
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

/**
 * Get the bandwidth used by a virtual machine.<br>
 * {@link https://www.vultr.com/api/#server_bandwidth}
 * @function bandwidth
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Enables private networking on a server. The server will be automatically rebooted to complete the request. No action occurs if private networking was already enabled.<br>
 * {@link https://www.vultr.com/api/#server_private_network_enable}
 * @function enablePrivateNetwork
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.NETWORKID - Unique identifier for the private network to attach to this subscription.  This field is optional if there is only one private network in a given location.
 */
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

/**
 * Enables private networking on a server. The server will be automatically rebooted to complete the request. No action occurs if private networking was already enabled.<br>
 * {@link https://www.vultr.com/api/#server_app_change}
 * @function changeApp
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {number} parameters.APPID - Application to use.
 */
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

/**
 * Retrieves the (base64 encoded) user-data for this subscription.<br>
 * {@link https://www.vultr.com/api/#server_get_user_data}
 * @function getUserData
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Set a reverse DNS entry for an IPv6 address of a virtual machine. Upon success, DNS changes may take 6-12 hours to become active.<br>
 * {@link https://www.vultr.com/api/#server_reverse_set_ipv6}
 * @function setReverseIPv6
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.ip - IPv6 address used in the reverse DNS update.
 * @param {string} parameters.entry - Reverse DNS entry.
 */
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

/**
 * Enables automatic backups on a server.<br>
 * {@link https://www.vultr.com/api/#server_backup_enable}
 * @function enableBackup
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Enables IPv6 networking on a server by assigning an IPv6 subnet to it. The server will be automatically rebooted to complete the request. No action occurs if IPv6 networking was already enabled. <br>
 * {@link https://www.vultr.com/api/#server_ipv6_enable}
 * @function enableIPv6
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Disables automatic backups on a server. Once disabled, backups can only be enabled again by customer support.<br>
 * {@link https://www.vultr.com/api/#server_backup_disable}
 * @function disableBackup
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Add a new IPv4 address to a server. You will start being billed for this immediately. The server will be rebooted unless you specify otherwise. You must reboot the server before the IPv4 address can be configured.<br>
 * {@link https://www.vultr.com/api/#server_create_ipv4}
 * @function addIPv4
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} [parameters.reboot='yes'] - 'yes' or 'no'. If yes, the server is rebooted immediately.
 */
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

/**
 * List the IPv6 reverse DNS entries of a virtual machine. Reverse DNS entries are only available for virtual machines in the "active" state. If the virtual machine does not have IPv6 enabled, then an empty array is returned.<br>
 * {@link https://www.vultr.com/api/#server_reverse_list_ipv6}
 * @function listReverseIPv6
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * List the IPv6 information of a virtual machine. IP information is only available for virtual machines in the "active" state. If the virtual machine does not have IPv6 enabled, then an empty array is returned.<br>
 * {@link https://www.vultr.com/api/#server_list_ipv6}
 * @function ipv6Info
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Sets the backup schedule for a server. All time values are in UTC.<br>
 * {@link https://www.vultr.com/api/#server_backup_set_schedule}
 * @function setBackupSchedule
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.cron_type - Backup cron type. Can be one of 'daily', 'weekly', 'monthly', 'daily_alt_even', or 'daily_alt_odd'.
 * @param {number} [parameters.hour] - Hour value (0-23). Applicable to crons: 'daily', 'weekly', 'monthly', 'daily_alt_even', 'daily_alt_odd'.
 * @param {number} [parameters.dow] - Day-of-week value (0-6). Applicable to crons: 'weekly'.
 * @param {number} [parameters.dom] - Day-of-month value (1-28). Applicable to crons: 'monthly'.
 */
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

/**
 * Retrieves the backup schedule for a server. All time values are in UTC.<br>
 * {@link https://www.vultr.com/api/#server_backup_get_schedule}
 * @function getBackupSchedule
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Retrieves a list of applications to which a virtual machine can be changed. Always check against this list before trying to switch applications because it is not possible to switch between every application combination.<br>
 * {@link https://www.vultr.com/api/#server_app_change_list}
 * @function listApps
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * List the IPv4 information of a virtual machine. IP information is only available for virtual machines in the "active" state.<br>
 * {@link https://www.vultr.com/api/#server_list_ipv4}
 * @function ipv4Info
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} [parameters.public_network='no'] - 'yes' or 'no'. If 'yes', include information about the public network adapter (such as MAC address) with the "main_ip" entry.
 */
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

/**
 * Set, change, or remove the firewall group currently applied to a server.<br>
 * {@link https://www.vultr.com/api/#server_firewall_group_set}
 * @function setFirewallGroup
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.FIREWALLGROUPID - The firewall group to apply to this server. A value of "0" means "no firewall group".
 */
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

/**
 * Set, change, or remove the firewall group currently applied to a server.<br>
 * {@link https://www.vultr.com/api/#server_destroy_ipv4}
 * @function destroyIPv4
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.ip - IPv4 address to remove.
 */
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

/**
 * Restore the specified backup to the virtual machine. Any data already on the virtual machine will be lost.<br>
 * {@link https://www.vultr.com/api/#server_restore_backup}
 * @function restoreBackup
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.BACKUPID - ID to restore to this instance.
 */
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

/**
 * Attach an ISO and reboot the server.<br>
 * {@link https://www.vultr.com/api/#server_iso_attach}
 * @function isoAttach
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {number} parameters.ISOID - The ISO that will be mounted.
 */
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

/**
 * Restore the specified snapshot to the virtual machine. Any data already on the virtual machine will be lost.<br>
 * {@link https://www.vultr.com/api/#server_restore_snapshot}
 * @function restoreSnapshot
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.SNAPSHOTID - ID to restore to this instance.
 */
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

/**
 * Retrieves a list of operating systems to which a virtual machine can be changed. Always check against this list before trying to switch operating systems because it is not possible to switch between every operating system combination.<br>
 * {@link https://www.vultr.com/api/#server_os_change_list}
 * @function listOS
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.listOS = {
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

/**
 * Retrieve the current ISO state for a given subscription. The returned state may be one of: ready | isomounting | isomounted. ISOID will only be set when the mounted ISO exists in your library. Otherwise, it will read "0".<br>
 * {@link https://www.vultr.com/api/#server_iso_status}
 * @function isoStatus
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * List private networks attached to a particular server.<br>
 * {@link https://www.vultr.com/api/#server_private_networks}
 * @function listPrivateNetworks
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.listPrivateNetworks = {
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

/**
 * Detach the currently mounted ISO and reboot the server.<br>
 * {@link https://www.vultr.com/api/#server_iso_detach}
 * @function isoDetach
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
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

/**
 * Removes a private network from a server. The server will be automatically rebooted to complete the request.<br>
 * {@link https://www.vultr.com/api/#server_private_network_disable}
 * @function disablePrivateNetwork
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.NETWORKID - Unique identifier for the private network to remove from this subscription. This field is optional if there is only one private network in a given location.
 */
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

/**
 * Set a reverse DNS entry for an IPv4 address of a virtual machine to the original setting. Upon success, DNS changes may take 6-12 hours to become active.<br>
 * {@link https://www.vultr.com/api/#server_reverse_default_ipv4}
 * @function setDefaultReverseIPv4
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.ip - IPv4 address used in the reverse DNS update.
 */
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

/**
 * Remove a reverse DNS entry for an IPv6 address of a virtual machine. Upon success, DNS changes may take 6-12 hours to become active.<br>
 * {@link https://www.vultr.com/api/#server_reverse_delete_ipv6}
 * @function deleteReverseIPv6
 * @memberof server
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.ip - IPv6 address used in the reverse DNS update.
 */
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
