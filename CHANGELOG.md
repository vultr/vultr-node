# Change Log

## [v2.3.3](https://github.com/vultr/vultr-node/compare/v2.3.2..v2.3.3) (2022-03-28)

### Bug Fixes
* Add the build command before publishing for GitHub Actions workflow [#604](https://github.com/vultr/vultr-node/issues/604)

## [v2.3.2](https://github.com/vultr/vultr-node/compare/v2.3.1..v2.3.2) (2022-03-24)

### About This Version
* This version contains the dependency issues listed below, but does not work due to an issue resolved in v2.3.3 with the GitHub deployment actions. Please do not use this version and instead only use v2.3.3+

### Dependencies
* To see all deps that were updated, please check [milestone v2.3.2](https://github.com/vultr/vultr-node/milestone/47)

## [v2.3.1](https://github.com/vultr/vultr-node/compare/v2.3.0..v2.3.1) (2022-03-16)

### About This Version
* This version contains the dependency issues listed below, but does not work due to an issue resolved in v2.3.3 with the GitHub deployment actions. Please do not use this version and instead only use v2.3.3+

### Dependencies
* To see all deps that were updated, please check [milestone v2.3.1](https://github.com/vultr/vultr-node/milestone/46)

## [v2.3.0](https://github.com/vultr/vultr-node/compare/v2.2.1..v2.3.0) (2021-12-2)
### Dependencies
* To see all deps that were updated, please check [milestone v2.3.0](https://github.com/vultr/vultr-node/milestone/45)

### Features
* Add support for `tag`s in Kubernetes nodepools [#534](https://github.com/vultr/vultr-node/issues/534)
* Add support for `dns_sec` in `get-dns-domain` [#546](https://github.com/vultr/vultr-node/issues/546)

### Bug Fixes
* Add `.npmignore` to prevent npm from ignoring the `dist/` folder when pulling down the library [#532](https://github.com/vultr/vultr-node/issues/532)
* Fixed missing request type in `getInstanceIpv4Addresses` from the bare metals endpoints [#550](https://github.com/vultr/vultr-node/issues/550)
* Fixed request URL for `detachStorage` from the block storage endpoints [#551](https://github.com/vultr/vultr-node/issues/551)

## [v2.2.1](https://github.com/vultr/vultr-node/compare/v2.2.0..v2.2.1) (2021-11-4)
### Dependencies
* To see all deps that were updated, please check [milestone v2.2.1](https://github.com/vultr/vultr-node/milestone/44)

### Bug Fixes
* Fix Travis CI build to compile TypeScript before release [#532](https://github.com/vultr/vultr-node/issues/532)

## [v2.2.0](https://github.com/vultr/vultr-node/compare/v2.1.1..v2.2.0) (2021-09-10)
### Dependencies
* To see all deps that were updated, please check [milestone v2.2.0](https://github.com/vultr/vultr-node/milestone/43)

### Features
* Basic TypeScript support for autocompletion [#511](https://github.com/vultr/vultr-node/pull/511)
* Add support for `persistent_pxe` for bare metal endpoints [#502](https://github.com/vultr/vultr-node/issues/502)
* Add support for marketplace fields in bare metal, instances, and applications endpoints [#504](https://github.com/vultr/vultr-node/issues/504)
* Add support for VKE [#512](https://github.com/vultr/vultr-node/issues/512)

### Maintenance
* Regenerated documentation to reflect new endpoints

## [v2.1.1](https://github.com/vultr/vultr-node/compare/v2.1.0..v2.1.1) (2021-07-03)
### Dependencies
* To see all deps that were updated please check [milestone v2.1.1](https://github.com/vultr/vultr-node/milestone/42)

## [v2.1.0](https://github.com/vultr/vultr-node/compare/v2.0.8..v2.1.0) (2021-06-17)
### Features
* Adds new load balancer endpoints and ability to add firewall parameters to existing load balance endpoints [#489](https://github.com/vultr/vultr-node/489)

### Dependencies
* To see all deps that were updated please check [milestone v2.1.0](https://github.com/vultr/vultr-node/milestone/41)

## [v2.0.8](https://github.com/vultr/vultr-node/compare/v2.0.7..v2.0.8) (2021-05-07)
### Bug Fixes
* Fix formatting of block storage endpoint parameters [#477](https://github.com/vultr/vultr-node/477)

## [v2.0.7](https://github.com/vultr/vultr-node/compare/v2.0.6..v2.0.7) (2021-05-01)
### Dependencies
* To see all deps that were updated please check [milestone v2.0.7](https://github.com/vultr/vultr-node/milestone/39)

## [v2.0.6](https://github.com/vultr/vultr-node/compare/v2.0.5..v2.0.6) (2021-03-25)
### Bug Fixes
* Add OS parameter to listPlans() and fix typos in startup scripts URLs [#460](https://github.com/vultr/vultr-node/pull/460)

## [v2.0.5](https://github.com/vultr/vultr-node/compare/v2.0.4..v2.0.5) (2021-03-24)
### Bug Fixes
* Remove unused Husky properties, globally install Husky for CI [#454](https://github.com/vultr/vultr-node/454)
* Regenerate documentation pages to remove duplicates [#456](https://github.com/vultr/vultr-node/456)
* Add label parameter to instance.updateInstance [#459](https://github.com/vultr/vultr-node/pull/459)

## [v2.0.4](https://github.com/vultr/vultr-node/compare/v2.0.3..v2.0.4) (2021-03-23)
### Bug Fixes 
* Disable Husky git hooks while using CI [#447](https://github.com/vultr/vultr-node/issues/447)
* Fix issue in PATCH/POST user parameters gathering, allow empty strings to be passed in [#451](https://github.com/vultr/vultr-node/451)

## [v2.0.3](https://github/com/vultr/vultr-node/compare/v2.0.2..v2.0.3) (2021-03-18)
### Bug Fixes
* instances.listInstanceIpv4Information() changed from POST to GET [#444](https://github.com/vultr/vultr-node/issues/444)

## [v2.0.2](https://github.com/vultr/vultr-node/compare/v2.0.1..v2.0.2) (2021-03-04)
### Dependencies
* To see all deps that were updated please check [milestone v2.0.2](https://github.com/vultr/vultr-node/milestone/35)

## [v2.0.1](https://github.com/vultr/vultr-node/compare/v2.0.0..v2.0.1) (2021-02-25)
### Bug Fixes
* Unable to create DNS record [#434](https://github.com/vultr/vultr-node/issues/434)

### Dependencies
* To see all deps that were updated please check [milestone v2.0.1](https://github.com/vultr/vultr-node/milestone/34)

## [v2.0.0](https://github.com/vultr/vultr-node/compare/v1.0.4..v2.0.0) (2021-01-11)
* Upgrade library to use Vultr API V2 syntax and endpoints. [#388](https://github.com/vultr/vultr-node/issues/388)

## [v1.0.4](https://github.com/vultr/vultr-node/compare/v1.0.3..v1.0.4) (2021-01-06)
### Dependencies
* To see all deps that were updated please check [milestone v1.0.4](https://github.com/vultr/vultr-node/milestone/32)

## [v1.0.3](https://github.com/vultr/vultr-node/compare/v1.0.2..v1.0.3) (2020-12-03)
### Bug Fixes
* Fixes issue where parameter type checking was not properly covering all paths and setting valid parameters [#416](https://github.com/vultr/vultr-node/issues/416)

## [v1.0.2](https://github.com/vultr/vultr-node/compare/v1.0.1..v1.0.2) (2020-12-02)
### Bug Fixes
* Auto-convert strings to numbers for number fields [#397](https://github.com/vultr/vultr-node/issues/397)

### Dependencies
* To see all deps that were updated please check [milestone v1.0.2](https://github.com/vultr/vultr-node/milestone/30)

## [v1.0.1](https://github.com/vultr/vultr-node/compare/v1.0.0..v1.0.1) (2020-10-06)
### Bug Fixes
* Adds missing header for POST requests [#394](https://github.com/vultr/vultr-node/issues/394)

### Dependencies
* To see all deps that were updated please check [milestone v1.0.1](https://github.com/vultr/vultr-node/milestone/29)

## [v1.0.0](https://github.com/vultr/vultr-node/compare/v0.5.0..v1.0.0) (2020-09-08)
### Features
* Promoting Vultr-node to v1.0.0 no breaking changes [#385](https://github.com/vultr/vultr-node/issues/385)


## [v0.5.0](https://github.com/vultr/vultr-node/compare/v0.4.1..v0.5.0) (2020-09-02)
### Features
* Adds support for enabling and disabling DDoS protection [#370](https://github.com/vultr/vultr-node/issues/370)

### Bug Fixes
* Remove use of `URLSearchParams()` in favor of `.map()` for joining user parameters to support native iOS [#372](https://github.com/vultr/vultr-node/pull/373)

### Dependencies 
* To see all deps that were updated please check [milestone v0.5.0](https://github.com/vultr/vultr-node/milestone/28)

## [v0.4.1](https://github.com/vultr/vultr-node/compare/v0.4.0..v0.4.1) (2020-08-13)
### Dependencies
* To see all deps that were updated please check [milestone v0.4.1](https://github.com/vultr/vultr-node/milestone/27)

## [v0.4.0](https://github.com/vultr/vultr-node/compare/v0.3.1..v0.4.0) (2020-07-15)
### Enhancements
* Replace request with node-fetch [#347](https://github.com/vultr/vultr-node/pull/347)

### Dependencies
* To see all deps that were updated please check [milestone v0.4.0](https://github.com/vultr/vultr-node/milestone/26)

## [v0.3.1](https://github.com/vultr/vultr-node/compare/v0.3.0..v0.3.1) (2020-06-10)
### Dependencies
* To see all deps that were updated please check [milestone v0.3.1](https://github.com/vultr/vultr-node/milestone/25)

## [v0.3.0](https://github.com/vultr/vultr-node/compare/v0.2.2..v0.3.0) (2020-05-01)
### Features
* Support for Load Balancers [#336](https://github.com/vultr/vultr-node/pull/336)

### Dependencies
* To see all deps that were updated please check [milestone v0.3.0](https://github.com/vultr/vultr-node/milestone/24?closed=1)

## [v0.2.2](https://github.com/vultr/vultr-node/compare/v0.2.1..v0.2.2) (2020-04-16)
### Security
* Updated all dependencies to ensure minimist security issues are resolved[#329](https://github.com/vultr/vultr-node/milestone/329)

## [v0.2.1](https://github.com/vultr/vultr-node/compare/v0.2.0..v0.2.1) (2020-03-18)
### Dependencies
* To see all deps that were updated please check [milestone v0.2.1](https://github.com/vultr/vultr-node/milestone/23)

## [v0.2.0](https://github.com/vultr/vultr-node/compare/v0.1.2..v0.2.0) (2020-02-25)
### Features
* Added support for Object Storage [#303](https://github.com/vultr/vultr-node/pull/303)


## [v0.1.2](https://github.com/vultr/vultr-node/compare/v0.1.1..v0.1.2) (2019-10-03)
### Features
* Autogenerated documentation published to https://vultr.github.io/vultr-node/ [#295](https://github.com/vultr/vultr-node/pull/295)

### Bug fixes
* Fix rateLimit declaration in test config [#297](https://github.com/vultr/vultr-node/pull/297)
* Fix for description unable to be set in firewall group #292 [#291](https://github.com/vultr/vultr-node/pull/292)


## [v0.1.1](https://github.com/vultr/vultr-node/compare/v0.1.0..v0.1.1) (2019-09-24)
### Features
* Updating Travis to auto publish to NPM

## v0.1.0 (2019-09-23)
### Features
* Initial release
* Supports all available API endpoints that Vultr has to offer
