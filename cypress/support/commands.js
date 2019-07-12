// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/*before(function() {
     cy.log('runs once before all tests in the block')
     cy.analyze()
  })*/

/*beforeEach(function() {
   cy.log('runs before each test in the block')
  })
afterEach(function() {
     cy.log('runs after each test in the block')
  })
after(function() {
    cy.log('runs once after all tests in the block')
  })*/
  
Cypress.Commands.add('analyze',function(){
  //opening analyzer website
     cy.readFile('Data/PES-Access.json').its('url').as('url').then((url)=>{
     cy.visit(url)
     })
     
     //Fetching website data which will be analysed
     cy.readFile('Data/PES-Access.json').its('url-analyze').as('urlanalyze').then((urlanalyze)=>{
     cy.get('#mat-input-1').type(urlanalyze).should('have.value',urlanalyze)
     cy.get('body > app-root > div > app-home > div > form > mat-form-field > div > div.mat-form-field-flex > div > button >    span').click()
     cy.wait(50000)
     })
})   

Cypress.Commands.add('webbkollanalyze',function(){
  //opening analyzer website
     cy.readFile('Data/PES-Access.json').its('WEBBKOLL-url').as('WEBBKOLLurl').then((WEBBKOLLurl)=>{
     cy.visit(WEBBKOLLurl)
     })
     
     //Fetching website data which will be analysed
     cy.readFile('Data/PES-Access.json').its('url-analyze').as('urlanalyze').then((urlanalyze)=>{
     cy.get('body > main > div > section > form > input[type=search]').type(urlanalyze).should('have.value',urlanalyze)
     cy.get('body > main > div > section > form > button').click()
     cy.wait(25000)
     })
})   
