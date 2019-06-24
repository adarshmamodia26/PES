// JavaScript Document
describe('PES-HTTPSByDefault-Content-Verification', function(){
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


it('Verify that HTTPSByDefault is implemented',function(){
//reading Symbol values of HTTPSByDefault
cy.scrollTo(0,100)
cy.readFile('Data/PES-HTTPSByDefault.json').its('HTTPSByDefaultContent-Symbol').as('HTTPSByDefaultContentSymbol').then((HTTPSByDefaultContentSymbol)=>{
cy.get('#https > div > div.main-heading > h3 > span > i').should('have.css','color',HTTPSByDefaultContentSymbol)
})})

it('Verify that HTTPSByDefault has dynamic content',function(){
//verify that some text in paragraph
cy.get('#https > div > div.left-part > div.ng-star-inserted').should('have.descendants','p')
//verify a table having dynamic data
cy.get('#https > div > div.left-part > div.ng-star-inserted').should('have.descendants','table')
cy.readFile('Data/PES-HTTPSByDefault.json').its('ReportsTitlesCount').as('ReportsTitlesCount').then((ReportsTitlesCount)=>{
cy.get('#https > div > div.left-part > div.ng-star-inserted > table > tbody > tr').should('have.length',ReportsTitlesCount)
})
//verify that it has links having more info
cy.get('#https > div > div.left-part > div.ng-star-inserted').should('have.descendants','ul')

cy.readFile('Data/PES-HTTPSByDefault.json').its('TLS-SSL-SitesLinks').as('TLSSSLSitesLinks').then((TLSSSLSitesLinks)=>{
cy.get('#https > div > div.left-part > div.ng-star-inserted > ul> li').should('have.length',TLSSSLSitesLinks)
})
})

it('Verify that HTTPSByDefault has How to implement section',function(){
//verify that it has how to implement section
cy.get('#mat-expansion-panel-header-0 > span.mat-content > mat-panel-title').should('have.text',' How to implement ')

})

it('Verify that Details about HTTPSByDefault exists in right part',function(){
cy.get('#https > div > div.right-part').should('be.visible')
})


})
