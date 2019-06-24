// JavaScript Document
// JavaScript Document
describe('PES-StrictTransportSecurity-Content-Verification', function(){
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


it('Verify that StrictTransportSecurity is implemented',function(){
//reading Symbol values of StrictTransportSecurity
cy.scrollTo(0,350)
cy.readFile('Data/PES-StrictTransportSecurity.json').its('StrictTransportSecurityContent-Symbol').as('StrictTransportSecurityContentSymbol').then((StrictTransportSecurityContent)=>{
cy.get('#hsts > div > div.main-heading > h3 > i.fa.fa-times.failure.ng-star-inserted').should('have.css','color',StrictTransportSecurityContent)
})})

it('Verify that StrictTransportSecurity has dynamic content',function(){
//verify that some text in paragraph
cy.get('#hsts > div > div.left-part > div.ng-star-inserted').should('have.descendants','p')
//verify a table having dynamic data
cy.get('#hsts > div > div.left-part > div.ng-star-inserted').should('have.descendants','table')
cy.readFile('Data/PES-StrictTransportSecurity.json').its('STS-Attributes').as('STSAttributes').then((STSAttributes)=>{
cy.get('#hsts > div > div.left-part > div.ng-star-inserted > table > tbody > tr').should('have.length',STSAttributes)
})
//verify that some text in paragraph
cy.get('#hsts > div > div.left-part > div:nth-child(2)').should('have.descendants','p')
//verify a table having dynamic data
cy.get('#hsts > div > div.left-part > div:nth-child(2)').should('have.descendants','table')
cy.readFile('Data/PES-StrictTransportSecurity.json').its('STS-Attributes').as('STSAttributes').then((STSAttributes)=>{
cy.get('#hsts > div > div.left-part > div:nth-child(2) > table > tbody > tr').should('have.length',STSAttributes)
})
})

it('Verify that StrictTransportSecurity has How to implement section',function(){
//verify that it has how to implement section
cy.get('#mat-expansion-panel-header-1 > span.mat-content > mat-panel-title').should('have.text',' How to implement ')

})

it('Verify that Details about StrictTransportSecurity exists in right part',function(){
cy.get('#hsts > div > div.right-part').should('be.visible')
})


})
