const util = require('../util')

const mock = {
  getInfo: {
    balance: '-460.37',
    pending_charges: '9.87',
    last_payment_date: '2019-04-16 20:10:18',
    last_payment_amount: '-500.00'
  }
}

util.createTestSuite('account', mock)
