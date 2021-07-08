
import HomePage from '../../POMfiles/Blazedemo_homepage'
describe('Suite7', () => {

	it("Day3_TestCase7", () => {
		const homePage = new HomePage()

		homePage.getPageUrl()
		homePage.getFromcitylistbox().select("Paris")
		homePage.getTocitylistbox().select("London")
		homePage.getFindFlightbutton().click()

	})

})