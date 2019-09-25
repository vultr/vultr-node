/**
 * Methods for interacting with the Bare Metal endpoints<br>
 * {@link https://www.vultr.com/api/#baremetal}
 * @namespace baremetal
 */

/**
 * List all bare metal servers on the current account. This includes both pending and active servers.<br>
 * {@link https://www.vultr.com/api/#baremetal_baremetal_list}
 * @function list
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} [parameters.SUBID] - Unique identifier of a subscription. Only the subscription object will be returned.
 * @param {string} [parameters.tag] - A tag string. Only subscription objects with this tag will be returned.
 * @param {string} [parameters.label] - A text label string. Only subscription objects with this text label will be returned.
 * @param {string} [parameters.main_ip] - An IPv4 address. Only the subscription matching this IPv4 address will be returned.
 */
exports.list = {
  url: '/baremetal/list',
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
 * Delete a bare metal server. All data will be permanently lost, and the IP address will be released. There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#baremetal_destroy}
 * @function delete
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.delete = {
  url: '/baremetal/destroy',
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
 * Reinstalls the bare metal server to a different Vultr one-click application. All data will be permanently lost.<br>
 * {@link https://www.vultr.com/api/#baremetal_app_change}
 * @function changeApp
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {number} parameters.APPID - Application to use.
 */
exports.changeApp = {
  url: '/baremetal/app_change',
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
 * Set the tag of a bare metal server.<br>
 * {@link https://www.vultr.com/api/#baremetal_tag_set}
 * @function setTag
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.tag - The tag to assign to this server. This tag is shown in the control panel.
 */
exports.setTag = {
  url: '/baremetal/tag_set',
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
 * Reinstall the operating system on a bare metal server. All data will be permanently lost, but the IP address will remain the same. There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#baremetal_reinstall}
 * @function reinstall
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.reinstall = {
  url: '/baremetal/reinstall',
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
 * Reboot a bare metal server. This is a hard reboot, which means that the server is powered off, then back on.<br>
 * {@link https://www.vultr.com/api/#baremetal_reboot}
 * @function reboot
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.reboot = {
  url: '/baremetal/reboot',
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
 * Create a new bare metal server. You will start being billed for this immediately. The response only contains the SUBID for the new machine.<br>
 * {@link https://www.vultr.com/api/#baremetal_reboot}
 * @function create
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - Location in which to create the server.
 * @param {number} parameters.METALPLANID - Plan to use when creating this server.
 * @param {number} parameters.OSID - Operating system to use.
 * @param {number} [parameters.SCRIPTID] - The SCRIPTID of a startup script to execute on boot. This only works when using a Vultr supplied operating system.
 * @param {string} [parameters.SNAPSHOTID] - If you've selected the 'snapshot' operating system, this should be the SNAPSHOTID to restore for the initial installation.
 * @param {string} [parameters.enable_ipv6] - 'yes' or 'no'.  If yes, an IPv6 subnet will be assigned to the server.
 * @param {string} [parameters.label] - This is a text label that will be shown in the control panel.
 * @param {string} [parameters.SSHKEYID] - List of SSH keys to apply to this server on install (only valid for Linux/FreeBSD). Separate keys with commas.
 * @param {number} [parameters.APPID] - If launching an application (OSID 186), this is the APPID to launch.
 * @param {string} [parameters.userdata] - Base64 encoded user-data.
 * @param {string} [parameters.notify_activate='yes'] - 'yes' or 'no'. If yes, an activation email will be sent when the server is ready.
 * @param {string} [parameters.hostname] - The hostname to assign to this server.
 * @param {string} [parameters.tag] - The tag to assign to this server.
 * @param {string} [parameters.reserved_ip_v4] - IP address of the floating IP to use as the main IP of this server.
 */
exports.create = {
  url: '/baremetal/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    METALPLANID: {
      type: 'number',
      required: true
    },
    OSID: {
      type: 'number',
      required: true
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
    label: {
      type: 'string',
      required: false
    },
    SSHKEYID: {
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
    hostname: {
      type: 'string',
      required: false
    },
    tag: {
      type: 'string',
      required: false
    },
    reserved_ip_v4: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Retrieves a list of Vultr one-click applications to which a bare metal server can be changed.<br>
 * {@link https://www.vultr.com/api/#baremetal_app_change_list}
 * @function listApps
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.listApps = {
  url: '/baremetal/app_change_list',
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
 * Halt a bare metal server. This is a hard power off, meaning that the power to the machine is severed. The data on the machine will not be modified, and you will still be billed for the machine.<br>
 * {@link https://www.vultr.com/api/#baremetal_halt}
 * @function halt
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.halt = {
  url: '/baremetal/halt',
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
 * Retrieves the application information for a bare metal server.<br>
 * {@link https://www.vultr.com/api/#baremetal_get_app_info}
 * @function appInfo
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.appInfo = {
  url: '/baremetal/get_app_info',
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
 * Get the bandwidth used by a bare metal server.<br>
 * {@link https://www.vultr.com/api/#baremetal_bandwidth}
 * @function bandwidth
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.bandwidth = {
  url: '/baremetal/bandwidth',
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
 * Retrieves the (base64 encoded) user-data for this subscription.<br>
 * {@link https://www.vultr.com/api/#baremetal_get_user_data}
 * @function getUserData
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.getUserData = {
  url: '/baremetal/get_user_data',
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
 * Enables IPv6 networking on a bare metal server by assigning an IPv6 subnet to it. The server will not be rebooted when the subnet is assigned.<br>
 * {@link https://www.vultr.com/api/#baremetal_ipv6_enable}
 * @function enableIPv6
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.enableIPv6 = {
  url: '/baremetal/ipv6_enable',
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
 * Set the label of a bare metal server.<br>
 * {@link https://www.vultr.com/api/#baremetal_label_set}
 * @function setLabel
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.label - This is a text label that will be shown in the control panel.
 */
exports.setLabel = {
  url: '/baremetal/label_set',
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
 * List the IPv6 information of a bare metal server. IP information is only available for bare metal servers in the "active" state. If the bare metal server does not have IPv6 enabled, then an empty array is returned.<br>
 * {@link https://www.vultr.com/api/#baremetal_list_ipv6}
 * @function ipv6Info
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.ipv6Info = {
  url: '/baremetal/list_ipv6',
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
 * List the IPv4 information of a bare metal server. IP information is only available for bare metal servers in the "active" state.<br>
 * {@link https://www.vultr.com/api/#baremetal_list_ipv4}
 * @function ipv4Info
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.ipv4Info = {
  url: '/baremetal/list_ipv4',
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
 * Changes the bare metal server to a different operating system. All data will be permanently lost.<br>
 * {@link https://www.vultr.com/api/#baremetal_os_change}
 * @function changeOS
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {number} parameters.OSID - Operating system to use.
 */
exports.changeOS = {
  url: '/baremetal/os_change',
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
 * Retrieves a list of operating systems to which a bare metal server can be changed.<br>
 * {@link https://www.vultr.com/api/#baremetal_os_change_list}
 * @function listOS
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 */
exports.listOS = {
  url: '/baremetal/os_change_list',
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
 * Retrieves a list of operating systems to which a bare metal server can be changed.<br>
 * {@link https://www.vultr.com/api/#baremetal_os_change_list}
 * @function listOS
 * @memberof baremetal
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - Unique identifier of a subscription.
 * @param {string} parameters.userdata - Sets the user-data for this subscription. User-data is a generic data store, which some provisioning tools and cloud operating systems use as a configuration file. It is generally consumed only once after an instance has been launched, but individual needs may vary.
 */
exports.setUserData = {
  url: '/baremetal/set_user_data',
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
