exports.makeApiRequest = (config, endpoint, parameters) => {
  const request = require('request')
  const baseUrl = config.baseUrl || 'https://api.vultr.com/v1'
  const options = {
    method: endpoint.requestType,
    url: `${baseUrl}${endpoint.url}`,
    headers: {
      'API-Key': config.apiKey || ''
    },
    qs: parameters || ''
  }

  request(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const responseInfo = JSON.parse(body)
      console.log(responseInfo)
    }
  })
}
