import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("user is on the Search page to rent a car", () => {
  cy.visit("http://qalab.pl.tivixlabs.com/")
})
When("user selects a Country in the dropdown",()=> {
  cy.get('#country').select('Poland')
})
And("user selects a City in the dropdown",()=> {
  cy.get('#city').select('Wroclaw')
})
And("user types a Model in the textfield",()=> {
  cy.get('#model').type('Toyota')
})
And("user selects pick-up and drop-off dates",()=> {
  cy.get('#pickup').type('2021-08-01')
  cy.get('#dropoff').type('2021-08-07')
})
And("user clicks Search button",()=> {
  cy.get('.btn-primary').contains('Search').click()
})
Then("results are displayed", () => {
  cy.get("#search-results");
})
When("user clicks on the Rent button in the list", () => {
  cy.get(".btn-success").contains('Rent').click();
})
And("user proceeds further using Rent! button", () => {
  cy.get(".btn-primary").contains('Rent!').click();
})
Then("user is redirected to the summary of the rental", () => {
  cy.contains("Summary");
  cy.get(".col-md-4");
})
When("user fills a textfield with a valid Name", () => {
  cy.get("#name").type('Mateusz');
})
And("user fills a textfield with a valid LastName", () => {
  cy.get("#last_name").type('Koziel');
})
And("user fills a textfield with a valid Card Number", () => {
  cy.get("#card_number").type('12312312312312312312312');
})
And("user fills a textfield with a valid Email", () => {
  cy.get("#email").type("randomemail@gmail.com");
})
And("user clicks Rent button", () => {
  cy.get('.btn-primary').contains('Rent').click();
})
//this one is obviously not working
// Then("user successfully rented a car", () => {
//   some validations here
// })
