// JavaScript Document
describe('PES-RawHeaders-Content-Verification', function(){
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
    
    
   /* it('Verify that RawHeaders is implemented',function(){
    //reading Symbol values of RawHeaders
    cy.readFile('Data/PES-RawHeaders.json').its('HTTPSByDefaultContent-Symbol').as('HTTPSByDefaultContentSymbol').then((HTTPSByDefaultContentSymbol)=>{
    cy.get('#https > div > div.main-heading > h3 > span > i').should('have.css','color',HTTPSByDefaultContentSymbol)
    })})*/
    
    it('Verify that RawHeaders has dynamic content',function(){
    cy.scrollTo(0,1800)
    
    //verify a table having dynamic data
    cy.get('#raw-headers > div > div.left-part.full-left-part').should('have.descendants','table')
    cy.readFile('Data/PES-RawHeaders.json').its('RawHeadersCount').as('RawHeadersCount').then((RawHeadersCount)=>{
    cy.get('#raw-headers > div > div.left-part.full-left-part > table > tbody > tr').should('have.length',RawHeadersCount)
    })
    })
    
    
    })
    