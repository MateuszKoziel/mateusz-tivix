Feature: Car Rental in Tivix

  This feature is meant to help users to rent a car

  Scenario Outline: Successful rental of a car (happy path)
    Given user is on the Search page to rent a car
    When user selects a "<country>" in the country dropdown
    And user selects "<city>" in the city dropdown
    And user types "<model>" as a car model
    And user selects pick-up date as "2021-08-01"
    And user selects drop-off date as "2021-08-07"
    And user clicks Search button
    Then results are displayed

    When user clicks on the Rent button in the list
    And user proceeds further using Rent! button
    Then user is redirected to the summary of the rental

    When user fills a Name with "<name>"
    And user fills a Last Name with "<lastname>"
    And user fills a Card Number with "<cardnumber>"
    And user fills an Email with "<email>"
    And user clicks Rent button

    Examples:
      | country | city | model | name | lastname | cardnumber | email |
      | Poland | Wroclaw | Toyota | Mateusz | Koziel | 123123123 | matthewkoziel@gmail.com |

  Scenario Outline: User rents a car with invalid dates
    Given user is on the Search page to rent a car
    When user selects a "<country>" in the country dropdown
    And user selects "<city>" in the city dropdown
    And user types "<model>" as a car model
    And user selects pick-up date as "2021-06-06"
    And user selects drop-off date as "2021-06-01"
    And user clicks Search button
    Then information about invalid date is displayed

    Examples:
      | country | city    | model  |
      | Poland  | Wroclaw | Toyota |

  Scenario Outline: User rents a car providing incorrect personal data
    Given user is on the Search page to rent a car
    When user selects a "<country>" in the country dropdown
    And user selects "<city>" in the city dropdown
    And user types "<model>" as a car model
    And user selects pick-up date as "2021-08-01"
    And user selects drop-off date as "2021-08-07"
    And user clicks Search button
    Then results are displayed

    When user clicks on the Rent button in the list
    And user proceeds further using Rent! button
    Then user is redirected to the summary of the rental

    When user fills a Name with "<name>"
    And user fills a Last Name with "<lastname>"
    And user fills a Card Number with "<cardnumber>"
    And user fills an Email with "<email>"
    And user clicks Rent button
    Then information about card number value being too long is displayed

    Examples:
      | country | city    | model  | name    | lastname | cardnumber                 | email                   |
      | Poland  | Wroclaw | Toyota | Mateusz | Koziel   | 11111111111111111111111111 | matthewkoziel@gmail.com |
