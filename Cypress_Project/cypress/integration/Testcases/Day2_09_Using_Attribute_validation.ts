// /// <reference types="cypress" />

describe("Day02_Suite9", function () {
	it("Day02_TC09", function () {
		Cypress.config('defaultCommandTimeout', 10000)
		cy.visit("https://google.co.in")

		cy.get("#gb > div > div.gb_Se > a").as("Signin")
		cy.get("@Signin").then(($btn) => {
			const href = $btn.attr("href")

			assert.isTrue(href.indexOf("accounts.google") > 0, "Href Validated")
		})

		//#f44
		//rgb(25,255,27)



	})
})
