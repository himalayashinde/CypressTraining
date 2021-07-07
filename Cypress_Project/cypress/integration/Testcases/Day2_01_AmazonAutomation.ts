
//below line not required as types are already configured in tsconfig.json
// /// <reference types="cypress" />

describe("Day2_Suite1", function () {
    it("Day2_TestCase1", function () {
        //Cypress.config("defaultCommandTimeout",20000)
        cy.visit("https://www.amazon.in/")
        cy.get('#searchDropdownBox').select('Electronics',{force: true})
        //searchDropdownBox
        //twotabsearchtextbox
        cy.get('#twotabsearchtextbox').type("Playstation 5")
        cy.get('#nav-search-submit-button').click()
        cy.get("div[data-index='1']").find(".a-price-whole").should("have.text","5,990")

    })
})