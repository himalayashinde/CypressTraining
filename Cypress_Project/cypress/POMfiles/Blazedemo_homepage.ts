class HomePage {

    getPageUrl() {
        return cy.visit("https://blazedemo.com/")
    }

    getFromcitylistbox() {
        return cy.get("select[name='fromPort']")
    }

    getTocitylistbox() {
        return cy.get("select[name='toPort']")
    }

    getFindFlightbutton() {
        return cy.get("input[type='submit']")
    }

    searchflight(fromcity, tocity) {
       
        this.getFromcitylistbox().select(fromcity)
        this.getTocitylistbox().select(tocity)
        this.getFindFlightbutton().click()
        cy.contains(fromcity + " to " + tocity)
    }

}
export default HomePage
