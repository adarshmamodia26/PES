# PES Automation Testing (Using Cypress)

Cypress is a next generation front end testing tool built for the modern web. Cypress is a desktop application that is installed on your computer. We address the key pain points developers and QA engineers face when testing modern applications. Our users are typically developers or QA engineers building web applications using modern JavaScript frameworks. Cypress enables you to write all types of tests:

* End-to-end tests

* Integration tests

* Unit tests

Cypress can test anything that runs in a browser.

## Installation

Clone the git repository from bitbucket to server/local.
Use the package manager [npm](https://www.npmjs.com/get-npm) to install cypress.

```bash
npm install cypress --save-dev
```
This will install Cypress locally as a dev dependency for your project.

## Opening Cypress
If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin.

Now you can open Cypress using commands

```bash
npm run cypress-open
```

After a moment, the Cypress Test Runner will launch.

<video  style="display:block; width:100%; height:auto;" autoplay controls loop="loop">
  <source src="Data\Videos\Installation.mp4" >
</video>

## Run Scripts on Terminal
And you can run Cypress scripts on Terminal using commands

```bash
npm run cypress-run
```


