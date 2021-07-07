/*
Dependencies:
1. Fixtures/bing.json - base url defined in this
2. Support/command.js - bingSearch is defined in this
*/

declare namespace Cypress {
    interface Chainable<Subject = any> {
      bingsearch(searchText: string): Chainable<string>;
    }
  }