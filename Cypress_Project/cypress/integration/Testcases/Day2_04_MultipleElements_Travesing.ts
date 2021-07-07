// /// <reference types="cypress" />

describe("Day2_Suite4", function () {
    it("Day2_TestCase4", function () {

        Cypress.config("defaultCommandTimeout",10000)
        cy.visit("https://www.amazon.in")

        cy.get("#searchDropdownBox").select("Electronics", {force:true})
        cy.get("#twotabsearchtextbox").type("PlayStation 5")
        cy.get("#nav-search-submit-button").click()
        //cy.get("div[data-index='1']").find(".a-price-whole").should("have.text","5,990")
        // cy.get("div[data-index='1']").find(".a-price-whole").then(($obj)=>{

        //     cy.log("price:", $obj.text())
        //     })

        cy.get(".s-main-slot>div").should("have.length", 22)
        cy.get(".s-main-slot>div").each(($obj, index, $objlist)=>{
            //cy.log(index + "=" + $obj.text())
            cy.log(index + "=" + $obj.find(".a-price-whole").text())


        }

        )

    })
})