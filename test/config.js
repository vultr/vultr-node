exports.apiKey = '123456789123456789123456789123456789'
exports.baseUrl = 'https://api.vultr.com'
exports.headers = {
  reqheaders: {
    'API-Key': /[A-Z0-9]{36}/i
  }
}
exports.apiVersion = 'v1'
exports.rateLimit = 700
