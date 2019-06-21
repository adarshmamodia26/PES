// JavaScript Document
describe('PES',function(){

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
     
})

describe('PES-URL',function(){

it('Verify main URL include website url which will be analyzed',function(){
cy.url().should('include',this.urlanalyze)
})

})

describe('PES-Header-Verification',function(){


it('Data matching of Results For',function(){
cy.get('#website-Info > div > div.title > div.title-left > h2 > span').should('have.text',this.urlanalyze)
})


it('Data matching for HTTPS by default->Symbol',function(){
//reading Symbol values of HTTPSByDefault
cy.readFile('Data/PES-Header.json').its('HTTPSByDefault-Symbol').as('HTTPSByDefaultSymbol').then((HTTPSByDefaultSymbol)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(1) > span.check-list > i').should('have.css','color',HTTPSByDefaultSymbol)
})})

it('Data matching for HTTPS by default->Value',function(){
//reading value of HTTPSByDefault
cy.readFile('Data/PES-Header.json').its('HTTPSByDefault-Value').as('HTTPSByDefaultValue').then((HTTPSByDefaultValue)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(1) > span.check-list > label').should('have.text',HTTPSByDefaultValue)
})})

it('Data matching for Content Security Policy->Symbol',function(){

//reading Symbol values of ContentSecurityPolicy
cy.readFile('Data/PES-Header.json').its('ContentSecurityPolicy-Symbol').as('ContentSecurityPolicySymbol').then((ContentSecurityPolicySymbol)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(2) > span.check-list > i').should('have.css','color',ContentSecurityPolicySymbol)
})})

it('Data matching for Content Security Policy->Value',function(){

//reading Value of ContentSecurityPolicy
cy.readFile('Data/PES-Header.json').its('ContentSecurityPolicy-Value').as('ContentSecurityPolicyValue').then((ContentSecurityPolicyValue)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(2) > span.check-list').should('have.text',ContentSecurityPolicyValue)
})})


it('Data matching for Referrer Policy->Symbol',function(){

//reading Symbol values of ReferrerPolicy
cy.readFile('Data/PES-Header.json').its('ReferrerPolicy-Symbol').as('ReferrerPolicySymbol').then((ReferrerPolicyPolicySymbol)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(3) > span.check-list.ng-star-inserted > i').should('have.css','color',ReferrerPolicyPolicySymbol)
})})

it('Data matching for Referrer Policy->Value',function(){

//reading Symbol values of ReferrerPolicy
cy.readFile('Data/PES-Header.json').its('ReferrerPolicy-Value').as('ReferrerPolicyValue').then((ReferrerPolicyValue)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(3) > span.check-list.ng-star-inserted').should('have.text',ReferrerPolicyValue)
})})


it('Data matching for Cookies',function(){

//reading  value of Cookies
cy.readFile('Data/PES-Header.json').its('Cookies').as('Cookies').then((Cookies)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(4) > span.check-list').should('contain',Cookies)
})})

it('Data matching for Third-Party Request',function(){

//reading  value of Third-Party Request
cy.readFile('Data/PES-Header.json').its('Third-PartyRequests').as('ThirdPartyRequests').then((ThirdPartyRequests)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(5) > span.check-list.ng-star-inserted').should('contain',ThirdPartyRequests)
})})

it('Data matching for Server Location=>FlagImageURL',function(){

//reading  FlagImageUrl of Server Location
cy.readFile('Data/PES-Header.json').its('ServerLocation-FlagImageUrl').as('ServerLocationFlagImageUrl').then((ServerLocationFlagImageUrl)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(6) > span.check-list > label > flag-icon > span').should('have.css','background-image',"url("+'"'+ServerLocationFlagImageUrl+'"'+")")
})})

it('Data matching for Server Location=>CountryName',function(){

//reading  Country of Server Location
cy.readFile('Data/PES-Header.json').its('ServerLocation-Country').as('ServerLocationCountry').then((ServerLocationCountry)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(6) > span.check-list > label').should('contain',ServerLocationCountry)
})})

it('Data matching for Server Location=>IP',function(){

//reading  IP of Server Location
cy.readFile('Data/PES-Header.json').its('ServerLocation-IP').as('ServerLocationIP').then((ServerLocationIP)=>{
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(6) > span.check-list').should('contain',ServerLocationIP)
})})

it('Verifying Lookup is a link',function(){
//Verifying lookup is a link
cy.get('#website-Info > div > div.result-summary > div.summary > ul > li:nth-child(6) > span.check-list > sup').should('have.descendants','a')})


it('Verifying checkagain is a link',function(){
//Verifying lookup is a link
cy.get('#website-Info > div > div.title > div.title-right > span:nth-child(1)').should('have.descendants','a')})


it('Data matching for Date & Time',function(){
//reading  Date & Time with Timezone
cy.readFile('Data/PES-Header.json').its('DateTime-Zone').as('DateTimeZone').then((DateTimeZone)=>{
cy.get('#website-Info > div > div.title > div.title-right > span:nth-child(2)').should('contain',DateTimeZone)
})})

it('Data matching for Checked URL',function(){
//reading  Checked URL
if(this.urlanalyze.includes('http://')) 
{cy.get('#website-Info > div > div.result-summary > div.url > ul > li:nth-child(1) > a').should('contain',this.urlanalyze)}
else if(this.urlanalyze.includes('https://'))
{cy.get('#website-Info > div > div.result-summary > div.url > ul > li:nth-child(1) > a').should('contain',this.urlanalyze)}
else
{cy.get('#website-Info > div > div.result-summary > div.url > ul > li:nth-child(1) > a').should('contain',"http://"+this.urlanalyze)}
})

it('Verifying that Checked URL is a link',function(){
//reading  Checked URL
cy.get('#website-Info > div > div.result-summary > div.url > ul > li:nth-child(1)').should('have.descendants','a')
})

it('Data matching for Final URL',function(){
//reading  Final URL
cy.get('#website-Info > div > div.result-summary > div.url > ul > li:nth-child(2) > a').should('contain',this.urlanalyze)
})

it('Verifying that Final URL is a link',function(){
//reading  Final URL
cy.get('#website-Info > div > div.result-summary > div.url > ul > li:nth-child(2)').should('have.descendants','a')
})




})

})
