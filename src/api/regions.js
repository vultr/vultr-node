/**
 * Methods for interacting with the Regions endpoints<br>
 * {@link https://www.vultr.com/api/#regions}
 * @namespace regions
 */

/**
 * Retrieve a list of all active plans. Plans that are no longer available will not be shown.<br>
 * {@link https://www.vultr.com/api/#regions_region_list}
 * @function list
 * @memberof regions
 * @instance
 * @param {object} parameters
 * @param {string} [parameters.availability] - 'yes' or 'no'. If 'yes', include the current availability with each region entry.
 */
exports.list = {
  url: '/regions/list',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    availability: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Retrieve a list of the VPSPLANIDs currently available in this location.<br>
 * If your account has special plans available, you will need to pass your API key in order to see them. For all other accounts, the API key is not required.<br>
 * {@link https://www.vultr.com/api/#regions_region_availability}
 * @function availability
 * @memberof regions
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - Location to check availability.
 * @param {string} [parameters.type] - The type of plans for which to include availability. Possible values: "all", "vc2", "ssd", "vdc2", "dedicated".
 */
exports.availability = {
  url: '/regions/availability',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    type: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Retrieve a list of the METALPLANIDs currently available in this location.<br>
 * If your account has special plans available, you will need to pass your API key in order to see them. For all other accounts, the API key is not required.<br>
 * {@link https://www.vultr.com/api/#regions_region_availability_baremetal}
 * @function availabilityBareMetal
 * @memberof regions
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - Location to check availability.
 */
exports.availabilityBareMetal = {
  url: '/regions/availability_baremetal',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Retrieve a list of the vc2 VPSPLANIDs currently available in this location.<br>
 * If your account has special plans available, you will need to pass your API key in order to see them. For all other accounts, the API key is not required.<br>
 * {@link https://www.vultr.com/api/#regions_region_availability_vc2}
 * @function availabilityVc2
 * @memberof regions
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - Location to check availability.
 */
exports.availabilityVc2 = {
  url: '/regions/availability_vc2',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Retrieve a list of the vdc2 VPSPLANIDs currently available in this location.<br>
 * If your account has special plans available, you will need to pass your API key in order to see them. For all other accounts, the API key is not required.<br>
 * {@link https://www.vultr.com/api/#regions_region_availability_vdc2}
 * @function availabilityVdc2
 * @memberof regions
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - Location to check availability.
 */
exports.availabilityVdc2 = {
  url: '/regions/availability_vdc2',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    }
  }
}
