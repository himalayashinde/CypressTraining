
/// <reference types="cypress" />

describe("Suite3", function () {
    it("TestCase3", function () {
        cy.visit("https://google.co.in")
        cy.xpath("//input[@name='q']").type("Hello{enter}")


    })
})