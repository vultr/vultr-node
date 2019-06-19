exports.makeApiRequest = (apiKey, requestType, url) => {
  const request = require('request')
  const options = {
    method: requestType,
    url: `https://api.vultr.com/v1${url}`,
    headers: {
      'API-Key': apiKey
    }
  }

  request(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const responseInfo = JSON.parse(body)
      console.log(responseInfo)
    }
  })
}
