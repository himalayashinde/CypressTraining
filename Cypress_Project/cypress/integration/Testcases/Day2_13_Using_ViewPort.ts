describe('Day2_Suite13', () => {

	before(() => {
	   cy.fixture("amazon").then((data)=>{
		  this.amazonData = data
	   })
	})
 
	it("Day2_TestCase13_1", () => {
	   // cy.visit(this.amazonData.baseURL)
	   cy.visit("https://www.google.co.in")
	   cy.get("#gb > div > div.gb_Se > a") .as("signin")
	   cy.get("@signin").should("be.visible")
 
	   cy.wait(5000)
	   // width , height
	   cy.viewport(500 , 1000)
	   cy.wait(5000)
	   cy.get("@signin").should("be.visible")
	   cy.viewport(300 , 600)
	   cy.wait(5000)
	   cy.get("@signin").should("be.visible")
	})
	
 })
 