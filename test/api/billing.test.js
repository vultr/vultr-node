const util = require('../util')

const mockParameters = {
  getInvoice: {
    'invoice-id': '123456'
  },
  listInvoiceItems: {
    'invoice-id': '123456'
  }
}

const mockResponses = {
  listHistory: {
    billing_history: [
      {
        id: 123456,
        date: '2020-10-10T01:56:20+00:00',
        type: 'invoice',
        description: 'Invoice #123456',
        amount: 100.03,
        balance: 79.48
      },
      {
        id: 123457,
        date: '2020-10-10T01:46:05+00:00',
        type: 'credit',
        description: 'Account Credit',
        amount: 50.55,
        balance: -20.55
      }
    ],
    meta: {
      total: 3,
      links: {
        next: 'WxYzExampleNext',
        prev: ''
      }
    }
  },
  listInvoices: {
    billing_invoices: [
      {
        id: 123456,
        date: '2021-10-10T00:00:00+00:00',
        description: 'Invoice #123456',
        amount: 5.25,
        balance: 10.25
      }
    ],
    meta: {
      total: 1,
      links: {
        next: '',
        prev: ''
      }
    }
  },
  getInvoice: {
    billing_invoice: {
      id: 123456,
      description: 'Account Credit',
      date: '09-01-2021T00:00:00+00:00',
      amount: 5.25
    }
  },
  listInvoiceItems: {
    invoice_items: [
      {
        description: 'Load Balancer (my-loadbalancer)',
        product: 'Load Balancer',
        start_date: '2021-08-31T00:00:00+00:00',
        end_date: '2021-09-30T00:00:00+00:00',
        units: 720,
        unit_type: 'hours',
        unit_price: 0.0149,
        total: 10
      },
      {
        description: '1.1.1.1 (8192 MB) [my-instance]',
        product: 'Vultr Cloud Compute',
        start_date: '2021-09-15T00:00:00+00:00',
        end_date: '2021-09-30T00:00:00+00:00',
        units: 371,
        unit_type: 'hours',
        unit_price: 0.0595,
        total: 22.09
      }
    ],
    meta: {
      total: 3,
      links: {
        next: 'WxYzExampleNext',
        prev: ''
      }
    }
  }
}

util.createTestSuite('billing', mockParameters, mockResponses)
