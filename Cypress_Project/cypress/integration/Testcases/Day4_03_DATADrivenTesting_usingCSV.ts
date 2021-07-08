import HomePage from '../../POMfiles/Blazedemo_homepage'
const homePage = new HomePage()

describe("Day04_Suite3",()=>{
   
    it("TestCase3",()=>{
        cy.readFile("Cypress/fixtures/flightdatainfo.csv").then((data)=>{
            const cityData = data.split('\n')
            let from, to 
            cityData.forEach(row =>{
                from = row.split(",")[0].trim()
                to = row.split(",")[1].trim()
                //cy.visit('https://blazedemo.com/')
				homePage.getPageUrl()
                homePage.searchflight(from, to)
            })
        })        
		
    })

})
