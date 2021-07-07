
/// <reference types="cypress" />

describe("Suite3", function () {
    it("TestCase3", function () {
        cy.visit("https://google.co.in")
        cy.contains("google")
        cy.title().should("contains","Google")

    })
})