// JavaScript Document
describe('PES-SubResourceIntegrity-Content-Verification', function(){
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
    
    
    it('Verify that SubResourceIntegrity is implemented',function(){
    //reading Symbol values of SubResourceIntegrity
    cy.scrollTo(0,1100)
    cy.readFile('Data/PES-SubResourceIntegrity.json').its('SubResourceInttegrityContent-Symbol').as('SubResourceInttegrityContentSymbol').then((SubResourceInttegrityContentSymbol)=>{
    cy.get('#sri > div > div.main-heading > h3 > i.fa.fa-times.success').should('have.css','color',SubResourceInttegrityContentSymbol)
    })})
    
    it('Verify that SubResourceIntegrity has dynamic content',function(){
    //verify that some text in paragraph
    cy.get('#sri > div > div.left-part').should('have.descendants','p')
    })
    
    it('Verify that SubResourceIntegrity has How to implement section',function(){
    //verify that it has how to implement section
    cy.get('#mat-expansion-panel-header-4 > span.mat-content > mat-panel-title').should('have.text',' How to implement ')
    
    })
    
    it('Verify that Details about ReferrerPolicy exists in right part',function(){
    cy.get('#sri > div > div.right-part').should('be.visible')
    })
    
    
    })
    