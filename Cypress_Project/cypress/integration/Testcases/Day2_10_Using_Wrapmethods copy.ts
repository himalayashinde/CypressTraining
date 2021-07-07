
describe("Day02_Suite10", function () {
	it("Day02_TC10", function () {
		Cypress.config('defaultCommandTimeout', 10000)
		Cypress.config('chromeWebSecurity', false)
		cy.visit('http://www.google.com')
       
       cy.get("#gb > div > div.gb_Se > a") .as("signin")
       cy.get("@signin").then(($btn)=> { 

		const href = $btn.attr("href")
		cy.log(href)
		cy.wrap($btn).click()
	   })
	   
	})
})
