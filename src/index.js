exports.initialize = apiKey => {
  const makeApiRequest = require('./util/make-api-request').makeApiRequest
  const account = require('./api/account')

  return {
    account: {
      info: () => {
        makeApiRequest(apiKey, account.info.requestType, account.info.url)
      }
    }
  }
}
