// JavaScript Document
describe('PES-ReferrerPolicy-Content-Verification', function(){
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


it('Verify that ReferrerPolicy is implemented',function(){
//reading Symbol values of ReferrerPolicy
cy.scrollTo(0,950)
cy.readFile('Data/PES-ReferrerPolicy.json').its('ReferrerPolicyContent-Symbol').as('ReferrerPolicyContentSymbol').then((ReferrerPolicyContentSymbol)=>{
cy.get('#referrers > div > div.main-heading > h3 > span > i').should('have.css','color',ReferrerPolicyContentSymbol)
})})

it('Verify that ReferrerPolicy has dynamic content',function(){
//verify that some text in paragraph
cy.get('#referrers > div > div.left-part > div.ng-star-inserted').should('have.descendants','p')
})

it('Verify that ReferrerPolicy has How to implement section',function(){
//verify that it has how to implement section
cy.get('#mat-expansion-panel-header-3 > span.mat-content > mat-panel-title').should('have.text',' How to implement ')

})

it('Verify that Details about ReferrerPolicy exists in right part',function(){
cy.get('#referrers > div > div.right-part').should('be.visible')
})


})
