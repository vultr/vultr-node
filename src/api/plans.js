/**
 * Methods for interacting with the Plans endpoints<br>
 * {@link https://www.vultr.com/api/#plans}
 * @namespace plans
 */

/**
 * Retrieve a list of all active plans. Plans that are no longer available will not be shown.<br>
 * {@link https://www.vultr.com/api/#plans_plan_list}
 * @function list
 * @memberof plans
 * @instance
 * @param {object} parameters
 * @param {string} [parameters.type] - The type of plans to return. Possible values: "all", "vc2", "ssd", "vdc2", "dedicated", "vc2z".
 */
exports.list = {
  url: '/plans/list',
  requestType: 'GET',
  apiKeyRequired: false,
  parameters: {
    type: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Retrieve a list of all active bare metal plans. Plans that are no longer available will not be shown.<br>
 * {@link https://www.vultr.com/api/#plans_plan_list_baremetal}
 * @function listBareMetal
 * @memberof plans
 * @instance
 */
exports.listBareMetal = {
  url: '/plans/list_baremetal',
  requestType: 'GET',
  apiKeyRequired: false
}

/**
 * Retrieve a list of all active vc2 plans. Plans that are no longer available will not be shown.<br>
 * {@link https://www.vultr.com/api/#plans_plan_list_vc2}
 * @function listVc2
 * @memberof plans
 * @instance
 */
exports.listVc2 = {
  url: '/plans/list_vc2',
  requestType: 'GET',
  apiKeyRequired: false
}

/**
 * Retrieve a list of all active vdc2 plans. Plans that are no longer available will not be shown.<br>
 * {@link https://www.vultr.com/api/#plans_plan_list_vdc2}
 * @function listVdc2
 * @memberof plans
 * @instance
 */
exports.listVdc2 = {
  url: '/plans/list_vdc2',
  requestType: 'GET',
  apiKeyRequired: false
}

/**
 * Retrieve a list of all active high frequency CPU plans. Plans that are no longer available will not be shown.<br>
 * {@link https://www.vultr.com/api/#plans_plan_list_vc2z}
 * @function listVc2z
 * @memberof plans
 * @instance
 */
exports.listVc2z = {
  url: '/plans/list_vc2z',
  requestType: 'GET',
  apiKeyRequired: false
}
