

describe('Suite6', () => {


	it("Day3_TestCase6", () => {

		Cypress.on("uncaught:exception", (err, runnable) => {
			// returning false here prevents Cypress from
			// failing the test
			//cy.log(err.message)
			return false;
		});

		Cypress.on("window:alert", (alerttxt) => {
			cy.log("Alert = " + alerttxt)
			return true
		})

		//cy.on('window:confirm', () => true);	// --- clicking OK / Yes button

		//cy.on('window:confirm', () => false); // ---- clicking Cancel / No button

		cy.visit("https://www.javatpoint.com/oprweb/test.jsp?filename=javascript-alert1")
		cy.get("iframe#iframewrapper").then(($frame) => {
			const $body = $frame.contents().find("body")
			const txt = $frame.contents().find("p").text()
			cy.log("Text is : " + txt)
			cy.wrap($body).find("input[value='Click me']").click()

		})
		cy.on('window:confirm', () => true);	// --- clicking OK / Yes button
		cy.wait(2000)


	})

})



