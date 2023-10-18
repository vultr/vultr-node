/**
 * Methods for interacting with the billing endpoints<br>
 * {@link https://www.vultr.com/api/#tag/billing}
 * @namespace billing
 */

import { ApiEndpoint } from '../types'

/**
 * Retrieves a list of all billing history on the current account.<br>
 * {@link https://www.vultr.com/api/#operation/list-billing-history}
 * @function listHistory
 * @memberof billing
 * @instance
 */
export const listHistory: ApiEndpoint = {
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
export const listInvoices: ApiEndpoint = {
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
export const getInvoice: ApiEndpoint = {
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
export const listInvoiceItems: ApiEndpoint = {
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
