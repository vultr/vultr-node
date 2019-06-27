exports.makeApiRequest = (config, endpoint, parameters) => {
  const rp = require('request-promise-native')
  const baseUrl = (config && config.baseUrl) || 'https://api.vultr.com/v1'
  let options = {
    method: endpoint.requestType,
    url: `${baseUrl}${endpoint.url}`,
    headers: {
      'API-Key': (config && config.apiKey) || ''
    },
    json: true
  }
  if (endpoint.requestType === 'GET') {
    options.qs = parameters || ''
  } else {
    options.form = parameters
  }

  return rp(options)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}
