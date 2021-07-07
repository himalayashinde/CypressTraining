/*
Dependencies:
1> Install the below
npm install cypress-downloadfile --save-dev

2> Add the following types to tsconfig.json
"cypress-downloadfile"

3>ire('cypress-downloadfile/lib/downloadFileCommand')

4> Add the following Block to the Plugin/index.js
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}

*/

describe('Day3_Suite3', () => {

	const baseurl = "https://chromedriver.storage.googleapis.com"


	it("Day3_TestCase3", () => {
		cy.visit("https://chromedriver.storage.googleapis.com/index.html?path=91.0.4472.101/")
		cy.get('td >a[href="/91.0.4472.101/notes.txt"]').then(($link) => {

			//tr> td >a[href="/91.0.4472.101/notes.txt"]

			const fullpath = baseurl + $link.attr("href")
			cy.downloadFile(fullpath, "cypress/fixtures", "downloadedtext1.txt")
		})

		cy.readFile("cypress/fixtures/downloadedtext1.txt").should("contains", "application")

	})

})

//	})
