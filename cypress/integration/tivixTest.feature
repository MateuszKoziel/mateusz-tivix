Feature: Car Rental in Tivix

  This feature is meant to help users to rent a car

  Scenario: Successful rental of a car (happy path)
    Given user is on the Search page to rent a car
    When user selects a Country in the dropdown
    And user selects a City in the dropdown
    And user types a Model in the textfield
    And user selects pick-up and drop-off dates
    And user clicks Search button
    Then results are displayed

    When user clicks on the Rent button in the list
    And user proceeds further using Rent! button
    Then user is redirected to the summary of the rental

    When user fills a textfield with a valid Name
    And user fills a textfield with a valid LastName
    And user fills a textfield with a valid Card Number
    And user fills a textfield with a valid Email
    And user clicks Rent button
