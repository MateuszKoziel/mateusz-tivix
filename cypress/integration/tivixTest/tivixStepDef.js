import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("user is on the Search page to rent a car", () => {
  cy.visit("http://qalab.pl.tivixlabs.com/")
})
When("user selects a {string} in the country dropdown",(country1)=> {
  cy.get('#country').select(country1);
})
And("user selects a {string} in the city dropdown",(city1)=> {
  cy.get('#city').select(city1);
})
And("user types a {string} in the textfield",(model1)=> {
  cy.get('#model').type(model1)
})
And("user selects pick-up date as {string}",(pickUpDate)=> {
  cy.get('#pickup').type(pickUpDate)
})
And("user selects drop-off date as {string}",(dropOffDate)=> {
  cy.get('#dropoff').type(dropOffDate)
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
When("user fills a Name with {string}", (name) => {
  cy.get("#name").type(name);
})
And("user fills a Last Name with {string}", (lastName) => {
  cy.get("#last_name").type(lastName);
})
And("user fills a Card Number with {string}", (cardNumber) => {
  cy.get("#card_number").type(cardNumber);
})
And("user fills an Email with {string}", (email) => {
  cy.get("#email").type(email);
})
And("user clicks Rent button", () => {
  cy.get('.btn-primary').contains('Rent').click();
})
//this one is obviously not working
// Then("user successfully rented a car", () => {
//   some validations here
// })
