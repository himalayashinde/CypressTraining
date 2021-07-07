
/*
This script is used to handle the browser new window while performing the page navigation throught scripts.
1> Add the below tag into the cypress.jason
"chromeWebSecurity": false
2> 
*/

describe('Day3_Suite4', () => {


	it("Day3_TestCase4", () => {
		cy.visit("https://chromedriver.chromium.org/downloads")
		cy.xpath('//*[@id="h.e02b498c978340a_87"]/div/div/ul[1]/li[1]/p/span[4]/a').as('link')
		cy.get("@link").then(($link)=>{

			cy.log("target="+ $link.attr("target"))
			//$link.attr()
			//cy.log("src existance= "+ $link.attr("src"))
			if($link.attr("src")!= 'undefined')
			{
				//cy.wrap($link).invoke("removeAttr","target")
				$link.removeAttr("target")			}
		})

		//cy.get("@link").invoke("removeAttr","target").click()
		cy.get("@link").click()
		cy.wait(3000)
		cy.contains("Parent Directory")
		cy.go("back")
		
	})

})

//	})
