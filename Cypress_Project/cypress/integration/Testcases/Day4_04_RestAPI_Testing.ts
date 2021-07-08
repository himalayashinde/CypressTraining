
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

    })//end of it1


    it("POSTMethodAPI_TestCase4", () => {

        cy.request({
            method: 'POST',
            form: false,	// url encode or not
            url: "https://reqres.in/api/users",
            body: {
                "name": "John",
                "job": "Lead"
            },
            headers: {
                //"Content-Type": "text/json"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            const json = JSON.stringify(response.body)
            cy.log(json)
            cy.log(response.body.id)
            cy.log(response.body.createdAt)
            expect(response.body.createdAt).contain('2021')
            cy.writeFile("cypress/fixtures/postAPIOutPut.json",'\n' + json,{flag: 'a+'})
            // id = response.body.id	//its not working

        })
        // cy.log("id obtained = " + id)


    })//end of it2


    /*
    it("WithConditionMethodAPI_TestCase4", () => {

            let status =0;

            while(status !=200){
        cy.request({
            method: 'POST',
            form: false,	// url encode or not
            url: "https://reqres.in/api/users",
            body: {
                "name": "John",
                "job": "Lead"
            },
            headers: {
                //"Content-Type": "text/json"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            const json = JSON.stringify(response.body)
            cy.log(json)
            cy.log(response.body.id)
            cy.log(response.body.createdAt)
            expect(response.body.createdAt).contain('2021')
            // id = response.body.id	//its not working

        })
        // cy.log("id obtained = " + id)
    }//End of whileloop

    })//end of it3 */





})//end of describe