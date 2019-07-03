// JavaScript Document
describe('PES-HTTPHeaders-Content-Verification', function(){
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
    

    it('Verify that HTTPHeaders has dynamic content',function(){
    //verify a table having dynamic data
    cy.get('#headers > div > div.left-part').should('have.descendants','table')
    cy.readFile('Data/PES-HTTPHeaders.json').its('HeadersCount').as('HeadersCount').then((HeadersCount)=>{
    cy.get('#headers > div > div.left-part > table > tbody > tr').should('have.length',HeadersCount)
    })
    })
    
    it('Verify that HTTPHeaders has How to implement section',function(){
    //verify that it has how to implement section
    cy.get('#mat-expansion-panel-header-5 > span.mat-content > mat-panel-title').should('have.text',' How to implement ')
    
    })
    
    it('Verify that Details about HTTPHeaders exists in right part',function(){
    cy.get('#headers > div > div.right-part').should('be.visible')
    })
    
    
    })
    