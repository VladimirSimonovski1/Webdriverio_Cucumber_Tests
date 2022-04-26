Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area
    Given I am on the "login" page
    When I login with "<username>" and "<password>"
    Then I should see a flash message saying "<message>"
    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

  Scenario: As a user, I can add an element
    Given I am on the "addRemove" page
    When I add an element
    Then I should see a the newly added element

  Scenario: As a user, I can remove an element
    Given I am on the "addRemove" page
    When I add an element
      And I remove an element
    Then I should not see any new element
