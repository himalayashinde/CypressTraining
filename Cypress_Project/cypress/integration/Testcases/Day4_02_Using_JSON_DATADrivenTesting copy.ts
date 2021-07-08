import HomePage from '../../POMfiles/Blazedemo_homepage'
const homePage = new HomePage()

describe('Day4_Suite1', () => {


	it("Day4_TestCase1", () => {

		cy.fixture("flightdata").then((flightdata) => {
			flightdata.forEach(citydata =>{
				homePage.getPageUrl()
				homePage.searchflight(citydata.from,citydata.to)	
				
			})
		

	})

})
})