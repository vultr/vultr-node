exports.makeApiRequest = (config, endpoint, userParameters) => {
  const nf = require('node-fetch')
  const baseUrl = (config && config.baseUrl) || 'https://api.vultr.com/v2'
  let fetchUrl = `${baseUrl}${endpoint.url}`
  const options = {
    method: endpoint.requestType,
    headers: {
      Authorization: config && config.apiKey ? `Bearer ${config.apiKey}` : ''
    }
  }

  if (userParameters !== undefined) {
    const { requestType, parameters } = endpoint

    // All methods may have path parameters
    const pathParams = Object.keys(userParameters).filter(
      (key) => parameters[key].path
    )

    if (pathParams.length) {
      pathParams.forEach((param) => {
        // Ex. '/bare-metals/{baremetal-id}/ipv4' becomes '/bare-metals/123456/ipv4'
        fetchUrl = fetchUrl.replace(`{${param}}`, userParameters[param])
      })
    }

    if (requestType === 'POST') {
      // POST requests will just send all data as JSON to the endpoint
      options.body = JSON.stringify(userParameters)
      options.headers['Content-Type'] = 'application/json'
    } else {
      if (requestType === 'GET' || requestType === 'DELETE') {
        // GET and DELETE requests may have path parameters as well as query parameters
        const queryParams = Object.keys(userParameters)
          .filter((key) => !parameters[key].path)
          .map((key) => key + '=' + encodeURIComponent(userParameters[key]))
          .join('&')

        if (queryParams.length) {
          fetchUrl = `${fetchUrl}?${queryParams}`
        }
      } else if (requestType === 'PATCH' || requestType === 'PUT') {
        // PATCH and PUT requests may have path parameters and data as a JSON object
        const bodyParams = Object.keys(userParameters)
          .filter((key) => !parameters[key].path)
          .reduce(
            (newObj, key) =>
              Object.assign(newObj, { [key]: userParameters[key] }),
            {}
          )

        options.body = JSON.stringify(bodyParams)
        options.headers['Content-Type'] = 'application/json'
      }
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
      return err
    })
}
