

describe('Day3_Suite5', () => {


	it("Day3_TestCase5", () => {

		Cypress.on("uncaught:exception", (err, runnable) => {
			// returning false here prevents Cypress from
			// failing the test
			//cy.log(err.message)
			return false;
		  });
      
		cy.visit("https://www.javatpoint.com/oprweb/test.jsp?filename=javascript-alert1")
		cy.get("iframe#iframewrapper").then(($frame) =>{

			const body=$frame.contents().find("body")
			const txt= $frame.contents().find("p").text()
			cy.log(txt)

		}) 


	})

})

//	})
