/*
Dependencies:
1. Fixtures/bing.json - base url defined in this
2. Support/command.js - bingSearch is defined in this
*/

describe('Day2_Suite14', () => {

	before(() => {
	   cy.fixture("bing").then((data)=>{
		  this.bingdata = data
	   })
	})
 
	it("Day2_TestCase14_1", () => {
	   // cy.visit(this.amazonData.baseURL)
	   cy.visit(this.bingdata.baseurl)

	   //cy.get('input#sb_form_q').type(this.bingdata.ProductName)
		//cy.get('input#sb_form_go').click({force:true});
		
		cy.bingsearch(this.bingdata.ProductName)

		
	})
		
	})
 