exports.makeApiRequest = (config, endpoint, parameters) => {
  const rp = require('request-promise-native')
  const baseUrl = config.baseUrl || 'https://api.vultr.com/v1'
  const options = {
    method: endpoint.requestType,
    url: `${baseUrl}${endpoint.url}`,
    headers: {
      'API-Key': config.apiKey || ''
    },
    qs: parameters || '',
    json: true
  }

  return rp(options)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}
