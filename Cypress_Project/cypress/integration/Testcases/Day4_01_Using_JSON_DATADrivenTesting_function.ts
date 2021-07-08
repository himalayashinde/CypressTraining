import HomePage from '../../POMfiles/Blazedemo_homepage'
const homePage = new HomePage()

function searchflight(fromcity,tocity)
		{
			homePage.getPageUrl()
		homePage.getFromcitylistbox().select(fromcity)
		homePage.getTocitylistbox().select(tocity)
		homePage.getFindFlightbutton().click()
		cy.contains(fromcity +" to "+ tocity)
		}
describe('Day4_Suite1', () => {

		

	//------------------------------------------------------------------------------
	it("Day4_TestCase1", () => {
	
		searchflight("Paris","London")

	})

	//------------------------------------------------------------------------------
	it("Day4_TestCase1", () => {
	
		searchflight("Portland","London")

	})

})