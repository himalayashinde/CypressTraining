
describe('Day02_Suite12', () => {
	before(() => {
		//cy.log("before")
		cy.fixture("amazon").then((amazondata)=>{
			this.amazondata= amazondata

		})
	})
  
	 
	it("Day02_TC12_1", ()=>{
		//cy.log("Day02_TC11_1")
		cy.log(this.amazondata.baseurl)
		cy.visit(this.amazondata.baseurl)
	})

	xit("Day02_TC12_2", ()=>{
		//cy.log("Day02_TC11_2")
		cy.log(this.amazondata.baseurl)

	})

  })
  
  