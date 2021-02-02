/**
 * Methods for interacting with the plan endpoints.
 * {@link https://www.vultr.com/api/#tag/plans}
 * @namespace plans
 */

/**
 * Get a list of allavailable Vultr instance plans.
 * {@link https://www.vultr.com/api/#operation/list-plans}
 * @function listPlans
 * @memberof plans
 * @instance
 */
exports.listPlans = {
  url: '/plans',
  requestType: 'GET',
  parameters: {
    type: { type: 'string' },
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}
/**
 * Get a list of all available Vultr bare metal plans.
 * {@link https://www.vultr.com/api/#operation/list-metal-plans}
 * @function listBareMetalPlans
 * @memberof plans
 * @instance
 */
exports.listBareMetalPlans = {
  url: '/plans-metal',
  requestType: 'GET',
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}
