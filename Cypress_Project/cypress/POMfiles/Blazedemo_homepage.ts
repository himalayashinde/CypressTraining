class HomePage {

    getPageUrl(){
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
}
export default HomePage
