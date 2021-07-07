/*
Dependencies:
1. Cypress.json ENV varibale should be declared.
*/

describe('Day3_Suite1', () => {

	 
	it("Day3_TestCase1", () => {
	   cy.visit(Cypress.env("baseUrl"))
	   cy.get("input#sb_form_q").type(Cypress.env("product").product1)
		//cy.log(Cypress.env("product"))
	   cy.get("input#sb_form_go").click({force:true})
		
	})
		
	})
 