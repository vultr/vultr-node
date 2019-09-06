# Contributing to `vultr-node`

We would love to get your feedback, thoughts, and overall improvements to `vultr-node`! 

## Overview

We use Husky to create a lint and test hook before each commit and push to maintain consistency and ensure code is tested thoroughly. Please be sure to respect these build steps.

## Getting started

You will need to fork the `vultr-node` repository and submit pull requests off of your fork. 


## Testing

We aim to have as much code coverage as possible.

To run tests locally:

```
npm run test
```

## Versioning 

vultr-node follows [SemVer](http://semver.org/) for versioning. New functionality will result in a increment to the minor version. While, 
bug fixes will result in a increment to the patch version. 

## Releases
Releases of new versions are done as their independent pull requests - They will also be done by the maintainers.

To release a new version of `vultr-node` we must do the following.

- Make the appropriate updates to `CHANGELOG.md`. This should include the 
    - Version, 
    - List of fix/features with accompanying pull request ID
    - Description of each fix/feature
    
```
## v0.0.1 (2019-06-12)

### Fixes
* Fixed random bug #12
```
- Submit a pull request with the following changes
- Once the pull request is merged in - create a new tag and publish.
