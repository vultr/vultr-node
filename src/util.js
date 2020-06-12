exports.makeApiRequest = (config, endpoint, parameters) => {
  const nf = require('node-fetch')
  const baseUrl = (config && config.baseUrl) || 'https://api.vultr.com/v1'
  let fetchUrl = `${baseUrl}${endpoint.url}`
  const options = {
    method: endpoint.requestType,
    headers: {
      'API-Key': (config && config.apiKey) || ''
    }
  }

  if (parameters !== undefined) {
    if (endpoint.requestType === 'POST') {
      options.body = JSON.stringify(parameters)
    } else if (endpoint.requestType === 'GET') {
      const params = new URLSearchParams()
      const userParams = Object.keys(parameters)

      userParams.forEach((key) => {
        params.append(key, parameters[key])
      })
      fetchUrl = `${fetchUrl}?${params}`
    }
  }

  return nf(fetchUrl, options)
    .then((response) => {
      // The request was not successful
      if (!response.ok) {
        throw Error(response.statusText)
      }

      const contentType = response.headers.get('content-type')

      // The request was successful, but does not return any data
      if (!contentType || !contentType.includes('application/json')) {
        return
      }

      // The request was successful and contains JSON data
      return response.json().then((responseJSON) => {
        return responseJSON
      })
    })
    .catch((err) => {
      console.error(err)
      return err
    })
}
