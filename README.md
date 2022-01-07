[![Automatic Releaser](https://github.com/vultr/vultr-node/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/vultr/vultr-node/actions/workflows/release.yml)
[![Code Coverage test](https://github.com/vultr/vultr-node/actions/workflows/coverage.yml/badge.svg)](https://github.com/vultr/vultr-node/actions/workflows/coverage.yml)
[![npm version](https://badge.fury.io/js/%40vultr%2Fvultr-node.svg)](https://badge.fury.io/js/%40vultr%2Fvultr-node)
[![license](https://img.shields.io/github/license/vultr/vultr-node)](https://github.com/vultr/vultr-node/blob/master/LICENSE.md)

# vultr-node

Official Vultr client node module.

## Installation

```sh
npm install @vultr/vultr-node
```

## Usage

Vultr uses a PAT (Personal Access Token) to interact/authenticate with the APIs. An API Key can be generated and acquired from the API menu in [settings](https://my.vultr.com/settings/#settingsapi).

### Initialize

```js
const VultrNode = require('@vultr/vultr-node')

// Initialize the instance with your configuration
const vultr = VultrNode.initialize({
  apiKey: 'your-api-key-here',
  baseUrl: 'https://example.com', // Optional
  rateLimit: 600 // Optional
})
```

### Calling Endpoints

```js
// Call endpoints using Promises
vultr.account.getAccountInfo().then((response) => {
  console.log(response)
})
```

## Versioning

This project follows [SemVer](https://semver.org/) for versioning. For the versions available, [see the tags on this repository](https://github.com/vultr/vultr-node/releases)

## Documentation

This implements Vultr API V2. For documentation on all endpoints, please visit https://www.vultr.com/api/. To use Vultr API V1, please use the version of the library on the [V1 branch](https://github.com/vultr/vultr-node/tree/v1), or any version of this library before 2.0.0.

For documentation specific to this client please visit https://vultr.github.io/vultr-node

## Contributing

Feel free to send pull requests our way! Please see the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Authors

- [**Spencer Kordecki**](https://github.com/spencerkordecki)
- [**Fady Farid**](https://github.com/afady)
