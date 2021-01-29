/**
 * Methods for interacting with the region endpoints<br>
 * {@link https://www.vultr.com/api/#tag/region}
 * @namespace regions
 */

/**
 * List all regions available at Vultr.<br>
 * {@link https://www.vultr.com/api/#operation/list-regions}
 * @function listRegions
 * @memberof regions
 * @instance
 */
exports.listRegions = {
  url: '/regions',
  requestType: 'GET',
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * List all available plans in the specified region.<br>
 * {@link https://www.vultr.com/api/#operation/list-available-compute-region}
 * @function listAvailableComputeInRegion
 * @memberof regions
 * @instance
 */
exports.listAvailableComputeInRegion = {
  url: '/regions/{region-id}/availability',
  requestType: 'GET',
  parameters: {
    'region-id': {
      type: 'string',
      path: true,
      required: true
    },
    type: { type: 'string' }
  }
}
