// /// <reference types="cypress" />

/*1. Getting the elements using text matching
  2. Triggring the mouse events
  3. Nested Promise method
  4. Performing the operation or validation after inner then
 */


  describe("Day02_Suite6", function () {
	it("Day02_TC06", function () {
		Cypress.config('defaultCommandTimeout', 10000)
		cy.visit('http://help.dottoro.com/external/examples/ljudwitu/onmouseover_2.htm')

		cy.wait(2000)
		cy.contains("green").trigger("mouseover").then(() => {
			cy.get("#contentContainer>.activeContent").then(($obj) => {
				cy.log($obj.text())
			}).should("have.text", "The green menu is active.")
		})
		cy.wait(1000)

		cy.contains("red").trigger("mouseover").then(() => {
			cy.get("#contentContainer>.activeContent").then(($obj) => {
				cy.log($obj.text())
			}).should("have.text", "The red menu is active.")
		})

		cy.wait(1000)

		cy.contains("blue").trigger("mouseover").then(() => {
			cy.get("#contentContainer>.activeContent").then(($obj) => {
				cy.log($obj.text())
			}).should("have.text", "The blue menu is active.")
		})

		cy.wait(1000)



	})
})
