# NodeVultr

Official Vultr client node module.

## Installation

`npm install vultr-node`

## Usage

Vultr uses a PAT (Personal Access token) to interact/authenticate with the APIs. An API Key can be generated and acquired from the API menu in [settings](https://my.vultr.com/settings/#settingsapi).

### Initialize
```js
const VultrNode = require('vultr-node')

// Initialize the instance with your configuration
const vultr = VultrNode.initialize({
  apiKey: 'your-api-key-here',
  baseUrl: 'https://example.com' // Optional
  rateLimit: 600 // Optional
})
```

### Calling Endpoints
```js
// Call endpoints using Promises
vultr.account.info().then(response => {
  console.log(response)
})
```

## Versioning

This project follows [SemVer](https://semver.org/) for versioning. For the versions available, [see the tags on this repository](https://github.com/vultr/vultr-node/releases)

## Documentation

This implements the V1 Vultr API. For documentation on all endpoints, please visit https://www.vultr.com/api/

## Contributing

Feel free to send pull requests our way! Please see the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
