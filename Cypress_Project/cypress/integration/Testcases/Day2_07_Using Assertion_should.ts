// /// <reference types="cypress" />

describe("Day02_Suite7", function () {
	it("Day02_TC07", function () {
		Cypress.config('defaultCommandTimeout', 10000)
		cy.visit("https://google.co.in")
		//cy.get(".gLFyf.gsfi").type("India").type("{enter}")  // press enter
		cy.get(".gLFyf.gsfi").as("serchbox")
		cy.get("@serchbox")
						.should("be.visible")
						.should("be.empty")
						.should("not.be.focused")
						.type("cypress")
						.wait(2000)
						.should("have.value", "cypress")
						.type("{esc}")






	})
})
