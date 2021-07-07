
//below line not required as types are already configured in tsconfig.json
// /// <reference types="cypress" />

describe("Suite3", function () {
    it("TestCase3", function () {
        cy.visit("https://google.co.in")
        //cy.get(".gLFyf.gsfi").type("Cypress")
        //cy.get("div.FPdoLc.lJ9FBc>center>input.gNO89b").click(force:true)

        cy.get(".gLFyf.gsfi").type("India").type("{enter}")  // press enter
        cy.get(".gLFyf.gsfi").type("India")
        cy.get("div.FPdoLc.lJ9FBc>center>input.gNO89b").click({ force: true }) // force click


    })
})