const {Given, When, Then, After} = require("@badeball/cypress-cucumber-preprocessor");

When("I have the sitemap in my env", () => {
	describe('Sitemap', () => {
		it('has urls', () => {
			expect(Cypress.env('sitemapUrls')).to.be.an('array').and.not.be.empty
		})
	})
})

Then("I go through each url", () => {
	const urls = Cypress.env('sitemapUrls').map((fullUrl) => {
		const parsed = new URL(fullUrl)
		return parsed.pathname
	})	
	cy.wrap(urls).each('url %s', (url) => {
		cy.request('HEAD', url).its('status').then((status) => {
			try {
				assert.include([200], status, "erreur")
			}catch(error){
				console.log(`Erreur lors de la vérification de l'URL ${url} : ${error.message}`)
			}
		})
		cy.visit(url).wait(1000, { log: false } )
	})
})