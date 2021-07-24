import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given("user is on the Search page to rent a car", () => {
  cy.visit("http://qalab.pl.tivixlabs.com/")
})
When("user selects a {string} in the country dropdown",(country) => {
  cy.get('#country')
    .select(country)
    .should('contain', country);
})
And("user selects {string} in the city dropdown",(city) => {
  cy.get('#city')
    .select(city)
    .should('contain', city);
})
And("user types {string} as a car model",(model) => {
  cy.get('#model')
    .type(model)
    .should('have.value', model);
})
And("user selects pick-up date as {string}",(pickUpDate) => {
  cy.get('#pickup')
    .type(pickUpDate)
    .should('have.value', pickUpDate);
})
And("user selects drop-off date as {string}",(dropOffDate) => {
  cy.get('#dropoff')
    .type(dropOffDate)
    .should('have.value', dropOffDate);
})
And("user clicks Search button",() => {
  cy.get('.btn-primary')
    .contains('Search').click();
})
Then("results are displayed", () => {
  cy.get("#search-results");
})
When("user clicks on the Rent button in the list", () => {
  cy.get(".btn-success")
    .contains('Rent').click();
})
And("user proceeds further using Rent! button", () => {
  cy.get(".btn-primary")
    .contains('Rent!').click();
})
Then("user is redirected to the summary of the rental", () => {
  cy.contains("Summary");
  cy.get(".col-md-4");
})
When("user fills a Name with {string}", (name) => {
  cy.get("#name")
    .type(name)
    .should('have.value', name);
})
And("user fills a Last Name with {string}", (lastName) => {
  cy.get("#last_name")
    .type(lastName)
    .should('have.value', lastName);
})
And("user fills a Card Number with {string}", (cardNumber) => {
  cy.get("#card_number")
    .type(cardNumber)
    .should('have.value', cardNumber);
})
And("user fills an Email with {string}", (email) => {
  cy.get("#email")
    .type(email)
    .should('have.value', email);
})
And("user clicks Rent button", () => {
  cy.get('.btn-primary')
    .contains('Rent').click();
})
Then("information about invalid date is displayed", () => {
  cy.contains("Please enter a valid date!");
})
Then("information about card number value being too long is displayed", () => {
  cy.contains("Card number value is too long");
})
//this one is obviously not working
// Then("user successfully rented a car", () => {
//   some validations here
// })
