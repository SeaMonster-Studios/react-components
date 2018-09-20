#!/usr/bin/env node
/* eslint-disable no-console */
const childProcess = require('child_process')

const command = process.argv[2]
const scope = process.argv[3]
const item = process.argv[4]

switch(command) {
  case 'add':
    childProcess.exec(`yarn add @bit/seamonster-studios.react.${scope}.${item}`, error => {
      error ? console.error(error) : console.log("success")
    })
    break
  case 'import':
    childProcess.exec(`bit import seamonster-studios.react/${scope}/${item}`, error => {
      error ? console.error(error) : console.log("success")
    })
    break
  default:
    console.error('Woops! command provided wasn\'t found in package.sms.bit.js')
    break
}

