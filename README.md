# Computer Database Test Automation

## Introduction

Test cases are written in the `features/add-computer.feature`  gherkin file. The test scenarios were used as a guide to
implement the automation test cases.

The selectors used in the test cases were written using the testing-library selectors. The testing-library selectors 
are more robust and less likely to break when the UI changes, and they are more accessible than the traditional
selectors. You can read more about the testing-library selectors [here](https://testing-library.com/docs/queries/about/).

There are some findings that I would like to share and they are located inside the `features/findings.MD` file.
## Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Install dependencies

Run `npm ci` to install the dependencies.

## Run tests

Run `npm test` to execute the tests locally.

## Test report and CI

This project uses GitHub Actions to run the tests and generate a test report. The test report is available in the
Github Actions tab and on a [Github Pages site](https://gutoslv.github.io/computer-database-tests/).
