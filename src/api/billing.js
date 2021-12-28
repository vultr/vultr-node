/**
 * Methods for interacting with the billing endpoints<br>
 * {@link https://www.vultr.com/api/#tag/billing}
 * @namespace billing
 */

/**
 * Retrieves a list of all billing history on the current account.<br>
 * {@link https://www.vultr.com/api/#operation/list-billing-history}
 * @function listHistory
 * @memberof billing
 * @instance
 */
exports.listHistory = {
  url: '/billing/history',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * Retrieves a list of all billing invoices on the current account.<br>
 * {@link https://www.vultr.com/api/#operation/list-invoices}
 * @function listInvoices
 * @memberof billing
 * @instance
 */
exports.listInvoices = {
  url: '/billing/invoices',
  requestType: 'GET',
  apiKeyRequired: true
}

/**
 * Retrieves the invoice that matches the given invoice-id.<br>
 * {@link https://www.vultr.com/api/#operation/get-invoice}
 * @function getInvoice
 * @memberof billing
 * @instance
 */
exports.getInvoice = {
  url: '/billing/invoices/{invoice-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'invoice-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Retrieves items in the invoice that matches the given invoice-id.<br>
 * {@link https://www.vultr.com/api/#operation/get-invoice-items}
 * @function listInvoiceItems
 * @memberof billing
 * @instance
 */
exports.listInvoiceItems = {
  url: '/billing/invoices/{invoice-id}/items',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'invoice-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}
