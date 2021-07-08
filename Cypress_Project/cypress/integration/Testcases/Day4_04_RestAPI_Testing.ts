
describe("Day04_Suite4", () => {

    it("GETMethodAPI_TestCase4", () => {
        //  cy.visit("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
        cy.request("GET", "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats").then((response) => {

        expect(response.status).to.equal(200)

        cy.log(response.body)
        
        cy.log(response.body.data)

        const responsebody = JSON.stringify(response.body)
        cy.log(responsebody)

        console.log(responsebody)
        
        console.log(response.body)

        console.log(response.headers)

        expect(response.body.status).to.equal("success")
        //"total_cases": "145,104,448"

        expect(response.body.data.total_cases).equal("145,104,448")



        }) //end of cy.request
    
    })//end of it

})//end of describe