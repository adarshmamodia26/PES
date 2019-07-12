// JavaScript Document
describe('WEBBKOLL',function(){
    
    before(function() {
         cy.log('runs once before all tests in the block')
         cy.webbkollanalyze()
      })
    
    
    describe('WEBBKOLL-URL',function(){
    
    it('Verify main URL include website url which will be analyzed',function(){
    cy.url().should('include',this.urlanalyze)
    })
    
    })
    
    describe('WEBBKOLL-ReadData',function(){
    
    it('Read HTTPSByDefault-Symbol from WEBBKOLL',function(){
    //Read HTTPSByDefault-Symbol
    cy.get('#results-summary > div.summary > ul > li:nth-child(1) > i').invoke('css','color').as('HTTPSByDefaultSymbolColor')
    })
    it('Read HTTPSByDefault-Value from WEBBKOLL',function(){
    // Read  HTTPSByDefault-Value
    cy.get('#results-summary > div.summary > ul > li:nth-child(1)').invoke('text').as('HTTPSByDefaultValue')
    })
    it('Read ContentSecurityPolicy-Symbol from WEBBKOLL',function(){
    // Read ContentSecurityPolicy-Symbol
    cy.get('#results-summary > div.summary > ul > li:nth-child(2) > i').invoke('css','color').as('ContentSecurityPolicyColor')
    })
    it('Read ContentSecurityPolicy-Value from WEBBKOLL',function(){
    // Read ContentSecurityPolicy-Value
    cy.get('#results-summary > div.summary > ul > li:nth-child(2)').invoke('text').as('ContentSecurityPolicyValue')
    })
    it('Read ReferrerPolicy-Symbol from WEBBKOLL',function(){
    // Read ReferrerPolicy-Symbol
    cy.get('#results-summary > div.summary > ul > li:nth-child(3) > i').invoke('css','color').as('ReferrerPolicyColor')
    })
    it('Read ReferrerPolicy-Value from WEBBKOLL',function(){
    // Read ReferrerPolicy-Value
    cy.get('#results-summary > div.summary > ul > li:nth-child(3)').invoke('text').as('ReferrerPolicyValue')
    })
    it('Read Cookies from WEBBKOLL',function(){
    //Read Cookies
    cy.get('#results-summary > div.summary > ul > li:nth-child(4) > strong').invoke('text').as('Cookies')
    })
    it('Read Third-PartyRequests from WEBBKOLL',function(){
    //Read Third-PartyRequests
    cy.get('#results-summary > div.summary > ul > li:nth-child(5) > strong').invoke('text').as('ThirdPartyRequest')
    })
    it('Read ServerLocation from WEBBKOLL',function(){
    //Read ServerLocation
    cy.get('#results-summary > div.summary > ul > li:nth-child(6) > span.flag-icon.flag-icon-fr').invoke('css','background-image').as('ServerLocationFlagImageUrl')
    cy.get('#results-summary > div.summary > ul > li:nth-child(6)').invoke('text').as('Server')
    })
    it('Read DateTime-Zone from WEBBKOLL',function(){
    //Read DateTime-Zone
    cy.get('#results-title > div.beta').invoke('text').as('DateTimeZone')
    })
    it('Read HTTPSByDefaultContent-Symbol from WEBBKOLL',function(){
    //Read HTTPSByDefaultContent-Symbol
    cy.get('#https > i').invoke('css','color').as('HTTPSByDefaultContentSymbol')
    })
    it('Read ReportsTitlesCount from WEBBKOLL',function(){
    //Read ReportsTitlesCount
    cy.get('#results > section:nth-child(1) > div > table > tbody > tr').its('length').as('ReportsTitlesCount')
    })
    it('Read TLS-SSL-SitesLinks from WEBBKOLL',function(){
    //Read TLS-SSL-SitesLinks
    cy.get('#results > section:nth-child(1) > div > ul > li').its('length').as('TLSSSLSitesLinks')
    })
    it('Read StrictTransportSecurityContent-Symbol from WEBBKOLL',function(){
    //Read StrictTransportSecurityContent-Symbol
    cy.get('#hsts > i').invoke('css','color').as('StrictTransportSecurityContentSymbol')
    })
    it('Read STS-Attributes from WEBBKOLL',function(){
    // Read STS-Attributes
    cy.get('#results > section:nth-child(2) > div > table:nth-child(2) > tbody > tr').its('length').as('STSAttributes')
    })
    it('Read ContentSecurityPolicytContent-Symbol from WEBBKOLL',function(){
    // Read ContentSecurityPolicytContent-Symbol
    cy.get('#csp > i').invoke('css','color').as('ContentSecurityPolicytContentSymbol')
    })
    it('Read ContentSecurityPolicy-Checks from WEBBKOLL',function(){
    //Read ContentSecurityPolicy-Checks
    cy.get('#results > section:nth-child(3) > div > table > tbody > tr').its('length').as('ContentSecurityPolicyChecks')
    })
    it('Read ReferrerPolicyContent-Symbol from WEBBKOLL',function(){
    //Read ReferrerPolicyContent-Symbol
    cy.get('#referrers > i').invoke('css','color').as('ReferrerPolicyContentSymbol')
    })
    it('Read ReferrerPolicy-Checks from WEBBKOLL',function(){
    //Read ReferrerPolicy-Checks
    cy.get('#results > section:nth-child(4) > div > p').its('length').as('ReferrerPolicyChecks')
    })
    it('Read SubResourceInttegrityContent-Symbol from WEBBKOLL',function(){
    //Read SubResourceInttegrityContent-Symbol
    cy.get('#sri > i').invoke('css','color').as('SubResourceInttegrityContentSymbol')
    })
    it('Read SubResourceInttegrityPolicy-Checks from WEBBKOLL',function(){
    //Read SubResourceInttegrityPolicy-Checks
    cy.get('#results > section:nth-child(5) > div > p').its('length').as('SubResourceInttegrityPolicyChecks')
    })
    it('Read HTTP HeadersCount from WEBBKOLL',function(){
    //Read HTTP HeadersCount
    cy.get('#results > section:nth-child(6) > div > table > tbody > tr').its('length').as('HeadersCount')
    })
    it('Read CookiesPropertiesCount from WEBBKOLL',function(){
    //Read CookiesPropertiesCount
    cy.get('#cookies > div > div.left-part.full-left-part > p').its('length').as('CookiesPropertiesCount')
    })
    it('Read RawHeadersCount from WEBBKOLL',function(){
    //Read RawHeadersCount
    cy.get('#results > section:nth-child(11) > table > tbody > tr').its('length').as('RawHeadersCount')
    })

    it('Write Data from WEBBKOLL',function(){
    cy.writeFile('Data/PES-Header.json', 
    {'HTTPSByDefault-Symbol': this.HTTPSByDefaultSymbolColor,
     'HTTPSByDefault-Value': this.HTTPSByDefaultValue.trim().substr(41,42).trim(),
     'ContentSecurityPolicy-Symbol':this.ContentSecurityPolicyColor,
     'ContentSecurityPolicy-Value':this.ContentSecurityPolicyValue.trim().substr(39,56).trim(),
     'ReferrerPolicy-Symbol':this.ReferrerPolicyColor,
     'ReferrerPolicy-Value':this.ReferrerPolicyValue.trim().substr(20,34).trim(),
     'Cookies':this.Cookies,
     'Third-PartyRequests':this.ThirdPartyRequest,
     'ServerLocation-FlagImageUrl':this.ServerLocationFlagImageUrl,
     'ServerLocation-Country':this.Server.trim().substr(20,20).trim(),
     'ServerLocation-IP':this.Server.trim().substr(53,60).trim(),
     'DateTime-Zone':this.DateTimeZone.trim().substr(18,50).trim()
    })
    cy.writeFile('Data/PES-HTTPSByDefault.json', 
    {
     'HTTPSByDefaultContent-Symbol':this.HTTPSByDefaultContentSymbol,
     'ReportsTitlesCount':this.ReportsTitlesCount,
     'TLS-SSL-SitesLinks':this.TLSSSLSitesLinks
    })
    cy.writeFile('Data/PES-StrictTransportSecurity.json',
    {
     'STS-Attributes':this.STSAttributes,
     'StrictTransportSecurityContent-Symbol':this.StrictTransportSecurityContentSymbol
    })

    cy.writeFile('Data/PES-ContentSecurityPolicy.json',
    {
     'ContentSecurityPolicytContent-Symbol':this.ContentSecurityPolicytContentSymbol,
     'ContentSecurityPolicy-Checks':this.ContentSecurityPolicyChecks
    })

    cy.writeFile('Data/PES-ReferrerPolicy.json',
    {
     'ReferrerPolicyContent-Symbol':this.ReferrerPolicyContentSymbol,
     'ReferrerPolicy-Checks':this.ReferrerPolicyChecks
    })

    cy.writeFile('Data/PES-SubResourceIntegrity.json',
    {
     'SubResourceIntegrityContent-Symbol':this.SubResourceInttegrityContentSymbol,
     'SubResourceIntegrityPolicy-Checks':this.SubResourceInttegrityPolicyChecks
    })
    cy.writeFile('Data/PES-HTTPHeaders.json',
    {
     'HeadersCount':this.HeadersCount
    })
    cy.writeFile('Data/PES-Cookies.json',
    {
     'CookiesPropertiesCount':this.CookiesPropertiesCount
    })
    cy.writeFile('Data/PES-RawHeaders.json',
    {
     'RawHeadersCount':this.RawHeadersCount
    })
    })
    
    })
    
    })