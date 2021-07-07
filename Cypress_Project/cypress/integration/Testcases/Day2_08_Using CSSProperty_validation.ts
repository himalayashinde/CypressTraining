// /// <reference types="cypress" />

describe("Day02_Suite7", function () {
	it("Day02_TC07", function () {
		Cypress.config('defaultCommandTimeout', 10000)
		cy.visit("https://google.co.in")

		cy.get("#gb > div > div.gb_Se > a").as("Signin")
		cy.get("@Signin").then(($btn) => {
			cy.log("background= " + $btn.css("background"))
			const actualbgcolor= $btn.css("background")
			const expectedcolor= "rgb(26, 115, 232)"
			expect(actualbgcolor.indexOf(expectedcolor)>= 0,"Colour is same as provided").to.be.equals(true)
			//cy.log(actualbgcolor.indexOf(expectedcolor))
		})

//#f44
//rgb(25,255,27)



	})
})
