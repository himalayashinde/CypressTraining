/*
Dependencies:
1. Cypress.json ENV varibale should be declared.
*/

describe('Day3_Suite2', () => {

	 
	it("Day3_TestCase2", () => {
	   cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
	  //cy.get("input[name='upfile']").attachFile("cypress.txt")
	  cy.get("input[name=upfile]").attachFile("../../cypress2.txt")
	  cy.get("input[value='Press']").click()
	  //cy.contains("checking cypress file upload...!!!")
	  //Content validation for the whole page
	  cy.get("body").then(($page)=> {
		  const content = $page.text()
			cy.log($page.text())
			cy.log("Content is ="+ content)
			expect(content).contains("relative")

	  })
		
	})
		
	})
 