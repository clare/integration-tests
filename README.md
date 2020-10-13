# integration-tests
This project contains integration tests written in [cypress](https://www.cypress.io/) that will check the various parts of the Cacophony ecosystem work together.  These are intended to be run on both test and production, as well as developers computers.

Project | integration-tests
---|--- |
Platform | Ubuntu (Linux) |
Requires | A running [`cacophony-api`](https://github.com/TheCacophonyProject/cacophony-api) server </br> A running [`cacophony-browse`](https://github.com/TheCacophonyProject/cacophony-browse) server </br> A running [`fake-thermal-camera`](https://github.com/TheCacophonyProject/fake-thermal-camera) server
Build (Test) Status | [![Build Status](https://api.travis-ci.com/TheCacophonyProject/integration-tests.svg?branch=master)](https://travis-ci.com/TheCacophonyProject/integration-tests) |
Full test | [Cypress test results](https://dashboard.cypress.io/projects/dyez6t/runs)|
Licence | GNU General Public License v3.0 |

## Instructions
By default the tests run against our test server interface.

To run all the tests against browse-test/api-test go to [Integration tests on Travis](https://travis-ci.com/TheCacophonyProject/integration-tests) and click _Restart build_

## Development Instructions
To set up the tests on your own machine:
1.  Install and start the server [`fake-thermal-camera`](https://github.com/TheCacophonyProject/fake-thermal-camera)
2.  Clone your fork of this repository [`integration-tests`](https://github.com/TheCacophonyProject/integration-tests)
3.  Copy cypress.json.TEMPLATE to cypress.json.
4.  Run
``` bash
npm install
npm run dev
```
5.  Look for the [cypress](https://www.cypress.io/) interactive environment.
6.  Go to [design](design.md) for some background on how the tests run.  

### Testing against your own code
You can test against code running on any environment.

* To change **Web Interface (cacophony-browse)** => edit _baseURL_ in cypress.json
* To change **Thermal camera code (eg uploader, recorder)** => Change what code _fake-thermal-camera_ is running

* **Api url (cacophony-api)** is automatically set as the same one used by cacophony-browse so does not need to be updated.

### Lint
Before committing changes run eslint to check style
``` bash
npm run lint
```

### Releases
There are no releases for this project.