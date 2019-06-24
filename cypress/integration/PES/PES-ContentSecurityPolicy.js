// JavaScript Document
describe('PES-ContentSecurityPolicy-Content-Verification', function(){
/*
before(function() {
     cy.log('runs once before all tests in the block')
     
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
     
})*/

before(function() {
     cy.log('runs once before all tests in the block')
     cy.analyze()
  })


it('Verify that ContentSecurityPolicy is implemented',function(){
//reading Symbol values of ContentSecurityPolicy
cy.scrollTo(0,650)
cy.readFile('Data/PES-ContentSecurityPolicy.json').its('ContentSecurityPolicytContent-Symbol').as('ContentSecurityPolicytContentSymbol').then((ContentSecurityPolicytContentSymbol)=>{
cy.get('#csp > div > div.main-heading > h3 > i.fa.fa-check-square.success').should('have.css','color',ContentSecurityPolicytContentSymbol)
})})

it('Verify that ContentSecurityPolicy has dynamic content',function(){
//verify that some text in paragraph
cy.get('#csp > div > div.left-part > div.ng-star-inserted').should('have.descendants','p')
//verify a table having dynamic data
cy.get('#csp > div > div.left-part > div.ng-star-inserted').should('have.descendants','table')
cy.readFile('Data/PES-ContentSecurityPolicy.json').its('ContentSecurityPolicy-Checks').as('ContentSecurityPolicyChecks').then((ContentSecurityPolicyChecks)=>{
cy.get('#csp > div > div.left-part > div.ng-star-inserted > table > tbody > tr').should('have.length',ContentSecurityPolicyChecks)
})
})

it('Verify that ContentSecurityPolicy has How to implement section',function(){
//verify that it has how to implement section
cy.get('#mat-expansion-panel-header-2 > span.mat-content > mat-panel-title').should('have.text',' How to implement ')

})

it('Verify that Details about ContentSecurityPolicy exists in right part',function(){
cy.get('#csp > div > div.right-part').should('be.visible')
})


})
