// JavaScript Document
describe('PES',function(){
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
    
    
    it('Switch the language',function(){
    cy.get('#mat-select-0 > div > div.mat-select-value > span > span').click()
    cy.get('#mat-option-1 > span').click()
    cy.readFile('Data/PES-LanguageSwitch.json').its('Results For').as('ResultsFor').then((ResultsFor)=>{
    cy.get('#website-Info > div > div.title > div.title-left > h2').should('contain',ResultsFor)
    })})
      
    
    })
    