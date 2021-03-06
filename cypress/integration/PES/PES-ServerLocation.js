// JavaScript Document
describe('PES-ServeLocation-Content-Verification', function(){
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
    

    it('Verify that ServeLocation has dynamic content',function(){
    //verify it have dynamic data
    cy.scrollTo(0,1750)
    cy.get('#server-location > div > div.left-part').should('have.descendants','p')
    })
    
    /*it('Verify that ServeLocation has How to implement section',function(){
    //verify that it has how to implement section
    cy.get('#mat-expansion-panel-header-5 > span.mat-content > mat-panel-title').should('have.text',' How to implement ')
    
    })*/
    
    it('Verify that Details about ServeLocation exists in right part',function(){
    cy.get('#server-location > div > div.right-part').should('be.visible')
    })
    
    
    })
    