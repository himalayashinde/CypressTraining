// /// <reference types="cypress" />

describe("Day02_Suite5", function()
{
	it("Day02_TC05", function()
	{
		Cypress.config('defaultCommandTimeout',10000)
        cy.visit('https://www.amazon.in')
		cy.get('#searchDropdownBox').select('Electronics',{force:true})
		cy.get('#twotabsearchtextbox').type('PlayStation 5')
		cy.get('#nav-search-submit-button').click()
        
		cy.get(".s-main-slot>div").as("AllResults")
        cy.get("@AllResults").should("have.length", 22)
        cy.get("@AllResults").each(($obj, index, $objlist)=>{
            //cy.log(index + "=" + $obj.text())
			cy.log(index + "=" + $obj.find(".a-price-whole").text())

		})
	})
})
